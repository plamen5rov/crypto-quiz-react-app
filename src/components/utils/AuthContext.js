import React, { useContext, useState, useEffect } from "react";
import { auth, db } from "./firebaseConfig";

const AuthContext = React.createContext();
export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  function signup(email, password) {
    return auth.createUserWithEmailAndPassword(email, password);
  }

  function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
    
  }

  async function createUserProfile(email) {
    try {
      await db.collection('users')
        .doc(email)
        .set({ username: email, score: 0 });
      console.log("User successfully created!");
    } catch (error) {
      console.error("Error creating user: ", error);
    }
  }

  async function updateUserProfile(email, username, avatarUrl) {

    const data = {
      username,
      avatarUrl
    };
    try {
      await db.collection('users')
        .doc(email)
        .set(data);
      console.log("User successfully updated!");
    } catch (error) {
      console.error("Error creating user: ", error);
    }
  }

   /* function logout() {
    return auth.signOut();
  } */

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      
      setCurrentUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    signup,
    login,
    createUserProfile,
    updateUserProfile
    /* logout */
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

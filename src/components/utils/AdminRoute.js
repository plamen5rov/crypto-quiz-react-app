import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "./AuthContext";

export default function AdminRoute({ component: Component, ...rest }) {
  const { currentUser } = useAuth();

  function checkAdmin(){
      if (!currentUser){
          return false
      } else if (currentUser.email==='admin@quiz.com'){
          return true
      } else return false
  }

  const admin = checkAdmin();


  return (
    <Route
      {...rest}
      render={(props) => {
        return admin ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        );
      }}
    ></Route>
  );
}

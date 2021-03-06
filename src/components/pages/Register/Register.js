import React, { useRef, useState } from "react";
import styles from "./Register.module.css";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../../utils/AuthContext";

function Register() {
  const emailRef = useRef();
  const passwordRef = useRef();

  const { signup, currentUser, createUserProfile } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    //if (emailRef.current.value!==user) {return  setError('Email already exists')}
    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      try {
        await createUserProfile(emailRef.current.value);
      } catch {
        setError("Failed to create user profile");
        console.log(error);
      }
    } catch {
      setError("Failed to create account");
      console.log(error);
    }

    setLoading(false);
    history.push("/login");
  }
  return (
    <div className={styles.registerForm}>
      <h2>REGISTRATION:</h2>
      {currentUser && currentUser.email}
      <form onSubmit={handleSubmit}>
        <fieldset>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            required
            placeholder="Your email here"
            ref={emailRef}
          />
        </fieldset>
        <fieldset>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            id="password"
            required
            placeholder="Your password here"
            ref={passwordRef}
          />
        </fieldset>
        <button type="submit" disabled={loading}>
          REGISTER
        </button>
      </form>
      <section className={styles.login}>
        Already have an account? <Link to="/login">Log in here</Link>
      </section>
    </div>
  );
}

export default Register;

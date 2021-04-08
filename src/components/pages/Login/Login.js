import React, { useRef, useState } from "react";
import styles from "./Login.module.css";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../../utils/AuthContext";

function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login, currentUser } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    //if (emailRef.current.value!==user) {return  setError('Email already exists')}
    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
    } catch {
      setError("Failed to login to account");
      console.log(error);
    }
    setLoading(false);

    // function checkAdmin() {
    //   if (currentUser && (currentUser.email === "admin@quiz.com")) {
    //     return true;
    //   } else return false;
    // }

    // const admin = checkAdmin();
    // console.log('Admin is: ',admin);
    // console.log( 'Current user is: ', currentUser );

    // if (admin) {
    //   history.push("/admin");
    // } else history.push("/profile");
    history.push("/profile")
  }
  return (
    <div className={styles.loginForm}>
      <h2>LOGIN:</h2>
      <h4>Logged as:</h4>
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
          LOGIN
        </button>
      </form>
      <section className={styles.register}>
        Don't have an account yet? <Link to="/register">Register here</Link>
      </section>
    </div>
  );
}

export default Login;

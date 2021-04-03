import React, { useRef } from "react";
import styles from "./Register.module.css";
import { Link } from "react-router-dom";

function Register() {

    const emailRef = useRef();
    const passwordRef = useRef();
  return (
    <div className={styles.registerForm}>
      <h2>REGISTRATION:</h2>
      <form>
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
        <button type='submit'>REGISTER</button>
      </form>
      <section className={styles.login}>
Already have an account? <Link to="/login">Log in here</Link>
      </section>
    </div>
  );
}

export default Register;
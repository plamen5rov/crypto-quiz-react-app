import React from "react";
import styles from "./Register.module.css";

function Register() {
  return (
    <div className={styles.registerForm}>
      <h1>REGISTRATION:</h1>
      <form>
        <fieldset>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Your email here"
          />
        </fieldset>
        <fieldset>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Your password here"
          />
        </fieldset>
        <button type='submit'>REGISTER</button>
      </form>
    </div>
  );
}

export default Register;
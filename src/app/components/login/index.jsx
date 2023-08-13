"use client";
import React from "react";
import styles from "../../login.module.css";

const Login = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Iniciar sesión</h2>
      <div class="form-floating mb-3">
        <input
          class="form-control"
          id="name"
          name="name"
          type="text"
          autocomplete="name"
          required
        />
        <label for="floatingInput">Email address</label>
      </div>
      <div class="form-floating">
        <input
          class="form-control"
          id="password"
          name="password"
          type="password"
          autocomplete="password"
          required
        />
        <label for="floatingPassword">Password</label>
      </div>

      <button type="button" className="btn btn-primary">
        Iniciar Sesion
      </button>
    </div>
  );
};

export default Login;

import React from 'react';
import styles from './Login.module.css';

const Login = () => {
  return (
    <div className={styles.loginContainer}>
      <h2>Login</h2>
      <form>
        <input type="email" placeholder="E-mail" required />
        <input type="password" placeholder="Senha" required />
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
};

export default Login;

import React from 'react';
import styles from './Login.module.css';

const Login = () => {
    return (
        <div className={styles.loginContainer}>
            <div className={styles.loginBox}>
                <h2>Login</h2>
                <input type="email" placeholder="E-mail" />
                <input type="password" placeholder="Senha" />
                <button>Entrar</button>
                <a href="#" className={styles.forgotPassword}>
                    Esqueceu sua senha?
                </a>
            </div>
        </div>
    );
};

export default Login;



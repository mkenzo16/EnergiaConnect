"use client"; // Declara que este é um Client Component

import React from 'react';
import { useRouter } from 'next/navigation'; // Importa o roteador correto para Next.js 13+
import styles from './Login.module.css';

const Login = () => {
    const router = useRouter(); // Instanciando o roteador

    const handleLogin = (event: React.FormEvent) => {
        event.preventDefault();

        // Simulação de validação (substitua pela lógica real)
        const isValid = true;

        if (isValid) {
            router.push('/dashboard'); // Redireciona para o Dashboard
        } else {
            alert('Credenciais inválidas. Tente novamente.');
        }
    };

    return (
        <div className={styles.loginContainer}>
            <div className={styles.loginBox}>
                <h2>Login</h2>
                <form onSubmit={handleLogin}>
                    <input type="email" placeholder="E-mail" required />
                    <input type="password" placeholder="Senha" required />
                    <button type="submit">Entrar</button>
                </form>
                <a href="#" className={styles.forgotPassword}>
                    Esqueceu sua senha?
                </a>
            </div>
        </div>
    );
};

export default Login;




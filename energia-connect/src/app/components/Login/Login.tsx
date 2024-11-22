"use client";

import React from "react";
import { useRouter } from "next/navigation";
import styles from "./Login.module.css";

const Login = () => {
  const router = useRouter();

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  
    const form = event.target as HTMLFormElement;
  
    const payload = {
      email: (form[0] as HTMLInputElement).value,
      senha: (form[1] as HTMLInputElement).value,
    };
  
    try {
      const response = await fetch("http://localhost:9090/api/usuarios/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
  
      if (response.ok) {
        const user = await response.json();
        alert(`Bem-vindo, ${user.nome}!`);
        router.push("/dashboard");
      } else {
        alert("Credenciais inválidas. Tente novamente.");
      }
    } catch (error) {
      console.error("Erro ao conectar com a API:", error);
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





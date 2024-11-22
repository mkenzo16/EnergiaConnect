"use client";

import React, { useState } from "react";
import styles from "./Contato.module.css";

const ContactForm = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [mensagem, setMensagem] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const contact = {
      nome,
      email,
      telefone,
      mensagem,
    };

    try {
      const response = await fetch("http://localhost:8088/api/contacts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(contact),
      });

      if (response.ok) {
        alert("Contato enviado com sucesso!");
        setNome("");
        setEmail("");
        setTelefone("");
        setMensagem("");
      } else {
        alert("Erro ao enviar contato. Tente novamente.");
      }
    } catch (error) {
      console.error("Erro ao conectar com a API:", error);
      alert("Erro ao conectar com a API. Tente novamente mais tarde.");
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Entre em contato</h1>
      <p className={styles.subtitle}>
        Preencha o formulário abaixo e nossa equipe entrará em contato com você o mais breve possível.
      </p>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.inputGroup}>
          <label htmlFor="nome">Nome *</label>
          <input
            type="text"
            id="nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Seu nome completo"
            required
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="email">E-mail *</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Seu e-mail"
            required
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="telefone">Telefone *</label>
          <input
            type="tel"
            id="telefone"
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
            placeholder="+55 (xx) xxxx-xxxx"
            required
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="mensagem">Mensagem *</label>
          <textarea
            id="mensagem"
            value={mensagem}
            onChange={(e) => setMensagem(e.target.value)}
            placeholder="Sua mensagem"
            required
          ></textarea>
        </div>
        <button type="submit" className={styles.button}>
          Enviar
        </button>
      </form>
    </div>
  );
};

export default ContactForm;





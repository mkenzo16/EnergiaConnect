"use client";

import React, { useState } from "react";
import styles from "./GerenciarContratos.module.css";

const GerenciarContrato = () => {
  const [id, setId] = useState("");
  const [senha, setSenha] = useState("");
  const [contrato, setContrato] = useState<any>(null); // Para armazenar os dados do contrato
  const [erro, setErro] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErro(""); // Limpa o erro

    try {
      const response = await fetch(
        `http://localhost:9090/api/contratos/${id}/${senha}`
      );

      if (response.ok) {
        const data = await response.json();
        setContrato(data); // Salva os dados do contrato
      } else {
        setErro("ID ou senha inválidos. Verifique os dados e tente novamente.");
        setContrato(null);
      }
    } catch (error) {
      console.error("Erro ao conectar com a API:", error);
      setErro("Erro ao conectar com a API. Tente novamente mais tarde.");
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Gerenciar Contrato</h1>
      <p className={styles.subtitle}>
        Insira seu ID e senha para acessar os detalhes do contrato.
      </p>

      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.inputGroup}>
          <label htmlFor="id">ID</label>
          <input
            type="text"
            id="id"
            value={id}
            onChange={(e) => setId(e.target.value)}
            placeholder="Seu ID"
            required
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="senha">Senha</label>
          <input
            type="password"
            id="senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            placeholder="Sua senha"
            required
          />
        </div>
        <button type="submit" className={styles.button}>
          Acessar Contrato
        </button>
      </form>

      {erro && <p className={styles.error}>{erro}</p>}

      {contrato && (
        <div className={styles.contractDetails}>
          <h2>Detalhes do Contrato</h2>
          <p><strong>Nome:</strong> {contrato.nome}</p>
          <p><strong>ID:</strong> {contrato.id}</p>
          <p><strong>Tipo de Contrato:</strong> {contrato.tipoContrato}</p>
          <p><strong>Status:</strong> {contrato.status}</p>
        </div>
      )}
    </div>
  );
};

export default GerenciarContrato;



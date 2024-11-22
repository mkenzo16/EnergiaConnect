"use client";

import React, { useState } from "react";
import styles from "./GerenciarContratoAquisicao.module.css";

const GerenciarContratoAquisicao = () => {
  const [id, setId] = useState("");
  const [senha, setSenha] = useState("");
  const [contrato, setContrato] = useState<any>(null);
  const [erro, setErro] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErro("");

    try {
      const response = await fetch(
        `http://localhost:8088/api/contratos-aquisicao/${id}/${senha}`
      );

      if (response.ok) {
        const data = await response.json();
        setContrato(data);
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
      <div className={styles.homeIcon}>
    <a href="/">
        <img src="/home-icons.png" alt="Home" />
    </a>
</div>

      <h1 className={styles.title}>Gerenciar Contrato de Aquisição</h1>
      <p className={styles.subtitle}>
        Insira seu ID e senha para acessar os detalhes do seu contrato de aquisição.
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
          <h2>Detalhes do Contrato de Aquisição</h2>
          <p><strong>Nome:</strong> {contrato.nome}</p>
          <p><strong>ID:</strong> {contrato.id}</p>
          <p><strong>Tipo de Cota:</strong> {contrato.tipoCota}</p>
          <p><strong>Quantidade de Parcelas:</strong> {contrato.quantidadeParcelas}x</p>
          <p><strong>Status:</strong> {contrato.status}</p>
        </div>
      )}
    </div>
  );
};

export default GerenciarContratoAquisicao;

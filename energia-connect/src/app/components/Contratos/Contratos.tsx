"use client";

import React, { useState } from "react";
import styles from "./Contratos.module.css";

const GerarContrato = () => {
  const [nome, setNome] = useState("");
  const [id, setId] = useState("");
  const [senha, setSenha] = useState("");
  const [tipoContrato, setTipoContrato] = useState("Plano Essencial");
  const [status, setStatus] = useState("Ativo");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const contrato = {
      nome,
      id,
      senha,
      tipoContrato,
      status,
    };

    try {
      const response = await fetch("http://localhost:8088/api/contratos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(contrato),
      });

      if (response.ok) {
        const data = await response.json();
        alert(`Contrato gerado com sucesso! ID: ${data.id}`);
        setNome("");
        setId("");
        setSenha("");
        setTipoContrato("Plano Essencial");
        setStatus("Ativo");
      } else {
        const errorMsg = await response.text();
        console.error("Erro ao gerar contrato:", errorMsg);
        alert("Erro ao gerar contrato. Verifique os dados e tente novamente.");
      }
    } catch (error) {
      console.error("Erro ao conectar com a API:", error);
      alert("Erro ao conectar com a API. Tente novamente mais tarde.");
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Gerar Contrato</h1>
      <p className={styles.subtitle}>
        Preencha as informações abaixo para gerar um contrato de aluguel. Escolha o plano mais adequado às suas necessidades e defina o status inicial do contrato.
      </p>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.inputGroup}>
          <label htmlFor="nome">Nome</label>
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
          <label htmlFor="id">ID (máx. 5 dígitos)</label>
          <input
            type="text"
            id="id"
            value={id}
            onChange={(e) => setId(e.target.value)}
            placeholder="Ex: 12345"
            maxLength={5}
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
        <div className={styles.inputGroup}>
          <label htmlFor="tipoContrato">Tipo de Contrato</label>
          <select
            id="tipoContrato"
            value={tipoContrato}
            onChange={(e) => setTipoContrato(e.target.value)}
            required
          >
            <option value="Plano Essencial">Plano Essencial</option>
            <option value="Plano Familiar">Plano Familiar</option>
            <option value="Plano Completo">Plano Completo</option>
          </select>
        </div>
        <div className={styles.radioGroup}>
          <label>
            <input
              type="radio"
              name="status"
              value="Ativo"
              checked={status === "Ativo"}
              onChange={() => setStatus("Ativo")}
            />{" "}
            Ativo
          </label>
          <label>
            <input
              type="radio"
              name="status"
              value="Não Pagante"
              checked={status === "Não Pagante"}
              onChange={() => setStatus("Não Pagante")}
            />{" "}
            Não Pagante
          </label>
          <label>
            <input
              type="radio"
              name="status"
              value="Desativado"
              checked={status === "Desativado"}
              onChange={() => setStatus("Desativado")}
            />{" "}
            Desativado
          </label>
        </div>
        <div className={styles.buttonContainer}>
          <button type="submit" className={styles.button}>
            Gerar Contrato
          </button>
        </div>
      </form>
      <p className={styles.footerText}>
        * O ID será usado para gerenciar seu contrato posteriormente. Certifique-se de anotá-lo junto com a senha para acessar suas informações.
      </p>
    </div>
  );
};

export default GerarContrato;




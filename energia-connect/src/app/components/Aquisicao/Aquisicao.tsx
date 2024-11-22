"use client";

import React, { useState } from "react";
import styles from "./Aquisicao.module.css";

const GerarContratoAquisicao = () => {
  const [nome, setNome] = useState("");
  const [id, setId] = useState("");
  const [senha, setSenha] = useState("");
  const [tipoCota, setTipoCota] = useState("Cota Essencial");
  const [quantidadeParcelas, setQuantidadeParcelas] = useState(1);
  const [status, setStatus] = useState("Ativo");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const contrato = {
      nome,
      id,
      senha,
      tipoCota,
      quantidadeParcelas,
      status,
    };

    try {
      const response = await fetch("http://localhost:9090/api/contratos-aquisicao", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(contrato),
      });

      if (response.ok) {
        alert("Contrato de aquisição gerado com sucesso!");
        setNome("");
        setId("");
        setSenha("");
        setTipoCota("Cota Essencial");
        setQuantidadeParcelas(1);
        setStatus("Ativo");
      } else {
        alert("Erro ao gerar contrato. Verifique os dados e tente novamente.");
      }
    } catch (error) {
      console.error("Erro ao conectar com a API:", error);
      alert("Erro ao conectar com a API. Tente novamente mais tarde.");
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Gerar Contrato de Aquisição</h1>
      <p className={styles.subtitle}>
        Preencha as informações abaixo para gerar um contrato de aquisição. Escolha a cota desejada e o número de parcelas.
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
          <label htmlFor="id">ID (8 dígitos)</label>
          <input
            type="text"
            id="id"
            value={id}
            onChange={(e) => setId(e.target.value)}
            placeholder="Ex: 12345678"
            maxLength={8}
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
          <label htmlFor="tipoCota">Tipo de Cota</label>
          <select
            id="tipoCota"
            value={tipoCota}
            onChange={(e) => setTipoCota(e.target.value)}
            required
          >
            <option value="Cota Essencial">Cota Essencial</option>
            <option value="Cota Avançada">Cota Avançada</option>
            <option value="Cota Completa">Cota Completa</option>
          </select>
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="quantidadeParcelas">Quantidade de Parcelas (até 24x)</label>
          <input
            type="number"
            id="quantidadeParcelas"
            value={quantidadeParcelas}
            onChange={(e) => setQuantidadeParcelas(Number(e.target.value))}
            min={1}
            max={24}
            required
          />
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

export default GerarContratoAquisicao;

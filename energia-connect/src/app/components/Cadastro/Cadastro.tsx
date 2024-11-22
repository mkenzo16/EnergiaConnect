"use client";

import React, { useState } from "react";
import styles from "./Cadastro.module.css";

const Cadastro = () => {
  const [cep, setCep] = useState("");
  const [endereco, setEndereco] = useState({
    rua: "",
    bairro: "",
    cidade: "",
    estado: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleCepChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const valorCep = e.target.value.replace(/\D/g, "");
    setCep(valorCep);

    if (valorCep.length === 8) {
      try {
        const response = await fetch(`https://viacep.com.br/ws/${valorCep}/json/`);
        const data = await response.json();
        if (!data.erro) {
          setEndereco({
            rua: data.logradouro || "",
            bairro: data.bairro || "",
            cidade: data.localidade || "",
            estado: data.uf || "",
          });
        } else {
          setEndereco({ rua: "", bairro: "", cidade: "", estado: "" });
        }
      } catch (error) {
        console.error("Erro ao buscar o CEP:", error);
      }
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className={styles.cadastroContainer}>
      <div className={styles.formContainer}>
        <h2 className={styles.title}>Cadastro</h2>
        <form className={styles.form}>
          <div className={styles.personalInfo}>
            <h3>Informações Pessoais</h3>
            <input type="text" placeholder="Nome completo" className={styles.input} />
            <input type="date" placeholder="Data de nascimento" className={styles.input} />
            <input type="text" placeholder="CPF" className={styles.input} />
            <input type="email" placeholder="E-mail" className={styles.input} />
            <div className={styles.passwordContainer}>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Senha"
                className={styles.input}
              />
              <button
                type="button"
                className={styles.passwordToggle}
                onClick={togglePasswordVisibility}
              >
                <img
                  src={showPassword ? "/view.png" : "/hide.png"}
                  alt="Mostrar senha"
                  className={styles.passwordIcon}
                />
              </button>
            </div>
          </div>

          <div className={styles.addressInfo}>
            <h3>Endereço</h3>
            <input
              type="text"
              placeholder="CEP"
              className={styles.input}
              value={cep}
              onChange={handleCepChange}
            />
            <input
              type="text"
              placeholder="Rua"
              className={styles.input}
              value={endereco.rua}
              readOnly
            />
            <input
              type="text"
              placeholder="Bairro"
              className={styles.input}
              value={endereco.bairro}
              readOnly
            />
            <input
              type="text"
              placeholder="Cidade"
              className={styles.input}
              value={endereco.cidade}
              readOnly
            />
            <input
              type="text"
              placeholder="Estado"
              className={styles.input}
              value={endereco.estado}
              readOnly
            />
            <input type="text" placeholder="Número" className={styles.input} />
            <input type="text" placeholder="Complemento (opcional)" className={styles.input} />
          </div>

          <button type="submit" className={styles.button}>
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Cadastro;




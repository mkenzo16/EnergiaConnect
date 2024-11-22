"use client";

import React from "react";
import styles from "./ContratosMenu.module.css";

const ContratosMenu = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Gestão de Contratos</h1>
      <p className={styles.subtitle}>
        Escolha uma das opções abaixo para gerenciar ou visualizar seus contratos.
      </p>
      <div className={styles.cardContainer}>
        {/* Card: Gerar Contrato */}
        <div className={styles.card}>
          <h2>Gerar Contrato</h2>
          <p>
            Crie um novo contrato para aluguel ou aquisição de energia de maneira simples.
          </p>
          <button className={styles.button}>Acessar</button>
        </div>

        {/* Card: Gerenciar Contrato */}
        <div className={styles.card}>
          <h2>Gerenciar Contrato</h2>
          <p>
            Visualize e gerencie contratos já existentes, incluindo cancelamento e alterações.
          </p>
          <button className={styles.button}>Acessar</button>
        </div>

        {/* Card: Visualizar Aquisição */}
        <div className={styles.card}>
          <h2>Visualizar Aquisição</h2>
          <p>
            Confira os detalhes dos contratos de aquisição finalizados.
          </p>
          <button className={styles.button}>Acessar</button>
        </div>
      </div>
    </div>
  );
};

export default ContratosMenu;

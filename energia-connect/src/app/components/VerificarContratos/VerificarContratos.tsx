import React from "react";
import styles from "./VerificarContratos.module.css";

const VerificarContratos = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.title}>Verifique seus Contratos ou Aquisições</h2>
        <p className={styles.subtitle}>
          Acompanhe seus planos de energia renovável e veja todos os detalhes sobre suas aquisições ou contratos ativos.
        </p>
        <a href="/contratos" className={styles.button}>
          Ver Contratos
        </a>
      </div>
      <div className={styles.imageContainer}>
        <img
          src="/policy.png"
          alt="Monitoramento de Energia"
          className={styles.image}
        />
      </div>
    </div>
  );
};

export default VerificarContratos;

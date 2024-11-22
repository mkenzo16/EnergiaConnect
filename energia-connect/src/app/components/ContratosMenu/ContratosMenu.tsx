"use client";

import React from "react";
import styles from "./ContratosMenu.module.css";

const GestaoContratos = () => {
  const cards = [
    {
      id: 1,
      title: "Gerar Contrato",
      description: "Crie um novo contrato para aluguel ou aquisição de energia de maneira simples.",
      image: "/gerar-contrato.jpg",
      link: "/gerar-contrato",
    },
    {
      id: 2,
      title: "Gerenciar Contrato",
      description: "Visualize e gerencie contratos já existentes, incluindo cancelamento e alterações.",
      image: "/gerenciar-contrato.jpg",
      link: "/gerenciar-contrato",
    },
    {
      id: 3,
      title: "Visualizar Aquisição",
      description: "Confira os detalhes dos contratos de aquisição finalizados.",
      image: "/visualizar-aquisicao.jpg",
      link: "/visualizar-aquisicao",
    },
  ];

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Gestão de Contratos</h1>
      <p className={styles.subtitle}>
        Escolha uma das opções abaixo para gerenciar ou visualizar seus contratos.
      </p>
      <div className={styles.cardsContainer}>
        {cards.map((card) => (
          <div className={styles.card} key={card.id}>
            <img src={card.image} alt={card.title} />
            <div className={styles.cardContent}>
              <h2 className={styles.cardTitle}>{card.title}</h2>
              <p className={styles.cardDescription}>{card.description}</p>
              <a href={card.link} className={styles.cardButton}>
                Acessar
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GestaoContratos;






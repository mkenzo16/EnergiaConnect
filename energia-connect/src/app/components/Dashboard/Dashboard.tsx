"use client";

import React from "react";
import styles from "./Dashboard.module.css";

const Dashboard = () => {
  return (
    <div className={styles.dashboard}>
      <header className={styles.header}>
        <a href="/" className={styles.homeIcon}>
          <img src="/home-icons.png" alt="Voltar ao menu principal" />
        </a>
        <h1>Bem-vindo ao seu Painel</h1>
      </header>
      <div className={styles.metrics}>
        <div className={styles.metricCard}>
          <h2>Consumo Atual</h2>
          <p>123 <span>kWh</span></p>
        </div>
        <div className={styles.metricCard}>
          <h2>Economia Mensal</h2>
          <p>R$ 150,00</p>
        </div>
        <div className={styles.metricCard}>
          <h2>Geração Total</h2>
          <p>500 <span>kWh</span></p>
        </div>
      </div>
      <div className={styles.charts}>
        <div className={styles.chart}>
          <h3>Histórico de Consumo</h3>
          {/* Adicione aqui um gráfico, ex: Chart.js ou Recharts */}
        </div>
        <div className={styles.chart}>
          <h3>Economia Acumulada</h3>
          {/* Adicione aqui um gráfico, ex: Chart.js ou Recharts */}
        </div>
      </div>
      <div className={styles.notifications}>
        <h3>Notificações</h3>
        <ul>
          <li>Manutenção programada para 25/11.</li>
          <li>Alta geração de energia hoje: 120% da média.</li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;



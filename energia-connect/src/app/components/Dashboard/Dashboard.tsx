"use client";

import React from "react";
import styles from "./Dashboard.module.css";
import { PieChart, Pie, Cell, Tooltip, BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts";

const Dashboard = () => {
  const consumoData = [
    { name: "kWh Total", value: 500 },
    { name: "kWh Usado", value: 100 },
  ];

  const economiaData = [
    { name: "Gasto Atual", value: 350},
    { name: "Saldo Restante", value: 2650},
  ];

  const COLORS = ["#FF8042", "#0088FE", "#FFBB28"];

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
          <p>
            123 <span>kWh</span>
          </p>
        </div>
        <div className={styles.metricCard}>
          <h2>Economia Mensal</h2>
          <p>R$ 150,00</p>
        </div>
        <div className={styles.metricCard}>
          <h2>Geração Total</h2>
          <p>
            500 <span>kWh</span>
          </p>
        </div>
      </div>
      <div className={styles.charts}>
        <div className={styles.chart}>
          <h3>Histórico de Consumo</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={consumoData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={100}
                fill="#8884d8"
                label
              >
                {consumoData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className={styles.chart}>
          <h3>Economia Acumulada</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={economiaData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
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




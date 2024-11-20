import React from 'react';
import styles from './Contato.module.css';

const Contato = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Entre em contato</h1>
        <p>
          Preencha o formulário abaixo e nossa equipe entrará em contato com você o mais breve possível.
        </p>
      </div>
      <form className={styles.form}>
        <div className={styles.inputGroup}>
          <label htmlFor="name">Nome *</label>
          <input type="text" id="name" placeholder="Seu nome completo" required />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="email">E-mail *</label>
          <input type="email" id="email" placeholder="Seu e-mail" required />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="phone">Telefone *</label>
          <input type="tel" id="phone" placeholder="+55 (xx) xxxx-xxxx" required />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="message">Mensagem *</label>
          <textarea id="message" placeholder="Sua mensagem" rows={5} required></textarea>
        </div>
        <button type="submit" className={styles.submitButton}>Enviar</button>
      </form>
    </div>
  );
};

export default Contato;




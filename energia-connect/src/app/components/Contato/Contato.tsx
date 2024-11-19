import React from 'react';
import styles from './Contato.module.css';

const Contato = () => {
  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <h1>Entre em contato</h1>
        <p>
          Entre em contato conosco sobre qualquer coisa relacionada à nossa empresa ou serviços.
          Retornaremos o mais breve possível.
        </p>
      </div>

      <div className={styles.formContainer}>
        <form className={styles.form}>
          <div className={styles.inputGroup}>
            <div>
              <label htmlFor="name">Nome *</label>
              <input type="text" id="name" placeholder="Seu nome" required />
            </div>
            <div>
              <label htmlFor="phone">Número de telefone</label>
              <input type="text" id="phone" placeholder="+55" />
            </div>
          </div>
          <div className={styles.inputGroup}>
            <div>
              <label htmlFor="email">E-mail *</label>
              <input type="email" id="email" placeholder="Seu e-mail" required />
            </div>
            <div>
              <label htmlFor="company">Empresa</label>
              <input type="text" id="company" placeholder="Sua empresa" />
            </div>
          </div>
          <div>
            <label htmlFor="subject">Assunto *</label>
            <input type="text" id="subject" placeholder="Assunto" required />
          </div>
          <div>
            <label htmlFor="message">Pergunta *</label>
            <textarea id="message" placeholder="Sua mensagem" rows={5} required />
          </div>
          <button type="submit" className={styles.button}>
            Enviar
          </button>
        </form>

        <div className={styles.info}>
          <h3>Minha empresa</h3>
          <p>Av. das Américas, 3575</p>
          <p>+1 555-555-5556</p>
          <p>info@suaempresa.exemplo.com</p>
        </div>
      </div>
    </section>
  );
};

export default Contato;

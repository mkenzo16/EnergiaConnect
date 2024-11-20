import React from 'react';
import styles from './Cadastro.module.css';

const Cadastro = () => {
  return (
    <div className={styles.cadastroContainer}>
      <div className={styles.formContainer}>
        <h2 className={styles.title}>Cadastro</h2>
        <form className={styles.form}>
          <input type="text" placeholder="Nome completo" className={styles.input} />
          <input type="email" placeholder="E-mail" className={styles.input} />
          <input type="text" placeholder="CPF" className={styles.input} />
          <input type="text" placeholder="Endereço" className={styles.input} />
          <input type="password" placeholder="Senha" className={styles.input} />
          <button type="submit" className={styles.button}>Cadastrar</button>
        </form>
      </div>
    </div>
  );
};

export default Cadastro;



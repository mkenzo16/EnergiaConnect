import React from 'react';
import styles from './Cadastro.module.css';

const Cadastro = () => {
  return (
    <div className={styles.cadastroContainer}>
      <h2>Cadastro</h2>
      <form>
        <input type="text" placeholder="Nome completo" required />
        <input type="email" placeholder="E-mail" required />
        <input type="text" placeholder="CPF" required />
        <input type="text" placeholder="Endereço" required />
        <input type="password" placeholder="Senha" required />
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
};

export default Cadastro;

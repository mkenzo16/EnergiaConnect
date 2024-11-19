import React from 'react';
import styles from './Partners.module.css';

const Partners = () => {
  return (
    <section id="partners" className={styles.partners}>
      <h2>Parceiros e Referências</h2>
      <div className={styles.logos}>
        <img src="/logo1.png" alt="Parceiro 1" />
        <img src="/logo2.png" alt="Parceiro 2" />
        <img src="/logo3.png" alt="Parceiro 3" />
      </div>
    </section>
  );
};

export default Partners;

import React from 'react';
import styles from './Partners.module.css';

const PartnersSection = () => {
  return (
    <section className={styles.partners}>
      <h2 className={styles.title}>Parceiros e referências</h2>
      <p className={styles.subtitle}>
        Use essa seção para aumentar a credibilidade da sua empresa de energia solar.
      </p>
      <p className={styles.link}>
        <a href="#projetos" className={styles.highlight}>
          Veja nossos projetos de energia solar →
        </a>
      </p>
      <div className={styles.logoContainer}>
        <img src="/amsterdam.png" alt="Amsterdam" />
        <img src="/firenze.png" alt="Firenze" />
        <img src="/nairobi.png" alt="Nairobi" />
        <img src="/madrid.png" alt="Madrid" />
        <img src="/kobe.png" alt="Kobe" />
        <img src="/berlin.png" alt="Berlin" />
      </div>
    </section>
  );
};

export default PartnersSection;


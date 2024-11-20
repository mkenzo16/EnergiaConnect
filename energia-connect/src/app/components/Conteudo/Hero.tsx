import React from 'react';
import Link from 'next/link'; // Importando o componente Link
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.text}>
        <h1>Fazendo a diferença.</h1>
        <p>
          Nossa missão é fornecer a melhor experiência aos clientes. Guias e documentação abrangente, comunidade ativa e suporte 24/7 tornam o trabalho conosco um prazer.
        </p>
        <Link href="/contato">
          <button className={styles.button}>Entre em contato</button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;




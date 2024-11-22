import React from 'react';
import Link from 'next/link';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.text}>
        <h1>Acompanhe seu consumo de energia.</h1>
        <p>
        Veja como sua escolha pela energia solar está fazendo a diferença! Analise seus dados, descubra quantos kWh você já utilizou e o impacto positivo no seu orçamento e no meio ambiente.
        </p>
        <div className={styles.buttons}>
          <Link href="/login">
            <button className={styles.button}>Visualizar meu consumo</button>
          </Link>
          <p className={styles.signupText}>
            Não tem cadastro?{' '}
            <Link href="/cadastro" className={styles.signupLink}>
              Cadastre-se aqui
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;





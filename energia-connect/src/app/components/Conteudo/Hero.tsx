import React from 'react';
import Link from 'next/link';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.text}>
        <h1>Fazendo a diferença.</h1>
        <p>
          Nossa missão é fornecer a melhor experiência aos clientes. Guias e
          documentação abrangente, comunidade ativa e suporte 24/7 tornam o trabalho conosco um prazer.
        </p>
        <div className={styles.buttons}>
          <Link href="/login">
            <button className={styles.button}>Faça seu Login</button>
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





import React from 'react';
import styles from './Grafico.module.css';

const Grafico = () => {
  return (
    <section className={styles.graficoSection}>
      <div className={styles.container}>
        <div className={styles.textContent}>
          <h2>A inovação por trás de nossa energia solar</h2>
          <p>
            Nossa empresa oferece soluções em energia solar para residências e empresas. 
            Com a crescente preocupação com o meio ambiente e a busca por fontes de energia renováveis, 
            a energia solar se tornou uma opção cada vez mais viável e econômica.
          </p>
          <p>
            Comece com o cliente – descubra suas necessidades e ofereça a solução ideal.
          </p>
          <button className={styles.button}>Saiba mais</button>
        </div>
        <div className={styles.imageContainer}>
          <img src="/laptop.svg" alt="Gráfico de desempenho em laptop" />
        </div>
      </div>
    </section>
  );
};

export default Grafico;

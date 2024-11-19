import React from 'react';
import styles from './FeedbackSection.module.css';

const FeedbackSection = () => {
  return (
    <section className={styles.feedbackSection}>
      <div className={styles.overlay}>
        <div className={styles.feedbackGrid}>
          <div className={styles.feedbackCard}>
            <h3>Crescimento sustentável</h3>
            <p>54%</p>
          </div>
          <div className={styles.feedbackCard}>
            <h3>Projetos concluídos</h3>
            <p>+ 225</p>
          </div>
          <div className={styles.feedbackCard}>
            <h3>Economia prevista</h3>
            <p>US$ 50M</p>
          </div>
          <div className={styles.feedbackCard}>
            <h3>Clientes on-line</h3>
            <p>235.403</p>
          </div>
          <div className={styles.feedbackCard}>
            <h3>Retenção de clientes</h3>
            <p>85%</p>
          </div>
          <div className={styles.feedbackCard}>
            <h3>Eficiência energética</h3>
            <p>4x</p>
          </div>
          <div className={styles.feedbackCard}>
            <h3>Visitante do Site</h3>
            <p>100.000</p>
          </div>
          <div className={styles.feedbackCard}>
            <h3>Instalações</h3>
            <p>45.958</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeedbackSection;


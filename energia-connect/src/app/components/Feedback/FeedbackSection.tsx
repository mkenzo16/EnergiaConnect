import React from 'react';
import styles from './FeedbackSection.module.css';

const FeedbackSection = () => {
  const feedback = [
    { title: 'Crescimento sustentável', value: '54%' },
    { title: 'Projetos concluídos', value: '+ 225' },
    { title: 'Economia prevista', value: 'US$ 50M' },
    { title: 'Clientes on-line', value: '235.403' },
    { title: 'Retenção de clientes', value: '85%' },
    { title: 'Eficiência energética', value: '4x' },
    { title: 'Visitante do Site', value: '100.000' },
    { title: 'Instalações', value: '45.958' },
  ];

  return (
    <section className={styles.feedbackSection}>
      <div className={styles.overlay}>
        <div className={styles.feedbackGrid}>
          {feedback.map((item, index) => (
            <div key={index} className={styles.feedbackCard}>
              <h3>{item.title}</h3>
              <p>{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeedbackSection;

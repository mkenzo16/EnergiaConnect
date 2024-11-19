import React from 'react';
import styles from './About.module.css';
import Image from 'next/image';
import IphoneSvg from '/public/iphone.svg'; 

const About = () => {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.text}>
        <h2>Soluções personalizadas para atender às suas necessidades de energia.</h2>
        <p>
          Os usuários estão buscando soluções energéticas sustentáveis. Capacitamos nossas equipes a oferecer as melhores opções em energia solar.
        </p>
        <p>
          Nossa missão é fornecer energia limpa e renovável para todos.
        </p>
        <button className={styles.button}>Saiba mais</button>
      </div>
      <div className={styles.imageContainer}>
        <Image src={IphoneSvg} alt="iPhone com dados" width={400} height={400} />
      </div>
    </section>
  );
};

export default About;

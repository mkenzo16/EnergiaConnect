import React from 'react';
import styles from './About.module.css';
import Image from 'next/image';
import Link from 'next/link';
import IphoneSvg from '/public/iphone.svg';

const About = () => {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.text}>
        <h2>Garanta energia sustentável para sua casa e economize mais!</h2>
        <p>
          Economize energia e reduza seus custos com nossos planos acessíveis. Escolha a solução perfeita para você e sua família. Faça seu orçamento agora mesmo e comece a economizar hoje!
        </p>
        <p>
          Nossa missão é fornecer energia limpa e renovável para todos.
        </p>
        <Link href="/planos">
          <button className={styles.button}>Ver Planos</button>
        </Link>
      </div>
      <div className={styles.imageContainer}>
        <Image src={IphoneSvg} alt="iPhone com dados" width={400} height={400} />
      </div>
    </section>
  );
};

export default About;


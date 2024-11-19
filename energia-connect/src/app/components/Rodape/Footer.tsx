import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.socialMedia}>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <img src="/facebook_icon.png" alt="Facebook" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <img src="/twitter-icon.png" alt="Twitter" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <img src="/instagram-logo.png" alt="Instagram" />
        </a>
      </div>
      <div className={styles.info}>
        <p>
          Av. Paulista, Nº 1106, 7 andar • São Paulo SP 01311-000 • Brasil
        </p>
        <p>
          📞 3385-8010 • 📧 atendimento@fiap.com.br
        </p>
      </div>
      <div className={styles.logo}>
        <img src="/your-logo.svg" alt="Your Logo" />
      </div>
      <p className={styles.copyright}>
        Copyright © EnergiaConnect
      </p>
    </footer>
  );
};

export default Footer;

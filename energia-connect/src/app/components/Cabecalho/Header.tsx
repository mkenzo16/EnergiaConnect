import React from 'react';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>Your Logo</div>
      <nav>
        <ul className={styles.navLinks}>
          <li><a href="#hero">Início</a></li>
          <li><a href="#about">Serviços</a></li>
          <li><a href="#partners">Preços</a></li>
          <li><a href="#footer">Sobre nós</a></li>
          <li><a href="#contact" className={styles.contactButton}>Entre em contato</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

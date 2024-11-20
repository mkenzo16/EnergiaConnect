import React from 'react';
import Link from 'next/link'; // Importando o Link para roteamento interno
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src="/logo.png" alt="Logo" className={styles.logoImage} />
      </div>
      <nav>
        <ul className={styles.navLinks}>
          <li>
            <Link href="/" className={styles.navLink}>
              Início
            </Link>
          </li>
          <li>
            <Link href="#about" className={styles.navLink}>
              Serviços
            </Link>
          </li>
          <li>
            <Link href="#partners" className={styles.navLink}>
              Preços
            </Link>
          </li>
          <li>
            <Link href="#footer" className={styles.navLink}>
              Sobre nós
            </Link>
          </li>
          <li>
            <Link href="/contato" className={styles.contactButton}>
              Entre em contato
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;



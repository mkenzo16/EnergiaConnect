"use client";

import React from 'react';
import Link from 'next/link';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src="/logo.png" alt="Logo" />
      </div>
      <nav>
        <ul className={styles.navLinks}>
          <li><Link href="/">Início</Link></li>
          <li><Link href="/servicos">Serviços</Link></li>
          <li><Link href="/planos">Preços</Link></li>
          <li><Link href="/sobre">Sobre nós</Link></li>
          <li><Link href="/contato" className={styles.contactButton}>Entre em contato</Link></li>
        </ul>
      </nav>
      <div className={styles.actions}>
        <div className={styles.searchContainer}>
          <input
            type="text"
            placeholder="Pesquisar..."
            className={styles.searchInput}
          />
        </div>
        <div className={styles.userIconContainer}>
          <Link href="/cadastro">
            <button className={styles.userIcon}>
              <img src="/user.png" alt="User" />
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;





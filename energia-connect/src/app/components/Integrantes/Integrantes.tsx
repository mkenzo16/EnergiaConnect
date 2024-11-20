import React from 'react';
import styles from './Integrantes.module.css';

const integrantes = [
    {
        nome: 'Adriano Barutti',
        rm: '556760',
        turma: '1TDSPF-2024',
        github: 'https://github.com/AdrianoBarutti',
        foto: '/adriano.jpg',
    },
    {
        nome: 'Marcel Kenzo Takayama',
        rm: '555210',
        turma: '1TDSPF-2024',
        github: 'https://github.com/mkenzo16',
        foto: '/marcel.jpg',
    },
];

const Integrantes = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Sobre Nós</h1>
            <div className={styles.integrantesContainer}>
                {integrantes.map((integrante, index) => (
                    <div key={index} className={styles.card}>
                        <img
                            src={integrante.foto}
                            alt={`Foto de ${integrante.nome}`}
                            className={styles.foto}
                        />
                        <div className={styles.info}>
                            <h2>{integrante.nome}</h2>
                            <p><strong>RM:</strong> {integrante.rm}</p>
                            <p><strong>Turma:</strong> {integrante.turma}</p>
                            <a
                                href={integrante.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.github}
                            >
                                <img
                                    src="/github-icon.png"
                                    alt="Ícone do GitHub"
                                    className={styles.githubIcon}
                                />
                                GitHub
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Integrantes;

'use client';

import React, { useState } from 'react';
import styles from './Servicos.module.css';

const servicos = [
    {
        titulo: 'Capacidade de Geração',
        descricao: 'Alugue ou adquira uma parte da nossa usina solar e tenha acesso à energia limpa e renovável. Escolha o plano que melhor atende às suas necessidades.',
        imagem: '/comunidadesolar.jpg',
    },
    {
        titulo: 'Monitoramento de Energia',
        descricao: 'Acompanhe sua geração e consumo de energia em tempo real através do nosso painel interativo. Transparência e controle na palma da sua mão.',
        imagem: '/monitoramento.png',
    },
    {
        titulo: 'Suporte Técnico Dedicado',
        descricao: 'Nossa equipe está disponível 24/7 para ajudar com dúvidas ou questões relacionadas à sua participação no projeto de energia solar.',
        imagem: '/suporte.webp',
    },
];

const feedbacks = [
    {
        texto: 'A energia solar transformou nossa empresa. Agradecemos à equipe pela excelente consultoria e suporte.',
        nome: 'Tom Brady',
        cargo: 'Gerente da Empresa de Energia Solar',
        imagem: '/tombrady.png',
        background: '/energiasolar5.webp',
    },
    {
        texto: 'Reduzimos nossos custos de energia em mais de 50%. Recomendo muito!',
        nome: 'Ronaldo Nazario',
        cargo: 'Empresário do Setor Industrial',
        imagem: '/ronaldo.webp',
        background: '/energiasolar2.jpeg',
    },
    {
        texto: 'Ótima solução para quem quer economizar e ajudar o meio ambiente.',
        nome: 'Michael Jordan',
        cargo: 'CEO de Startups Verdes',
        imagem: '/jordan.png',
        background: '/energiasolar4.jpg',
    },
];

const Servicos = () => {
    const [feedbackIndex, setFeedbackIndex] = useState(0);

    const handleNextFeedback = () => {
        setFeedbackIndex((prevIndex) => (prevIndex + 1) % feedbacks.length);
    };

    const handlePrevFeedback = () => {
        setFeedbackIndex((prevIndex) =>
            prevIndex === 0 ? feedbacks.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.titulo}>Serviços</h1>
            <div className={styles.cardsContainer}>
                {servicos.map((servico, index) => (
                    <div key={index} className={styles.card}>
                        <img src={servico.imagem} alt={servico.titulo} className={styles.imagem} />
                        <h2 className={styles.cardTitulo}>{servico.titulo}</h2>
                        <p className={styles.cardDescricao}>{servico.descricao}</p>
                    </div>
                ))}
            </div>

            <div
                className={styles.feedbackContainer}
                style={{
                    backgroundImage: `url(${feedbacks[feedbackIndex].background})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <button className={styles.arrow} onClick={handlePrevFeedback}>
                    &#8249;
                </button>
                <div className={styles.feedbackCard}>
                    <img
                        src={feedbacks[feedbackIndex].imagem}
                        alt={feedbacks[feedbackIndex].nome}
                        className={styles.feedbackImg}
                    />
                    <p className={styles.feedbackText}>"{feedbacks[feedbackIndex].texto}"</p>
                    <h3 className={styles.feedbackName}>{feedbacks[feedbackIndex].nome}</h3>
                    <p className={styles.feedbackCargo}>{feedbacks[feedbackIndex].cargo}</p>
                </div>
                <button className={styles.arrow} onClick={handleNextFeedback}>
                    &#8250;
                </button>
            </div>
        </div>
    );
};

export default Servicos;




'use client';

import React from 'react';
import styles from './Planos.module.css';

const handleSelection = (plano: string, preco: string) => {
    const precoNumerico = parseFloat(preco.replace('R$', '').replace(',', '.').replace(/\/.*/, '').trim());

    localStorage.setItem(
        "planoSelecionado",
        JSON.stringify({ plano, preco: precoNumerico })
    );
    window.location.href = "/pagamento"; 
};

const planos = [
    {
        tipo: 'Aluguel',
        planos: [
            {
                nome: 'Plano Essencial',
                preco: 'R$ 29,90/mês',
                energia: '100 kWh/mês',
                descricao: 'Energia suficiente para pequenas residências.',
                background: '/aluguel-basico.jpg',
            },
            {
                nome: 'Plano Familiar',
                preco: 'R$ 69,90/mês',
                energia: '300 kWh/mês',
                descricao: 'Ideal para residências com consumo médio.',
                background: '/aluguel-padrao.webp',
            },
            {
                nome: 'Plano Completo',
                preco: 'R$ 149,90/mês',
                energia: '600 kWh/mês',
                descricao: 'Perfeito para famílias maiores.',
                background: '/aluguel-premium.webp',
            },
        ],
    },
    {
        tipo: 'Aquisição',
        planos: [
            {
                nome: 'Cota Essencial',
                preco: 'R$ 3000,00',
                energia: '1.000 kWh/ano',
                descricao: 'Energia vitalícia para pequenas residências.',
                background: '/aquisicao-basico.avif',
            },
            {
                nome: 'Cota Avançada',
                preco: 'R$ 6500,00',
                energia: '2.500 kWh/ano',
                descricao: 'Ótima escolha para consumo moderado.',
                background: '/aquisicao-padrao.png',
            },
            {
                nome: 'Cota Completa',
                preco: 'R$ 12000,00',
                energia: '5.000 kWh/ano',
                descricao: 'Energia de sobra para grandes famílias.',
                background: '/aquisicao.jpg',
            },
        ],
    },
];

const Planos = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.titulo}>Planos de Energia</h1>
            <p className={styles.diferenca}>
                <strong>Alugar:</strong> Você paga mensalmente para utilizar a energia gerada pela nossa usina, sem custos iniciais elevados. Ideal para quem busca flexibilidade e economia imediata.
                <br />
                <strong>Adquirir:</strong> Você faz um pagamento único para se tornar proprietário de uma cota da usina, garantindo energia vitalícia e economia a longo prazo.
            </p>
            {planos.map((categoria, index) => (
                <div key={index} className={styles.categoria}>
                    <h2 className={styles.subTitulo}>{categoria.tipo}</h2>
                    <div className={styles.cardsContainer}>
                        {categoria.planos.map((plano, i) => (
                            <div
                                key={i}
                                className={styles.card}
                                style={{
                                    backgroundImage: `url(${plano.background})`,
                                }}
                            >
                                <div className={styles.overlay}>
                                    <h3 className={styles.cardTitulo}>{plano.nome}</h3>
                                    <p className={styles.preco}>{plano.preco}</p>
                                    <p className={styles.energia}>Fornece: {plano.energia}</p>
                                    <p className={styles.descricao}>{plano.descricao}</p>
                                    <button
                                        className={styles.botao}
                                        onClick={() => handleSelection(plano.nome, plano.preco)}
                                    >
                                        Selecionar
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Planos;




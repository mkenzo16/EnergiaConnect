'use client';

import React, { useState, useEffect } from 'react';
import styles from './Pagamento.module.css';

const Pagamento = () => {
    const [plano, setPlano] = useState("");
    const [preco, setPreco] = useState(0);
    const [metodoPagamento, setMetodoPagamento] = useState("Pix");
    const [tipoCartao, setTipoCartao] = useState("Crédito");
    const [parcelas, setParcelas] = useState(1);

    useEffect(() => {
        const planoSelecionado = JSON.parse(localStorage.getItem("planoSelecionado") || "{}");
        setPlano(planoSelecionado.plano || "");
        setPreco(planoSelecionado.preco || 0);
    }, []);

    const valorParcela = preco / parcelas;

    return (
        <div className={styles.container}>
            <h1 className={styles.titulo}>Pagamento</h1>
            <div className={styles.resumo}>
                <h2>Plano Selecionado</h2>
                <p><strong>Plano:</strong> {plano}</p>
                <p><strong>Preço:</strong> R$ {preco.toFixed(2)}</p>
            </div>
            <div className={styles.metodo}>
                <h2>Selecione o Método de Pagamento</h2>
                <select
                    value={metodoPagamento}
                    onChange={(e) => setMetodoPagamento(e.target.value)}
                >
                    <option value="Pix">Pix</option>
                    <option value="Cartão de Crédito/Débito">Cartão de Crédito/Débito</option>
                </select>
            </div>
            {metodoPagamento === "Cartão de Crédito/Débito" && (
                <div className={styles.cartao}>
                    <h2>Tipo de Cartão</h2>
                    <select
                        value={tipoCartao}
                        onChange={(e) => setTipoCartao(e.target.value)}
                    >
                        <option value="Crédito">Crédito</option>
                        <option value="Débito">Débito</option>
                    </select>
                    {tipoCartao === "Crédito" && (
                        <div className={styles.parcelas}>
                            <h2>Parcelas</h2>
                            <select
                                value={parcelas}
                                onChange={(e) => setParcelas(parseInt(e.target.value))}
                            >
                                {[...Array(12).keys()].map((i) => (
                                    <option key={i + 1} value={i + 1}>
                                        {i + 1}x de R$ {((preco / (i + 1))).toFixed(2)}
                                    </option>
                                ))}
                            </select>
                        </div>
                    )}
                    <div className={styles.detalhesCartao}>
                        <input type="text" placeholder="Nome do Titular" />
                        <input type="text" placeholder="Número do Cartão" />
                        <input type="text" placeholder="Validade (MM/AA)" />
                        <input type="text" placeholder="CVV" />
                    </div>
                </div>
            )}
            <button className={styles.botaoConfirmar}>Confirmar Pagamento</button>
        </div>
    );
};

export default Pagamento;






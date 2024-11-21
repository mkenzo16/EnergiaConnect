import React from 'react';
import Servicos from '../components/Servicos/Servicos';
import Header from '../components/Cabecalho/Header';
import Footer from '../components/Rodape/Footer';
import PartnersSection from '../components/Parceiros/Partners';

const ServicosPage = () => {
    return (
      <>
        <Header />
        <Servicos />
        <PartnersSection />
        <Footer />
      </>
    );
  };
  
  export default ServicosPage;
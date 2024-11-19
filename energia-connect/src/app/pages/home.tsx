import React from 'react';
import Head from 'next/head';
import Hero from '../components/Conteudo/Hero';
import About from '../components/About/About'; 
import Feedback from '../components/Feedback/FeedbackSection'; 
import Footer from '../components/Rodape/Footer'; 

const Home = () => {
  return (
    <>
      <Head>
        <title>Energia Connect - Home</title>
        <meta name="description" content="Soluções personalizadas para energia solar." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <About />
      <Feedback />
      <Footer />
    </>
  );
};

export default Home;

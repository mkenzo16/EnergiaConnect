import Header from '../app/components/Cabecalho/Header';
import Hero from '../app/components/Conteudo/Hero';
import About from '../app/components/About/About';
import Partners from '../app/components/Parceiros/Partners';
import Footer from '../app/components/Rodape/Footer';
import FeedbackSection from './components/Feedback/FeedbackSection';
import Grafico from './components/Grafico/Grafico';
import VerificarContratos from './components/VerificarContratos/VerificarContratos';

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <VerificarContratos />
        <FeedbackSection />
        <Grafico />
        <Partners />
      </main>
      <Footer />
    </>
  );
}

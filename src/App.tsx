import React from 'react';
import { Navbar } from './components/Navbar';
import { IntroHook } from './components/IntroHook';
import { Hero } from './components/Hero';
import { HorizontalScroll } from './components/HorizontalScroll';
import { ProgramDetails } from './components/ProgramDetails';
import { About } from './components/About';
import { Features } from './components/Features';
import { Testimonials } from './components/Testimonials';
import { Pricing } from './components/Pricing';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { StickyCTA } from './components/StickyCTA';
import { WhatsAppFloat } from './components/WhatsAppFloat';

function App() {
  return (
    <div className="bg-[#f5f5f7] min-h-screen w-full overflow-x-hidden relative font-sans text-[#1d1d1f]">
      
      {/* Background Estático (Segurança) */}
      <div className="fixed inset-0 z-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 opacity-60 pointer-events-none"></div>

      <Navbar />
      
      <main className="relative z-10 w-full flex flex-col">
        
        {/* BLOCO 1: Intro */}
        <IntroHook />
        
        {/* BLOCO 2: Oferta Rápida */}
        <div className="py-10 px-4">
          <Pricing 
            isPreview={true} 
            id="pricing-fast-track" 
            customTitle="Pare de sofrer agora."
            customSubtitle="Comece sua cura imediatamente."
            customBadge="Decisão Inteligente"
          />
        </div>

        {/* BLOCO 3: Hero (Vídeo) - Com Fundo Branco para garantir visibilidade */}
        <div className="bg-white py-12 w-full relative z-10">
           <Hero />
        </div>
        
        {/* BLOCO 4: Jornada (Scroll Horizontal) - Fundo Cinza para contraste */}
        <div className="bg-[#f5f5f7] w-full relative z-10">
            <HorizontalScroll />
        </div>

        {/* BLOCO 5: Resto do Conteúdo */}
        <div className="bg-white relative z-10">
           <ProgramDetails />
           <Features />
           
           <div className="py-10">
             <Pricing 
               isPreview={true} 
               id="pricing-middle" 
               customTitle="Transforme esses 10 Pilares em Realidade"
               customSubtitle="Escolha agora como quer aplicar o método."
               customBadge="Próximo Passo"
             />
           </div>
           
           <About />
           <Testimonials />
           <Pricing />
           <FAQ />
        </div>
      </main>

      <Footer />
      <StickyCTA />
      <WhatsAppFloat />
    </div>
  );
}

export default App;

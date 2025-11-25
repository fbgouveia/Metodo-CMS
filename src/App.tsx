import React from 'react';
import { Navbar } from './components/Navbar';
import { IntroHook } from './components/IntroHook';
import { Hero } from './components/Hero';
import { HorizontalScroll } from './components/HorizontalScroll';
import { ProgramDetails } from './components/ProgramDetails';
import { Features } from './components/Features';
import { About } from './components/About';
import { Testimonials } from './components/Testimonials';
import { Pricing } from './components/Pricing';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { StickyCTA } from './components/StickyCTA';
import { WhatsAppFloat } from './components/WhatsAppFloat';

// GSAP imports não são necessários aqui se já estão nos componentes
// Mas deixamos o CSS global limpo

function App() {
  return (
    <div className="bg-[#f5f5f7] min-h-screen w-full overflow-x-hidden relative font-sans text-[#1d1d1f]">
      
      {/* Background estático/animado seguro */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[800px] h-[800px] bg-blue-200/30 rounded-full blur-[120px] mix-blend-multiply"></div>
          <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] bg-purple-200/30 rounded-full blur-[120px] mix-blend-multiply"></div>
      </div>

      <Navbar />
      
      <main className="relative z-10 w-full">
        <IntroHook />
        
        {/* Espaçamento seguro */}
        <div className="py-10">
          <Pricing 
            isPreview={true} 
            id="pricing-fast-track" 
            customTitle="Pare de sofrer agora."
            customSubtitle="Comece sua cura imediatamente."
            customBadge="Decisão Inteligente"
          />
        </div>

        <Hero />
        
        {/* ESPAÇADOR CRÍTICO: Garante que o vídeo termine antes do scroll começar */}
        <div className="h-20 w-full"></div>
        
        <HorizontalScroll />

        <div className="bg-white relative z-20">
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

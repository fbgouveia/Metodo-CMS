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

function App() {
  return (
    <div className="bg-[#f5f5f7] min-h-screen w-full overflow-x-hidden relative font-sans text-[#1d1d1f]">
      
      {/* Background Blobs */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[800px] h-[800px] bg-blue-200/30 rounded-full blur-[120px] mix-blend-multiply"></div>
          <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] bg-purple-200/30 rounded-full blur-[120px] mix-blend-multiply"></div>
      </div>

      {/* Navbar no topo de tudo */}
      <Navbar />
      
      <main className="relative w-full">
        
        {/* Intro e Preço Rápido */}
        <div className="relative z-10">
            <IntroHook />
            <div className="py-10">
            <Pricing 
                isPreview={true} 
                id="pricing-fast-track" 
                customTitle="Pare de sofrer agora."
                customSubtitle="Comece sua cura imediatamente."
                customBadge="Decisão Inteligente"
            />
            </div>
        </div>

        {/* HERO (Z-INDEX 0 - Fica no fundo para ser coberto) */}
        <div className="relative z-0">
           <Hero />
        </div>
        
        {/* Espaçador (Z-Index 0) */}
        <div className="w-full h-32 bg-transparent relative z-0"></div>

        {/* HORIZONTAL SCROLL (No arquivo dele, está z-50 para cobrir o Hero) */}
        <HorizontalScroll />

        {/* Conteúdo Restante (Z-Index 20 - Fica por cima do fundo) */}
        <div className="relative z-20 bg-white/80 backdrop-blur-md pt-20">
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

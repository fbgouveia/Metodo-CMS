import React from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { StickyCTA } from './components/StickyCTA';
import { WhatsAppFloat } from './components/WhatsAppFloat';

// Seções
import { IntroHook } from './components/IntroHook';
import { HorizontalScroll } from './components/HorizontalScroll';
import { Hero } from './components/Hero';
import { ProgramDetails } from './components/ProgramDetails';
import { Features } from './components/Features';
import { About } from './components/About';
import { Testimonials } from './components/Testimonials';
import { Pricing } from './components/Pricing';
import { FAQ } from './components/FAQ';

import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

function App() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden relative font-sans text-[#1d1d1f]">
      
      {/* 1. BACKGROUND ANIMADO (Blobs) */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-[#f0f4f8]">
          <div className="absolute top-[-10%] left-[-10%] w-[800px] h-[800px] bg-blue-300/40 rounded-full blur-[120px] mix-blend-multiply animate-blob opacity-80"></div>
          <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] bg-purple-300/40 rounded-full blur-[120px] mix-blend-multiply animate-blob animation-delay-2000 opacity-80"></div>
          <div className="absolute bottom-[-20%] left-[20%] w-[700px] h-[700px] bg-indigo-300/40 rounded-full blur-[120px] mix-blend-multiply animate-blob animation-delay-4000 opacity-80"></div>
      </div>

      <Navbar />
      
      <main className="relative z-10 w-full flex flex-col">
        
        {/* Intro */}
        <IntroHook />
        
        {/* Jornada (Transparente) */}
        <div className="relative z-20 bg-transparent py-10">
            <HorizontalScroll />
        </div>

        {/* HERO + Oferta Rápida (Vidro Muito Leve) */}
        {/* Removi bg-white/40 para bg-white/10 (quase invisível) */}
        <div className="relative z-30 bg-white/10 backdrop-blur-md py-24 rounded-t-[3rem] -mt-12 border-t border-white/30 shadow-xl"> 
           
           <div className="max-w-3xl mx-auto px-4 mb-12 relative z-10">
              <Pricing 
                isPreview={true} 
                id="pricing-fast-track" 
                customTitle="Oferta Relâmpago" 
                customSubtitle="Comece agora: 12x R$ 49,90" 
              />
           </div>

           <Hero />
        </div>

        {/* CONTEÚDO RESTANTE (TOTALMENTE TRANSPARENTE) */}
        {/* Removi bg-white/60. Agora é bg-transparent. */}
        <div className="relative z-40 bg-transparent pt-10">
           
           {/* Cards de detalhes terão seus próprios fundos de vidro */}
           <ProgramDetails />
           <Features />
           
           {/* Oferta do Meio (Sem fundo de seção, apenas a barra flutuando) */}
           <div className="py-16 px-4 my-10">
             <Pricing 
               isPreview={true} 
               id="pricing-middle" 
               customTitle="Transforme esses 10 Pilares em Realidade"
               customSubtitle="Próximo Passo"
               customBadge="Aproveite"
             />
           </div>
           
           <About />
           <Testimonials />
           
           {/* Tabela Final de Preços */}
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

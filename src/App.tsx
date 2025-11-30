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
      
      {/* Background Animado */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-[#f0f4f8]">
          <div className="absolute top-[-10%] left-[-10%] w-[800px] h-[800px] bg-blue-300/40 rounded-full blur-[120px] mix-blend-multiply animate-blob opacity-80"></div>
          <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] bg-purple-300/40 rounded-full blur-[120px] mix-blend-multiply animate-blob animation-delay-2000 opacity-80"></div>
          <div className="absolute bottom-[-20%] left-[20%] w-[700px] h-[700px] bg-indigo-300/40 rounded-full blur-[120px] mix-blend-multiply animate-blob animation-delay-4000 opacity-80"></div>
      </div>

      <Navbar />
      
      <main className="relative z-10 w-full flex flex-col">
        
        <IntroHook />
        
        <div className="relative z-20 bg-transparent py-10">
            <HorizontalScroll />
        </div>

        {/* --- PRICING 1 (Topo - Barra de Oferta Rápida) --- */}
        <div className="relative z-30 bg-white/40 backdrop-blur-xl py-24 rounded-t-[3rem] -mt-12 border-t border-white/50 shadow-xl"> 
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

        <div className="relative z-40 bg-white/60 backdrop-blur-2xl pt-10">
           
           <ProgramDetails />
           <Features />
           
           {/* --- PRICING 2 (MEIO - TABELA COMPLETA) --- */}
           {/* Mudei de isPreview={true} para Tabela Completa aqui */}
           <div className="bg-white/40 border-y border-white/50 backdrop-blur-xl mb-10">
             <Pricing id="pricing-middle" />
           </div>
           
           <About />
           <Testimonials />
           
           {/* --- PRICING 3 (FINAL - TABELA COMPLETA) --- */}
           <Pricing id="pricing-final" />
           
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

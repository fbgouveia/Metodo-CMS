import React from 'react';
import { Navbar } from './components/Navbar';
import { IntroHook } from './components/IntroHook';
import { HorizontalScroll } from './components/HorizontalScroll'; // Jornada vem logo após a Intro
import { Hero } from './components/Hero'; // Vídeo vem depois da Jornada
import { ProgramDetails } from './components/ProgramDetails';
import { Features } from './components/Features';
import { About } from './components/About';
import { Testimonials } from './components/Testimonials';
import { Pricing } from './components/Pricing';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { StickyCTA } from './components/StickyCTA';
import { WhatsAppFloat } from './components/WhatsAppFloat';

// Removemos imports do GSAP daqui para evitar conflitos globais. 
// Deixe o GSAP apenas dentro dos componentes que o usam.

function App() {
  return (
    <div className="bg-slate-50 min-h-screen w-full overflow-x-hidden relative font-sans text-[#1d1d1f]">
      
      {/* Navbar Fixa */}
      <Navbar />
      
      <main className="relative z-10 w-full flex flex-col">
        
        {/* 1. INTRODUÇÃO */}
        <IntroHook />
        
        {/* 2. JORNADA (HORIZONTAL SCROLL) */}
        {/* Background sólido para garantir que cubra qualquer coisa atrás */}
        <div className="relative z-20 bg-[#f5f5f7]">
            <HorizontalScroll />
        </div>

        {/* 3. HERO (VÍDEO + OFERTA) */}
        <div className="relative z-30 bg-white py-20 shadow-xl"> 
           
           {/* Oferta Rápida */}
           <div className="max-w-2xl mx-auto px-4 mb-12">
              <div className="bg-white p-4 rounded-full shadow-md border border-blue-100 flex flex-col md:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">⚡</div>
                      <div className="text-center md:text-left">
                          <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wide">Oferta Relâmpago</p>
                          <p class="text-sm font-bold text-slate-900">Curso Completo: <span class="text-blue-600 text-base">12x R$ 49,90</span></p>
                      </div>
                  </div>
                  <a href="#pricing" className="bg-slate-900 text-white px-8 py-2 rounded-full text-sm font-bold hover:bg-blue-600 transition w-full md:w-auto text-center">
                      Quero me curar agora
                  </a>
              </div>
           </div>

           {/* O Player de Vídeo */}
           <Hero />
        </div>

        {/* 4. RESTO DO CONTEÚDO */}
        <div className="relative z-40 bg-white">
           <ProgramDetails />
           <Features />
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

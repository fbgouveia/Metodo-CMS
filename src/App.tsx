import React from 'react';
import { Navbar } from './components/Navbar';
import { IntroHook } from './components/IntroHook';
import { Hero } from './components/Hero';
import { HorizontalScroll } from './components/HorizontalScroll'; // A JORNADA
import { ProgramDetails } from './components/ProgramDetails';
import { Features } from './components/Features';
import { About } from './components/About';
import { Testimonials } from './components/Testimonials';
import { Pricing } from './components/Pricing';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { StickyCTA } from './components/StickyCTA';
import { WhatsAppFloat } from './components/WhatsAppFloat';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function App() {
  return (
    // ADICIONEI BORDER-RED PARA VOCÊ SABER SE ATUALIZOU
    <div className="bg-slate-50 min-h-screen w-full overflow-x-hidden relative font-sans text-[#1d1d1f] border-8 border-red-600 box-border">
      
      {/* Aviso de Versão (Só aparece se o código atualizou) */}
      <div className="fixed top-0 left-0 w-full bg-red-600 text-white text-center text-xs font-bold z-[9999] p-1">
        VERSÃO 5.0 - SE VOCÊ LÊ ISSO, O CÓDIGO ATUALIZOU
      </div>

      <Navbar />
      
      <main className="relative z-10 w-full flex flex-col">
        
        {/* 1. INTRODUÇÃO (Capa com Zoom) */}
        <IntroHook />
        
        {/* 2. JORNADA (HORIZONTAL SCROLL) */}
        {/* Forcei bg-slate-200 para diferenciar visualmente */}
        <div className="relative z-20 bg-slate-200">
            <HorizontalScroll />
        </div>

        {/* 3. HERO (VÍDEO) */}
        {/* Forcei bg-white para separar */}
        <div className="relative z-30 bg-white py-20 shadow-2xl"> 
           <div className="max-w-2xl mx-auto px-4 mb-12 text-center">
              <span className="text-blue-600 font-bold text-xs uppercase tracking-widest mb-2 block">Assista ao Vídeo</span>
              <h2 className="text-3xl font-serif text-slate-900">Entenda o Método</h2>
           </div>
           <Hero />
        </div>

        {/* 4. CONTEÚDO RESTANTE */}
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

import React from 'react';
import { Navbar } from './components/Navbar';
import { IntroHook } from './components/IntroHook';
import { Hero } from './components/Hero';
import { HorizontalScroll } from './components/HorizontalScroll';
import { ProgramDetails } from './components/ProgramDetails';
import { Features } from './components/Features'; // Seus benefícios
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
    <div className="bg-slate-50 min-h-screen w-full overflow-x-hidden relative font-sans text-slate-900">
      
      {/* FUNDO ANIMADO (Blobs) - Fica fixo no fundo */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[800px] h-[800px] bg-blue-200/40 rounded-full blur-[100px] animate-blob mix-blend-multiply"></div>
          <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] bg-purple-200/40 rounded-full blur-[100px] animate-blob animation-delay-2000 mix-blend-multiply"></div>
          <div className="absolute bottom-[-20%] left-[20%] w-[700px] h-[700px] bg-indigo-200/40 rounded-full blur-[100px] animate-blob animation-delay-4000 mix-blend-multiply"></div>
      </div>

      <Navbar />
      
      <main className="relative z-10 w-full flex flex-col">
        <IntroHook />
        
        {/* HERO (Vídeo) - Z-Index menor para ser coberto */}
        <div className="relative z-10 bg-white/50 backdrop-blur-sm">
           <Hero />
        </div>
        
        {/* Horizontal Scroll - Z-Index MAIOR e Background Sólido para cobrir o vídeo ao subir */}
        <div className="relative z-20 bg-[#f5f5f7]">
            <HorizontalScroll />
        </div>

        {/* Resto do Conteúdo - Fundo Branco para leitura */}
        <div className="relative z-20 bg-white">
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

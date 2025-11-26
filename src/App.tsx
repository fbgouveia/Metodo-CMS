import React from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

// Componentes que SABEMOS que estão atualizados e funcionam
import { Navbar } from './components/Navbar';
import { IntroHook } from './components/IntroHook';
import { HorizontalScroll } from './components/HorizontalScroll';
import { Hero } from './components/Hero';
import { Footer } from './components/Footer';
import { StickyCTA } from './components/StickyCTA';
import { WhatsAppFloat } from './components/WhatsAppFloat';

// Componentes Antigos (COMENTADOS PARA TESTE - O erro provável está aqui)
// import { ProgramDetails } from './components/ProgramDetails';
// import { Features } from './components/Features';
// import { About } from './components/About';
// import { Testimonials } from './components/Testimonials';
// import { Pricing } from './components/Pricing';
// import { FAQ } from './components/FAQ';

gsap.registerPlugin(ScrollTrigger);

function App() {
  return (
    <div className="bg-slate-50 min-h-screen w-full overflow-x-hidden relative font-sans text-[#1d1d1f]">
      
      {/* Background Blobs */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-[#f0f4f8]">
          <div className="absolute top-[-10%] left-[-10%] w-[800px] h-[800px] bg-blue-200/40 rounded-full blur-[100px] mix-blend-multiply animate-blob opacity-70"></div>
          <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] bg-purple-200/40 rounded-full blur-[100px] mix-blend-multiply animate-blob animation-delay-2000 opacity-70"></div>
      </div>

      <Navbar />
      
      <main className="relative z-10 w-full flex flex-col">
        
        {/* 1. INTRO */}
        <IntroHook />
        
        {/* 2. JORNADA (HORIZONTAL SCROLL) */}
        <div className="relative z-20 bg-[#f5f5f7] border-t border-white/50 shadow-sm">
            <HorizontalScroll />
        </div>

        {/* 3. HERO (VÍDEO) */}
        <div className="relative z-30 bg-white py-20 rounded-t-[3rem] -mt-12 shadow-[0_-20px_60px_rgba(0,0,0,0.05)]"> 
           <div className="max-w-4xl mx-auto px-4 text-center">
              <h2 className="text-3xl font-bold mb-8">O Vídeo Explicativo</h2>
              <Hero />
           </div>
        </div>

        {/* ÁREA DE TESTE - Se o site abrir, o problema era nos arquivos abaixo */}
        <div className="relative z-40 bg-white p-20 text-center">
            <h2 className="text-2xl text-gray-400 font-bold border-2 border-dashed border-gray-300 p-10 rounded-3xl">
               As outras seções (Sobre, FAQ, Preços) foram ocultadas temporariamente.<br/>
               Se você está vendo isso, o site VOLTOU A FUNCIONAR! 🎉
            </h2>
        </div>

      </main>

      <Footer />
      <StickyCTA />
      <WhatsAppFloat />
    </div>
  );
}

export default App;

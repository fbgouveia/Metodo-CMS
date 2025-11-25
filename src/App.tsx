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
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

// Registra GSAP
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

function App() {
  return (
    <div className="bg-[#f5f5f7] min-h-screen w-full overflow-x-hidden relative font-sans text-[#1d1d1f]">
      
      {/* Background Animado (Fica no Z-0 absoluto) */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[800px] h-[800px] bg-blue-200/30 rounded-full blur-[120px] mix-blend-multiply opacity-70"></div>
          <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] bg-purple-200/30 rounded-full blur-[120px] mix-blend-multiply opacity-70"></div>
      </div>

      {/* Navbar (Z-50 para ficar acima de tudo) */}
      <Navbar />
      
      <main className="relative w-full flex flex-col">
        
        {/* 1. INTRO (Z-INDEX 10) */}
        {/* Definimos uma altura fixa ou padding para garantir o espaço */}
        <div className="relative z-10 bg-transparent pb-20">
           <IntroHook />
        </div>
        
        {/* 2. HORIZONTAL SCROLL (Z-INDEX 20) */}
        {/* Ele tem z-index maior, então vai cobrir a Intro ao rolar */}
        {/* bg-white sólido impede transparência indesejada */}
        <div className="relative z-20 bg-white shadow-[0_-20px_60px_rgba(0,0,0,0.05)] rounded-t-[3rem] -mt-10 pt-10">
            <HorizontalScroll />
        </div>

        {/* 3. HERO / VÍDEO (Z-INDEX 30) */}
        {/* Vem depois do scroll. Margem negativa pequena para 'encaixar' visualmente */}
        <div className="relative z-30 bg-[#f5f5f7] py-20 rounded-t-[3rem] -mt-10 border-t border-white/50 shadow-xl">
           
           {/* Oferta Rápida */}
           <div className="max-w-2xl mx-auto px-4 mb-12">
              <div className="bg-white p-4 rounded-full shadow-sm border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-xl">⚡</div>
                      <div className="text-center md:text-left">
                          <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wide">Oferta Relâmpago</p>
                          <p class="text-sm font-bold text-slate-900">Curso Completo: <span class="text-blue-600">12x R$ 49,90</span></p>
                      </div>
                  </div>
                  <a href="#pricing" className="bg-black text-white px-8 py-2 rounded-full text-sm font-bold hover:bg-gray-800 transition w-full md:w-auto text-center">
                      Quero me curar agora
                  </a>
              </div>
           </div>

           <Hero />
        </div>

        {/* 4. CONTEÚDO RESTANTE (Z-INDEX 40) */}
        <div className="relative z-40 bg-white pt-20 rounded-t-[3rem] -mt-10 shadow-2xl">
           <ProgramDetails />
           <Features />
           
           <div className="py-12 px-4">
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

import React from 'react';
import { Navbar } from './components/Navbar';
import { IntroHook } from './components/IntroHook';
import { HorizontalScroll } from './components/HorizontalScroll';
import { Hero } from './components/Hero';
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
    <div className="bg-slate-50 min-h-screen w-full overflow-x-hidden relative font-sans text-[#1d1d1f]">
      
      {/* Background Blobs */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-[#f0f4f8]">
          <div className="absolute top-[-10%] left-[-10%] w-[800px] h-[800px] bg-blue-200/40 rounded-full blur-[100px] mix-blend-multiply animate-blob opacity-70"></div>
          <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] bg-purple-200/40 rounded-full blur-[100px] mix-blend-multiply animate-blob animation-delay-2000 opacity-70"></div>
          <div className="absolute bottom-[-20%] left-[20%] w-[700px] h-[700px] bg-indigo-200/40 rounded-full blur-[100px] mix-blend-multiply animate-blob animation-delay-4000 opacity-70"></div>
      </div>

      <Navbar />
      
      <main className="relative z-10 w-full flex flex-col">
        
        {/* 1. INTRO (Vai travar e expandir a imagem) */}
        <IntroHook />
        
        {/* 2. JORNADA (HORIZONTAL SCROLL) */}
        {/* Vem logo após a Intro terminar de destravar */}
        <div className="relative z-20 bg-[#f5f5f7] border-t border-white/50">
            <HorizontalScroll />
        </div>

        {/* 3. HERO (VÍDEO + OFERTA) */}
        <div className="relative z-30 bg-white/80 backdrop-blur-sm py-20 shadow-2xl rounded-t-[3rem] -mt-10"> 
           
           <div className="max-w-2xl mx-auto px-4 mb-12">
              <div className="bg-white p-4 rounded-full shadow-md border border-blue-100 flex flex-col md:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-sm">⚡</div>
                      <div className="text-center md:text-left">
                          <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wide">Oferta Relâmpago</p>
                          <p class="text-sm font-bold text-slate-900">Curso Completo: <span class="text-blue-600 text-base">12x R$ 49,90</span></p>
                      </div>
                  </div>
                  <a href="#pricing" className="bg-slate-900 text-white px-8 py-2 rounded-full text-sm font-bold hover:bg-blue-600 transition w-full md:w-auto text-center shadow-lg">
                      Quero me curar agora
                  </a>
              </div>
           </div>

           <Hero />
        </div>

        {/* 4. CONTEÚDO RESTANTE */}
        <div className="relative z-30 bg-white">
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

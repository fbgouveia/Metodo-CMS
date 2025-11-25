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

gsap.registerPlugin(ScrollTrigger);

function App() {
  return (
    // Fundo base transparente para deixar o fixed aparecer
    <div className="min-h-screen w-full overflow-x-hidden relative font-sans text-[#1d1d1f]">
      
      {/* --- CAMADA 0: BACKGROUND ANIMADO (BLOBS) --- */}
      {/* Eles ficam fixos no fundo da tela */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-[#f0f4f8]">
          <div className="absolute top-[-10%] left-[-10%] w-[800px] h-[800px] bg-blue-300/30 rounded-full blur-[120px] mix-blend-multiply opacity-80 animate-blob"></div>
          <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] bg-purple-300/30 rounded-full blur-[120px] mix-blend-multiply opacity-80 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-[-20%] left-[20%] w-[700px] h-[700px] bg-indigo-300/30 rounded-full blur-[120px] mix-blend-multiply opacity-80 animate-blob animation-delay-4000"></div>
      </div>

      {/* Navbar */}
      <Navbar />
      
      <main className="relative z-10 w-full flex flex-col">
        
        {/* 1. INTRO (Fundo Transparente para ver os blobs logo de cara) */}
        <div className="relative z-10">
           <IntroHook />
        </div>
        
        {/* 2. HERO + OFERTA (Vidro Fosco) */}
        {/* bg-white/60 permite ver as cores passando por trás */}
        <div className="relative z-20 bg-white/60 backdrop-blur-xl py-20 shadow-xl rounded-t-[3rem] -mt-12 border-t border-white/40"> 
           
           {/* Oferta Rápida */}
           <div className="max-w-3xl mx-auto px-4 mb-12">
              <div className="bg-white/80 backdrop-blur-md p-4 rounded-full shadow-lg border border-blue-100 flex flex-col md:flex-row items-center justify-between gap-4 transform hover:scale-[1.01] transition-transform duration-300">
                  <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-md animate-pulse">⚡</div>
                      <div className="text-center md:text-left">
                          <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wide mb-0.5">Oferta Relâmpago</p>
                          <p class="text-sm font-bold text-slate-900">Curso Completo: <span class="text-blue-600 text-base">12x R$ 49,90</span></p>
                      </div>
                  </div>
                  <a href="#pricing" className="bg-slate-900 text-white px-8 py-3 rounded-full text-sm font-bold hover:bg-blue-600 transition-all shadow-md w-full md:w-auto text-center">
                      Quero me curar agora
                  </a>
              </div>
           </div>

           <Hero />
        </div>
        
        {/* 3. HORIZONTAL SCROLL (Vidro Fosco um pouco mais denso para contraste) */}
        <div className="relative z-30 bg-slate-50/80 backdrop-blur-xl border-t border-white/50">
            <HorizontalScroll />
        </div>

        {/* 4. CONTEÚDO RESTANTE (Vidro Fosco Limpo) */}
        <div className="relative z-40 bg-white/70 backdrop-blur-xl shadow-[0_-20px_60px_rgba(0,0,0,0.05)] rounded-t-[3rem] -mt-10 pt-16 pb-20">
           
           <ProgramDetails />
           
           <Features />
           
           {/* Oferta Intermediária */}
           <div className="py-16 px-4 my-10 bg-white/50 backdrop-blur-sm rounded-3xl border border-white/60 mx-4 md:mx-auto max-w-6xl">
             <Pricing 
               isPreview={true} 
               id="pricing-middle" 
               customTitle="Transforme esses 10 Pilares em Realidade"
               customSubtitle="Você já entendeu o que precisa ser feito. Escolha agora como quer aplicar o método."
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

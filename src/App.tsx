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
    <div className="bg-slate-50 min-h-screen w-full overflow-x-hidden relative font-sans text-[#1d1d1f]">
      
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[800px] h-[800px] bg-blue-200/30 rounded-full blur-[120px] mix-blend-multiply opacity-70"></div>
          <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] bg-purple-200/30 rounded-full blur-[120px] mix-blend-multiply opacity-70"></div>
      </div>

      <Navbar />
      
      <main className="relative z-10 w-full flex flex-col">
        
        {/* 1. INTRO (Trava e Anima) */}
        <IntroHook />
        
        {/* 2. HERO + OFERTA (Vem naturalmente DEPOIS que a intro destrava) */}
        <div className="relative z-20 bg-white pt-20 pb-20"> 
           <div className="max-w-2xl mx-auto px-4 mb-12">
              <div className="bg-slate-50 p-4 rounded-full shadow-md border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4">
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
        
        {/* 3. HORIZONTAL SCROLL (Jornada) */}
        <div className="relative z-30 bg-[#f5f5f7] border-t border-white">
            <HorizontalScroll />
        </div>

        {/* 4. CONTEÚDO RESTANTE */}
        <div className="relative z-40 bg-white/80 backdrop-blur-md pt-10">
           <ProgramDetails />
           <Features />
           <div className="py-12 px-4"><Pricing isPreview={true} id="pricing-middle" customTitle="Transforme esses 10 Pilares em Realidade" customSubtitle="Escolha agora como quer aplicar o método." customBadge="Próximo Passo" /></div>
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

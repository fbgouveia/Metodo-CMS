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

function App() {
  return (
    // Forcei text-slate-900 para garantir que a fonte não esteja branca no fundo branco
    <div className="bg-slate-50 min-h-screen w-full overflow-x-hidden relative font-sans text-slate-900">
      
      {/* Blobs de fundo (Opacity baixa para não brigar com o conteúdo) */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[800px] h-[800px] bg-blue-200/30 rounded-full blur-[120px] mix-blend-multiply opacity-50"></div>
          <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] bg-purple-200/30 rounded-full blur-[120px] mix-blend-multiply opacity-50"></div>
      </div>

      <Navbar />
      
      <main className="relative z-10 w-full flex flex-col">
        
        {/* 1. INTRO */}
        <div className="relative z-10 bg-white">
           <IntroHook />
        </div>
        
        {/* 2. HERO (VÍDEO) + OFERTA */}
        {/* Removi margens negativas. Fluxo normal = Sem erros. */}
        <div className="relative z-20 bg-white py-12"> 
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
                      Quero me curar
                  </a>
              </div>
           </div>
           <Hero />
        </div>
        
        {/* 3. JORNADA */}
        <div className="relative z-20 bg-[#f5f5f7] py-10 border-t border-slate-200">
            <HorizontalScroll />
        </div>

        {/* 4. CONTEÚDO */}
        <div className="relative z-20 bg-white pt-10">
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

import React from 'react';
import { Navbar } from './components/Navbar';
import { IntroHook } from './components/IntroHook';
import { Hero } from './components/Hero';
import { HorizontalScroll } from './components/HorizontalScroll';
import { ProgramDetails } from './components/ProgramDetails';
import { About } from './components/About';
import { Features } from './components/Features';
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
    <div className="bg-slate-50 min-h-screen text-slate-900 selection:bg-blue-200 selection:text-blue-900 relative w-full overflow-x-hidden font-sans">
      
      {/* Background Blobs (Fundo) */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[800px] h-[800px] bg-blue-200/30 rounded-full blur-[120px] mix-blend-multiply"></div>
          <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] bg-purple-200/30 rounded-full blur-[120px] mix-blend-multiply"></div>
      </div>

      <Navbar />
      
      <main className="relative z-10 w-full">
        <IntroHook />
        
        {/* Oferta Rápida Topo */}
        <Pricing 
          isPreview={true} 
          id="pricing-fast-track" 
          customTitle="Pare de sofrer agora."
          customSubtitle="Comece sua cura imediatamente."
          customBadge="Oferta Especial"
        />

        <Hero />
        
        {/* --- ESPAÇAMENTO DE SEGURANÇA --- */}
        {/* Isso impede que o scroll horizontal engula o vídeo */}
        <div className="w-full h-24 md:h-32 bg-transparent"></div>
        {/* -------------------------------- */}

        <HorizontalScroll />

        <ProgramDetails />

        <Features />
        
        <Pricing 
          isPreview={true} 
          id="pricing-middle" 
          customTitle="Transforme esses 10 Pilares em Realidade"
          customSubtitle="Escolha agora como quer aplicar o método."
          customBadge="Próximo Passo"
        />
        
        <About />

        <Testimonials />

        <Pricing />

        <FAQ />
      </main>

      <Footer />
      <StickyCTA />
      <WhatsAppFloat />
    </div>
  );
}

export default App;

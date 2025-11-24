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

// Register standard GSAP plugins
gsap.registerPlugin(ScrollTrigger);

function App() {
  return (
    <div className="bg-slate-50 min-h-screen text-slate-900 selection:bg-blue-200 selection:text-blue-900 relative">
      {/* Dynamic Light Background */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[800px] h-[800px] bg-blue-200/40 rounded-full blur-[100px] animate-blob mix-blend-multiply"></div>
          <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] bg-purple-200/40 rounded-full blur-[100px] animate-blob animation-delay-2000 mix-blend-multiply"></div>
          <div className="absolute bottom-[-20%] left-[20%] w-[700px] h-[700px] bg-indigo-200/40 rounded-full blur-[100px] animate-blob animation-delay-4000 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-slate-50/20 backdrop-blur-[2px]"></div>
      </div>

      <Navbar />
      <main className="relative z-10">
        <IntroHook />
        <Hero />
        
        {/* Top Funnel Fast-Track Offer */}
        <Pricing 
          isPreview={true} 
          id="pricing-fast-track" 
          customTitle="Pare de sofrer agora."
          customSubtitle="Para quem já entendeu que esperar só piora a ansiedade. Comece sua cura imediatamente."
          customBadge="Decisão Inteligente"
        />

        <HorizontalScroll />
        <ProgramDetails />

        <Features />
        
        {/* Middle Funnel Pricing Injection */}
        <Pricing 
          isPreview={true} 
          id="pricing-middle" 
          customTitle="Transforme esses 10 Pilares em Realidade"
          customSubtitle="Você já entendeu o que precisa ser feito. Escolha agora como quer aplicar o método."
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
import React from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { StickyCTA } from './components/StickyCTA';
import { WhatsAppFloat } from './components/WhatsAppFloat';
import { IntroHook } from './components/IntroHook';
import { HorizontalScroll } from './components/HorizontalScroll';
import { Hero } from './components/Hero';
import { ProgramDetails } from './components/ProgramDetails';
import { Features } from './components/Features';
import { About } from './components/About';
import { Testimonials } from './components/Testimonials';
import { Pricing } from './components/Pricing';
import { FAQ } from './components/FAQ';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

function App() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden relative font-sans text-[#1d1d1f]">
      
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-[#f0f4f8]">
          <div className="absolute top-[-10%] left-[-10%] w-[800px] h-[800px] bg-blue-300/40 rounded-full blur-[120px] mix-blend-multiply animate-blob opacity-80"></div>
          <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] bg-purple-300/40 rounded-full blur-[120px] mix-blend-multiply animate-blob animation-delay-2000 opacity-80"></div>
          <div className="absolute bottom-[-20%] left-[20%] w-[700px] h-[700px] bg-indigo-300/40 rounded-full blur-[120px] mix-blend-multiply animate-blob animation-delay-4000 opacity-80"></div>
      </div>

      <Navbar />
      
      <main className="relative z-10 w-full flex flex-col">
        <IntroHook />
        
        <div className="relative z-20 bg-transparent py-10">
            <HorizontalScroll />
        </div>

        {/* HERO - AJUSTES PARA O PLAYER GRANDE NO MOBILE */}
        <div className="relative z-30 flex justify-center -mt-8 md:-mt-12 px-2 md:px-4 mb-16 md:mb-20">
           {/* MOBILE: p-3 (antes era p-6) para ganhar espaço */}
           <div className="w-full max-w-6xl bg-white/30 backdrop-blur-2xl border border-white/50 shadow-2xl rounded-3xl md:rounded-[3rem] p-3 md:p-12 relative overflow-hidden">
               <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white/40 to-transparent pointer-events-none"></div>
               <div className="relative z-10">
                   <Hero />
               </div>
           </div>
        </div>

        <div className="relative z-40 bg-transparent pt-0">
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

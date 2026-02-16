import React from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { StickyCTA } from './components/StickyCTA';
import { WhatsAppFloat } from './components/WhatsAppFloat';
import { IntroHook } from './components/IntroHook';
import { TransformationJourney } from './components/TransformationJourney';
import { Hero } from './components/Hero';
import { MentorshipFunnel } from './components/MentorshipFunnel';
import { VerticalScroll } from './components/VerticalScroll';
import { ProgramDetails } from './components/ProgramDetails';
import { Features } from './components/Features';
import { About } from './components/About';
import { Testimonials } from './components/Testimonials';
import { NeuralQuiz } from './components/NeuralQuiz';
import { ManualShowcase } from './components/ManualShowcase';
import { CourseSaleCard } from './components/CourseSaleCard';
import { TriplePricing } from './components/TriplePricing';
import { FAQ } from './components/FAQ';
import { GuaranteeSection } from './components/GuaranteeSection';
import { NeuralCursor } from './components/NeuralCursor';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

function App() {
  return (
    <div className="min-h-screen w-full relative font-sans text-[#1d1d1f]">
      <NeuralCursor />

      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-[#f0f4f8]">
        <div className="absolute top-[-10%] left-[-10%] w-[800px] h-[800px] bg-blue-300/40 rounded-full blur-[120px] mix-blend-multiply animate-blob opacity-80"></div>
        <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] bg-blue-200/40 rounded-full blur-[120px] mix-blend-multiply animate-blob animation-delay-2000 opacity-80"></div>
        <div className="absolute bottom-[-20%] left-[20%] w-[700px] h-[700px] bg-cyan-200/40 rounded-full blur-[120px] mix-blend-multiply animate-blob animation-delay-4000 opacity-80"></div>
      </div>

      <Navbar />

      <main className="relative z-10 w-full flex flex-col">
        <IntroHook />

        {/* NARRATIVA 2: A Prova Visual (O Vídeo) */}
        <div className="relative z-30 flex justify-center px-2 md:px-4 mt-12 md:mt-24 mb-24 md:mb-32">
          <div className="w-full max-w-6xl bg-white/40 backdrop-blur-3xl border border-white/60 shadow-2xl rounded-[3rem] p-4 md:p-16 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white/40 to-transparent pointer-events-none"></div>
            <div className="relative z-10">
              <Hero />
            </div>
          </div>
        </div>

        {/* NARRATIVA 1: A Jornada Emocional */}
        <TransformationJourney />

        <NeuralQuiz />

        {/* NARRATIVA 3: O Foco no Alto Valor (Mentoria VIP) */}
        <MentorshipFunnel />

        <div className="relative z-20">
          <VerticalScroll />
        </div>

        {/* Ponte de Conversão: Card do Curso Customizado */}
        <CourseSaleCard />

        <div className="relative z-40 bg-transparent pt-0">
          <ProgramDetails />
          <Features />
          <About />
          <Testimonials />
          <ManualShowcase />

          <GuaranteeSection />

          {/* NARRATIVA FINAL: A Decisão Baseada em Valor */}
          <TriplePricing />

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

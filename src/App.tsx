import React from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { StickyCTA } from './components/StickyCTA';
import { WhatsAppFloat } from './components/WhatsAppFloat';
import { IntroHook } from './components/IntroHook';
import { TransformationJourney } from './components/TransformationJourney';
import { Hero } from './components/Hero';
import { MentorshipFunnel } from './components/MentorshipFunnel';
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
    <div className="min-h-screen w-full relative">
      <NeuralCursor />

      {/* Fundo Sólido e Limpo da Marca (Papel) já configurado no index.css, mas garantindo classe base aqui */}
      <div className="fixed inset-0 z-0 bg-brand-papel pointer-events-none"></div>

      <Navbar />

      <main className="relative z-10 w-full flex flex-col">
        <IntroHook />

        {/* NARRATIVA 2: A Prova Visual (O Vídeo) */}
        <div className="relative z-30 flex justify-center px-4 md:px-8 mt-12 md:mt-24 mb-24 md:mb-32">
          <div className="w-full max-w-5xl">
            <Hero />
          </div>
        </div>

        {/* NARRATIVA 1: A Jornada Emocional */}
        <TransformationJourney />

        <NeuralQuiz />

        {/* NARRATIVA 3: O Foco no Alto Valor (Mentoria VIP) */}
        <MentorshipFunnel />


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


    </div>
  );
}

export default App;

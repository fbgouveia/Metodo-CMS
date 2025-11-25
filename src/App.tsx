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
    // 'relative' para ser o pai dos absolutos
    // 'overflow-x-hidden' para evitar scroll lateral indesejado no mobile
    <div className="bg-slate-50 min-h-screen text-slate-900 selection:bg-blue-200 selection:text-blue-900 relative w-full overflow-x-hidden font-sans">
      
      {/* CAMADA 0: Background Blobs (Fundo Absoluto Animado) */}
      {/* Esses são os 'blobs' que dão a cor, eles já tem o blur neles mesmos (blur-[100px]) */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[800px] h-[800px] bg-blue-200/40 rounded-full blur-[100px] animate-blob mix-blend-multiply"></div>
          <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] bg-purple-200/40 rounded-full blur-[100px] animate-blob animation-delay-2000 mix-blend-multiply"></div>
          <div className="absolute bottom-[-20%] left-[20%] w-[700px] h-[700px] bg-indigo-200/40 rounded-full blur-[100px] animate-blob animation-delay-4000 mix-blend-multiply"></div>
      </div>

      {/* REMOVIDO: NeuralLine e a div de Overlay Blur global para garantir nitidez total nos textos */}

      {/* CAMADA 100: Navbar (Topo) */}
      <Navbar />
      
      {/* CAMADA 10: Conteúdo Principal */}
      <main className="relative z-10 w-full">
        
        {/* 1. Capa com Hook Visual */}
        <IntroHook />
        
        {/* 2. Oferta Rápida (Topo do Funil - Impulso) */}
        <Pricing 
          isPreview={true} 
          id="pricing-fast-track" 
          customTitle="Pare de sofrer agora."
          customSubtitle="Para quem já entendeu que esperar só piora a ansiedade. Comece sua cura imediatamente."
          customBadge="Decisão Inteligente"
        />

        {/* 3. Vídeo VSL + Contexto */}
        <Hero />
        
        {/* 4. A Jornada (Scroll Horizontal) */}
        <HorizontalScroll />

        {/* 5. Detalhes Técnicos (Módulos) */}
        <ProgramDetails />

        {/* 6. Benefícios e Transformação */}
        <Features />
        
        {/* 7. Oferta Intermediária (Meio do Funil - Reforço) */}
        <Pricing 
          isPreview={true} 
          id="pricing-middle" 
          customTitle="Transforme esses 10 Pilares em Realidade"
          customSubtitle="Você já entendeu o que precisa ser feito. Escolha agora como quer aplicar o método."
          customBadge="Próximo Passo"
        />
        
        {/* 8. Autoridade (Quem é Quiteria) */}
        <About />

        {/* 9. Prova Social (Testemunhos) */}
        <Testimonials />

        {/* 10. Oferta Final (Tabela Comparativa) */}
        <Pricing />

        {/* 11. Perguntas Frequentes */}
        <FAQ />
      </main>

      {/* Rodapé Geral */}
      <Footer />
      
      {/* Elementos Flutuantes (Sempre visíveis) */}
      <StickyCTA />
      <WhatsAppFloat />
      
    </div>
  );
}

export default App;

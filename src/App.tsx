import React from 'react';
import { IntroHook } from './components/IntroHook';
import { Hero } from './components/Hero';
import { HorizontalScroll } from './components/HorizontalScroll';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function App() {
  return (
    <div className="bg-slate-50 min-h-screen w-full overflow-x-hidden relative font-sans text-[#1d1d1f]">
      
      {/* Navbar */}
      <Navbar />
      
      <main className="relative z-10 w-full flex flex-col">
        
        {/* 1. INTRO (O código que você me mandou) */}
        <IntroHook />
        
        {/* 2. HERO (Vídeo) */}
        {/* Adicionei z-20 e bg-white para garantir que ele apareça EMBAIXO da Intro mas COM FUNDO */}
        <div className="relative z-20 bg-white py-20">
           <Hero />
        </div>

        {/* 3. HORIZONTAL SCROLL */}
        <div className="relative z-20 bg-[#f5f5f7]">
            <HorizontalScroll />
        </div>

        {/* COMENTEI O RESTO TEMPORARIAMENTE PARA O SITE VOLTAR */}
        {/* <ProgramDetails /> */}
        {/* <Features /> */}
        {/* <About /> */}
        {/* <Testimonials /> */}
        {/* <Pricing /> */}
        {/* <FAQ /> */}
        
      </main>

      <Footer />
    </div>
  );
}

export default App;

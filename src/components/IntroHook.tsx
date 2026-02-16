import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Lucide icons removed to follow "Non-Obvious Persuasive Design" protocol

export const IntroHook: React.FC = () => {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!bgRef.current) return;

    gsap.to(bgRef.current, {
      yPercent: 20,
      ease: "none",
      scrollTrigger: {
        trigger: bgRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true
      }
    });
  }, []);

  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-slate-900 text-white">
      {/* --- IMAGEM DE FUNDO (Parallax) --- */}
      <div className="absolute inset-0 z-0 scale-110">
        <div ref={bgRef} className="absolute inset-0">
          <div className="absolute inset-0 bg-black/50 z-10"></div> {/* Escurece a foto para ler o texto */}
          <img
            src="https://metodocms.com/wp-content/uploads/2025/11/hero-picture2.jpg"
            alt="Background Neural"
            className="w-full h-full object-cover object-center"
            onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1515023115689-589c33041d3c?q=80&w=2400" }}
          />
        </div>
      </div>

      {/* --- CONTEÚDO (Centralizado) --- */}
      <div className="relative z-20 text-center px-4 max-w-5xl mx-auto animate-fade-in-up">

        <div className="inline-flex items-center gap-3 py-1.5 px-5 rounded-full border border-blue-400/30 bg-blue-500/10 backdrop-blur-md mb-8 shadow-sm">
          <div className="w-1 h-1 rounded-full bg-blue-400 animate-pulse"></div>
          <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-blue-100 italic font-serif">
            Mais de 40 anos salvando mentes que não aguentam mais lutar sozinhas
          </span>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif leading-[1.2] tracking-tight mb-8 drop-shadow-2xl">
          A sua mente merece <br className="hidden md:block" />
          <span className="italic text-blue-400 text-glow">descansar de verdade.</span>
        </h1>

        <p className="text-lg md:text-xl font-light text-white/90 max-w-2xl mx-auto leading-relaxed drop-shadow-md mb-12">
          Eu também já estive exatamente onde você está agora. <br className="hidden md:block" />
          O Método CMS é o <strong>mapa seguro</strong> que desenhei em 4 décadas de clínica para ajudar você (ou quem você ama) a voltar a respirar em paz.
        </p>

        <div className="flex flex-col items-center gap-6 opacity-80 cursor-pointer group" onClick={() => document.getElementById('journey')?.scrollIntoView({ behavior: 'smooth' })}>
          <span className="text-[10px] uppercase tracking-widest font-bold group-hover:text-blue-400 transition-colors">Inicie sua Retomada</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-blue-400 to-transparent animate-bounce"></div>
        </div>

      </div>

    </section>
  );
};

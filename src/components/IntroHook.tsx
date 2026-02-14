import React from 'react';
import { ArrowDown } from 'lucide-react';

export const IntroHook: React.FC = () => {
  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-slate-900 text-white">

      {/* --- IMAGEM DE FUNDO (Estática) --- */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/40 z-10"></div> {/* Escurece a foto para ler o texto */}
        <img
          src="https://metodocms.com/wp-content/uploads/2025/11/hero-picture2.jpg"
          alt="Background Neural"
          className="w-full h-full object-cover object-center"
          onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1515023115689-589c33041d3c?q=80&w=2400" }}
        />
      </div>

      {/* --- CONTEÚDO (Centralizado) --- */}
      <div className="relative z-20 text-center px-4 max-w-5xl mx-auto animate-fade-in-up">

        <span className="inline-block py-1.5 px-5 rounded-full border border-blue-400/30 bg-blue-500/10 backdrop-blur-md text-xs font-bold tracking-[0.2em] uppercase mb-8 shadow-sm text-blue-200">
          Parece que o medo do "E se...?" está roubando o seu presente
        </span>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif leading-[1.2] tracking-tight mb-8 drop-shadow-2xl">
          Você&nbsp;está&nbsp;perdendo <br className="hidden md:block" />
          <span className="italic text-rose-400">a&nbsp;sua&nbsp;própria&nbsp;vida.</span>
        </h1>

        <p className="text-lg md:text-xl font-light text-white/90 max-w-2xl mx-auto leading-relaxed drop-shadow-md mb-12">
          Cada dia de crise é um dia que você nunca&nbsp;vai&nbsp;recuperar. <br className="hidden md:block" />
          Quantas viagens, abraços e sorrisos com quem você ama a ansiedade já&nbsp;te&nbsp;roubou?
        </p>

        <div className="flex flex-col items-center gap-3 opacity-80 animate-bounce">
          <span className="text-[10px] uppercase tracking-widest font-bold">Descubra o Método</span>
          <ArrowDown size={20} />
        </div>

      </div>

    </section>
  );
};

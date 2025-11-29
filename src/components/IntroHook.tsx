import React from 'react';
import { ArrowDown } from 'lucide-react'; // Ícone simples

export const IntroHook: React.FC = () => {
  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-slate-900 text-white">
      
      {/* --- IMAGEM DE FUNDO (Estática com Overlay) --- */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/40 z-10"></div> {/* Escurece a foto para ler o texto */}
        <img 
          src="https://metodocms.com/wp-content/uploads/2025/11/hero-picture2.jpg" 
          alt="Background Neural" 
          className="w-full h-full object-cover object-center animate-fade-in" // Animação CSS simples de entrada
          // Fallback
          onError={(e) => {e.currentTarget.src = "https://images.unsplash.com/photo-1515023115689-589c33041d3c?q=80&w=2400"}}
        />
      </div>

      {/* --- CONTEÚDO (Centralizado) --- */}
      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto animate-slide-up">
        
        <span className="inline-block py-1.5 px-5 rounded-full border border-white/30 bg-white/10 backdrop-blur-md text-xs font-bold tracking-[0.2em] uppercase mb-8 shadow-sm">
          Psicologia Clínica & Neurociência
        </span>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif leading-none tracking-tight mb-8 drop-shadow-2xl">
          Sua Mente,<br/>
          <span className="italic text-blue-300">Seu Lar.</span>
        </h1>
        
        <p className="text-lg md:text-2xl font-light text-white/90 max-w-2xl mx-auto leading-relaxed drop-shadow-md mb-12">
          Você não precisa lutar contra seus pensamentos para sempre.<br className="hidden md:block"/>
          Existe um caminho científico para o silêncio.
        </p>

        {/* Indicador de Scroll simples */}
        <div className="flex flex-col items-center gap-3 opacity-80 animate-bounce">
          <span className="text-[10px] uppercase tracking-widest font-bold">Descubra o Método</span>
          <ArrowDown size={20} />
        </div>

      </div>

    </section>
  );
};

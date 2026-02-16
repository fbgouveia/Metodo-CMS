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

        <div className="inline-flex items-center gap-2 md:gap-3 py-1.5 px-3 md:px-5 rounded-full border border-blue-400/30 bg-blue-500/10 backdrop-blur-md mb-6 md:mb-8 shadow-sm">
          <div className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse flex-shrink-0"></div>
          <span className="text-[9px] md:text-[10px] font-black tracking-[0.15em] md:tracking-[0.2em] uppercase text-blue-100 italic font-serif leading-none">
            A CIÊNCIA POR TRÁS DO SILÊNCIO QUE VOCÊ BUSCA
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-serif leading-[1.1] md:leading-[1.2] tracking-tight mb-6 md:mb-8 drop-shadow-2xl text-balance">
          E se o barulho da sua <br className="hidden md:block" />
          <span className="italic text-blue-400 text-glow block md:inline mt-2 md:mt-0">mente desse lugar à paz?</span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl font-light text-white/90 max-w-2xl mx-auto leading-relaxed drop-shadow-md mb-8 md:mb-12 italic text-pretty px-4">
          Imagine acordar amanhã sem o peso no peito. O Método CMS não é sobre "controlar" a ansiedade, é sobre <strong>desativar o alarme</strong> que você carrega há anos. Deixe a Dra. Quitéria guiar você de volta para casa.
        </p>

        <div className="flex flex-col items-center gap-4 md:gap-6 opacity-80 cursor-pointer group" onClick={() => document.getElementById('journey')?.scrollIntoView({ behavior: 'smooth' })}>
          <span className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] md:tracking-[0.4em] font-black group-hover:text-blue-400 transition-colors text-center max-w-[200px] md:max-w-none">Abra sua Rota de Liberdade</span>
          <div className="w-[1px] h-8 md:h-12 bg-gradient-to-b from-blue-400 to-transparent animate-bounce"></div>
        </div>

      </div>

    </section>
  );
};

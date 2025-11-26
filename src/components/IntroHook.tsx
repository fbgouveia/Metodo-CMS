import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const IntroHook: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const bgImageRef = useRef<HTMLImageElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      
      // 1. Parallax da Imagem (Fundo)
      // A imagem se move mais devagar que o scroll (yPercent: 30), criando profundidade
      gsap.to(bgImageRef.current, {
        yPercent: 30,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true
        }
      });

      // 2. Parallax do Texto (Conteúdo)
      // O texto sobe mais rápido e desaparece
      gsap.to(contentRef.current, {
        y: -150,
        opacity: 0,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "center top", // Texto some na metade do caminho
          scrub: true
        }
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      
      {/* --- CAMADA 0: IMAGEM DE FUNDO (FIXA/PARALLAX) --- */}
      <div className="absolute inset-0 z-0 w-full h-[120%] -top-[10%]"> 
        {/* h-120% e top negativo para dar margem ao movimento parallax sem criar buracos */}
        <div className="absolute inset-0 bg-black/40 z-10"></div> {/* Filtro escuro para leitura */}
        <img 
          ref={bgImageRef}
          src="https://metodocms.com/wp-content/uploads/2025/11/hero-picture2.jpg" 
          alt="Background Neural" 
          className="w-full h-full object-cover"
          // Fallback caso a imagem não carregue
          onError={(e) => {e.currentTarget.src = "https://images.unsplash.com/photo-1515023115689-589c33041d3c?q=80&w=2400"}}
        />
      </div>

      {/* --- CAMADA 1: TEXTO (PARALLAX RÁPIDO) --- */}
      <div ref={contentRef} className="relative z-20 text-center px-6 text-white max-w-4xl mx-auto">
        <span className="inline-block py-1.5 px-4 rounded-full border border-white/30 bg-white/10 backdrop-blur-md text-xs md:text-sm font-bold tracking-widest uppercase mb-6 shadow-sm">
          Psicologia Clínica & Neurociência
        </span>
        
        <h1 className="text-5xl md:text-7xl lg:text-9xl font-serif leading-[1] tracking-tight mb-6 drop-shadow-lg">
          Sua Mente,<br/><span className="italic text-blue-200">Seu Lar.</span>
        </h1>
        
        <p className="text-lg md:text-2xl font-light text-white/90 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
          Você não precisa lutar contra seus pensamentos para sempre.<br/>
          Existe um caminho científico para o silêncio.
        </p>

        <div className="mt-12 animate-bounce text-white/70 text-xs uppercase tracking-widest font-bold">
          Role para descobrir ↓
        </div>
      </div>

    </section>
  );
};

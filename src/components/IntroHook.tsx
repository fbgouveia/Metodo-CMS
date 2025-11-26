import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const IntroHook: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageWrapperRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      
      // 1. FORÇA BRUTA: Define o estado inicial via JS para garantir que comece pequeno
      gsap.set(imageWrapperRef.current, {
        width: "30vw",    // Começa pequeno (30% da largura)
        height: "40vh",   // Começa pequeno (40% da altura)
        borderRadius: "100px", // Bem redondo
        y: 100            // Deslocado para baixo
      });

      gsap.set(textRef.current, {
        opacity: 1,
        y: 0,
        scale: 1
      });

      // 2. A Animação
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",     // Começa no topo
          end: "+=150%",        // Dura 1.5x a altura da tela
          scrub: 1,             // Segue o mouse suavemente
          pin: true,            // TRAVA A TELA (Obrigatório)
          pinSpacing: true,     // Empurra o resto do site
          invalidateOnRefresh: true,
        }
      });

      // Passo A: Texto Sobe e Some
      tl.to(textRef.current, {
        y: -150,
        opacity: 0,
        scale: 0.8,
        duration: 1,
        ease: "power1.inOut"
      }, 0);

      // Passo B: Imagem Cresce para 100%
      tl.to(imageWrapperRef.current, {
        width: "100vw",
        height: "100vh",
        borderRadius: "0px",
        y: 0,
        duration: 1,
        ease: "power1.inOut"
      }, 0); // O "0" garante que aconteça junto com o texto

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    // O Container tem z-index alto para garantir que a trava funcione sobre tudo
    <section ref={containerRef} className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-white z-50">
      
      {/* TEXTO (Headline) */}
      <div ref={textRef} className="absolute z-30 text-center px-4 mix-blend-multiply pointer-events-none">
        <span className="inline-block py-1 px-3 rounded-full bg-blue-50 text-blue-600 text-xs font-bold tracking-widest uppercase mb-6 border border-blue-100 shadow-sm">
          Psicologia Clínica
        </span>
        <h1 className="text-5xl md:text-8xl lg:text-9xl font-serif text-slate-900 leading-[0.9] tracking-tighter mb-6">
          Sua Mente,<br/><span className="text-blue-600 italic">Seu Lar.</span>
        </h1>
        <div className="mt-8 animate-bounce text-slate-400 text-sm font-medium uppercase tracking-widest">
          Role para entrar ↓
        </div>
      </div>

      {/* CONTAINER DA IMAGEM */}
      {/* Removemos classes de tamanho do Tailwind aqui para deixar o GSAP controlar */}
      <div 
        ref={imageWrapperRef} 
        className="relative z-10 overflow-hidden shadow-2xl bg-slate-100 origin-center"
      >
        <div className="absolute inset-0 bg-blue-900/10 z-10 pointer-events-none mix-blend-overlay"></div>
        
        <img 
          src="https://metodocms.com/wp-content/uploads/2025/11/hero-picture2.jpg" 
          alt="Paz Mental" 
          className="w-full h-full object-cover object-center"
          // Fallback de segurança caso a imagem do WP falhe
          onError={(e) => {e.currentTarget.src = "https://images.unsplash.com/photo-1515023115689-589c33041d3c?q=80&w=2400"}}
        />
      </div>

    </section>
  );
};

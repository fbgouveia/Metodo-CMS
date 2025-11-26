import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

// Registra o plugin localmente para garantir
gsap.registerPlugin(ScrollTrigger);

export const IntroHook: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=150%", // O usuário rola 1.5x a altura da tela para completar a animação
          scrub: 1,      // Animação segue o dedo/mouse
          pin: true,     // TRAVA a tela (Essencial para o efeito)
          pinSpacing: true, // Empurra o site para baixo
          invalidateOnRefresh: true,
          refreshPriority: 1 // Prioridade alta para calcular antes dos outros
        }
      });

      // 1. Texto sobe e some
      tl.to(textRef.current, {
        y: -150,
        autoAlpha: 0,
        scale: 0.8,
        duration: 0.5,
        ease: "power2.inOut"
      }, 0);

      // 2. Imagem cresce de pequena (bolinha) para Tela Cheia
      tl.fromTo(imageRef.current, 
        {
          scale: 0.3,           // Começa bem pequena
          borderRadius: "100px", // Redonda
          width: "40vw",
          height: "40vw",       // Quadrada inicialmente
          autoAlpha: 0.5,
          filter: "blur(10px)",
          y: 100
        },
        {
          scale: 1,
          borderRadius: "0px",
          width: "100vw",       // Enche a largura
          height: "100vh",      // Enche a altura
          autoAlpha: 1,
          filter: "blur(0px)",
          y: 0,
          duration: 1,
          ease: "power2.inOut"
        }, 
        0
      );

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-white z-50">
      
      {/* TEXTO (Fica na frente) */}
      <div ref={textRef} className="absolute inset-0 z-20 flex flex-col items-center justify-center px-4 text-center pointer-events-none mix-blend-multiply">
        <span className="inline-block py-1 px-3 rounded-full bg-blue-50 text-blue-600 text-xs font-bold tracking-widest uppercase mb-6 border border-blue-100 shadow-sm">
          Você não está louca
        </span>
        <h1 className="text-5xl md:text-8xl lg:text-9xl font-serif text-slate-900 leading-[0.9] tracking-tighter mb-6">
          Sua Mente,<br/><span className="text-blue-600 italic">Seu Lar.</span>
        </h1>
        <div className="mt-8 animate-bounce text-slate-400 text-sm font-medium uppercase tracking-widest">
          Role para entrar ↓
        </div>
      </div>

      {/* CONTAINER DA IMAGEM */}
      <div className="relative z-10 flex items-center justify-center w-full h-full pointer-events-none">
        <div ref={imageRef} className="overflow-hidden shadow-2xl shadow-blue-900/20 bg-slate-200 origin-center">
          <img 
            src="https://metodocms.com/wp-content/uploads/2025/11/hero-picture2.jpg" 
            alt="Paz Mental" 
            className="w-full h-full object-cover object-center"
          />
          {/* Overlay azulado */}
          <div className="absolute inset-0 bg-blue-900/10 mix-blend-overlay"></div>
        </div>
      </div>

    </section>
  );
};

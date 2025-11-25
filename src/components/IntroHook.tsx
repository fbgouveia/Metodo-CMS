import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const IntroHook: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageWrapperRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=1500", // Distância do scroll para completar a animação
          scrub: 0.5,    // Suavidade (0.5s delay para ficar orgânico)
          pin: true,     // Trava a seção
          pinSpacing: true, // Empurra o conteúdo de baixo
          invalidateOnRefresh: true,
        }
      });

      // 1. Texto: Sobe e desaparece
      tl.to(textRef.current, {
        y: -100,
        opacity: 0,
        scale: 0.8,
        duration: 1,
        ease: "power2.inOut"
      }, "start"); // Label "start" para sincronizar

      // 2. Container da Imagem: Cresce para 100% da tela
      tl.fromTo(imageWrapperRef.current, 
        {
          width: "40vw",
          height: "50vh",
          borderRadius: "3rem",
        },
        {
          width: "100vw",
          height: "100vh",
          borderRadius: "0rem",
          duration: 1,
          ease: "power2.inOut"
        }, 
        "start" // Começa junto com o texto
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-white z-50">
      
      {/* TEXTO (Camada Superior) */}
      <div ref={textRef} className="absolute z-30 text-center px-4 mix-blend-difference text-white"> 
        {/* Usei mix-blend-difference para o texto ficar legível se a imagem passar por cima antes da hora */}
        <span className="inline-block py-1 px-3 rounded-full border border-white/30 text-xs font-bold tracking-widest uppercase mb-6">
          Psicologia Clínica
        </span>
        <h1 className="text-5xl md:text-8xl lg:text-9xl font-serif leading-[0.9] tracking-tighter mb-6">
          Sua Mente,<br/>Seu Lar.
        </h1>
        <div className="mt-8 animate-bounce text-sm font-medium uppercase tracking-widest">
          Role para entrar ↓
        </div>
      </div>

      {/* CONTAINER DA IMAGEM (O que expande) */}
      <div 
        ref={imageWrapperRef} 
        className="relative z-10 overflow-hidden shadow-2xl bg-slate-100 origin-center"
        style={{ width: '40vw', height: '50vh', borderRadius: '3rem' }} // Estilo inicial inline para garantir
      >
        {/* Overlay escuro para o texto branco aparecer bem */}
        <div className="absolute inset-0 bg-black/20 z-10 pointer-events-none"></div>
        
        <img 
          src="https://metodocms.com/wp-content/uploads/2025/11/hero-picture2.jpg" 
          alt="Paz Mental" 
          className="w-full h-full object-cover object-center"
        />
      </div>

    </section>
  );
};

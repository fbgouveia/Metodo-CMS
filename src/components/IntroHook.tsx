import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function IntroHook() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=1500", // Duração da animação (quanto o usuário tem que rolar)
          scrub: 1,      // Suavidade
          pin: true,     // TRAVA a tela
          pinSpacing: true, // Empurra o próximo conteúdo para baixo
          anticipatePin: 1
        }
      });

      // 1. Texto some e sobe
      tl.to(textRef.current, {
        y: -150,
        opacity: 0,
        scale: 0.8,
        duration: 1,
        ease: "power2.out"
      });

      // 2. Imagem Cresce e toma a tela
      tl.to(imageRef.current, {
        width: "100vw",     // Ocupa largura total
        height: "100vh",    // Ocupa altura total
        borderRadius: "0",  // Remove bordas arredondadas
        y: 0,               // Centraliza
        scale: 1.1,         // Zoom in leve
        duration: 1.5,
        ease: "power2.inOut"
      }, "<"); // Começa junto com a animação do texto

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-white z-50">
      
      {/* Texto Inicial */}
      <div ref={textRef} className="text-center z-20 relative px-4 mb-8 origin-center">
        <p className="text-blue-600 font-mono text-xs tracking-[0.2em] uppercase mb-4 font-bold">Psicologia Clínica</p>
        <h1 className="text-5xl md:text-8xl lg:text-9xl font-serif text-slate-900 leading-[0.9] tracking-tighter mb-6">
          Sua Mente,<br/><span className="text-blue-600 italic">Seu Lar.</span>
        </h1>
        <div className="mt-6 animate-bounce text-slate-400 text-sm">Role para iniciar a jornada ↓</div>
      </div>

      {/* Imagem Inicial (Começa menor e cresce) */}
      <div 
        ref={imageRef} 
        className="relative z-10 w-[40vw] h-[50vh] rounded-[3rem] overflow-hidden shadow-2xl origin-center will-change-transform"
      >
        <div className="absolute inset-0 bg-black/10 z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1515023115689-589c33041d3c?q=80&w=2400&auto=format&fit=crop" 
          alt="Paz Mental" 
          className="w-full h-full object-cover"
        />
      </div>

    </section>
  );
}

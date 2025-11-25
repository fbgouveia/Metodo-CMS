import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function IntroHook() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageWrapperRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=1500", // Define a "distância" do scroll para completar a animação
          scrub: 1,      // Suavidade: 1 segundo para "alcançar" o scroll
          pin: true,     // TRAVA a tela enquanto anima
          pinSpacing: true, // Empurra o conteúdo de baixo para esperar a animação acabar
          anticipatePin: 1
        }
      });

      // 1. Texto some suavemente e sobe um pouco
      tl.to(textRef.current, {
        y: -100,
        opacity: 0,
        scale: 0.9,
        duration: 1,
        ease: "power2.out"
      }, 0);

      // 2. A Imagem EXPANDDE para ocupar a tela toda (100vw / 100vh)
      tl.to(imageWrapperRef.current, {
        width: "100vw",
        height: "100vh",
        borderRadius: "0px", // Remove o arredondamento ao encostar nas bordas
        y: 0,
        duration: 1,
        ease: "power2.inOut"
      }, 0); // O "0" faz rodar junto com o texto

    }, containerRef);

    return () => ctx.revert(); // Limpeza essencial para React
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-white">
      
      {/* TEXTO (Fica por cima da imagem inicialmente) */}
      <div ref={textRef} className="absolute z-20 text-center px-4 mix-blend-overlay md:mix-blend-normal">
        <p className="text-blue-600 font-bold tracking-[0.2em] uppercase text-xs md:text-sm mb-4 shadow-sm">Psicologia Clínica</p>
        <h1 className="text-5xl md:text-8xl lg:text-9xl font-serif text-slate-900 leading-[0.9] tracking-tighter mb-6">
          Sua Mente,<br/><span className="text-blue-600 italic">Seu Lar.</span>
        </h1>
        <div className="mt-6 animate-bounce text-slate-400 text-sm font-medium">Role para entrar ↓</div>
      </div>

      {/* IMAGEM (Começa menor e centralizada) */}
      <div 
        ref={imageWrapperRef} 
        className="relative z-10 w-[40vw] h-[50vh] rounded-[3rem] overflow-hidden shadow-2xl origin-center bg-gray-100"
      >
        {/* Máscara escura para o texto aparecer melhor */}
        <div className="absolute inset-0 bg-blue-900/10 z-10"></div>
        
        {/* A FOTO (Substitua o src pela sua URL do WordPress se preferir) */}
        <img 
          src="https://images.unsplash.com/photo-1515023115689-589c33041d3c?q=80&w=2400&auto=format&fit=crop" 
          alt="Paz Mental" 
          className="w-full h-full object-cover object-center"
        />
      </div>

    </section>
  );
}

import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

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
          end: "+=150%", // Duração estendida para dar tempo do efeito acontecer
          scrub: 1,
          pin: true,     // Essencial: Trava a tela
          pinSpacing: true, // Essencial: Empurra o conteúdo de baixo
          anticipatePin: 1,
        }
      });

      // 1. Texto sobe e desaparece
      tl.to(textRef.current, {
        y: -150,
        autoAlpha: 0,
        scale: 0.8,
        duration: 0.5,
        ease: "power2.inOut"
      }, 0);

      // 2. Imagem cresce do centro (Efeito "Grow")
      tl.fromTo(imageRef.current, 
        {
          scale: 0.4,
          borderRadius: "100px",
          autoAlpha: 0, // Começa invisível para não atrapalhar o texto
          filter: "blur(20px)",
          y: 100
        },
        {
          scale: 1,
          borderRadius: "24px",
          autoAlpha: 1,
          filter: "blur(0px)",
          y: 0,
          duration: 1,
          ease: "power2.out"
        }, 
        0.1 // Leve delay para o texto começar a sair antes da imagem explodir
      );

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-transparent">
      
      {/* Camada de Conteúdo */}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center">
        
        {/* HEADLINE (Texto que vai sumir) */}
        <div ref={textRef} className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center z-20">
          <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-600 text-xs font-bold tracking-widest uppercase mb-6 border border-blue-200">
            Você não está louca
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-slate-900 tracking-tight mb-6 leading-[1.1]">
            A exaustão de lutar<br/>
            contra a <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Própria Mente</span>.
          </h1>
          <p className="text-xl md:text-2xl text-slate-500 font-light max-w-2xl leading-relaxed">
            Você sente que seu emocional está desregulado? Como se o botão de perigo estivesse travado na posição LIGADO?
          </p>
          <div className="mt-10 animate-bounce text-slate-400 text-sm font-medium tracking-widest uppercase">
            Existe um jeito de desligar ↓
          </div>
        </div>

        {/* IMAGEM (Que vai crescer) */}
        <div className="relative w-[90vw] h-[80vh] z-10 flex items-center justify-center pointer-events-none">
          <div ref={imageRef} className="w-full h-full overflow-hidden shadow-2xl shadow-blue-900/20 bg-slate-200 origin-center">
            <img 
              src="https://metodocms.com/wp-content/uploads/2025/11/hero-picture2.jpg" 
              alt="Abstract Neural Flow" 
              className="w-full h-full object-cover opacity-90"
            />
            <div className="absolute inset-0 bg-blue-900/10 mix-blend-overlay"></div>
          </div>
        </div>
      </div>

    </section>
  );
};

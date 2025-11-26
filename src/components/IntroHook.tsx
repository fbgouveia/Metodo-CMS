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
      // ANIMAÇÃO DE PARALLAX (Sem travar a tela)
      
      // 1. Texto: Sobe mais rápido que o scroll (efeito de descolar)
      gsap.to(textRef.current, {
        y: -200,
        opacity: 0,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom center",
          scrub: 1
        }
      });

      // 2. Imagem: Cresce suavemente (Scale)
      gsap.fromTo(imageRef.current, 
        {
          scale: 0.9,
          borderRadius: "3rem",
          y: 50
        },
        {
          scale: 1.1, // Zoom in suave
          borderRadius: "1rem",
          y: -50, // Movimento oposto ao scroll
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 1
          }
        }
      );

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    // Altura um pouco maior que a tela para dar tempo do parallax acontecer
    <section ref={containerRef} className="relative h-[120vh] w-full flex flex-col items-center pt-32 bg-white overflow-hidden">
      
      {/* TEXTO FIXO NO TOPO */}
      <div ref={textRef} className="relative z-20 text-center px-4 mb-12 max-w-4xl mx-auto">
        <span className="inline-block py-1.5 px-4 rounded-full bg-blue-50 text-blue-700 text-xs font-bold tracking-widest uppercase mb-6 border border-blue-100">
          Você não está louca
        </span>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-slate-900 tracking-tight mb-6 leading-[1.1]">
          A exaustão de lutar<br/>
          contra a <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Própria Mente</span>.
        </h1>
        <p className="text-lg md:text-xl text-slate-500 font-light max-w-2xl mx-auto leading-relaxed">
          Você sente que seu emocional está desregulado? Como se o botão de perigo estivesse travado na posição LIGADO?
        </p>
      </div>

      {/* IMAGEM GIGANTE (Parallax) */}
      <div className="relative w-[90vw] h-[70vh] z-10">
        <div ref={imageRef} className="w-full h-full overflow-hidden shadow-2xl shadow-blue-900/20 bg-slate-200 origin-center">
          <img 
            src="https://metodocms.com/wp-content/uploads/2025/11/hero-picture2.jpg" 
            alt="Abstract Neural Flow" 
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-blue-900/10 mix-blend-overlay"></div>
        </div>
      </div>

    </section>
  );
};

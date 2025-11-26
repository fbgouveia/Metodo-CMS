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
      // Animação baseada no Scroll (Scrub), mas SEM travar a tela (Pin)
      // Isso garante fluidez total.
      
      // 1. O Texto sobe um pouco mais rápido que o scroll (Parallax) e some
      gsap.to(textRef.current, {
        y: -200, // Sobe 200px
        opacity: 0,
        scale: 0.9,
        ease: "none", // Movimento linear ligado ao scroll
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "center top", // Termina quando a seção estiver na metade
          scrub: true
        }
      });

      // 2. A Imagem cresce para as laterais
      gsap.fromTo(imageWrapperRef.current, 
        {
          width: "40vw", // Começa pequena
          height: "50vh",
          borderRadius: "3rem",
        },
        {
          width: "95vw", // Cresce até quase a borda (mais elegante que 100%)
          height: "80vh",
          borderRadius: "1.5rem",
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "bottom top", // Termina quando a seção sair da tela
            scrub: true
          }
        }
      );

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    // Altura fixa para garantir espaço
    <section ref={containerRef} className="relative h-[120vh] w-full flex flex-col items-center pt-32 bg-white overflow-hidden">
      
      {/* TEXTO FIXO NO TOPO */}
      <div ref={textRef} className="relative z-20 text-center px-4 mb-12 max-w-4xl mx-auto">
        <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-600 text-xs font-bold tracking-widest uppercase mb-6 border border-blue-200">
            Você não está louca
        </span>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-slate-900 tracking-tight mb-6 leading-[1.1]">
            A exaustão de lutar<br/>
            contra a <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Própria Mente</span>.
        </h1>
        <p className="text-lg md:text-xl text-slate-500 font-light max-w-2xl mx-auto leading-relaxed">
            Você sente que seu emocional está desregulado? Como se o botão de perigo estivesse travado na posição LIGADO?
        </p>
      </div>

      {/* CONTAINER DA IMAGEM (Sticky effect visual) */}
      <div className="sticky top-20 z-10 flex justify-center w-full pb-20">
        <div 
          ref={imageWrapperRef} 
          className="relative overflow-hidden shadow-2xl shadow-blue-900/20 bg-slate-200 origin-top"
        >
          <div className="absolute inset-0 bg-blue-900/10 z-10 mix-blend-overlay"></div>
          <img 
            src="https://metodocms.com/wp-content/uploads/2025/11/hero-picture2.jpg" 
            alt="Paz Mental" 
            className="w-full h-full object-cover object-center"
            // Fallback de segurança
            onError={(e) => {e.currentTarget.src = "https://images.unsplash.com/photo-1515023115689-589c33041d3c?q=80&w=2400"}}
          />
        </div>
      </div>

    </section>
  );
};

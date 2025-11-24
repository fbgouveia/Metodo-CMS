import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const IntroHook: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=150%", // Aumenta a duração do scroll para um efeito mais dramático
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        }
      });

      // 1. O Texto sobe e desaparece (Fade Out)
      tl.to(textRef.current, {
        y: -100,
        autoAlpha: 0,
        scale: 0.9,
        duration: 0.4, // Acontece na primeira parte do scroll
        ease: "power2.inOut"
      }, 0);

      // 2. A Imagem cresce (Scale Up) para ocupar a tela respeitando margens
      tl.fromTo(imageRef.current, 
        {
          scale: 0.4,
          borderRadius: "100px",
          autoAlpha: 0.5,
          filter: "blur(10px)",
          y: 100
        },
        {
          scale: 1,
          borderRadius: "24px", // Bordas arredondadas estilo Apple
          autoAlpha: 1,
          filter: "blur(0px)",
          y: 0,
          duration: 1, // Dura todo o scroll
          ease: "power2.out"
        }, 
        0 // Começa junto com o texto (mas dura mais)
      );

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-slate-50 z-20">
      
      {/* Camada de Texto (Headline) */}
      <div ref={textRef} className="absolute inset-0 flex flex-col items-center justify-center z-20 px-6 text-center pointer-events-none">
        <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-600 text-xs font-bold tracking-widest uppercase mb-6 border border-blue-200">
          Você não está louca
        </span>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-slate-900 tracking-tight mb-6 leading-[1.1]">
          A exaustão de lutar<br/>
          contra a <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Própria Mente</span>.
        </h1>
        <p className="text-xl md:text-2xl text-slate-500 font-light max-w-2xl leading-relaxed">
          Você sente que seu cérebro está 'inflamado'? Como se o botão de perigo estivesse quebrado na posição LIGADO?
        </p>
        <div className="mt-10 animate-bounce text-slate-400 text-sm font-medium tracking-widest uppercase">
          Existe um jeito de desligar
        </div>
      </div>

      {/* Camada de Imagem (Grow Effect) */}
      {/* O container da imagem tem tamanho fixo (80% altura = 20% margem total vertical) */}
      <div className="relative w-[90vw] h-[80vh] z-10 flex items-center justify-center">
        <div ref={imageRef} className="w-full h-full overflow-hidden shadow-2xl shadow-blue-900/20 bg-slate-200 origin-center">
          <img 
            src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2500&auto=format&fit=crop" 
            alt="Abstract Neural Flow - Calming Blue Liquid" 
            className="w-full h-full object-cover opacity-90"
          />
          {/* Overlay sutil na imagem final */}
          <div className="absolute inset-0 bg-blue-900/10 mix-blend-overlay"></div>
        </div>
      </div>

    </section>
  );
};
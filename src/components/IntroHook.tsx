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
          end: "bottom top", // Anima enquanto rola a seção
          scrub: 1,
          // REMOVI O PIN TEMPORARIAMENTE PARA DESTRAVAR O SITE
        }
      });

      // Texto sobe
      tl.to(textRef.current, {
        y: -100,
        opacity: 0,
        duration: 1
      });

      // Imagem cresce
      tl.to(imageRef.current, {
        scale: 1.1, // Zoom leve
        borderRadius: "0px",
        width: "100vw",
        duration: 1
      }, "<");

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    // Altura fixa (h-screen) para garantir espaço
    <section ref={containerRef} className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-white">
      
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center pt-20">
        
        {/* Headline */}
        <div ref={textRef} className="text-center px-4 z-20 mb-8">
          <span className="inline-block py-1 px-3 rounded-full bg-blue-50 text-blue-600 text-xs font-bold tracking-widest uppercase mb-6 border border-blue-100">
            Psicologia Clínica
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-slate-900 tracking-tight mb-6 leading-tight">
            Sua Mente,<br/><span className="text-blue-600 italic">Seu Lar.</span>
          </h1>
          <div className="mt-4 animate-bounce text-slate-400 text-sm">
            Role para entrar ↓
          </div>
        </div>

        {/* Imagem */}
        <div className="relative w-[85vw] h-[55vh] z-10 flex items-center justify-center">
          <div ref={imageRef} className="w-full h-full overflow-hidden shadow-2xl rounded-[3rem] bg-slate-100 origin-center">
            <img 
              src="https://metodocms.com/wp-content/uploads/2025/11/hero-picture2.jpg" 
              alt="Paz Mental" 
              className="w-full h-full object-cover"
              // Adicionei um onerror para carregar uma imagem de backup se a original falhar
              onError={(e) => {e.currentTarget.src = "https://images.unsplash.com/photo-1515023115689-589c33041d3c?q=80&w=1500"}}
            />
            <div className="absolute inset-0 bg-blue-900/5 mix-blend-overlay"></div>
          </div>
        </div>

      </div>
    </section>
  );
};

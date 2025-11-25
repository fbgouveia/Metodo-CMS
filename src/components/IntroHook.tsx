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
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=150%", // Aumenta a duração da rolagem para o efeito ficar suave
          scrub: 1,
          pin: true,     // Trava a tela
          pinSpacing: true, // Empurra o conteúdo seguinte para baixo
          anticipatePin: 1
        }
      });

      // 1. Texto sobe e desaparece
      tl.to(textRef.current, {
        y: -100,
        opacity: 0,
        scale: 0.9,
        duration: 0.5,
        ease: "power2.inOut"
      }, 0);

      // 2. A Imagem CRESCE para ocupar a tela inteira
      tl.to(imageWrapperRef.current, {
        width: "100vw",
        height: "100vh",
        borderRadius: "0px", // Remove o arredondamento ao encostar nas bordas
        y: 0,
        duration: 1,
        ease: "power2.inOut"
      }, 0);

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-white">
      
      {/* TEXTO (Fica na frente da imagem inicialmente) */}
      <div ref={textRef} className="absolute z-20 text-center px-4 mix-blend-multiply">
        <span className="inline-block py-1 px-3 rounded-full bg-blue-50 text-blue-600 text-[10px] md:text-xs font-bold tracking-widest uppercase mb-6 border border-blue-100 shadow-sm">
          Você não está louca
        </span>
        <h1 className="text-5xl md:text-8xl lg:text-9xl font-serif text-slate-900 leading-[0.9] tracking-tighter mb-6">
          Sua Mente,<br/><span className="text-blue-600 italic">Seu Lar.</span>
        </h1>
        <div className="mt-8 animate-bounce text-slate-400 text-sm font-medium">Role para entrar ↓</div>
      </div>

      {/* IMAGEM (Container que vai crescer) */}
      <div 
        ref={imageWrapperRef} 
        className="relative z-10 w-[40vw] h-[50vh] rounded-[3rem] overflow-hidden shadow-2xl origin-center bg-slate-100"
      >
        {/* Overlay azulado suave */}
        <div className="absolute inset-0 bg-blue-900/10 z-10 pointer-events-none mix-blend-overlay"></div>
        
        {/* FOTO ORIGINAL RESTAURADA */}
        <img 
          src="https://metodocms.com/wp-content/uploads/2025/11/hero-picture2.jpg" 
          alt="Arte Neural Abstrata" 
          className="w-full h-full object-cover object-center"
        />
      </div>

    </section>
  );
};

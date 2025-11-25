import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const IntroHook: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageWrapperRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=2000", // Mais espaço de scroll para a animação ser mais suave
          scrub: 1,      // O movimento segue o mouse
          pin: true,     // Trava a seção na tela
          pinSpacing: true, // Empurra o próximo componente para baixo (EVITA O CONFLITO)
          anticipatePin: 1
        }
      });

      // 1. O Texto sobe e desaparece rápido
      tl.to(textRef.current, {
        y: -150,
        opacity: 0,
        scale: 0.8,
        duration: 1, 
        ease: "power2.inOut"
      }, 0);

      // 2. O Container da Imagem expande para ocupar a tela inteira
      tl.to(imageWrapperRef.current, {
        width: "100%",
        height: "100%",
        borderRadius: "0px",
        top: 0,
        left: 0,
        margin: 0,
        duration: 2, // Dura mais que o texto para dar sensação de imersão
        ease: "power2.out"
      }, 0);

      // 3. A Imagem dentro (Zoom Out sutil para efeito cinematográfico)
      tl.fromTo(imageRef.current, 
        { scale: 1.2 }, 
        { scale: 1.0, duration: 2, ease: "power2.out" }, 
        0
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    // Container Principal que será "Pinado"
    <section ref={sectionRef} className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-white z-40">
      
      {/* TEXTO (Camada Superior) */}
      <div ref={textRef} className="absolute inset-0 z-20 flex flex-col items-center justify-center px-4 text-center pointer-events-none">
        <p className="text-blue-600 font-bold tracking-[0.2em] uppercase text-xs md:text-sm mb-4 bg-white/50 backdrop-blur-sm px-4 py-1 rounded-full">
          Psicologia Clínica
        </p>
        <h1 className="text-5xl md:text-8xl lg:text-9xl font-serif text-slate-900 leading-[0.9] tracking-tighter mb-6 drop-shadow-sm">
          Sua Mente,<br/><span className="text-blue-600 italic">Seu Lar.</span>
        </h1>
        <div className="mt-8 animate-bounce text-slate-500 text-sm font-medium">
          Role para entrar ↓
        </div>
      </div>

      {/* CONTAINER DA IMAGEM (Começa pequeno no centro) */}
      <div 
        ref={imageWrapperRef} 
        className="absolute z-10 w-[40vw] h-[50vh] rounded-[3rem] overflow-hidden shadow-2xl origin-center"
        style={{ willChange: 'width, height, border-radius' }} // Otimização de performance
      >
        {/* Overlay para escurecer levemente */}
        <div className="absolute inset-0 bg-black/10 z-10 pointer-events-none"></div>
        
        {/* Imagem Real */}
        <img 
          ref={imageRef}
          src="https://metodocms.com/wp-content/uploads/2025/11/hero-picture2.jpg" 
          alt="Paz Mental" 
          className="w-full h-full object-cover object-center"
        />
      </div>

    </section>
  );
};

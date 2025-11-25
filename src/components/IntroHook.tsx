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
      // Cria a timeline atrelada ao scroll
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=1500", // Distância do scroll para completar o efeito
          scrub: 1,      // Suavidade
          pin: true,     // Trava a tela
          pinSpacing: true, // Empurra o conteúdo seguinte
          anticipatePin: 1
        }
      });

      // 1. Texto sobe e desaparece
      tl.to(textRef.current, {
        y: -150,
        opacity: 0,
        scale: 0.8,
        duration: 1,
        ease: "power2.inOut"
      }, 0);

      // 2. A Imagem CRESCE e FICA NÍTIDA (Efeito Blur Restaurado)
      // Usamos fromTo para definir exatamente o estado inicial e final
      tl.fromTo(imageWrapperRef.current, 
        {
          // ESTADO INICIAL (Como começa)
          width: "40vw",
          height: "50vh",
          borderRadius: "3rem",
          filter: "blur(20px)", // <--- O BLUR ESTÁ AQUI
          scale: 0.95, // Um leve zoom out inicial para dar mais impacto
        },
        {
          // ESTADO FINAL (Como termina)
          width: "100vw",
          height: "100vh",
          borderRadius: "0px",
          filter: "blur(0px)", // <--- REMOVE O BLUR SUAVEMENTE
          scale: 1,
          duration: 1,
          ease: "power2.inOut"
        }, 
        0 // "0" significa que começa ao mesmo tempo que o texto
      );

    }, containerRef);

    return () => ctx.revert(); // Limpeza importante
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-white z-50">
      
      {/* TEXTO (Fica na frente da imagem inicialmente) */}
      {/* Usamos mix-blend-difference para o texto mudar de cor e ficar legível quando a imagem branca passar por baixo */}
      <div ref={textRef} className="absolute z-30 text-center px-4 mix-blend-difference text-white"> 
        <span className="inline-block py-1 px-3 rounded-full border border-white/40 text-xs font-bold tracking-widest uppercase mb-6">
          Psicologia Clínica
        </span>
        <h1 className="text-5xl md:text-8xl lg:text-9xl font-serif leading-[0.9] tracking-tighter mb-6">
          Sua Mente,<br/>Seu Lar.
        </h1>
        <div className="mt-8 animate-bounce text-sm font-medium uppercase tracking-widest">
          Role para entrar ↓
        </div>
      </div>

      {/* IMAGEM (O container que vai crescer e focar) */}
      {/* Removemos os estilos inline fixos, pois agora o GSAP controla tudo via .fromTo() */}
      <div 
        ref={imageWrapperRef} 
        className="relative z-10 overflow-hidden shadow-2xl bg-slate-100 origin-center will-change-transform"
      >
        <div className="absolute inset-0 bg-black/10 z-10 pointer-events-none"></div>
        <img 
          src="https://metodocms.com/wp-content/uploads/2025/11/hero-picture2.jpg" 
          alt="Paz Mental" 
          className="w-full h-full object-cover object-center"
        />
      </div>

    </section>
  );
};

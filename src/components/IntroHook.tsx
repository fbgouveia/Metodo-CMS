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
      // Animação de Zoom (Grow)
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=150%", // Duração do efeito
          scrub: 1,
          pin: true, // Trava a tela
          pinSpacing: true, // Empurra o próximo componente (Jornada)
          invalidateOnRefresh: true
        }
      });

      // Texto some
      tl.to(textRef.current, { autoAlpha: 0, y: -100, scale: 0.8, duration: 0.5 }, 0);

      // Imagem cresce
      tl.fromTo(imageRef.current, 
        { scale: 0.4, borderRadius: "100px", width: "40vw", height: "40vw", autoAlpha: 0.5, y: 100 },
        { scale: 1, borderRadius: "0px", width: "100vw", height: "100vh", autoAlpha: 1, y: 0, duration: 1 }, 
        0
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-white z-10">
      <div ref={textRef} className="absolute z-20 text-center px-4">
        <h1 className="text-6xl md:text-9xl font-serif text-slate-900 leading-none mb-6">Sua Mente,<br/><span className="text-blue-600 italic">Seu Lar.</span></h1>
        <p className="animate-bounce text-slate-400 text-sm">Role para iniciar ↓</p>
      </div>
      <div ref={imageRef} className="relative z-10 overflow-hidden shadow-2xl bg-slate-200 origin-center">
        <img src="https://metodocms.com/wp-content/uploads/2025/11/hero-picture2.jpg" className="w-full h-full object-cover opacity-90" alt="Intro" />
      </div>
    </section>
  );
};

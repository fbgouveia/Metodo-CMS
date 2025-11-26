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
          end: "+=150%", 
          scrub: 1,
          pin: true,
          pinSpacing: true, // CRUCIAL: Pushes content down
          anticipatePin: 1,
        }
      });

      // 1. Texto sobe
      tl.to(textRef.current, {
        y: -100,
        autoAlpha: 0,
        scale: 0.9,
        duration: 0.4,
        ease: "power2.inOut"
      }, 0);

      // 2. Imagem cresce
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
          borderRadius: "0px",
          width: "100vw",
          height: "100vh",
          autoAlpha: 1,
          filter: "blur(0px)",
          y: 0,
          duration: 1,
          ease: "power2.out"
        }, 
        0
      );

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-white">
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center">
        <div ref={textRef} className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center pointer-events-none z-20">
          <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-600 text-xs font-bold tracking-widest uppercase mb-6 border border-blue-200">
            Você não está louca
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-slate-900 tracking-tight mb-6 leading-[1.1]">
            A exaustão de lutar<br/>
            contra a <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Própria Mente</span>.
          </h1>
          <p className="text-xl md:text-2xl text-slate-500 font-light max-w-2xl leading-relaxed">
            Você sente que seu emocional está desregulado?
          </p>
          <div className="mt-10 animate-bounce text-slate-400 text-sm font-medium tracking-widest uppercase">
            Existe um jeito de desligar
          </div>
        </div>

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

import React, { useRef, useLayoutEffect } from 'react'; // <--- IMPORTANTE
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
          end: "+=1500",
          scrub: 1,
          pin: true,
          pinSpacing: true,
          anticipatePin: 1
        }
      });

      // Texto sobe
      tl.to(textRef.current, {
        y: -100,
        opacity: 0,
        scale: 0.8,
        duration: 1,
        ease: "power2.inOut"
      }, 0);

      // Imagem cresce
      tl.to(imageWrapperRef.current, {
        width: "100vw",
        height: "100vh",
        borderRadius: "0px",
        y: 0,
        duration: 1,
        ease: "power2.inOut"
      }, 0);

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-white z-50">
      <div ref={textRef} className="absolute z-30 text-center px-4 mix-blend-difference text-white"> 
        <span className="inline-block py-1 px-3 rounded-full border border-white/30 text-xs font-bold tracking-widest uppercase mb-6">
          Psicologia Clínica
        </span>
        <h1 className="text-5xl md:text-8xl lg:text-9xl font-serif leading-[0.9] tracking-tighter mb-6">
          Sua Mente,<br/>Seu Lar.
        </h1>
        <div className="mt-8 animate-bounce text-sm font-medium uppercase tracking-widest">
          Role para entrar ↓
        </div>
      </div>

      <div 
        ref={imageWrapperRef} 
        className="relative z-10 overflow-hidden shadow-2xl bg-slate-100 origin-center"
        style={{ width: '40vw', height: '50vh', borderRadius: '3rem' }}
      >
        <div className="absolute inset-0 bg-black/20 z-10 pointer-events-none"></div>
        <img 
          src="https://metodocms.com/wp-content/uploads/2025/11/hero-picture2.jpg" 
          alt="Paz Mental" 
          className="w-full h-full object-cover object-center"
        />
      </div>
    </section>
  );
};

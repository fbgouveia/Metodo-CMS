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
      
      // FORÇA BRUTA: Define estado inicial imediatamente
      gsap.set(imageRef.current, {
        scale: 0.4,
        borderRadius: "100px",
        autoAlpha: 0.5,
        filter: "blur(10px)",
        y: 100,
        width: "90vw",
        height: "80vh"
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=150%", 
          scrub: 1,
          pin: true,
          pinSpacing: true,
          anticipatePin: 1,
        }
      });

      tl.to(textRef.current, {
        y: -150,
        autoAlpha: 0,
        scale: 0.8,
        duration: 0.5,
        ease: "power2.inOut"
      }, 0);

      tl.to(imageRef.current, {
        scale: 1,
        borderRadius: "0px",
        width: "100vw",
        height: "100vh",
        autoAlpha: 1,
        filter: "blur(0px)",
        y: 0,
        duration: 1,
        ease: "power2.out"
      }, 0.1);

    }, containerRef);
    
    // O SEGREDO: Força o GSAP a recalcular posições após 100ms
    // Isso corrige bugs onde o site carrega e a animação não "pega"
    setTimeout(() => {
        ScrollTrigger.refresh();
    }, 100);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-white z-10">
      
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center">
        
        {/* Texto */}
        <div ref={textRef} className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center z-20">
          <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-600 text-xs font-bold tracking-widest uppercase mb-6 border border-blue-200 shadow-sm">
            Você não está louca
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-slate-900 tracking-tight mb-6 leading-[1.1] drop-shadow-sm">
            A exaustão de lutar<br/>
            contra a <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Própria Mente</span>.
          </h1>
          <p className="text-xl md:text-2xl text-slate-500 font-light max-w-2xl leading-relaxed">
            Você sente que seu emocional está desregulado?
          </p>
          <div className="mt-10 animate-bounce text-slate-400 text-sm font-medium tracking-widest uppercase">
            Existe um jeito de desligar ↓
          </div>
        </div>

        {/* Imagem */}
        <div className="relative flex items-center justify-center w-full h-full pointer-events-none">
          <div ref={imageRef} className="overflow-hidden shadow-2xl shadow-blue-900/20 bg-slate-200 origin-center">
            <img 
              src="https://metodocms.com/wp-content/uploads/2025/11/hero-picture2.jpg" 
              alt="Abstract Neural Flow" 
              className="w-full h-full object-cover opacity-90"
              // Backup caso a imagem quebre
              onError={(e) => {e.currentTarget.src = "https://images.unsplash.com/photo-1515023115689-589c33041d3c?q=80&w=2400"}}
            />
            <div className="absolute inset-0 bg-blue-900/10 mix-blend-overlay"></div>
          </div>
        </div>
      </div>

    </section>
  );
};

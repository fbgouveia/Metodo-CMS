import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ArrowRight, Star, ShieldCheck } from 'lucide-react';

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    
    // Handle mouse move separately to ensure proper cleanup
    const handleMouseMove = (e: MouseEvent) => {
      // Normalized coordinates (-0.5 to 0.5)
      const xNorm = (e.clientX / window.innerWidth - 0.5);
      const yNorm = (e.clientY / window.innerHeight - 0.5);
      
      // Optimized parallax: subtle movement (10px max), responsive feel (1.5s)
      // Using ref for better performance
      if (bgRef.current) {
        gsap.to(bgRef.current, {
          x: xNorm * 10, 
          y: yNorm * 10,
          duration: 1.5, 
          ease: "power2.out",
          overwrite: "auto"
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // Main Entry Animation
      tl.from(".hero-text-element", {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.15, // Title then Subtitle
        ease: "power3.out"
      })
      .from(".hero-cta", {
        y: 20,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        clearProps: "opacity,transform" // Ensure hover states work cleanly after animation
      }, "-=0.4") // Slight overlap for smoothness
      .from(".hero-social", {
        y: 20,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out"
      }, "-=0.6")
      .from(".hero-visual-col", {
        y: 50, // Mudado de x para y no mobile para evitar conflito lateral
        opacity: 0,
        duration: 1,
        ease: "power3.out"
      }, "<0.2") 
      .from(".hero-badge", {
        scale: 0,
        opacity: 0,
        duration: 0.5,
        stagger: 0.2,
        ease: "back.out(1.7)"
      }, "-=0.5");

      // Floating animation for badges
      gsap.to(".float-y", {
        y: -15,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut"
      });

    }, containerRef);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      ctx.revert();
    };
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen flex flex-col justify-center pt-28 md:pt-32 pb-12 md:pb-20 overflow-hidden bg-transparent">
      
      {/* Parallax Background Elements - Added to fix GSAP error and add depth */}
      <div ref={bgRef} className="parallax-bg absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-300/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-indigo-300/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 z-10">
        {/* Alterado para flex-col sempre para garantir verticalidade */}
        <div className="flex flex-col items-center gap-2 md:gap-16">
          
          {/* Top Block: Copy (Centered) */}
          <div className="w-full max-w-4xl text-center relative z-20 mx-auto">
            {/* Mobile Blur Backing for Readability */}
            <div className="absolute inset-0 bg-white/30 blur-2xl -z-10 rounded-full lg:hidden transform scale-150 opacity-50"></div>

            <div className="hero-text-element inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 border border-blue-200 backdrop-blur-md mb-4 md:mb-6 mx-auto shadow-sm ring-1 ring-blue-50">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              <span className="text-xs font-bold text-blue-700 tracking-wide uppercase">Neurociência Aplicada</span>
            </div>

            <h1 className="hero-text-element text-3xl md:text-5xl lg:text-7xl font-bold tracking-tighter text-slate-900 mb-4 md:mb-6 leading-[1.1] font-serif drop-shadow-sm">
              O Silêncio que você implora <br/>
              <span className="text-blue-600">não virá de mais um remédio.</span>
            </h1>

            <p className="hero-text-element text-base md:text-xl text-slate-700 mb-6 md:mb-6 leading-relaxed font-normal max-w-2xl mx-auto text-shadow-sm">
              Você já tentou "respirar fundo", terapias infinitas e comprimidos, mas o aperto no peito continua? <strong>Sua mente não está quebrada, ela está em loop.</strong> Aprenda a desligar o alerta de perigo em 21 dias.
            </p>

            <div className="hero-cta flex flex-col sm:flex-row items-center gap-4 justify-center mb-6 md:mb-6 opacity-0 translate-y-4">
              <a 
                href="#pricing"
                className="w-full sm:w-auto px-8 py-4 bg-blue-600 text-white rounded-full font-bold text-lg hover:bg-blue-500 transition-all flex items-center justify-center gap-2 group shadow-[0_10px_30px_rgba(59,130,246,0.3)] hover:scale-105 active:scale-95 hover:shadow-blue-500/40 ring-4 ring-blue-500/10 font-serif tracking-wide"
              >
                Quero Desligar o Barulho Mental
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <span className="text-xs text-slate-400 font-medium uppercase tracking-wider hidden sm:block">Método Validado</span>
            </div>

            {/* Trust/Social Proof */}
            <div className="hero-social flex items-center justify-center gap-6 border-t border-slate-200/60 pt-4 opacity-0 max-w-lg mx-auto">
                <div className="flex items-center gap-2">
                   <div className="flex -space-x-3">
                      {[1,2,3,4].map((i) => (
                        <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden shadow-sm">
                           <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="Aluno" className="w-full h-full object-cover" />
                        </div>
                      ))}
                   </div>
                   <div className="flex flex-col items-start ml-2 text-left">
                      <div className="flex text-amber-400 text-xs">
                         <Star className="w-3 h-3 fill-current" />
                         <Star className="w-3 h-3 fill-current" />
                         <Star className="w-3 h-3 fill-current" />
                         <Star className="w-3 h-3 fill-current" />
                         <Star className="w-3 h-3 fill-current" />
                      </div>
                      <span className="text-xs text-slate-600 font-semibold">5.000+ vidas recuperadas</span>
                   </div>
                </div>
            </div>
          </div>

          {/* Bottom Block: Visuals (Video Player) */}
          <div className="hero-visual-col w-[85%] md:w-full max-w-5xl relative perspective-1000 mx-auto mt-0 md:mt-4">
             
             {/* Main Card - Product/Course Mockup / Video Player */}
             <div className="relative z-10 rounded-2xl overflow-hidden border-[4px] md:border-[8px] border-white/60 shadow-[0_15px_40px_rgba(59,130,246,0.15)] md:shadow-[0_30px_60px_rgba(59,130,246,0.15)] bg-slate-900 aspect-video group mx-auto">
                
                <iframe 
                  className="w-full h-full relative z-10"
                  src="https://www.youtube-nocookie.com/embed/NOH-u8bwVS0?rel=0&modestbranding=1&playsinline=1" 
                  title="YouTube video player" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  allowFullScreen
                ></iframe>
             </div>

             {/* Floating Badge: Doctor - Adjusted positions for centered layout */}
             <div className="hero-badge float-y absolute -top-8 left-1/2 -translate-x-[60%] md:translate-x-0 md:-top-10 md:-right-8 p-3 md:p-4 bg-white/90 backdrop-blur-xl border border-white/60 rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.1)] flex items-center gap-3 z-20 max-w-[160px] md:max-w-[240px]">
                <div className="w-8 h-8 md:w-12 md:h-12 rounded-full bg-slate-200 overflow-hidden shrink-0 border-2 border-white">
                   <img src="https://metodocms.com/wp-content/uploads/2025/07/hero-bottom.webp" alt="Dra Quiteria" className="w-full h-full object-cover" />
                </div>
                <div>
                   <p className="text-slate-900 font-bold text-xs md:text-sm leading-tight">Dra. Quitéria Gouveia</p>
                   <p className="text-blue-600 text-[10px] md:text-xs font-medium">Neurociência Afetiva</p>
                </div>
             </div>

             {/* Floating Badge: Result - Adjusted positions for centered layout */}
             <div className="hero-badge float-y absolute -bottom-8 left-1/2 -translate-x-[40%] md:translate-x-0 md:-bottom-10 md:-left-8 p-3 md:p-4 bg-white/90 backdrop-blur-xl border border-white/60 rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.1)] flex items-center gap-3 z-20" style={{ animationDelay: '1.5s' }}>
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                   <ShieldCheck className="w-4 h-4 md:w-5 md:h-5" />
                </div>
                <div>
                   <p className="text-slate-400 text-sm uppercase tracking-wider text-[10px]">Protocolo CMS</p>
                   <p className="text-slate-900 font-bold text-xs md:text-sm">Alívio em 5 min</p>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};
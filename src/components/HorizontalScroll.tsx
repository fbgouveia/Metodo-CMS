import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    id: 1,
    title: "A Verdade Emocional",
    subtitle: "Sua ansiedade não é 'coisa da sua cabeça'. É uma desregulação do sistema de alerta.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "O Freio Emocional",
    subtitle: "Técnicas práticas para ativar seu sistema de relaxamento. É como puxar o freio de mão.",
    image: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "O Detox da Ansiedade",
    subtitle: "Vamos 'ressignificar' o centro do medo para que você volte a dormir e sonhar.",
    image: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "O Resgate da Identidade",
    subtitle: "Quem era você antes do medo? A ansiedade roubou sua personalidade. Vamos buscá-la.",
    image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: 5,
    title: "Soberania Emocional",
    subtitle: "O objetivo não é 'controlar' a crise, é não ter crise. Você no comando.",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1200&auto=format&fit=crop"
  }
];

export const HorizontalScroll: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Animação APENAS para Desktop (> 768px)
      if (window.innerWidth > 768) {
        const section = sectionRef.current;
        const trigger = triggerRef.current;
        
        if(section && trigger) {
            const totalWidth = section.scrollWidth - window.innerWidth;
            
            gsap.to(section, {
              x: -totalWidth,
              ease: "none",
              scrollTrigger: {
                trigger: trigger,
                start: "top top",
                end: () => `+=${totalWidth}`,
                pin: true,
                scrub: 1,
                invalidateOnRefresh: true,
              }
            });
        }
      }
    }, triggerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="method" className="relative bg-white py-10 overflow-hidden">
      
      {/* --- DESKTOP (GSAP SCROLL) --- */}
      <div ref={triggerRef} className="hidden md:flex h-screen items-center overflow-hidden">
        <div ref={sectionRef} className="flex gap-12 px-20 w-max h-full items-center">
          
          {/* Intro */}
          <div className="min-w-[30vw] pr-10">
            <span className="text-blue-600 font-bold tracking-widest uppercase text-sm block mb-4">O Método</span>
            <h2 className="text-5xl font-serif text-slate-900 mb-6">Não é mágica.<br/>É Ciência.</h2>
            <p className="text-lg text-slate-600 max-w-md">Um protocolo clínico passo a passo.</p>
            <div className="mt-8 flex items-center gap-2 text-slate-400 animate-pulse">
                <span>Arraste para o lado</span> <ArrowRight size={20} />
            </div>
          </div>

          {/* Cards */}
          {steps.map((step) => (
            <div key={step.id} className="relative min-w-[450px] h-[65vh] rounded-[2.5rem] overflow-hidden shadow-xl border border-slate-100 group">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10"></div>
              <img src={step.image} alt={step.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="relative z-20 h-full flex flex-col justify-end p-10 text-white">
                <span className="text-6xl font-bold text-white/20 absolute top-8 right-8">0{step.id}</span>
                <h3 className="text-3xl font-serif mb-3">{step.title}</h3>
                <p className="text-white/90 text-sm leading-relaxed border-l-2 border-blue-500 pl-4">{step.subtitle}</p>
              </div>
            </div>
          ))}

          {/* Final CTA */}
          <div className="min-w-[400px] h-[65vh] rounded-[2.5rem] bg-slate-900 text-white flex flex-col justify-center items-center text-center p-10 shadow-xl">
              <h3 className="text-4xl font-serif mb-6">Sua vez.</h3>
              <a href="#pricing" className="px-8 py-4 bg-white text-slate-900 rounded-full font-bold hover:bg-blue-50 transition-all">Ver Planos</a>
          </div>
          
          <div className="w-20"></div> {/* Espaçador final */}
        </div>
      </div>

      {/* --- MOBILE (NATIVE SNAP SCROLL) --- */}
      <div className="md:hidden px-4 pb-12">
         <div className="mb-8 px-2">
            <span className="text-blue-600 font-bold text-xs uppercase tracking-widest">O Método</span>
            <h2 className="text-3xl font-serif text-slate-900">5 Passos</h2>
         </div>
         <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 no-scrollbar">
            {steps.map((step) => (
                <div key={step.id} className="snap-center shrink-0 w-[85vw] h-[55vh] rounded-3xl relative overflow-hidden shadow-lg">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10"></div>
                    <img src={step.image} alt={step.title} className="absolute inset-0 w-full h-full object-cover" />
                    <div className="relative z-20 h-full flex flex-col justify-end p-6 text-white">
                        <span className="text-5xl font-bold text-white/10 absolute top-4 right-4">0{step.id}</span>
                        <h3 className="text-2xl font-serif mb-2">{step.title}</h3>
                        <p className="text-white/80 text-xs leading-relaxed">{step.subtitle}</p>
                    </div>
                </div>
            ))}
         </div>
      </div>

    </section>
  );
};

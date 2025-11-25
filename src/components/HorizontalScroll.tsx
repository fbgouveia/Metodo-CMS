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
    image: "https://images.unsplash.com/photo-1519817650390-64a93db51149?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: 2,
    title: "O Freio Emocional",
    subtitle: "Você vai aprender técnicas práticas para ativar seu sistema de relaxamento.",
    image: "https://images.unsplash.com/photo-1455849318743-b2233052fcff?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: 3,
    title: "O Detox da Ansiedade",
    subtitle: "Vamos 'ressignificar' esse centro de medo para que você volte a dormir e a sonhar.",
    image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: 4,
    title: "O Resgate da Identidade",
    subtitle: "A ansiedade roubou sua personalidade. Aqui nós vamos buscá-la de volta.",
    image: "https://images.unsplash.com/photo-1495128324519-9f9d0b411592?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: 5,
    title: "Soberania Emocional",
    subtitle: "O objetivo não é 'controlar' a crise, é não ter crise. Liberdade total.",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1000&q=80"
  }
];

export const HorizontalScroll: React.FC = () => {
  const componentRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // LIMPEZA DE SEGURANÇA: Mata triggers antigos para evitar duplicação
      ScrollTrigger.getAll().forEach(t => t.kill());

      // Apenas Desktop
      if (window.innerWidth > 768) {
        const slider = sliderRef.current;
        const container = componentRef.current;
        
        if (slider && container) {
          const totalWidth = slider.scrollWidth - window.innerWidth;

          gsap.to(slider, {
            x: -totalWidth,
            ease: "none",
            scrollTrigger: {
              trigger: container,
              start: "top top",
              end: () => `+=${totalWidth}`,
              pin: true,
              scrub: 1,
              invalidateOnRefresh: true,
              anticipatePin: 1
            }
          });
        }
      }
    }, componentRef);

    return () => ctx.revert(); // Limpa tudo ao sair da tela
  }, []);

  return (
    // Z-INDEX 30: Fica acima do Hero
    // BG-SOLID: Fundo sólido (não transparente) para cobrir qualquer duplicata visual
    <section ref={componentRef} id="method" className="relative bg-[#f5f5f7] overflow-hidden z-30 py-10 md:py-0">
      
      {/* DESKTOP */}
      <div className="hidden md:flex h-screen items-center overflow-hidden">
        <div ref={sliderRef} className="flex gap-12 px-20 w-max h-full items-center">
          
          {/* Intro Card */}
          <div className="min-w-[35vw] px-10 flex flex-col justify-center">
            <span className="text-blue-600 font-bold tracking-widest uppercase mb-4 block text-sm">A Jornada</span>
            <h2 className="text-5xl xl:text-6xl font-serif text-slate-900 mb-6 leading-tight">
              Não é mágica.<br/>É Ciência.
            </h2>
            <p className="text-lg text-slate-600 max-w-md leading-relaxed">
              Vamos regular seu sistema nervoso com um protocolo clínico.
            </p>
            <div className="mt-8 flex items-center gap-2 text-slate-400 animate-pulse text-sm">
               <span>Arraste para ver os passos</span> <ArrowRight size={16} />
            </div>
          </div>

          {/* Cards */}
          {steps.map((step) => (
            <div key={step.id} className="relative min-w-[450px] h-[65vh] rounded-[2.5rem] overflow-hidden shadow-2xl group bg-white border-4 border-white">
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent z-10"></div>
              <img src={step.image} alt={step.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="relative z-20 h-full flex flex-col justify-end p-10">
                <span className="text-6xl font-bold text-white/20 absolute top-8 right-8 font-sans">0{step.id}</span>
                <h3 className="text-3xl font-serif text-white mb-3">{step.title}</h3>
                <p className="text-white/90 text-sm leading-relaxed border-l-2 border-blue-500 pl-4">{step.subtitle}</p>
              </div>
            </div>
          ))}

          {/* CTA Final */}
          <div className="min-w-[450px] h-[65vh] rounded-[2.5rem] bg-[#1d1d1f] text-white flex flex-col justify-center items-center text-center p-10 shadow-2xl">
            <h3 className="text-3xl font-serif mb-6">Sua vez.</h3>
            <a href="#pricing" className="px-8 py-3 bg-white text-slate-900 rounded-full font-bold hover:bg-blue-50 transition-all shadow-lg">Ver Planos</a>
          </div>
          
          <div className="w-20"></div>
        </div>
      </div>

      {/* MOBILE */}
      <div className="md:hidden py-16 px-4">
        <div className="mb-8 px-2 text-center">
            <span className="text-blue-600 font-bold text-xs uppercase tracking-widest">O Protocolo</span>
            <h2 className="text-3xl font-serif text-slate-900 mt-2">5 Passos para a Liberdade</h2>
        </div>
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-8 no-scrollbar">
            {steps.map((step) => (
            <div key={step.id} className="snap-center shrink-0 w-[85vw] h-[60vh] rounded-3xl relative overflow-hidden shadow-lg bg-white">
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent z-10"></div>
                <img src={step.image} alt={step.title} className="absolute inset-0 w-full h-full object-cover" />
                <div className="relative z-20 h-full flex flex-col justify-end p-6">
                <span className="text-6xl font-bold text-white/10 absolute top-4 right-4 font-sans">0{step.id}</span>
                <h3 className="text-2xl font-serif text-white mb-2">{step.title}</h3>
                <p className="text-white/80 text-xs leading-relaxed">{step.subtitle}</p>
                </div>
            </div>
            ))}
            <div className="snap-center shrink-0 w-[85vw] h-[60vh] rounded-3xl bg-slate-900 flex flex-col justify-center items-center text-center p-8 text-white">
                <h3 className="text-2xl font-serif mb-4">Assuma o Controle.</h3>
                <a href="#pricing" className="px-8 py-3 bg-white text-slate-900 rounded-full font-bold text-sm shadow-lg">Ver Valores</a>
            </div>
        </div>
      </div>

    </section>
  );
};

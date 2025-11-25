import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    id: 1,
    title: "A Verdade Emocional",
    subtitle: "Sua ansiedade não é 'coisa da sua cabeça'. É uma desregulação do sistema de alerta. Vamos identificar quais gatilhos estão sabotando sua paz.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1500&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "O Freio Emocional",
    subtitle: "Você vai aprender técnicas práticas para ativar seu sistema de relaxamento. É como puxar o freio de mão de um carro desgovernado.",
    image: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=1500&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "O Detox da Ansiedade",
    subtitle: "Seu cérebro aprendeu a ter medo de tudo. Vamos 'ressignificar' esse centro de medo para que você volte a dormir e a sonhar.",
    image: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?q=80&w=1500&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "O Resgate da Identidade",
    subtitle: "Quem era você antes do medo travar sua vida? A ansiedade roubou sua personalidade. Aqui nós vamos buscá-la de volta.",
    image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&w=1500&auto=format&fit=crop"
  },
  {
    id: 5,
    title: "Soberania Emocional",
    subtitle: "O objetivo não é 'controlar' a crise, é não ter crise. Você se torna a maior especialista no seu próprio funcionamento.",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1500&auto=format&fit=crop"
  }
];

export const HorizontalScroll: React.FC = () => {
  const componentRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // Apenas roda a animação em telas grandes (Desktop)
      if (window.innerWidth >= 768) {
        const slider = sliderRef.current;
        const container = componentRef.current;
        
        if (!slider || !container) return;

        // Cálculo exato da largura para rolar
        const totalWidth = slider.scrollWidth - window.innerWidth;

        gsap.to(slider, {
          x: -totalWidth,
          ease: "none",
          scrollTrigger: {
            trigger: container,
            start: "top top",
            end: () => `+=${totalWidth}`, // Duração exata do scroll
            pin: true, // Prende a seção
            scrub: 1, // Suavidade
            invalidateOnRefresh: true, // Recalcula se redimensionar
            anticipatePin: 1,
          }
        });
      }
    }, componentRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={componentRef} id="method" className="relative bg-[#f5f5f7] overflow-hidden">
      
      {/* --- VERSÃO DESKTOP (ANIMAÇÃO GSAP) --- */}
      <div className="hidden md:flex h-screen items-center overflow-hidden">
        <div ref={sliderRef} className="flex gap-8 px-12 w-max h-full items-center">
          
          {/* Card Introdutório */}
          <div className="min-w-[35vw] px-10 flex flex-col justify-center">
            <span className="text-blue-600 font-bold tracking-widest uppercase mb-4 block text-sm">A Jornada</span>
            <h2 className="text-5xl xl:text-6xl font-serif text-slate-900 mb-6 leading-tight">
              Não é mágica.<br/>É Ciência.
            </h2>
            <p className="text-lg text-slate-600 max-w-md leading-relaxed">
              Vamos regular seu sistema nervoso com um protocolo clínico passo a passo.
            </p>
            <div className="mt-8 flex items-center gap-2 text-slate-400 animate-pulse text-sm">
              <span>Role para ver os passos</span> <ArrowRight size={16} />
            </div>
          </div>

          {/* Cards dos Passos */}
          {steps.map((step) => (
            <div key={step.id} className="relative min-w-[450px] h-[65vh] rounded-[2rem] overflow-hidden shadow-2xl group border border-white">
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10"></div>
              <img 
                src={step.image} 
                alt={step.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="relative z-20 h-full flex flex-col justify-end p-8">
                <span className="text-6xl font-bold text-white/20 absolute top-6 right-6 font-sans">0{step.id}</span>
                <h3 className="text-2xl font-serif text-white mb-3">{step.title}</h3>
                <p className="text-white/80 text-sm leading-relaxed border-l-2 border-blue-500 pl-4">
                  {step.subtitle}
                </p>
              </div>
            </div>
          ))}

          {/* Card Final CTA */}
          <div className="min-w-[450px] h-[65vh] rounded-[2rem] bg-slate-900 text-white flex flex-col justify-center items-center text-center p-10 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 to-purple-500"></div>
            <h3 className="text-3xl font-serif mb-6">Assuma o Controle.</h3>
            <p className="text-gray-400 mb-8 max-w-xs text-sm">A vida sem o aperto no peito existe e começa com uma decisão.</p>
            <a href="#pricing" className="px-8 py-3 bg-white text-slate-900 rounded-full font-bold hover:bg-blue-50 transition-all shadow-lg hover:scale-105">
              Ver Planos
            </a>
          </div>
          
          {/* Espaçador final para garantir scroll suave */}
          <div className="w-20"></div>
        </div>
      </div>

      {/* --- VERSÃO MOBILE (NATIVE SNAP SCROLL - SEM BUGS) --- */}
      <div className="md:hidden py-16 px-4">
        <div className="mb-8 px-2 text-center">
            <span className="text-blue-600 font-bold text-xs uppercase tracking-widest">O Protocolo</span>
            <h2 className="text-3xl font-serif text-slate-900 mt-2">5 Passos para a Liberdade</h2>
        </div>
        
        {/* Carrossel Nativo (Swipe) */}
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-8 no-scrollbar">
            {steps.map((step) => (
            <div key={step.id} className="snap-center shrink-0 w-[85vw] h-[55vh] rounded-3xl relative overflow-hidden shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent z-10"></div>
                <img src={step.image} alt={step.title} className="absolute inset-0 w-full h-full object-cover" />
                <div className="relative z-20 h-full flex flex-col justify-end p-6">
                <span className="text-6xl font-bold text-white/10 absolute top-4 right-4">0{step.id}</span>
                <h3 className="text-2xl font-serif text-white mb-2">{step.title}</h3>
                <p className="text-white/80 text-xs leading-relaxed">{step.subtitle}</p>
                </div>
            </div>
            ))}
            
            {/* CTA Mobile */}
            <div className="snap-center shrink-0 w-[85vw] h-[55vh] rounded-3xl bg-slate-900 flex flex-col justify-center items-center text-center p-8 text-white">
                <h3 className="text-2xl font-serif mb-4">Sua vez.</h3>
                <a href="#pricing" className="px-8 py-3 bg-white text-slate-900 rounded-full font-bold text-sm shadow-lg">Ver Valores</a>
            </div>
        </div>
      </div>

    </section>
  );
};

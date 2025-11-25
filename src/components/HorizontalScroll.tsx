import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    id: 1,
    title: "A Verdade Emocional",
    subtitle: "Sua ansiedade não é 'coisa da sua cabeça'. É uma desregulação do sistema de alerta. Vamos identificar quais gatilhos estão sabotando sua paz.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2500&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "O Freio Emocional",
    subtitle: "Você vai aprender técnicas práticas para ativar seu sistema de relaxamento. É como puxar o freio de mão de um carro desgovernado.",
    image: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=2500&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "O Detox da Ansiedade",
    subtitle: "Seu cérebro aprendeu a ter medo de tudo. Vamos 'ressignificar' esse centro de medo para que você volte a dormir e a sonhar.",
    image: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?q=80&w=2500&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "O Resgate da Identidade",
    subtitle: "Quem era você antes do medo travar sua vida? A ansiedade roubou sua personalidade. Aqui nós vamos buscá-la de volta.",
    image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&w=2500&auto=format&fit=crop"
  },
  {
    id: 5,
    title: "Soberania Emocional",
    subtitle: "O objetivo não é 'controlar' a crise, é não ter crise. Você se torna a maior especialista no seu próprio funcionamento.",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=2500&auto=format&fit=crop"
  }
];

export const HorizontalScroll: React.FC = () => {
  const componentRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const mm = gsap.matchMedia();
      
      // APENAS DESKTOP (> 768px)
      mm.add("(min-width: 769px)", () => {
        const slider = sliderRef.current;
        const container = componentRef.current;

        if (slider && container) {
          // Garante que começamos do zero para evitar duplicação visual
          gsap.set(slider, { x: 0 });

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
              //markers: true // Descomente se precisar debugar
            }
          });
        }
      });

    }, componentRef);

    // LIMPEZA CRÍTICA: Mata a animação ao desmontar ou atualizar
    return () => ctx.revert(); 
  }, []);

  return (
    <section ref={componentRef} className="relative bg-[#f5f5f7] overflow-hidden">
      
      {/* --- DESKTOP (GSAP) --- */}
      <div className="hidden md:flex h-screen items-center overflow-hidden">
        <div ref={sliderRef} className="flex gap-16 px-20 w-max h-full items-center">
          
          {/* Intro Card */}
          <div className="flex flex-col justify-center h-[70vh] min-w-[35vw] px-10 bg-white rounded-[3rem] shadow-lg border border-slate-100 z-10">
            <span className="text-blue-600 font-bold tracking-widest uppercase mb-4 block text-sm">A Jornada</span>
            <h2 className="text-5xl xl:text-6xl font-serif text-slate-900 mb-6 leading-tight">
              Não é mágica.<br/>É Ciência.
            </h2>
            <p className="text-lg text-slate-600 max-w-md leading-relaxed">
              Vamos regular seu sistema nervoso com um protocolo clínico passo a passo.
            </p>
          </div>

          {/* Steps */}
          {steps.map((step) => (
            <div key={step.id} className="relative min-w-[600px] h-[70vh] rounded-[2.5rem] overflow-hidden shadow-2xl group border-4 border-white bg-white">
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10"></div>
              <img 
                src={step.image} 
                alt={step.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="relative z-20 h-full flex flex-col justify-end p-12">
                <span className="text-8xl font-bold text-white/20 absolute top-8 right-8 font-sans">0{step.id}</span>
                <h3 className="text-4xl font-serif text-white mb-4">{step.title}</h3>
                <p className="text-white/90 text-lg leading-relaxed font-light border-l-4 border-blue-500 pl-6">
                  {step.subtitle}
                </p>
              </div>
            </div>
          ))}

          {/* CTA Card */}
          <div className="min-w-[500px] h-[70vh] rounded-[2.5rem] bg-slate-900 text-white flex flex-col justify-center items-center text-center p-12 shadow-2xl">
            <h3 className="text-4xl font-serif mb-6">Assuma o Controle.</h3>
            <p className="text-gray-400 mb-10">A vida sem o aperto no peito existe.</p>
            <a href="#pricing" className="px-10 py-4 bg-white text-slate-900 rounded-full font-bold hover:bg-blue-50 transition-all shadow-lg hover:scale-105">
              Ver Planos e Valores
            </a>
          </div>

          <div className="w-24"></div>
        </div>
      </div>

      {/* --- MOBILE (NATIVE) --- */}
      <div className="md:hidden py-16 px-4 bg-[#f5f5f7]">
        <div className="mb-8 px-4">
            <h2 className="text-3xl font-serif text-slate-900 mb-2">5 Passos para a Liberdade</h2>
            <p class="text-slate-500 text-sm">Deslize para ver ➔</p>
        </div>
        
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-8 no-scrollbar px-4">
            {steps.map((step) => (
            <div key={step.id} className="snap-center shrink-0 w-[85vw] h-[60vh] rounded-3xl relative overflow-hidden shadow-lg border border-white">
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent z-10"></div>
                <img src={step.image} alt={step.title} className="absolute inset-0 w-full h-full object-cover" />
                <div className="relative z-20 h-full flex flex-col justify-end p-6">
                <span className="text-6xl font-bold text-white/10 absolute top-4 right-4">0{step.id}</span>
                <h3 className="text-2xl font-serif text-white mb-2">{step.title}</h3>
                <p className="text-white/80 text-sm leading-relaxed">{step.subtitle}</p>
                </div>
            </div>
            ))}
            
            <div className="snap-center shrink-0 w-[85vw] h-[60vh] rounded-3xl bg-slate-900 flex flex-col justify-center items-center text-center p-8 text-white">
                <h3 className="text-2xl font-serif mb-4">Sua vez.</h3>
                <a href="#pricing" className="px-8 py-3 bg-white text-slate-900 rounded-full font-bold text-sm shadow-lg">Ver Valores</a>
            </div>
        </div>
      </div>

    </section>
  );
};

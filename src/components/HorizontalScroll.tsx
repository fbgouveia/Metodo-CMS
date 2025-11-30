import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// 7 MÓDULOS + IMAGENS PSICOLOGIA
const steps = [
  { id: 1, title: "Módulo 1: Introdução", subtitle: "Descubra o que é ansiedade, como ela se manifesta e quando deixa de ser natural.", image: "https://www.quiteriagouveia.com/wp-content/uploads/2025/11/card0.jpg=80&w=1000&auto=format&fit=crop" },
  { id: 2, title: "Módulo 2: Entendendo", subtitle: "Aprenda a diferenciar ansiedade normal de patológica e mapeie seus gatilhos.", image: "https://www.quiteriagouveia.com/wp-content/uploads/2025/11/card1.jpg=80&w=1000&auto=format&fit=crop" },
  { id: 3, title: "Módulo 3: Técnicas", subtitle: "Respiração e relaxamento. Ferramentas práticas para controlar crises.", image: "https://www.quiteriagouveia.com/wp-content/uploads/2025/11/card2.jpg=80&w=1000&auto=format&fit=crop" },
  { id: 4, title: "Módulo 4: Pensamentos", subtitle: "Gerenciamento de Pensamentos Automáticos Negativos. Quebre crenças sabotadoras.", image: "https://www.quiteriagouveia.com/wp-content/uploads/2025/11/card3.jpg=80&w=1000&auto=format&fit=crop" },
  { id: 5, title: "Módulo 5: Hábitos", subtitle: "Sono, alimentação e rotina. Ajustes fisiológicos que reduzem a ansiedade.", image: "https://www.quiteriagouveia.com/wp-content/uploads/2025/11/card4.jpg=80&w=1000&auto=format&fit=crop" },
  { id: 6, title: "Módulo 6: Autoestima", subtitle: "Fortaleça sua relação consigo mesma e aprenda a se acolher.", image: "https://www.quiteriagouveia.com/wp-content/uploads/2025/11/card4.jpg=80&w=1000&auto=format&fit=crop" },
  { id: 7, title: "Módulo 7: Futuro Livre", subtitle: "Celebrando conquistas e planejando um futuro sem o peso do medo.", image: "https://www.quiteriagouveia.com/wp-content/uploads/2025/11/card5.jpg=80&w=1000&auto=format&fit=crop" }
];

export const HorizontalScroll: React.FC = () => {
  const componentRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      ScrollTrigger.getAll().forEach(t => t.kill());

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
    return () => ctx.revert();
  }, []);

  return (
    // IMPORTANTE: bg-transparent para ver os blobs atrás
    <section ref={componentRef} id="method" className="relative bg-transparent overflow-hidden py-24 z-30">
      
      {/* Desktop View */}
      <div className="hidden md:flex h-screen items-center overflow-hidden sticky top-0">
        <div ref={sliderRef} className="flex gap-12 px-20 w-max h-full items-center">
          
          {/* Intro Card - Vidro Fosco */}
          <div className="min-w-[35vw] pr-10 flex flex-col justify-center bg-white/40 backdrop-blur-xl p-10 rounded-[3rem] border border-white/60 shadow-lg">
            <span className="text-blue-700 font-bold tracking-widest uppercase text-sm block mb-4">A Jornada</span>
            <h2 className="text-5xl xl:text-7xl font-serif text-slate-900 mb-6 leading-tight">
              Não é mágica.<br/>É Ciência.
            </h2>
            <p className="text-xl text-slate-800 max-w-md leading-relaxed">
              Um protocolo clínico completo dividido em 7 módulos práticos.
            </p>
            <div className="mt-8 flex items-center gap-2 text-slate-600 animate-pulse text-sm">
               <span>Arraste para ver</span> <ArrowRight size={16} />
            </div>
          </div>

          {/* Cards */}
          {steps.map((step) => (
            <div key={step.id} className="relative min-w-[500px] h-[70vh] rounded-[2.5rem] overflow-hidden shadow-2xl group border-[6px] border-white/40 bg-white">
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent z-10"></div>
              <img src={step.image} alt={step.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="relative z-20 h-full flex flex-col justify-end p-10 text-white">
                <span className="text-6xl font-bold text-white/20 absolute top-8 right-8 font-sans">0{step.id}</span>
                <h3 className="text-3xl font-serif mb-3">{step.title}</h3>
                <p className="text-white/90 text-sm leading-relaxed border-l-2 border-blue-500 pl-4">{step.subtitle}</p>
              </div>
            </div>
          ))}

          {/* CTA Final */}
          <div className="min-w-[400px] h-[70vh] rounded-[2.5rem] bg-slate-900/95 backdrop-blur-xl text-white flex flex-col justify-center items-center text-center p-10 shadow-2xl border border-white/20">
            <h3 className="text-4xl font-serif mb-6">Assuma o Controle.</h3>
            <a href="#pricing" className="px-10 py-4 bg-white text-slate-900 rounded-full font-bold hover:bg-blue-50 transition-all shadow-lg hover:scale-105">Ver Planos</a>
          </div>
          <div className="w-24"></div>
        </div>
      </div>

      {/* Mobile View */}
      <div className="md:hidden py-16 px-4">
        <div className="mb-8 px-2 text-center bg-white/60 backdrop-blur-md rounded-3xl py-6 border border-white/50">
            <h2 className="text-3xl font-serif text-slate-900">7 Passos para a Liberdade</h2>
        </div>
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-8 no-scrollbar px-2">
            {steps.map((step) => (
            <div key={step.id} className="snap-center shrink-0 w-[85vw] h-[60vh] rounded-3xl relative overflow-hidden shadow-lg border-4 border-white bg-white">
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent z-10"></div>
                <img src={step.image} alt={step.title} className="absolute inset-0 w-full h-full object-cover" />
                <div className="relative z-20 h-full flex flex-col justify-end p-6 text-white">
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

import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';

// Registra o plugin
gsap.registerPlugin(ScrollTrigger);

// DADOS DOS 7 MÓDULOS (Atualizado)
const steps = [
  {
    id: 1,
    title: "Introdução à Ansiedade",
    subtitle: "Descubra o que é, como se manifesta e quando deixa de ser natural para se tornar um transtorno. O primeiro passo é a consciência.",
    // Imagem: Conexões Neurais / Cérebro
    image: "https://images.unsplash.com/photo-1620121692029-d088224ddc74?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Entendendo a Ansiedade",
    subtitle: "Aprenda a diferenciar ansiedade normal de patológica. Vamos mapear seus gatilhos e efeitos no corpo e na mente.",
    // Imagem: Mulher pensativa / Análise
    image: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Técnicas de Relaxamento",
    subtitle: "Ferramentas práticas de respiração e relaxamento para controlar crises e baixar a tensão imediatamente.",
    // Imagem: Respiração / Paz
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "Gerenciamento de Pensamentos",
    subtitle: "Identifique os Pensamentos Automáticos Negativos (PANs) que sabotam sua autoestima e aprenda a quebrá-los.",
    // Imagem: Mente / Foco / Clareza
    image: "https://images.unsplash.com/photo-1455849318743-b2233052fcff?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 5,
    title: "Hábitos Saudáveis",
    subtitle: "Sono, alimentação e rotina. Descubra como pequenos ajustes fisiológicos reduzem drasticamente a ansiedade.",
    // Imagem: Sono / Leveza / Cama
    image: "https://images.unsplash.com/photo-1511296933631-18b8f0017c2a?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 6,
    title: "Autoestima e Autocompaixão",
    subtitle: "Fortaleça sua relação consigo mesma. Aprenda a se acolher e reconhecer seu valor sem buscar perfeição.",
    // Imagem: Mulher confiante / Espelho / Horizonte
    image: "https://images.unsplash.com/photo-1512413914633-b5043f4041ea?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 7,
    title: "Futuro Livre de Ansiedade",
    subtitle: "Sua autonomia emocional. Celebre conquistas e crie um plano de ação para lidar com desafios futuros sem medo.",
    // Imagem: Liberdade / Braços abertos
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1000&auto=format&fit=crop"
  }
];

export const HorizontalScroll: React.FC = () => {
  const componentRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Limpeza de segurança
      ScrollTrigger.getAll().forEach(t => t.kill());

      // Apenas Desktop (> 768px)
      if (window.innerWidth > 768) {
        const slider = sliderRef.current;
        const container = componentRef.current;
        
        if (slider && container) {
          const totalWidth = slider.scrollWidth - window.innerWidth;

          // Só anima se houver conteúdo suficiente para rolar
          if (totalWidth > 0) {
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
      }
    }, componentRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={componentRef} id="method" className="relative bg-[#f5f5f7] overflow-hidden py-24 z-20">
      
      {/* --- DESKTOP VIEW --- */}
      <div className="hidden md:flex h-screen items-center overflow-hidden sticky top-0">
        <div ref={sliderRef} className="flex gap-16 px-20 w-max h-full items-center">
          
          {/* Intro Card */}
          <div className="min-w-[35vw] pr-10 flex flex-col justify-center">
            <span className="text-blue-600 font-bold tracking-widest uppercase text-sm block mb-4">A Jornada</span>
            <h2 className="text-5xl xl:text-7xl font-serif text-slate-900 mb-6 leading-tight">
              Não é mágica.<br/>É Ciência.
            </h2>
            <p className="text-xl text-slate-600 max-w-md leading-relaxed">
              Um protocolo clínico passo a passo, dividido em 7 módulos práticos.
            </p>
            <div className="mt-8 flex items-center gap-2 text-slate-400 animate-pulse text-sm">
               <span>Arraste para ver os módulos</span>
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </div>
          </div>

          {/* Cards dos Módulos */}
          {steps.map((step) => (
            <div key={step.id} className="relative min-w-[500px] h-[70vh] rounded-[2.5rem] overflow-hidden shadow-2xl group border-4 border-white bg-white">
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent z-10"></div>
              <img 
                src={step.image} 
                alt={step.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="relative z-20 h-full flex flex-col justify-end p-10 text-white">
                <span className="text-6xl font-bold text-white/20 absolute top-8 right-8 font-sans">0{step.id}</span>
                <h3 className="text-3xl font-serif mb-3">{step.title}</h3>
                <p className="text-white/90 text-sm leading-relaxed border-l-2 border-blue-500 pl-4">
                  {step.subtitle}
                </p>
              </div>
            </div>
          ))}

          {/* CTA Final */}
          <div className="min-w-[400px] h-[70vh] rounded-[2.5rem] bg-[#1d1d1f] text-white flex flex-col justify-center items-center text-center p-10 shadow-2xl">
            <h3 className="text-3xl font-serif mb-6">Assuma o Controle.</h3>
            <p className="text-gray-400 mb-8 max-w-xs text-sm">A vida sem o aperto no peito existe.</p>
            <a href="#pricing" className="px-10 py-4 bg-white text-slate-900 rounded-full font-bold hover:bg-blue-50 transition-all shadow-lg hover:scale-105">
              Ver Planos
            </a>
          </div>
          
          <div className="w-24"></div>
        </div>
      </div>

      {/* --- MOBILE VIEW --- */}
      <div className="md:hidden py-16 px-4">
        <div className="mb-8 px-2 text-center">
            <span className="text-blue-600 font-bold text-xs uppercase tracking-widest">O Protocolo</span>
            <h2 className="text-3xl font-serif text-slate-900 mt-2">7 Módulos Completos</h2>
        </div>
        
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-8 no-scrollbar">
            {steps.map((step) => (
            <div key={step.id} className="snap-center shrink-0 w-[85vw] h-[60vh] rounded-3xl relative overflow-hidden shadow-lg border-2 border-white bg-white">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10"></div>
                <img src={step.image} alt={step.title} className="absolute inset-0 w-full h-full object-cover" />
                <div className="relative z-20 h-full flex flex-col justify-end p-6 text-white">
                <span className="text-5xl font-bold text-white/10 absolute top-4 right-4 font-sans">0{step.id}</span>
                <h3 className="text-2xl font-serif mb-2">{step.title}</h3>
                <p className="text-white/80 text-xs leading-relaxed">{step.subtitle}</p>
                </div>
            </div>
            ))}
            
            <div className="snap-center shrink-0 w-[85vw] h-[60vh] rounded-3xl bg-slate-900 flex flex-col justify-center items-center text-center p-8 text-white">
                <h3 className="text-2xl font-serif mb-4">Assuma o Controle.</h3>
                <a href="#pricing" className="px-8 py-3 bg-white text-slate-900 rounded-full font-bold text-sm shadow-lg">Ver Planos</a>
            </div>
        </div>
      </div>

    </section>
  );
};

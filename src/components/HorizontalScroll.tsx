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
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1500&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "O Freio Emocional",
    subtitle: "Você vai aprender técnicas práticas para ativar seu sistema de relaxamento. É como puxar o freio de mão.",
    image: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=1500&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "O Detox da Ansiedade",
    subtitle: "Vamos 'ressignificar' esse centro de medo para que você volte a dormir e a sonhar.",
    image: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?q=80&w=1500&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "O Resgate da Identidade",
    subtitle: "Quem era você antes do medo travar sua vida? A ansiedade roubou sua personalidade. Vamos buscá-la.",
    image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&w=1500&auto=format&fit=crop"
  },
  {
    id: 5,
    title: "Soberania Emocional",
    subtitle: "O objetivo não é 'controlar' a crise, é não ter crise. Você no comando.",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1500&auto=format&fit=crop"
  }
];

export const HorizontalScroll: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Matar triggers antigos para evitar duplicação
      ScrollTrigger.getAll().forEach(t => t.kill());

      // Apenas Desktop (> 768px)
      if (window.innerWidth > 768) {
        const track = trackRef.current;
        const section = sectionRef.current;

        if (track && section) {
          // Calcula o tamanho total que precisa rolar
          const scrollAmount = track.scrollWidth - window.innerWidth;

          gsap.to(track, {
            x: -scrollAmount, // Move para a esquerda
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: "top top", // Começa quando o topo da seção toca o topo da tela
              end: () => `+=${scrollAmount}`, // A duração é igual ao tamanho do conteúdo
              pin: true, // TRAVA A TELA
              scrub: 1, // Suaviza o movimento
              invalidateOnRefresh: true,
              anticipatePin: 1,
            }
          });
        }
      }
    }, sectionRef);

    return () => ctx.revert(); // Limpeza essencial
  }, []);

  return (
    <section id="method" className="relative bg-[#f5f5f7] z-20">
      
      {/* --- DESKTOP (GSAP PINNED) --- */}
      {/* h-screen garante que a seção ocupe a tela inteira para o PIN funcionar */}
      <div ref={sectionRef} className="hidden md:flex h-screen w-full overflow-hidden sticky top-0">
        
        {/* O Trilho que se move */}
        <div ref={trackRef} className="flex h-full items-center px-20 gap-16 w-max">
          
          {/* Intro Card */}
          <div className="min-w-[30vw] flex flex-col justify-center">
            <span className="text-blue-600 font-bold tracking-widest uppercase mb-4 block text-sm">A Jornada</span>
            <h2 className="text-5xl xl:text-7xl font-serif text-slate-900 mb-6 leading-tight">
              Não é mágica.<br/>É Ciência.
            </h2>
            <p className="text-xl text-slate-600 max-w-md leading-relaxed">
              Vamos regular seu sistema nervoso com um protocolo clínico passo a passo.
            </p>
            <div className="mt-8 flex items-center gap-2 text-slate-400 animate-pulse text-sm">
               <span>Role para ver os passos</span> <ArrowRight size={20} />
            </div>
          </div>

          {/* Cards */}
          {steps.map((step) => (
            <div key={step.id} className="relative min-w-[500px] h-[70vh] rounded-[2.5rem] overflow-hidden shadow-2xl group border-4 border-white bg-white flex-shrink-0">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10"></div>
              <img 
                src={step.image} 
                alt={step.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="relative z-20 h-full flex flex-col justify-end p-10 text-white">
                <span className="text-8xl font-bold text-white/10 absolute top-8 right-8 font-sans">0{step.id}</span>
                <h3 className="text-3xl font-serif mb-3">{step.title}</h3>
                <p className="text-white/90 text-sm leading-relaxed border-l-2 border-blue-500 pl-4">{step.subtitle}</p>
              </div>
            </div>
          ))}

          {/* CTA Final */}
          <div className="min-w-[400px] h-[70vh] rounded-[2.5rem] bg-[#1d1d1f] text-white flex flex-col justify-center items-center text-center p-10 shadow-2xl flex-shrink-0">
            <h3 className="text-4xl font-serif mb-6">Sua vez.</h3>
            <p className="text-gray-400 mb-10">A vida sem o aperto no peito existe.</p>
            <a href="#pricing" className="px-10 py-4 bg-white text-slate-900 rounded-full font-bold hover:bg-blue-50 transition-all shadow-lg hover:scale-105">
              Ver Planos
            </a>
          </div>

          <div className="w-24"></div>
        </div>
      </div>

      {/* --- MOBILE (NATIVE SNAP) --- */}
      <div className="md:hidden py-16 px-4">
        <div className="mb-8 px-2">
            <span className="text-blue-600 font-bold text-xs uppercase tracking-widest">O Protocolo</span>
            <h2 className="text-3xl font-serif text-slate-900 mt-2">5 Passos para a Liberdade</h2>
        </div>
        
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-8 no-scrollbar">
            {steps.map((step) => (
            <div key={step.id} className="snap-center shrink-0 w-[85vw] h-[60vh] rounded-3xl relative overflow-hidden shadow-lg bg-white border border-white">
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent z-10"></div>
                <img src={step.image} alt={step.title} className="absolute inset-0 w-full h-full object-cover" />
                <div className="relative z-20 h-full flex flex-col justify-end p-6 text-white">
                <span className="text-6xl font-bold text-white/10 absolute top-4 right-4 font-sans">0{step.id}</span>
                <h3 className="text-2xl font-serif mb-2">{step.title}</h3>
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

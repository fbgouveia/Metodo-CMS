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
    image: "https://images.unsplash.com/photo-1519817650390-64a93db51149?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: 2,
    title: "O Freio Emocional",
    subtitle: "Você vai aprender técnicas práticas para ativar seu sistema de relaxamento.",
    image: "https://images.unsplash.com/photo-1455849318743-b2233052fcff?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: 3,
    title: "O Detox da Ansiedade",
    subtitle: "Vamos 'ressignificar' esse centro de medo para que você volte a dormir e a sonhar.",
    image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: 4,
    title: "O Resgate da Identidade",
    subtitle: "A ansiedade roubou sua personalidade. Aqui nós vamos buscá-la de volta.",
    image: "https://images.unsplash.com/photo-1495128324519-9f9d0b411592?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: 5,
    title: "Soberania Emocional",
    subtitle: "O objetivo não é 'controlar' a crise, é não ter crise. Você no comando.",
    image: "https://images.unsplash.com/photo-1588611910493-6433510023a7?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: 6,
    title: "Hábitos Blindados",
    subtitle: "Sono, alimentação e rotina ajustados para blindar sua mente.",
    image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: 7,
    title: "Autoestima",
    subtitle: "Volte a confiar em si mesma e na sua capacidade de viver.",
    image: "https://images.unsplash.com/photo-1512413914633-b5043f4041ea?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: 8,
    title: "Direção",
    subtitle: "Saiba exatamente para onde ir e qual o próximo passo.",
    image: "https://images.unsplash.com/photo-1475473662563-c61a3488d1c9?auto=format&fit=crop&w=1200&q=80"
  }
];

export const HorizontalScroll: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Apenas roda no Desktop (> 768px)
      if (window.innerWidth > 768) {
        const pinWrap = sectionRef.current;
        const trigger = triggerRef.current;
        
        if (pinWrap && trigger) {
          // Calcula a largura total dos cards - a largura da tela
          // Isso define exatamente quanto precisamos mover para a esquerda
          const horizontalScrollLength = pinWrap.scrollWidth - window.innerWidth;

          gsap.to(pinWrap, {
            x: -horizontalScrollLength,
            ease: "none",
            scrollTrigger: {
              trigger: trigger,
              start: "top top",
              end: () => `+=${horizontalScrollLength}`, // A altura do scroll vertical será igual à largura do horizontal
              pin: true,
              scrub: 1,
              invalidateOnRefresh: true, // Recalcula se redimensionar a janela
              anticipatePin: 1
            }
          });
        }
      }
    }, triggerRef);

    return () => ctx.revert();
  }, []);

  return (
    // bg-slate-50 garante fundo sólido para não vazar o Hero atrás
    <section className="relative bg-slate-50 z-20">
      
      {/* --- DESKTOP (GSAP PINNED SCROLL) --- */}
      <div ref={triggerRef} className="hidden md:flex h-screen overflow-hidden items-center">
        
        {/* Container Longo (Vai mover para a esquerda) */}
        <div ref={sectionRef} className="flex h-full items-center px-20 gap-16 w-max">
          
          {/* Intro do Método */}
          <div className="min-w-[35vw] pr-10 flex flex-col justify-center">
            <span className="text-blue-600 font-bold tracking-widest uppercase text-xs mb-4 block">A Jornada</span>
            <h2 className="text-5xl xl:text-7xl font-serif text-slate-900 mb-6 leading-tight">
              Não é mágica.<br/>É Ciência.
            </h2>
            <p className="text-xl text-slate-600 max-w-md leading-relaxed">
              Um protocolo clínico passo a passo para regular seu sistema nervoso.
            </p>
            <div className="mt-8 flex items-center gap-2 text-slate-400 animate-pulse text-sm">
               <span>Role para baixo para navegar</span> <ArrowRight size={20} />
            </div>
          </div>

          {/* Loop dos Cards */}
          {steps.map((step) => (
            <div key={step.id} className="relative min-w-[500px] h-[70vh] rounded-[2.5rem] overflow-hidden shadow-2xl group bg-white border-4 border-white hover:scale-[1.02] transition-transform duration-500">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10"></div>
              <img 
                src={step.image} 
                alt={step.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="relative z-20 h-full flex flex-col justify-end p-10">
                <span className="text-7xl font-bold text-white/20 absolute top-8 right-8 font-sans">0{step.id}</span>
                <h3 className="text-3xl font-serif text-white mb-3">{step.title}</h3>
                <p className="text-white/90 text-base leading-relaxed border-l-4 border-blue-500 pl-4">
                  {step.subtitle}
                </p>
              </div>
            </div>
          ))}

          {/* Final CTA Card */}
          <div className="min-w-[450px] h-[70vh] rounded-[2.5rem] bg-[#1d1d1f] text-white flex flex-col justify-center items-center text-center p-10 shadow-2xl flex-shrink-0">
            <h3 className="text-4xl font-serif mb-6">Sua vez.</h3>
            <p className="text-gray-400 mb-10 max-w-xs">A vida sem o aperto no peito existe e começa com uma decisão.</p>
            <a href="#pricing" className="px-10 py-4 bg-white text-slate-900 rounded-full font-bold hover:bg-blue-50 transition-all shadow-lg hover:scale-105">
              Ver Planos e Valores
            </a>
          </div>

          {/* Espaçador para garantir que o último card apareça inteiro */}
          <div className="w-24"></div>
        </div>
      </div>

      {/* --- MOBILE (NATIVE SNAP SCROLL) --- */}
      <div className="md:hidden py-20 px-4 bg-[#f5f5f7]">
        <div className="mb-8 px-2">
            <h2 className="text-3xl font-serif text-slate-900 mb-2">O Protocolo</h2>
            <p className="text-slate-500 text-sm">Deslize para ver os passos ➔</p>
        </div>
        
        {/* Scroll Nativo sem barra (classe no-scrollbar) */}
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-8 no-scrollbar px-2">
            {steps.map((step) => (
            <div key={step.id} className="snap-center shrink-0 w-[85vw] h-[60vh] rounded-3xl relative overflow-hidden shadow-lg bg-white border-2 border-white">
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent z-10"></div>
                <img src={step.image} alt={step.title} className="absolute inset-0 w-full h-full object-cover" />
                <div className="relative z-20 h-full flex flex-col justify-end p-6">
                <span className="text-5xl font-bold text-white/10 absolute top-4 right-4 font-sans">0{step.id}</span>
                <h3 className="text-2xl font-serif text-white mb-2">{step.title}</h3>
                <p className="text-white/80 text-xs leading-relaxed">{step.subtitle}</p>
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

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
    image: "https://images.unsplash.com/photo-1620121692029-d088224ddc74?q=80&w=2000&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "O Freio Emocional",
    subtitle: "Você vai aprender técnicas práticas para ativar seu sistema de relaxamento. É como puxar o freio de mão de um carro desgovernado.",
    image: "https://images.unsplash.com/photo-1544367563-12123d8965cd?q=80&w=2000&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "O Detox da Ansiedade",
    subtitle: "Seu cérebro aprendeu a ter medo de tudo. Vamos 'ressignificar' esse centro de medo para que você volte a dormir e a sonhar.",
    image: "https://images.unsplash.com/photo-1515023115689-589c33041697?q=80&w=2000&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "Resgate da Identidade",
    subtitle: "Quem era você antes do medo travar sua vida? A ansiedade roubou sua personalidade. Aqui nós vamos buscá-la de volta.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2000&auto=format&fit=crop"
  },
  {
    id: 5,
    title: "Soberania Emocional",
    subtitle: "O objetivo não é 'controlar' a crise, é não ter crise. Você se torna a maior especialista no seu próprio funcionamento.",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=2000&auto=format&fit=crop"
  }
];

export const HorizontalScroll: React.FC = () => {
  const componentRef = useRef<HTMLDivElement>(null);
  const desktopWrapperRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // Desktop Logic - (min-width: 768px)
      mm.add("(min-width: 768px)", () => {
        const desktopWrapper = desktopWrapperRef.current;
        const track = trackRef.current;

        if (!desktopWrapper || !track) return;

        // FUNÇÃO DE CÁLCULO DINÂMICO
        // Isso obriga o GSAP a ler o valor a cada frame/refresh,
        // corrigindo o problema de carregar com valor 0 ou errado.
        const getScrollAmount = () => {
          let trackWidth = track.scrollWidth;
          return -(trackWidth - window.innerWidth);
        };

        gsap.to(track, {
          x: getScrollAmount, // Passa a função, não o valor fixo
          ease: "none",
          scrollTrigger: {
            trigger: desktopWrapper,
            pin: true,
            start: "top top",
            // Duração dinâmica baseada na largura real do conteúdo
            end: () => `+=${Math.abs(getScrollAmount())}`, 
            scrub: 1,
            invalidateOnRefresh: true, // Recalcula tudo se a janela mudar
            anticipatePin: 1,
          }
        });
      });
      
    }, componentRef);

    return () => ctx.revert();
  }, []);

  return (
    // padding-top (pt-24) em vez de margin-top para estabilidade do pin
    <section ref={componentRef} id="method" className="relative z-30 bg-slate-50 pt-24 w-full">
      
      {/* --- DESKTOP CONTAINER (GSAP TARGET) --- */}
      <div 
        ref={desktopWrapperRef} 
        className="hidden md:flex h-screen w-full flex-col relative overflow-hidden bg-slate-50 will-change-transform"
      >
        
        {/* HEADER ESTÁTICO */}
        <div className="absolute top-0 left-0 right-0 z-40 pt-16 pb-8 bg-gradient-to-b from-slate-50 via-slate-50/95 to-transparent pointer-events-none">
          <div className="container mx-auto px-6 text-center">
            <div className="inline-block px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 mb-4 shadow-sm">
              <span className="text-xs font-bold text-blue-600 tracking-wider uppercase">O Caminho da Cura</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-slate-900 leading-tight">
              5 Passos para o <span className="text-blue-600">Silêncio Mental</span>
            </h2>
          </div>
        </div>

        {/* TRILHO DE CARDS */}
        {/* min-w-max garante que o container nunca colapse sua largura */}
        <div 
          ref={trackRef} 
          className="flex items-center gap-16 px-[15vw] h-full pt-32 w-max min-w-max pr-[10vw]" 
        >
          {steps.map((step) => (
            <div key={step.id} className="relative group w-[500px] h-[60vh] flex flex-col rounded-[2.5rem] overflow-hidden border border-slate-200 shadow-2xl bg-white shrink-0 hover:scale-[1.02] transition-transform duration-500">
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/10 to-transparent z-10"></div>
              <img 
                src={step.image} 
                alt={step.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="relative z-20 mt-auto p-10">
                <span className="text-9xl font-bold text-white/5 absolute top-4 right-6 font-sans select-none">
                  0{step.id}
                </span>
                <h3 className="text-3xl font-serif text-white mb-4 drop-shadow-md relative">{step.title}</h3>
                <p className="text-lg text-slate-100 font-light leading-relaxed drop-shadow-sm relative">{step.subtitle}</p>
              </div>
            </div>
          ))}

          {/* FINAL CTA CARD */}
          <div className="w-[450px] h-[60vh] flex flex-col justify-center items-center p-2 relative rounded-[2.5rem] overflow-hidden shadow-2xl shrink-0 bg-white">
             <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-600 bg-[length:200%_200%] animate-gradient-xy z-0"></div>
             <div className="absolute inset-[3px] bg-white rounded-[2.3rem] z-10"></div>
             
             <div className="relative z-20 flex flex-col items-center justify-center p-12 text-center h-full w-full">
                <h3 className="text-4xl font-serif text-slate-900 mb-6">Pronta para viver isso?</h3>
                <p className="text-slate-500 mb-10 text-lg leading-relaxed">
                  O protocolo completo está te esperando.
                </p>
                <a 
                  href="#pricing" 
                  className="w-full py-5 bg-slate-900 hover:bg-slate-800 text-white rounded-full font-bold text-lg transition-all shadow-xl hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
                >
                  Ver Planos e Valores <ArrowRight className="w-5 h-5" />
                </a>
             </div>
          </div>
        </div>
      </div>

      {/* --- MOBILE CONTAINER (NORMAL FLOW) --- */}
      <div className="md:hidden flex flex-col gap-6 px-6 py-20 bg-slate-50">
        <div className="text-center mb-10">
            <div className="inline-block px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 mb-4">
              <span className="text-xs font-bold text-blue-600 tracking-wider uppercase">O Caminho da Cura</span>
            </div>
            <h2 className="text-4xl font-serif text-slate-900 leading-tight">
              5 Passos para o <span className="text-blue-600">Silêncio Mental</span>
            </h2>
        </div>

        {steps.map((step) => (
          <div key={step.id} className="relative w-full h-[500px] rounded-3xl overflow-hidden shadow-lg border border-white/50">
             <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent z-10"></div>
             <img 
                src={step.image} 
                alt={step.title} 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="relative z-20 h-full flex flex-col justify-end p-8">
                <span className="text-6xl font-bold text-white/10 absolute top-6 right-6 font-sans">
                  0{step.id}
                </span>
                <h3 className="text-3xl font-serif text-white mb-2 leading-tight">{step.title}</h3>
                <p className="text-slate-200 text-base font-light leading-relaxed opacity-90">{step.subtitle}</p>
              </div>
          </div>
        ))}

        <div className="relative w-full py-12 px-6 rounded-3xl overflow-hidden shadow-lg p-1 text-center bg-white border border-blue-100 mt-4">
           <h3 className="text-2xl font-serif text-slate-900 mb-4">Sua Cura é Agora</h3>
           <p className="text-slate-500 text-sm mb-6">Não adie mais a sua paz.</p>
           <a href="#pricing" className="block w-full py-4 bg-blue-600 text-white rounded-full font-bold shadow-lg shadow-blue-500/30 hover:bg-blue-700 transition-colors">
             Ver Planos e Valores
           </a>
        </div>
      </div>

    </section>
  );
};
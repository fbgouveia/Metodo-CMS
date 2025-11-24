import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { StepItem } from '../types';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const steps: StepItem[] = [
  {
    id: 1,
    title: "A Verdade Biológica",
    subtitle: "Sua ansiedade não é 'coisa da sua cabeça'. É um desequilíbrio químico real. Vamos identificar qual neurotransmissor está sabotando sua paz.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2500&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "O Freio Neural",
    subtitle: "Você vai aprender a técnica mecânica para ativar seu Nervo Vago. É como puxar o freio de mão de um carro desgovernado. O coração desacelera na hora.",
    image: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=2500&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "O Detox da Amígdala",
    subtitle: "Seu cérebro aprendeu a ter medo de tudo. Vamos 'resetar' esse centro de medo para que você volte a dormir e a sonhar, e não apenas sobreviver.",
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
    subtitle: "O objetivo não é 'controlar' a crise, é não ter crise. Você se torna a maior especialista no seu próprio funcionamento. Liberdade total.",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=2500&auto=format&fit=crop"
  }
];

export const HorizontalScroll: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Usando matchMedia para garantir que só roda no Desktop e lida com Resize corretamente
    let mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      if (!sectionRef.current || !triggerRef.current) return;

      const section = sectionRef.current;
      const trigger = triggerRef.current;
      const totalPanels = steps.length + 1; // Cards + Intro/Final

      // Função para calcular o scroll horizontal dinamicamente
      const getScrollAmount = () => {
        let racesWidth = section.scrollWidth;
        return -(racesWidth - window.innerWidth);
      };

      const tween = gsap.to(section, {
        x: getScrollAmount,
        ease: "none",
        scrollTrigger: {
          trigger: trigger,
          start: "top top",
          end: () => `+=${getScrollAmount() * -1}`, // A duração do scroll é igual ao tamanho do conteúdo extra
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true, // Recalcula ao redimensionar
          anticipatePin: 1,
          snap: {
            snapTo: 1 / (totalPanels), 
            duration: { min: 0.2, max: 0.6 },
            delay: 0.1,
            ease: "power3.inOut"
          }
        }
      });
      
      return () => {
        // Cleanup específico do media query
        tween.kill();
      };
    });

    return () => mm.revert(); // Cleanup total
  }, []);

  return (
    <section id="method" className="relative bg-transparent overflow-hidden">
      
      {/* Container Desktop (Com Trigger GSAP) */}
      <div ref={triggerRef} className="hidden md:flex h-screen items-center overflow-hidden">
        
        {/* Horizontal Strip Desktop - w-max garante que os itens fiquem em linha */}
        <div ref={sectionRef} className="flex gap-16 px-20 h-auto w-max flex-nowrap items-center">
          
          {/* Intro Card Desktop */}
          <div className="flex flex-col justify-center h-[70vh] min-w-[40vw] px-20 z-10 bg-white/60 backdrop-blur-xl border-r border-white/40 shadow-[10px_0_30px_rgba(0,0,0,0.02)] rounded-[3rem]">
            <span className="text-blue-600 font-mono mb-4 tracking-widest font-bold">00 — A JORNADA</span>
            <h2 className="text-5xl xl:text-6xl font-serif text-slate-900 mb-6 leading-tight">Não é mágica.<br/>É Engenharia.</h2>
            <p className="text-xl text-slate-600 max-w-md font-light leading-relaxed">
              Vamos consertar a "fiação" do seu sistema nervoso. Não com palavras bonitas, mas com protocolos fisiológicos.
            </p>
          </div>

          {/* Steps */}
          {steps.map((step) => (
            <div key={step.id} className="relative group min-w-[600px] h-[70vh] flex flex-col rounded-[2rem] overflow-hidden border border-white/40 bg-white/60 backdrop-blur-lg shadow-xl transition-all duration-700 hover:border-blue-200/50 hover:shadow-2xl hover:shadow-blue-900/5">
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/10 to-transparent z-10"></div>
              <img 
                src={step.image} 
                alt={step.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-90 group-hover:opacity-100"
              />
              <div className="relative z-20 mt-auto p-10">
                <span className="text-8xl font-bold text-white/20 absolute top-6 right-6 font-sans">
                  0{step.id}
                </span>
                <h3 className="text-4xl font-serif text-white mb-4 drop-shadow-md">{step.title}</h3>
                <p className="text-lg text-slate-100 font-light leading-relaxed max-w-md drop-shadow-sm">{step.subtitle}</p>
              </div>
            </div>
          ))}
          
          {/* Final CTA Card Desktop */}
          <div className="min-w-[500px] h-[70vh] flex flex-col justify-center items-center p-10 rounded-[2rem] border-2 border-dashed border-blue-200 bg-white/40 backdrop-blur-sm">
             <h3 className="text-4xl font-serif text-center mb-6 text-slate-900">Assuma o Controle.</h3>
             <p className="text-slate-500 text-center mb-8 max-w-xs">A vida sem o aperto no peito existe.</p>
             <a href="#pricing" className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-semibold transition-all shadow-[0_10px_30px_rgba(59,130,246,0.3)] hover:scale-105 hover:shadow-blue-500/40">
               Quero Iniciar Minha Jornada
             </a>
          </div>
        </div>
      </div>

      {/* MOBILE VIEW (Native CSS Snap - Totalmente Separado) */}
      <div className="md:hidden py-16">
        <div className="px-6 mb-8">
          <span className="text-blue-600 font-mono text-xs tracking-widest font-bold uppercase mb-2 block">O Protocolo</span>
          <h2 className="text-3xl font-serif text-slate-900 mb-2">Engenharia da Mente</h2>
          <p className="text-slate-500 text-sm">Deslize para ver como vamos consertar o sistema <ArrowRight className="inline w-4 h-4 ml-1 animate-pulse"/></p>
        </div>

        {/* Scroll Container Mobile */}
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 px-6 pb-12 w-full no-scrollbar">
          {steps.map((step) => (
            <div key={step.id} className="snap-center shrink-0 w-[85vw] h-[60vh] rounded-3xl relative overflow-hidden shadow-lg border border-white/50">
               <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent z-10"></div>
               <img 
                  src={step.image} 
                  alt={step.title} 
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="relative z-20 h-full flex flex-col justify-end p-6">
                  <span className="text-5xl font-bold text-white/20 absolute top-4 right-4 font-sans">
                    0{step.id}
                  </span>
                  <h3 className="text-2xl font-serif text-white mb-2 leading-tight">{step.title}</h3>
                  <p className="text-slate-200 text-sm font-light leading-relaxed opacity-90">{step.subtitle}</p>
                </div>
            </div>
          ))}

          {/* Final CTA Card Mobile */}
          <div className="snap-center shrink-0 w-[85vw] h-[60vh] rounded-3xl bg-white/80 border border-blue-100 flex flex-col justify-center items-center p-6 text-center shadow-lg">
             <h3 className="text-2xl font-serif text-slate-900 mb-4">Sua Cura é Agora</h3>
             <p className="text-slate-500 text-sm mb-6">Não adie mais a sua paz.</p>
             <a href="#pricing" className="px-8 py-3 bg-blue-600 text-white rounded-full font-bold shadow-lg shadow-blue-500/30 w-full">
               Ver Planos e Valores
             </a>
          </div>
        </div>
      </div>

    </section>
  );
};
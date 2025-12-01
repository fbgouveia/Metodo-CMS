import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// DADOS (Imagens Oficiais)
const steps = [
  { id: 1, title: "Módulo 1: Introdução", subtitle: "Descubra o que é ansiedade, como ela se manifesta e quando deixa de ser natural.", image: "https://quiteriagouveia.com/wp-content/uploads/2025/11/card0.jpg" },
  { id: 2, title: "Módulo 2: Entendendo", subtitle: "Aprenda a diferenciar ansiedade normal de patológica e mapeie seus gatilhos.", image: "https://quiteriagouveia.com/wp-content/uploads/2025/11/card1.jpg" },
  { id: 3, title: "Módulo 3: Técnicas", subtitle: "Respiração e relaxamento. Ferramentas práticas para controlar crises.", image: "https://quiteriagouveia.com/wp-content/uploads/2025/11/card2.jpg" },
  { id: 4, title: "Módulo 4: Pensamentos", subtitle: "Gerenciamento de Pensamentos Automáticos Negativos. Quebre crenças sabotadoras.", image: "https://quiteriagouveia.com/wp-content/uploads/2025/11/card3.jpg" },
  { id: 5, title: "Módulo 5: Hábitos", subtitle: "Sono, alimentação e rotina. Ajustes fisiológicos que reduzem a ansiedade.", image: "https://quiteriagouveia.com/wp-content/uploads/2025/11/card4.jpg" },
  { id: 6, title: "Módulo 6: Autoestima", subtitle: "Fortaleça sua relação consigo mesma e aprenda a se acolher.", image: "https://quiteriagouveia.com/wp-content/uploads/2025/11/card5.jpg" },
  { id: 7, title: "Módulo 7: Futuro Livre", subtitle: "Celebrando conquistas e planejando um futuro sem o peso do medo.", image: "https://quiteriagouveia.com/wp-content/uploads/2025/11/card6.jpg" }
];

export const HorizontalScroll: React.FC = () => {
  const componentRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const mobileContainerRef = useRef<HTMLDivElement>(null); // Ref para o scroll mobile

  // Função para mover o scroll via botões
  const scrollMobile = (direction: 'left' | 'right') => {
    if (mobileContainerRef.current) {
      const scrollAmount = window.innerWidth * 0.8; // Move 80% da tela
      mobileContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      ScrollTrigger.getAll().forEach(t => t.kill());
      if (window.innerWidth > 768) {
        const slider = sliderRef.current;
        const container = componentRef.current;
        if (slider && container) {
          const totalWidth = slider.scrollWidth - window.innerWidth;
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
    <section ref={componentRef} id="method" className="relative bg-transparent overflow-hidden py-16 md:py-24 z-30 border-t border-white/20">
      
      {/* DESKTOP VIEW (Inalterado) */}
      <div className="hidden md:flex h-screen items-center overflow-hidden sticky top-0">
        <div ref={sliderRef} className="flex gap-12 px-20 w-max h-full items-center">
          <div className="min-w-[35vw] pr-10 flex flex-col justify-center bg-white/40 backdrop-blur-md p-10 rounded-[3rem] border border-white/50 shadow-lg">
            <span className="text-blue-700 font-bold tracking-widest uppercase text-sm block mb-4">A Jornada</span>
            <h2 className="text-5xl xl:text-7xl font-serif text-slate-900 mb-6 leading-tight">Não é mágica.<br/>É Ciência.</h2>
            <p className="text-xl text-slate-800 max-w-md leading-relaxed">Um protocolo clínico completo dividido em 7 módulos práticos.</p>
            <div className="mt-8 flex items-center gap-2 text-slate-600 animate-pulse text-sm"><span>Arraste para ver os módulos</span> <ArrowRight size={20} /></div>
          </div>
          {steps.map((step) => (
            <div key={step.id} className="relative min-w-[500px] h-[70vh] rounded-[2.5rem] overflow-hidden shadow-2xl group border-4 border-white/60 bg-white">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10"></div>
              <img src={step.image} alt={step.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="relative z-20 h-full flex flex-col justify-end p-10 text-white">
                <span className="text-6xl font-bold text-white/20 absolute top-8 right-8 font-sans">0{step.id}</span>
                <h3 className="text-3xl font-serif mb-3">{step.title}</h3>
                <p className="text-white/90 text-sm leading-relaxed border-l-2 border-blue-500 pl-4">{step.subtitle}</p>
              </div>
            </div>
          ))}
          <div className="min-w-[400px] h-[70vh] rounded-[2.5rem] bg-slate-900/95 backdrop-blur-xl text-white flex flex-col justify-center items-center text-center p-10 shadow-2xl border border-white/20">
            <h3 className="text-4xl font-serif mb-6">Assuma o Controle.</h3>
            <a href="#pricing" className="px-10 py-4 bg-white text-slate-900 rounded-full font-bold hover:bg-blue-50 transition-all shadow-lg hover:scale-105">Ver Planos</a>
          </div>
          <div className="w-24"></div>
        </div>
      </div>

      {/* --- MOBILE VIEW (COM BOTÕES DE CONTROLE) --- */}
      <div className="md:hidden py-8 px-4 relative group">
        
        <div className="mb-6 px-2 text-center bg-white/60 backdrop-blur-md rounded-3xl py-4 border border-white/50 shadow-sm">
            <span className="text-blue-700 font-bold text-xs uppercase tracking-widest">O Protocolo</span>
            <h2 className="text-2xl font-serif text-slate-900 mt-1">7 Passos para a Liberdade</h2>
        </div>
        
        {/* Container Scrollavel com Ref */}
        <div ref={mobileContainerRef} className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-8 no-scrollbar px-2 scroll-smooth">
            {steps.map((step) => (
            <div key={step.id} className="snap-center shrink-0 w-[85vw] h-[55vh] rounded-3xl relative overflow-hidden shadow-lg border-2 border-white bg-white">
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent z-10"></div>
                <img src={step.image} alt={step.title} className="absolute inset-0 w-full h-full object-cover" />
                <div className="relative z-20 h-full flex flex-col justify-end p-6 text-white">
                    <span className="text-4xl font-bold text-white/10 absolute top-4 right-4 font-sans">0{step.id}</span>
                    <h3 className="text-xl font-serif mb-2">{step.title}</h3>
                    <p className="text-white/80 text-xs leading-relaxed">{step.subtitle}</p>
                </div>
            </div>
            ))}
            <div className="snap-center shrink-0 w-[85vw] h-[55vh] rounded-3xl bg-slate-900 flex flex-col justify-center items-center text-center p-8 text-white">
                <h3 className="text-2xl font-serif mb-4">Sua vez.</h3>
                <a href="#pricing" className="px-8 py-3 bg-white text-slate-900 rounded-full font-bold text-sm shadow-lg">Ver Planos</a>
            </div>
        </div>

        {/* --- BOTÕES FLUTUANTES DE NAVEGAÇÃO --- */}
        <div className="flex justify-center gap-4 mt-[-10px] relative z-20">
            <button 
                onClick={() => scrollMobile('left')}
                className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-slate-900 border border-slate-100 hover:bg-slate-50 active:scale-95 transition-all"
            >
                <ChevronLeft size={24} />
            </button>
            <button 
                onClick={() => scrollMobile('right')}
                className="w-12 h-12 rounded-full bg-slate-900 shadow-lg flex items-center justify-center text-white border border-slate-800 hover:bg-slate-800 active:scale-95 transition-all"
            >
                <ChevronRight size={24} />
            </button>
        </div>

      </div>

    </section>
  );
};

import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';

// Registra o plugin fora do componente
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
    subtitle: "Você vai aprender técnicas práticas para ativar seu sistema de relaxamento.",
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
    subtitle: "Quem era você antes do medo travar sua vida? Vamos buscá-la de volta.",
    image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&w=1500&auto=format&fit=crop"
  },
  {
    id: 5,
    title: "Soberania Emocional",
    subtitle: "O objetivo não é 'controlar' a crise, é não ter crise. Liberdade total.",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1500&auto=format&fit=crop"
  }
];

export const HorizontalScroll: React.FC = () => {
  const wrapperRef = useRef<HTMLDivElement>(null); // O container principal
  const trackRef = useRef<HTMLDivElement>(null);   // A faixa que se move

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // APENAS DESKTOP (Largura > 768px)
      mm.add("(min-width: 769px)", () => {
        const track = trackRef.current;
        const wrapper = wrapperRef.current;

        if (track && wrapper) {
          const totalWidth = track.scrollWidth - window.innerWidth;
          
          gsap.to(track, {
            x: -totalWidth, // Move para a esquerda
            ease: "none",
            scrollTrigger: {
              trigger: wrapper,
              start: "top top",
              end: () => `+=${totalWidth}`, // Duração baseada no tamanho do conteúdo
              pin: true, // Trava a tela
              scrub: 1,  // Suavidade
              invalidateOnRefresh: true, // Recalcula se redimensionar
            }
          });
        }
      });

    }, wrapperRef); // Escopo de limpeza

    return () => ctx.revert();
  }, []);

  return (
    <section id="method" className="relative bg-slate-50 z-30">
      
      {/* --- VERSÃO DESKTOP (Wrapper para o GSAP) --- */}
      <div ref={wrapperRef} className="hidden md:flex h-screen w-full overflow-hidden items-center">
        <div ref={trackRef} className="flex gap-16 px-20 w-max h-full items-center">
          
          {/* Intro Card */}
          <div className="min-w-[35vw] flex flex-col justify-center pr-10">
            <span className="text-blue-600 font-bold tracking-widest uppercase mb-4 block text-sm">O Método</span>
            <h2 className="text-5xl xl:text-7xl font-serif text-slate-900 mb-6 leading-tight">
              Não é mágica.<br/>É Ciência.
            </h2>
            <p className="text-xl text-slate-600 max-w-md leading-relaxed">
              Vamos regular seu sistema nervoso com um protocolo clínico passo a passo.
            </p>
            <div className="mt-8 flex items-center gap-2 text-slate-400 animate-pulse text-sm">
               <span>Role para baixo</span> <ArrowRight size={20} />
            </div>
          </div>

          {/* Cards */}
          {steps.map((step) => (
            <div key={step.id} className="relative min-w-[500px] h-[70vh] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white bg-white group">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10"></div>
              <img 
                src={step.image} 
                alt={step.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="relative z-20 h-full flex flex-col justify-end p-10">
                <span className="text-8xl font-bold text-white/20 absolute top-8 right-8 font-sans">0{step.id}</span>
                <h3 className="text-3xl font-serif text-white mb-3">{step.title}</h3>
                <p className="text-white/90 text-base leading-relaxed border-l-4 border-blue-500 pl-4">
                  {step.subtitle}
                </p>
              </div>
            </div>
          ))}

          {/* Final CTA */}
          <div className="min-w-[400px] h-[70vh] rounded-[2.5rem] bg-[#1d1d1f] text-white flex flex-col justify-center items-center text-center p-10 shadow-2xl">
            <h3 className="text-4xl font-serif mb-6">Sua vez.</h3>
            <a href="#pricing" className="px-10 py-4 bg-white text-slate-900 rounded-full font-bold hover:bg-blue-50 transition-all shadow-lg">
              Ver Planos
            </a>
          </div>
          
          <div className="w-24"></div>
        </div>
      </div>

      {/* --- VERSÃO MOBILE (NATIVE SNAP) --- */}
      <div className="md:hidden py-20 px-4">
        <div className="mb-8 px-2">
            <span className="text-blue-600 font-bold text-xs uppercase tracking-widest">O Protocolo</span>
            <h2 className

import React, { useRef } from 'react'; // <--- ESSA LINHA É A CURA DO ERRO
import { ArrowRight } from 'lucide-react';

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
  const scrollContainer = useRef<HTMLDivElement>(null);

  return (
    <section id="method" className="relative bg-slate-50 py-24 overflow-hidden z-20">
      
      <div className="max-w-7xl mx-auto px-6 mb-12 flex flex-col md:flex-row items-end justify-between gap-6">
        <div>
          <span className="text-blue-600 font-bold tracking-widest uppercase text-xs mb-2 block">A Jornada</span>
          <h2 className="text-4xl md:text-5xl font-serif text-slate-900 leading-tight">
            Não é mágica.<br/>É Ciência.
          </h2>
        </div>
        <div className="flex items-center gap-2 text-slate-500 animate-pulse text-sm font-medium">
           <span>Arraste para o lado</span> <ArrowRight size={20} />
        </div>
      </div>

      <div 
        ref={scrollContainer}
        className="flex overflow-x-auto snap-x snap-mandatory gap-8 px-6 pb-12 w-full no-scrollbar cursor-grab active:cursor-grabbing"
        style={{ scrollBehavior: 'smooth' }}
      >
          {/* Intro Card */}
          <div className="min-w-[300px] md:min-w-[400px] h-[500px] flex flex-col justify-center p-10 bg-white rounded-[2.5rem] shadow-lg border border-slate-100 snap-center">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">O Protocolo CMS</h3>
            <p className="text-slate-600 leading-relaxed">
              Vamos regular seu sistema nervoso. Não com palavras vazias, mas com um passo a passo clínico validado.
            </p>
          </div>

          {/* Cards dos Passos */}
          {steps.map((step) => (
            <div key={step.id} className="relative min-w-[320px] md:min-w-[400px] h-[500px] rounded-[2.5rem] overflow-hidden shadow-xl group snap-center border-4 border-white bg-white">
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent z-10"></div>
              <img 
                src={step.image} 
                alt={step.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="relative z-20 h-full flex flex-col justify-end p-8">
                <span className="text-6xl font-bold text-white/20 absolute top-6 right-6 font-sans">0{step.id}</span>
                <h3 className="text-2xl font-serif text-white mb-2">{step.title}</h3>
                <p className="text-white/90 text-sm leading-relaxed border-l-2 border-blue-500 pl-4">
                  {step.subtitle}
                </p>
              </div>
            </div>
          ))}

          {/* Final CTA Card */}
          <div className="min-w-[320px] md:min-w-[400px] h-[500px] rounded-[2.5rem] bg-[#1d1d1f] text-white flex flex-col justify-center items-center text-center p-8 shadow-2xl snap-center">
            <h3 className="text-3xl font-serif mb-4">Assuma o Controle.</h3>
            <p className="text-gray-400 mb-8 text-sm">A vida sem o aperto no peito existe e começa com uma decisão.</p>
            <a href="#pricing" className="px-8 py-3 bg-white text-slate-900 rounded-full font-bold hover:bg-blue-50 transition-all shadow-lg hover:scale-105">
              Ver Planos
            </a>
          </div>

          <div className="min-w-[50px]"></div>
      </div>
    </section>
  );
};

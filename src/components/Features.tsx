import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { FeatureItem } from '../types';

gsap.registerPlugin(ScrollTrigger);

const features: FeatureItem[] = [
  {
    title: "O Fim da Vergonha",
    description: "Cada minuto que você passa escondendo o que sente é um minuto de vida jogado fora. Entenda a biologia do medo e pare de se sentir um defeito físico.",
    color: "from-blue-200/40 to-blue-100/10"
  },
  {
    title: "Resgate Biológico",
    description: "A ansiedade sequestrou sua respiração. Vamos tomar de volta o controle do seu sistema nervoso via corpo, sem depender apenas de química.",
    color: "from-amber-200/40 to-amber-100/10"
  },
  {
    title: "Basta de 'Diquinhas'",
    description: "Conselhos rasos de internet não resolvem pânico profundo. Você precisa de um protocolo clínico, não de paliativos que só te atrasam.",
    color: "from-blue-200/40 to-blue-100/10"
  },
  {
    title: "Corte o Ruído",
    description: "Aquela voz catastrófica que rouba seu sono tem um interruptor. Vamos localizar esse interruptor e dar o comando de silêncio agora.",
    color: "from-red-200/40 to-red-100/10"
  },
  {
    title: "Segurança Absoluta",
    description: "O medo vem da falta de rota de fuga. Aqui você terá um mapa de resgate: sentiu o pânico? Faça isso, isso e aquilo. O controle é seu.",
    color: "from-emerald-200/40 to-emerald-100/10"
  },
  {
    title: "Dormir sem Medo",
    description: "O custo de uma noite mal dormida é a sua sanidade no dia seguinte. Aprenda a 'desligar a chave' e apagar com segurança total.",
    color: "from-orange-200/40 to-orange-100/10"
  },
  {
    title: "Retome sua Força",
    description: "Você não é um fardo; você é uma mulher forte que está sob ataque. Vamos desarmar esse ataque e resgatar sua autoestima.",
    color: "from-rose-200/40 to-rose-100/10"
  },
  {
    title: "O Mapa do Futuro",
    description: "Saia do modo 'sobrevivência'. Onde você quer estar daqui a um ano? Viajando ou presa num quarto? A escolha é agir agora.",
    color: "from-cyan-200/40 to-cyan-100/10"
  },
  {
    title: "Fale com a Dra. Quitéria",
    description: "Sem termos médicos complicados. É uma estratégia de resgate direta e honesta, baseada em 40 anos livrando mulheres do pânico.",
    color: "from-blue-200/40 to-blue-100/10"
  },
  {
    title: "Sua Vida de Volta",
    description: "A vida que você tinha antes do pânico não morreu; ela está apenas trancada. O CMS é a chave para você voltar a dirigir, viajar e viver.",
    color: "from-sky-200/40 to-sky-100/10"
  }
];

export const Features: React.FC = () => {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".feature-card",
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 80%",
          }
        }
      );
    }, gridRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="features" className="py-32 relative bg-transparent overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <div className="inline-block px-4 py-1.5 rounded-full bg-blue-50/50 backdrop-blur-md border border-blue-100 mb-6 shadow-sm">
            <span className="text-xs font-bold text-blue-600 tracking-wider uppercase">Promessa CMS</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-serif mb-6 text-slate-900 tracking-tight">
            O Que Você Não Pode<br /> Mais Ignorar
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg font-light leading-relaxed">
            Ignorar a ansiedade profunda não a faz desaparecer. Ela apenas se torna mais&nbsp;cara&nbsp;e&nbsp;mais&nbsp;dolorosa.
          </p>
        </div>

        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 auto-rows-fr">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`feature-card group relative p-8 md:p-10 rounded-[2.5rem] bg-white/40 backdrop-blur-xl border border-white/60 overflow-hidden transition-[background-color,transform,shadow,border-color] duration-500 hover:bg-white/60 hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.1)] motion-safe:hover:-translate-y-2 hover:border-white/80 shadow-sm will-change-transform ${index >= 8 ? 'md:col-span-2 xl:col-span-2' : '' // Cards finais maiores
                }`}
            >
              {/* Atmosfera (Gradient Blob) */}
              <div className={`absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-br ${feature.color} rounded-full blur-3xl opacity-30 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`}></div>

              {/* Número Editorial Gigante */}
              <div className="absolute top-0 right-6 text-[8rem] leading-none font-serif font-bold text-slate-900/5 group-hover:text-slate-900/10 group-hover:scale-110 transition-all duration-700 select-none pointer-events-none z-0">
                {index + 1 < 10 ? `0${index + 1}` : index + 1}
              </div>

              {/* Conteúdo */}
              <div className="relative z-10 h-full flex flex-col justify-end min-h-[180px]">
                <h3 className="text-2xl font-serif text-slate-900 mb-4 font-semibold group-hover:text-blue-700 transition-colors drop-shadow-sm">
                  {feature.title}
                </h3>
                <div className="w-12 h-0.5 bg-slate-400/30 mb-4 group-hover:w-24 group-hover:bg-blue-400 transition-all duration-500"></div>
                <p className="text-slate-600 text-sm leading-relaxed font-medium group-hover:text-slate-800 transition-colors">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
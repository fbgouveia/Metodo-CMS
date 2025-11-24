import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { FeatureItem } from '../types';

gsap.registerPlugin(ScrollTrigger);

const features: FeatureItem[] = [
  {
    title: "O Fim do 'Eu sou Louca'",
    description: "Você vai entender que seus sintomas são químicos, não falha de caráter. Essa clareza tira um peso de 1 tonelada das suas costas.",
    color: "from-blue-200/40 to-blue-100/10"
  },
  {
    title: "Alívio sem Remédio",
    description: "Aprenda técnicas mecânicas que funcionam mais rápido que medicação sublingual. Regule sua crise na respiração e no nervo vago.",
    color: "from-amber-200/40 to-amber-100/10"
  },
  {
    title: "Chega de Frankenstein",
    description: "Pare de pegar dicas soltas no Instagram. Aqui você tem um sistema com começo, meio e fim. O quebra-cabeça finalmente se encaixa.",
    color: "from-indigo-200/40 to-indigo-100/10"
  },
  {
    title: "Silencie a Voz Ruim",
    description: "Aquela voz que diz 'vai dar tudo errado' tem um botão de mudo. Eu vou te ensinar a apertar esse botão com neurociência.",
    color: "from-red-200/40 to-red-100/10"
  },
  {
    title: "Zero Improviso",
    description: "O medo vem da incerteza. Você terá um protocolo de guerra. Sentiu o coração bater? Faça A, B e C. O pânico não tem chance.",
    color: "from-emerald-200/40 to-emerald-100/10"
  },
  {
    title: "Sono Reparador",
    description: "Sua mente não desliga à noite? Vamos desinflamar seu sistema nervoso para que você apague e acorde renovada, não exausta.",
    color: "from-orange-200/40 to-orange-100/10"
  },
  {
    title: "Volte a se Amar",
    description: "A ansiedade te fez acreditar que você é um fardo. Vamos provar que você é forte, capaz e digna de felicidade e relacionamentos saudáveis.",
    color: "from-rose-200/40 to-rose-100/10"
  },
  {
    title: "O Mapa da Vida",
    description: "Saia do modo sobrevivência. Vamos traçar metas reais. Onde você quer estar daqui a 1 ano? Viajando? Namorando? Em paz?",
    color: "from-cyan-200/40 to-cyan-100/10"
  },
  {
    title: "Terapia sem 'Enrolação'",
    description: "Eu vou direto ao ponto. Sem rodeios, sem termos difíceis. É conversa de mulher para mulher, com base científica sólida.",
    color: "from-violet-200/40 to-violet-100/10"
  },
  {
    title: "Liberdade Real",
    description: "Imagine ir ao shopping, dirigir, trabalhar e viver sem aquele medo constante de 'passar mal'. Essa vida te espera do outro lado.",
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
            10 Pilares da Liberdade
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg font-light leading-relaxed">
            Esqueça o "controle". O objetivo aqui é a eliminação do sintoma através da regulação biológica.
          </p>
        </div>

        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 auto-rows-fr">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`feature-card group relative p-8 md:p-10 rounded-[2.5rem] bg-white/40 backdrop-blur-xl border border-white/60 overflow-hidden transition-all duration-500 hover:bg-white/60 hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.1)] hover:-translate-y-2 hover:border-white/80 shadow-sm ${
                index >= 8 ? 'md:col-span-2 xl:col-span-2' : '' // Cards finais maiores
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
import React, { useRef, useEffect } from 'react';
// Lucide icons removed to follow "Non-Obvious Persuasive Design" protocol
import gsap from 'gsap';

const testimonials = [
  {
    name: "Ana Clara",
    role: "Ia se separar",
    text: "Meu casamento estava acabando. Eu era chata, nervosa, cobrava tudo. O Módulo de 'Identidade' me salvou. Meu marido disse que casei de novo com ele.",
    score: "5.0"
  },
  {
    name: "Roberto Mendes",
    role: "Achava que era Infarto",
    text: "Fui pro pronto-socorro 12 vezes ano passado. Fiz todos os exames. Era pânico. Em 3 dias de curso, parei de ter crises. Surreal.",
    score: "5.0"
  },
  {
    name: "Juliana Costa",
    role: "Voltou a Dirigir",
    text: "O carro estava na garagem há 2 anos. Eu tremia só de ver a chave. A Dra. Quitéria me ensinou a enganar meu medo. Hoje dirijo na estrada!",
    score: "5.0"
  },
  {
    name: "Marcos Vinicius",
    role: "Livre de Medicamento",
    text: "Meu psiquiatra reduziu minha dose pela metade depois que comecei o CMS. Estou dormindo igual pedra, sem remédio pra apagar.",
    score: "5.0"
  },
  {
    name: "Patrícia Lima",
    role: "Mãe Recuperada",
    text: "Eu gritava com meus filhos por qualquer coisa. A ansiedade me deixava agressiva. O curso me devolveu a doçura. Minha casa está em paz.",
    score: "5.0"
  }
];

export const Testimonials: React.FC = () => {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const content = marqueeRef.current;
      if (content) {
        const list = content.querySelector('.marquee-content');
        if (list) {
          const clone = list.cloneNode(true);
          content.appendChild(clone);

          const mm = gsap.matchMedia();
          mm.add("(prefers-reduced-motion: no-preference)", () => {
            gsap.to(content.children, {
              xPercent: -100,
              repeat: -1,
              duration: 40,
              ease: "linear"
            });
          });
        }
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="py-32 overflow-hidden bg-slate-900 relative z-10 border-y border-slate-800">
      <div className="container mx-auto px-6 text-center mb-20 animate-fade-in">
        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md">
          <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></div>
          <span className="text-[10px] font-black text-blue-400 tracking-[0.3em] uppercase">Vidas Transformadas</span>
        </div>
        <h2 className="text-4xl md:text-6xl font-serif text-white mb-6 leading-tight tracking-tight">
          Eles recuperaram o leme <br /><span className="text-blue-500 italic">de suas vidas.</span>
        </h2>
        <p className="text-slate-500 text-lg max-w-2xl mx-auto font-light italic border-l-2 border-slate-800 pl-8">
          Histórias reais do campo de batalha: do caos mental à liberdade absoluta sob orientação da Dra. Quitéria.
        </p>
      </div>

      <div className="relative w-full overflow-hidden pointer-events-none mb-20">
        <div className="absolute inset-y-0 left-0 w-48 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent z-10"></div>
        <div className="absolute inset-y-0 right-0 w-48 bg-gradient-to-l from-slate-900 via-slate-900/80 to-transparent z-10"></div>

        <div ref={marqueeRef} className="flex w-fit">
          <div className="marquee-content flex gap-8 px-4">
            {testimonials.map((t, i) => (
              <div key={i} className="w-[400px] p-10 bg-white/5 rounded-[3rem] border border-white/5 backdrop-blur-xl flex flex-col shadow-2xl group hover:border-blue-500/30 transition-all duration-700">
                <div className="flex items-center gap-6 mb-8 justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center font-serif text-blue-400 font-bold border border-blue-500/20">
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-sm tracking-wide">{t.name}</h4>
                      <p className="text-blue-500 text-[10px] uppercase tracking-[0.2em] font-black mt-0.5">{t.role}</p>
                    </div>
                  </div>
                  <div className="text-[10px] font-black text-amber-500/80 tracking-widest bg-amber-500/5 px-3 py-1 rounded-full border border-amber-500/10">
                    {t.score} / 5.0
                  </div>
                </div>
                <div className="flex-1 relative">
                  <span className="absolute -top-6 -left-4 text-7xl font-serif text-white/5 select-none pointer-events-none">"</span>
                  <p className="text-slate-400 text-base leading-relaxed font-light italic relative z-10">
                    {t.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="text-center relative z-20">
        <a href="#pricing" className="inline-flex items-center gap-10 px-12 py-6 bg-blue-600 text-white rounded-full font-bold hover:bg-blue-700 transition-all shadow-2xl shadow-blue-900/40 group">
          <span className="uppercase tracking-[0.2em] text-sm">Quero ter minha vida de volta</span>
          <div className="w-12 h-[1px] bg-white/30 relative overflow-hidden group-hover:bg-white transition-colors">
            <div className="absolute inset-0 bg-white -translate-x-full group-hover:animate-shimmer"></div>
          </div>
        </a>
      </div>
    </section>
  );
};
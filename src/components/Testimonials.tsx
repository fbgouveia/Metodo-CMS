import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { Star, Quote, ArrowRight } from 'lucide-react';

const testimonials = [
  {
    name: "Ana Clara",
    role: "Ia se separar",
    text: "Meu casamento estava acabando. Eu era chata, nervosa, cobrava tudo. O Módulo de 'Identidade' me salvou. Meu marido disse que casei de novo com ele."
  },
  {
    name: "Roberto Mendes",
    role: "Achava que era Infarto",
    text: "Fui pro pronto-socorro 12 vezes ano passado. Fiz todos os exames. Era pânico. Em 3 dias de curso, parei de ter crises. Surreal."
  },
  {
    name: "Juliana Costa",
    role: "Voltou a Dirigir",
    text: "O carro estava na garagem há 2 anos. Eu tremia só de ver a chave. A Dra. Quitéria me ensinou a enganar meu medo. Hoje dirijo na estrada!"
  },
  {
    name: "Marcos Vinicius",
    role: "Livre de Medicamento",
    text: "Meu psiquiatra reduziu minha dose pela metade depois que comecei o CMS. Estou dormindo igual pedra, sem remédio pra apagar."
  },
  {
    name: "Patrícia Lima",
    role: "Mãe Recuperada",
    text: "Eu gritava com meus filhos por qualquer coisa. A ansiedade me deixava agressiva. O curso me devolveu a doçura. Minha casa está em paz."
  }
];

export const Testimonials: React.FC = () => {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const content = marqueeRef.current;
      if (content) {
        // Clone elements for seamless loop
        const list = content.querySelector('.marquee-content');
        if (list) {
          // Clone elements for seamless loop
          const clone = list.cloneNode(true);
          content.appendChild(clone);

          const mm = gsap.matchMedia();

          mm.add("(prefers-reduced-motion: no-preference)", () => {
            gsap.to(content.children, {
              xPercent: -100,
              repeat: -1,
              duration: 30,
              ease: "linear"
            });
          });
        }
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="py-20 overflow-hidden bg-slate-900 relative z-10 border-y border-slate-800">
      <div className="container mx-auto px-6 text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-serif text-white">
          Eles recuperaram o leme de suas vidas.
        </h2>
        <p className="text-slate-500 text-lg max-w-2xl mx-auto font-light">
          Histórias reais do campo de batalha: do caos mental à liberdade absoluta.
        </p>
      </div>

      <div className="relative w-full overflow-hidden pointer-events-none mask-linear-fade mb-12">
        {/* Gradient Masks for fading edges */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-slate-900 to-transparent z-10"></div>
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-slate-900 to-transparent z-10"></div>

        <div ref={marqueeRef} className="flex w-fit">
          <div className="marquee-content flex gap-8 px-4">
            {testimonials.map((t, i) => (
              <div key={i} className="w-[350px] p-6 bg-slate-800/50 rounded-2xl border border-slate-700/50 backdrop-blur-sm flex flex-col shadow-xl">
                <div className="flex items-center gap-4 mb-4 justify-between">
                  <div>
                    <h4 className="text-white font-bold text-sm">{t.name}</h4>
                    <p className="text-blue-400 text-xs uppercase tracking-wider font-medium">{t.role}</p>
                  </div>
                  <div className="flex gap-0.5">
                    {[1, 2, 3, 4, 5].map(star => <Star key={star} className="w-3 h-3 text-amber-400 fill-amber-400" />)}
                  </div>
                </div>
                <div className="flex-1">
                  <Quote className="w-6 h-6 text-slate-600 mb-2 opacity-50" />
                  <p className="text-slate-300 text-sm leading-relaxed italic">"{t.text}"</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Funnel CTA - Social Proof Conversion */}
      <div className="text-center relative z-20">
        <a href="#pricing" className="inline-flex items-center gap-3 px-8 py-4 bg-blue-600 text-white rounded-full font-serif font-bold hover:bg-blue-500 transition-all hover:scale-105 shadow-lg shadow-blue-900/50">
          Quero ter minha vida de volta
          <ArrowRight className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
};
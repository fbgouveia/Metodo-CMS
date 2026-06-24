import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const journeyItems = [
  'Aulas curtas, objetivas e fáceis de aplicar no dia a dia.',
  'Exercícios práticos para transformar conhecimento em mudança concreta.',
  'Ferramentas exclusivas do Método CMS para organizar o mundo interno.',
  'Reflexões guiadas que ajudam a compreender o que acontece dentro de você.',
  'Um processo progressivo, que respeita o seu ritmo e favorece mudanças duradouras.',
];

const forYouItems = [
  'Sente que sua mente nunca desacelera.',
  'Vive pensando em muitas coisas ao mesmo tempo.',
  'Tem dificuldade para organizar pensamentos e emoções.',
  'Carrega responsabilidades e preocupações sem conseguir descansar.',
  'Percebe que está sempre em estado de alerta.',
  'Deseja desenvolver mais clareza, equilíbrio e organização emocional.',
];

export const ProgramDetails: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('.pd-card').forEach((card, idx) => {
        gsap.fromTo(
          card,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            delay: idx * 0.15,
            ease: 'power3.out',
            scrollTrigger: { trigger: card, start: 'top 88%' },
          }
        );
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className="pt-8 pb-24 relative z-10 bg-transparent overflow-visible">
      <div ref={containerRef} className="container mx-auto px-6 max-w-6xl">

        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 backdrop-blur-md mb-6 shadow-sm">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
            <span className="text-xs font-bold text-blue-600 tracking-wider uppercase">O que você vai encontrar ao longo da jornada</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-serif text-slate-900 mb-6 tracking-tight leading-tight">
            O Método CMS foi desenvolvido para que{' '}
            <span className="text-blue-600 italic">cada etapa</span>{' '}
            prepare você para a próxima.
          </h2>
          <p className="text-slate-500 font-light text-lg max-w-2xl mx-auto leading-relaxed">
            Não se trata de aprender técnicas soltas ou acumular informações.
            Cada jornada foi construída para ajudar você a desenvolver uma habilidade essencial da{' '}
            <em>Organização Emocional.</em>
          </p>
        </div>

        {/* Grid: o que encontrar + para quem é */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">

          {/* CARD 1 */}
          <div className="pd-card relative bg-blue-50/40 backdrop-blur-xl rounded-[3rem] p-10 md:p-14 border border-blue-100 shadow-xl flex flex-col overflow-hidden group hover:border-blue-300 transition-all duration-700">
            <div className="absolute -right-6 -top-10 text-[15rem] font-serif text-blue-600/5 select-none pointer-events-none leading-none">A</div>
            <div className="relative z-10">
              <span className="text-blue-600 font-black tracking-[0.3em] text-[10px] uppercase mb-4 block">Ao longo do percurso</span>
              <h3 className="text-3xl md:text-4xl font-serif text-slate-900 mb-10 leading-tight font-medium">
                Você terá acesso a:
              </h3>
              <ul className="space-y-5">
                {journeyItems.map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-blue-600/10 border border-blue-200 flex items-center justify-center mt-0.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600 block" />
                    </span>
                    <p className="text-slate-600 text-sm leading-relaxed font-light">{item}</p>
                  </li>
                ))}
              </ul>
              <div className="mt-10 pt-8 border-t border-blue-100">
                <p className="font-serif text-base italic text-slate-500 leading-relaxed">
                  Ao final da jornada, você não terá apenas aprendido sobre ansiedade.{' '}
                  <strong className="text-slate-700 not-italic">Você terá desenvolvido uma nova maneira de compreender, organizar e cuidar da própria mente.</strong>
                </p>
              </div>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="pd-card relative bg-slate-900 rounded-[3rem] p-10 md:p-14 border border-slate-800 shadow-2xl flex flex-col text-white overflow-hidden group">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 group-hover:bg-blue-600/20 transition-all duration-1000" />
            <div className="absolute -right-6 -top-10 text-[15rem] font-serif text-white/5 select-none pointer-events-none leading-none">B</div>
            <div className="relative z-10">
              <span className="text-blue-400 font-black tracking-[0.3em] text-[10px] uppercase mb-4 block">Este método é para você se…</span>
              <h3 className="text-3xl md:text-4xl font-serif text-white mb-10 leading-tight font-medium">
                Você se identifica<br />
                <span className="text-slate-500">com algum desses pontos?</span>
              </h3>
              <ul className="space-y-5">
                {forYouItems.map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-blue-600/20 border border-blue-600/30 flex items-center justify-center mt-0.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400 block" />
                    </span>
                    <p className="text-slate-300 text-sm leading-relaxed font-light">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* CARD 3 — O que torna o Método CMS diferente */}
        <div className="pd-card relative bg-white/70 backdrop-blur-xl rounded-[3rem] p-10 md:p-16 border border-white shadow-xl overflow-hidden group hover:border-blue-100 transition-all duration-700 mb-16">
          <div className="absolute top-0 left-0 w-[600px] h-[400px] bg-blue-50/60 rounded-full blur-[100px] -translate-y-1/2 -translate-x-1/3 pointer-events-none" />
          <div className="relative z-10 flex flex-col md:flex-row gap-12 items-start">
            <div className="md:w-2/5">
              <span className="text-blue-600 font-black tracking-[0.3em] text-[10px] uppercase mb-4 block">O diferencial</span>
              <h3 className="text-3xl md:text-5xl font-serif text-slate-900 leading-tight mb-6">
                O que torna o Método CMS{' '}
                <span className="text-blue-600 italic">diferente?</span>
              </h3>
              <p className="text-slate-500 font-light text-base leading-relaxed border-l-4 border-blue-200 pl-5 italic">
                Em vez de ensinar apenas estratégias para aliviar a ansiedade, o Método CMS propõe algo mais profundo.
              </p>
            </div>
            <div className="md:w-3/5 space-y-8">
              <p className="text-slate-700 text-lg leading-relaxed">
                Ele ensina uma habilidade que normalmente não aprendemos ao longo da vida:{' '}
                <strong className="text-slate-900">a Organização Emocional.</strong>
              </p>
              <p className="text-slate-600 leading-relaxed">
                Quando pensamentos, emoções, responsabilidades, preocupações e cobranças deixam de competir pelo mesmo espaço interno, a mente encontra mais clareza. E, muitas vezes, é justamente essa clareza que permite que o Ruído Mental diminua.
              </p>
              <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6">
                <p className="text-slate-700 leading-relaxed">
                  O objetivo não é eliminar emoções nem prometer uma vida sem dificuldades.
                </p>
                <p className="text-blue-700 font-semibold mt-3 leading-relaxed">
                  O objetivo é ajudar você a construir uma relação mais organizada, consciente e saudável com o seu próprio mundo interno.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Middle Funnel CTA */}
        <div className="text-center pb-4">
          <a
            href="#pricing"
            className="inline-flex items-center gap-10 px-12 py-6 bg-white border border-blue-100 rounded-full shadow-2xl hover:shadow-blue-500/10 transition-all group relative overflow-hidden"
          >
            <div className="flex flex-col text-left relative z-10">
              <span className="text-slate-900 font-serif font-bold text-xl leading-none mb-1">Quero começar minha jornada</span>
              <span className="text-slate-400 text-[10px] font-black uppercase tracking-widest">Escolha seu plano de organização emocional</span>
            </div>
            <div className="w-12 h-[1px] bg-slate-200 relative overflow-hidden group-hover:bg-blue-600 transition-colors">
              <div className="absolute inset-0 bg-blue-600 -translate-x-full group-hover:animate-shimmer" />
            </div>
          </a>
        </div>

      </div>
    </section>
  );
};

import React, { useRef, useLayoutEffect } from 'react';
// Lucide icons removed to follow "Non-Obvious Persuasive Design" protocol
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export const ProgramDetails: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const card1Ref = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Reveal animations for each box
      [card1Ref.current, card2Ref.current].forEach((card, idx) => {
        gsap.fromTo(card,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            delay: idx * 0.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
            }
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="pt-8 pb-24 relative z-10 bg-transparent overflow-visible">
      <div ref={containerRef} className="container mx-auto px-6">

        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 backdrop-blur-md mb-6 shadow-sm">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse"></div>
            <span className="text-xs font-bold text-blue-600 tracking-wider uppercase">A Ciência da Mudança</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-serif text-slate-900 mb-6 tracking-tight leading-tight">
            Ciência com <span className="text-blue-600 italic">Acolhimento.</span>
          </h2>
          <p className="text-slate-500 font-light text-lg max-w-2xl mx-auto italic border-l-2 border-blue-100 pl-6">
            Descubra por que o Método CMS é o abraço técnico que sua mente precisa para finalmente descansar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch mb-24 max-w-6xl mx-auto relative z-20">

          {/* CARD 1: O Curso */}
          <div
            ref={card1Ref}
            className="relative bg-blue-50/40 backdrop-blur-xl rounded-[3rem] p-10 md:p-14 border border-blue-100 shadow-xl flex flex-col overflow-hidden group hover:border-blue-300 transition-all duration-700 h-full"
          >
            <div className="absolute -right-6 -top-10 text-[15rem] font-serif text-blue-600/5 select-none pointer-events-none leading-none z-0 group-hover:text-blue-900/5 transition-colors">A</div>

            <div className="relative z-10">
              <span className="text-blue-600 font-black tracking-[0.3em] text-[10px] uppercase mb-4 block">O Caminho da Autonomia</span>
              <h3 className="text-3xl md:text-4xl font-serif text-slate-900 mb-12 leading-tight font-medium">Método CMS:<br /><span className="text-slate-400">O Mapa da Liberdade</span></h3>

              <ul className="space-y-12">
                <li className="relative pl-0 group/item">
                  <span className="text-5xl font-serif text-blue-200/40 absolute -left-6 -top-8 select-none">I.</span>
                  <h4 className="font-serif text-xl text-slate-900 mb-2 relative z-10 font-medium">O Mapa da Sua Mente</h4>
                  <p className="text-sm text-slate-500 leading-relaxed font-light relative z-10 italic">Você vai parar de achar que está infartando. Vai aprender a ler os sinais do seu corpo e neutralizá-los em segundos.</p>
                </li>
                <li className="relative pl-0 group/item">
                  <span className="text-5xl font-serif text-cyan-200/40 absolute -left-6 -top-8 select-none">II.</span>
                  <h4 className="font-serif text-xl text-slate-900 mb-2 relative z-10 font-medium">Domínio dos Pensamentos</h4>
                  <p className="text-sm text-slate-500 leading-relaxed font-light relative z-10 italic">Sabe aquela voz que diz que tudo vai dar errado? Você vai aprender a silenciá-la com lógica e técnica.</p>
                </li>
                <li className="relative pl-0 group/item">
                  <span className="text-5xl font-serif text-rose-200/40 absolute -left-6 -top-8 select-none">III.</span>
                  <h4 className="font-serif text-xl text-slate-900 mb-2 relative z-10 font-medium">Proteção Familiar</h4>
                  <p className="text-sm text-slate-500 leading-relaxed font-light relative z-10 italic">Quem você ama também sofre com a sua ansiedade. Aqui você aprende a ser a âncora de segurança que seus filhos e seu marido precisam.</p>
                </li>
              </ul>
            </div>
          </div>

          {/* CARD 2: A Mentoria */}
          <div
            ref={card2Ref}
            className="relative bg-slate-900 rounded-[3rem] p-10 md:p-14 border border-slate-800 shadow-2xl flex flex-col text-white overflow-hidden group h-full"
          >
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 group-hover:bg-blue-600/20 transition-all duration-1000"></div>
            <div className="absolute -right-6 -top-10 text-[15rem] font-serif text-white/5 select-none pointer-events-none leading-none z-0">B</div>

            <div className="relative z-10">
              <span className="text-blue-400 font-black tracking-[0.3em] text-[10px] uppercase mb-4 block">O Resgate Individual</span>
              <h3 className="text-3xl md:text-4xl font-serif text-white mb-12 leading-tight font-medium">Mentoria VIP:<br /><span className="text-slate-500">Amparo Direto</span></h3>

              <ul className="space-y-12">
                <li className="relative pl-0 group/item">
                  <span className="text-5xl font-serif text-blue-900/60 absolute -left-6 -top-8 select-none">01</span>
                  <h4 className="font-serif text-xl text-blue-100 mb-2 relative z-10 font-medium">Um Guia ao Seu Lado</h4>
                  <p className="text-sm text-slate-400 leading-relaxed font-light relative z-10 italic">6 encontros ao vivo. Eu estarei com você, cuidando de cada detalhe para que você se sinta segura e amparada em cada etapa da cura.</p>
                </li>
                <li className="relative pl-0 group/item">
                  <span className="text-5xl font-serif text-blue-900/60 absolute -left-6 -top-8 select-none">02</span>
                  <h4 className="font-serif text-xl text-blue-100 mb-2 relative z-10 font-medium">Olho no Olho</h4>
                  <p className="text-sm text-slate-400 leading-relaxed font-light relative z-10 italic">Vou analisar o seu caso. Suas travas. Seus medos. Acesso direto a mim pelo WhatsApp para destravar sua evolução.</p>
                </li>
                <li className="relative pl-0 group/item">
                  <span className="text-5xl font-serif text-amber-900/40 absolute -left-4 -top-6 select-none opacity-40 group-hover/item:text-amber-800 transition-colors">03</span>
                  <h4 className="font-serif text-xl text-amber-100 mb-2 relative z-10 font-medium">O Manual Definitivo</h4>
                  <p className="text-sm text-slate-400 leading-relaxed font-light relative z-10 italic">Você recebe o <strong>Manual de Gestão da Ansiedade</strong>. É o protocolo físico para nunca mais ser refém do pânico.</p>
                </li>
              </ul>

              <div className="mt-16 pt-8 border-t border-white/10 relative z-10">
                <p className="text-center font-serif text-lg italic text-blue-200/60 leading-relaxed">"Na mentoria, sua paz é nossa prioridade absoluta."</p>
              </div>
            </div>
          </div>
        </div>

        {/* Middle Funnel CTA */}
        <div className="text-center pb-12">
          <a href="#pricing" className="inline-flex items-center gap-10 px-12 py-6 bg-white border border-blue-100 rounded-full shadow-2xl hover:shadow-blue-500/10 transition-all group relative overflow-hidden">
            <div className="flex flex-col text-left relative z-10">
              <span className="text-slate-900 font-serif font-bold text-xl leading-none mb-1">Quero parar de sofrer hoje</span>
              <span className="text-slate-400 text-[10px] font-black uppercase tracking-widest">Escolha seu plano de liberdade</span>
            </div>
            <div className="w-12 h-[1px] bg-slate-200 relative overflow-hidden group-hover:bg-blue-600 transition-colors">
              <div className="absolute inset-0 bg-blue-600 -translate-x-full group-hover:animate-shimmer"></div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

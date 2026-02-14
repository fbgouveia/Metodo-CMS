import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export const ProgramDetails: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Animação dos Cards subindo
      gsap.from(".program-box", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        }
      });

      // Animação do Botão CTA
      gsap.from(".program-cta", {
        y: 20,
        opacity: 0,
        duration: 0.6,
        scrollTrigger: {
          trigger: ".program-box",
          start: "bottom 90%",
        }
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    // AQUI ESTÁ A MUDANÇA: bg-transparent (Sem fundo nenhum atrás dos cards)
    <section className="py-24 relative z-10 bg-transparent">
      <div ref={containerRef} className="container mx-auto px-6">

        {/* Cabeçalho */}
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 backdrop-blur-md mb-6 shadow-sm">
            <span className="text-xs font-bold text-blue-600 tracking-wider uppercase">A Ciência da Mudança</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-serif text-slate-900 mb-6 tracking-tight">O Fim da "Conversa Fiada"</h2>
          <p className="text-slate-600 font-light text-lg max-w-2xl mx-auto">
            Por que o Método CMS funciona onde remédios e terapias tradicionais&nbsp;falharam.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch mb-16 max-w-6xl mx-auto">

          {/* CARD 1: O Curso (Claro) */}
          <div className="program-box relative bg-white/80 backdrop-blur-xl rounded-[2rem] p-10 md:p-12 border border-white shadow-xl flex flex-col overflow-hidden group hover:border-blue-200 transition-colors duration-500">
            {/* Marca d'água */}
            <div className="absolute -right-6 -top-10 text-[12rem] font-serif text-slate-900/5 select-none pointer-events-none leading-none z-0 group-hover:text-blue-900/5 transition-colors">
              A
            </div>

            <div className="relative z-10">
              <span className="text-blue-600 font-bold tracking-widest text-xs uppercase mb-2 block">A Base Técnica</span>
              <h3 className="text-3xl md:text-4xl font-serif text-slate-900 mb-10 leading-none">Curso CMS:<br /><span className="text-slate-400">A Caixa de Ferramentas</span></h3>

              <ul className="space-y-10">
                <li className="relative pl-0">
                  <span className="text-5xl font-serif text-blue-200 absolute -left-4 -top-6 opacity-50 select-none">I.</span>
                  <h4 className="font-serif text-xl text-slate-900 mb-2 relative z-10 font-medium">O Mapa da Sua Mente</h4>
                  <p className="text-sm text-slate-600 leading-relaxed font-light relative z-10">Você vai parar de achar que está infartando. Vai aprender a ler os sinais do seu corpo e neutralizá-los em segundos.</p>
                </li>
                <li className="relative pl-0">
                  <span className="text-5xl font-serif text-cyan-200 absolute -left-4 -top-6 opacity-50 select-none">II.</span>
                  <h4 className="font-serif text-xl text-slate-900 mb-2 relative z-10 font-medium">Domínio dos Pensamentos</h4>
                  <p className="text-sm text-slate-600 leading-relaxed font-light relative z-10">Sabe aquela voz que diz que tudo vai dar errado? Você vai aprender a silenciá-la com lógica e técnica.</p>
                </li>
                <li className="relative pl-0">
                  <span className="text-5xl font-serif text-rose-200 absolute -left-4 -top-6 opacity-50 select-none">III.</span>
                  <h4 className="font-serif text-xl text-slate-900 mb-2 relative z-10 font-medium">Blindagem Familiar</h4>
                  <p className="text-sm text-slate-600 leading-relaxed font-light relative z-10">Sua ansiedade afeta quem você ama. Aqui você aprende a proteger seu casamento e seus filhos do seu caos.</p>
                </li>
              </ul>
            </div>
          </div>

          {/* CARD 2: A Mentoria (Escuro) */}
          <div className="program-box relative bg-slate-900 rounded-[2rem] p-10 md:p-12 border border-slate-800 shadow-2xl flex flex-col text-white overflow-hidden group">
            {/* Glow Atmosférico */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 group-hover:bg-blue-600/20 transition-all duration-1000"></div>

            {/* Marca d'água */}
            <div className="absolute -right-6 -top-10 text-[12rem] font-serif text-white/5 select-none pointer-events-none leading-none z-0">
              B
            </div>

            <div className="relative z-10">
              <span className="text-blue-400 font-bold tracking-widest text-xs uppercase mb-2 block">Aceleração Máxima</span>
              <h3 className="text-3xl md:text-4xl font-serif text-white mb-10 leading-none">Mentoria:<br /><span className="text-slate-500">Seguro Contra Falhas</span></h3>

              <ul className="space-y-10">
                <li className="relative pl-0 group/item">
                  <span className="text-5xl font-serif text-blue-900 absolute -left-4 -top-6 opacity-50 group-hover/item:text-blue-800 transition-colors select-none">01</span>
                  <h4 className="font-serif text-xl text-blue-100 mb-2 relative z-10 font-medium">Eu Pego na Sua Mão</h4>
                  <p className="text-sm text-slate-400 leading-relaxed font-light relative z-10">6 encontros ao vivo. Eu não vou deixar você desistir no meio do caminho. É compromisso mútuo e inegociável.</p>
                </li>
                <li className="relative pl-0 group/item">
                  <span className="text-5xl font-serif text-blue-900 absolute -left-4 -top-6 opacity-50 group-hover/item:text-blue-800 transition-colors select-none">02</span>
                  <h4 className="font-serif text-xl text-blue-100 mb-2 relative z-10 font-medium">Olho no Olho</h4>
                  <p className="text-sm text-slate-400 leading-relaxed font-light relative z-10">Vou analisar o seu caso. Suas travas. Seus medos. Acesso direto a mim pelo WhatsApp para destravar sua evolução.</p>
                </li>
                <li className="relative pl-0 group/item">
                  <span className="text-5xl font-serif text-amber-900 absolute -left-4 -top-6 opacity-40 group-hover/item:text-amber-800 transition-colors select-none">★</span>
                  <h4 className="font-serif text-xl text-amber-100 mb-2 relative z-10 font-medium">O Manual Definitivo</h4>
                  <p className="text-sm text-slate-400 leading-relaxed font-light relative z-10">Você recebe o <strong>Manual de Gestão da Ansiedade</strong>. É o protocolo físico para nunca mais ser refém do pânico.</p>
                </li>
              </ul>

              <div className="mt-12 pt-8 border-t border-white/10 relative z-10">
                <p className="text-center font-serif text-lg italic text-blue-200/80">"Na mentoria, o fracasso não é uma opção."</p>
              </div>
            </div>
          </div>
        </div>

        {/* Middle Funnel CTA */}
        <div className="program-cta text-center">
          <a href="#pricing" className="inline-flex items-center gap-4 px-10 py-5 rounded-full bg-white border border-blue-100 shadow-xl hover:shadow-2xl hover:shadow-blue-500/20 transition-all hover:-translate-y-1 group relative overflow-hidden">
            <div className="absolute inset-0 bg-blue-50/50 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
            <div className="flex flex-col text-left relative z-10">
              <span className="text-slate-900 font-serif font-bold text-lg leading-none">Quero parar de sofrer hoje</span>
              <span className="text-slate-500 text-xs font-medium tracking-wide">Escolha seu plano de liberdade</span>
            </div>
            <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white group-hover:scale-110 transition-transform relative z-10">
              <ArrowRight className="w-5 h-5" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

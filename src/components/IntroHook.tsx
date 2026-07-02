import React from 'react';
import { ArrowRight, ShieldCheck, Clock, Sparkles } from 'lucide-react';

export const IntroHook: React.FC = () => {
  return (
    <section
      className="relative min-h-[90vh] w-full flex items-center overflow-hidden bg-brand-papel text-brand-noite px-6 md:px-12 lg:px-24 pt-32 pb-16"
      aria-label="Introdução ao Método CMS"
    >
      {/* Brilho ambiente sutil da marca (decorativo) */}
      <div aria-hidden className="pointer-events-none absolute -top-24 -right-24 h-[36rem] w-[36rem] rounded-full bg-brand-ceu/50 blur-3xl opacity-70" />
      <div aria-hidden className="pointer-events-none absolute -bottom-24 -left-32 h-[28rem] w-[28rem] rounded-full bg-brand-bruma blur-3xl opacity-80" />

      <div className="relative z-20 w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 md:gap-16">
      {/* Lado Esquerdo - Copy */}
      <div className="w-full md:w-1/2 flex flex-col items-start justify-center animate-fade-in-up">
        <span className="inline-flex items-center gap-2 mb-6 text-[0.7rem] font-semibold uppercase tracking-[0.25em] text-brand-carvao">
          <span className="h-1.5 w-1.5 rounded-full bg-brand-sereno" aria-hidden />
          Método CMS · Cérebro em Modo Silencioso
        </span>

        <header>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-serif leading-[1.1] tracking-tight mb-8 text-balance">
            Sua mente não nasceu para viver em
            <span className="italic text-brand-aguada block mt-1">estado de emergência.</span>
          </h1>
          <p className="text-lg md:text-xl font-light text-brand-carvao/90 max-w-lg leading-relaxed mb-4 text-pretty">
            Talvez você não esteja apenas cansado. Talvez esteja emocionalmente sobrecarregado.
          </p>
          <p className="text-lg md:text-xl font-light text-brand-carvao/80 max-w-lg leading-relaxed mb-10 text-pretty">
            O Método CMS foi desenvolvido para ajudar você a compreender, organizar e trazer mais clareza ao seu mundo interno.
          </p>
        </header>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
          <button
            onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-sereno text-white rounded-full font-bold uppercase tracking-widest text-xs hover:bg-brand-aguada transition-all duration-300 shadow-lg shadow-brand-sereno/30 hover:shadow-xl hover:shadow-brand-sereno/40 hover:-translate-y-0.5"
            aria-label="Conheça o Método CMS"
          >
            Conheça o Método CMS
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
          </button>
          <button
            onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
            className="w-full sm:w-auto px-8 py-4 bg-transparent text-brand-carvao rounded-full font-bold uppercase tracking-widest text-xs hover:bg-brand-bruma transition-colors border border-brand-ceu text-center"
            aria-label="Ver planos e preços"
          >
            Ver planos
          </button>
        </div>

        {/* Faixa de confiança */}
        <ul className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-8 text-sm text-brand-carvao">
          <li className="inline-flex items-center gap-2"><Sparkles className="h-4 w-4 text-brand-sereno" aria-hidden /> Abordagem clínica</li>
          <li className="inline-flex items-center gap-2"><Clock className="h-4 w-4 text-brand-sereno" aria-hidden /> Acesso imediato</li>
          <li className="inline-flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-brand-sereno" aria-hidden /> Garantia de 7 dias</li>
        </ul>
      </div>

      {/* Lado Direito - Imagem emocional */}
      <div className="relative z-10 w-full md:w-1/2 animate-fade-in-up">
        <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-brand-ceu/60 to-brand-sereno/25 blur-3xl opacity-70" aria-hidden />
        <div className="relative rounded-2xl overflow-hidden shadow-2xl ring-1 ring-brand-ceu/60">
          <img
            src="/wp-content/uploads/2025/11/hero-picture2.jpg"
            alt="Mulher emocionalmente sobrecarregada, em silêncio junto à janela"
            className="w-full h-[52vh] md:h-[62vh] max-h-[640px] object-cover object-center block"
          />
          {/* Vinheta sutil em tom de marca para dar profundidade */}
          <div className="absolute inset-0 bg-gradient-to-t from-brand-noite/25 via-transparent to-transparent" aria-hidden />
        </div>
      </div>
      </div>
    </section>
  );
};

import React, { useState, useEffect } from 'react';

export const StickyCTA: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Aparece após 400px de scroll
      setIsVisible(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:bottom-8 md:left-1/2 md:-translate-x-1/2 md:w-auto z-[100] animate-in slide-in-from-bottom-20 zoom-in-95 duration-700 pointer-events-none">
      <div className="max-w-2xl mx-auto bg-slate-900/90 backdrop-blur-2xl border border-white/20 rounded-[2rem] p-3 pl-6 shadow-[0_20px_60px_-10px_rgba(15,23,42,0.5)] flex items-center justify-between gap-6 pointer-events-auto ring-1 ring-white/10">

        {/* Info - Mobile & Desktop (Compacto) */}
        <div className="flex flex-col">
          <div className="flex items-center gap-2 mb-0.5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest leading-none">Últimas Vagas</span>
          </div>
          <div className="flex items-baseline gap-1.5">
            <span className="text-xs text-slate-400">12x</span>
            <span className="text-xl font-black text-white tracking-tighter leading-none">R$ 49,70</span>
          </div>
        </div>

        {/* CTA Button */}
        <a
          href="#pricing"
          className="group relative bg-white text-slate-900 px-6 py-3 md:px-8 md:py-3.5 rounded-full overflow-hidden transition-all duration-300 hover:scale-[1.02] active:scale-95 shadow-lg hover:shadow-blue-500/20"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
          <span className="relative z-10 text-[10px] md:text-xs font-black uppercase tracking-widest group-hover:text-white transition-colors flex items-center gap-2">
            Garantir Minha Vaga
            <svg className="w-3 h-3 md:w-4 md:h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </span>
        </a>
      </div>
    </div>
  );
};

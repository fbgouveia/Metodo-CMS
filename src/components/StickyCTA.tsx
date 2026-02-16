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
    <div className="fixed bottom-0 left-0 w-full z-[100] px-4 pb-6 animate-in slide-in-from-bottom-10 duration-700 pointer-events-none">
      <div className="max-w-5xl mx-auto bg-slate-900/90 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] p-4 pl-10 shadow-2xl flex items-center justify-between pointer-events-auto shadow-blue-900/20">

        {/* Lado Informativo/Urgência */}
        <div className="hidden md:flex flex-col">
          <div className="flex items-center gap-3 mb-1">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></div>
            <span className="text-[10px] font-black text-blue-400 uppercase tracking-[0.3em]">Status: Inscrição Liberada</span>
          </div>
          <span className="text-sm font-serif text-white/90 italic">
            "Sua paz não pode mais esperar por amanhã."
          </span>
        </div>

        {/* Lado de Conversão */}
        <div className="flex items-center gap-10 w-full md:w-auto justify-between md:justify-end">
          <div className="text-right hidden sm:block">
            <p className="text-[9px] text-slate-500 font-bold uppercase tracking-widest mb-1">Investimento na sua liberdade</p>
            <div className="flex items-baseline gap-2">
              <span className="text-[10px] text-slate-400 font-medium">12x</span>
              <span className="text-xl font-black text-white tracking-tighter">R$ 49,90</span>
            </div>
          </div>

          <a
            href="#pricing"
            className="group relative bg-white text-slate-900 px-10 py-4 rounded-full overflow-hidden transition-all duration-500 hover:scale-105 active:scale-95 shadow-xl"
          >
            <div className="absolute inset-0 bg-blue-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
            <span className="relative z-10 text-[11px] font-black uppercase tracking-widest group-hover:text-white transition-colors">
              Iniciar Minha Cura
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

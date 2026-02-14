import React, { useState, useEffect } from 'react';

export const StickyCTA: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full z-50 px-4 pb-4 animate-fade-in-up">
      <div className="max-w-4xl mx-auto bg-white/70 backdrop-blur-xl border border-white/50 rounded-full p-3 pl-6 shadow-2xl flex items-center justify-between transition-[background-color] duration-300 hover:bg-white/90">

        <div className="hidden md:flex flex-col">
          <span className="text-[10px] font-bold text-red-500 uppercase tracking-wider flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span> Alívio Imediato: Módulo 3 Liberado
          </span>
          <span className="text-sm font-bold text-slate-900">A sua nova vida começa agora</span>
        </div>

        <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-end">
          <div className="text-right hidden sm:block">
            {/* Preço Ancorado: Focalizando no valor diário para reduzir dor do pagamento */}
            <p className="text-[10px] text-slate-400 font-medium">Menos de R$ 1,70 por dia</p>
            <p className="text-sm font-black text-blue-600">12x R$ 49,90</p>
          </div>
          <a
            href="#pricing"
            className="bg-slate-900 hover:bg-blue-700 text-white px-8 py-3 rounded-full text-sm font-black transition-[background-color,transform] duration-300 motion-safe:hover:scale-105 active:scale-95 shadow-xl whitespace-nowrap uppercase tracking-tight outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          >
            Garantir Minha Paz
          </a>
        </div>
      </div>
    </div>
  );
};

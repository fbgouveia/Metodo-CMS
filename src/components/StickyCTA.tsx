import React, { useState, useEffect } from 'react';
import { Zap } from 'lucide-react';

export const StickyCTA: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Aparece logo depois de rolar 200px
      const show = window.scrollY > 200;
      
      // Esconde quando chega no footer (ajuste o valor conforme a altura da sua página se precisar)
      const footer = document.querySelector('footer');
      const hide = footer ? (window.scrollY + window.innerHeight) >= footer.offsetTop : false;

      setIsVisible(show && !hide);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full z-50 px-4 pb-4 animate-slide-up">
      <div className="max-w-5xl mx-auto bg-white/90 backdrop-blur-md border border-slate-200 rounded-full p-2 pl-6 shadow-2xl flex items-center justify-between">
        <div className="hidden md:flex flex-col">
            <span className="text-[10px] font-bold text-red-500 uppercase tracking-wider flex items-center gap-1">
               <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span> Últimas Vagas
            </span>
            <span className="text-sm font-bold text-slate-900">Mentoria Cérebro em Modo Silencioso</span>
        </div>
        
        <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-end">
            <div className="md:hidden flex flex-col">
                <span className="text-[10px] font-bold text-red-500 uppercase">Poucas Vagas</span>
                <span className="text-xs font-bold text-slate-900">Mentoria VIP</span>
            </div>
            <a 
              href="#pricing" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full text-sm font-bold transition-all hover:scale-105 flex items-center gap-2 shadow-lg"
            >
              Quero Minha Vaga <Zap size={16} fill="currentColor" />
            </a>
        </div>
      </div>
    </div>
  );
};

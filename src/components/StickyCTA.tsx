import React, { useState, useEffect } from 'react';

export const StickyCTA: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Mostra a barra após rolar 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Se não rolou ainda, não mostra nada
  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 w-full z-50 p-4 animate-fade-in-up">
      {/* Container Flutuante */}
      <div className="max-w-5xl mx-auto bg-white/95 backdrop-blur-md border border-slate-200 shadow-[0_-10px_40px_rgba(0,0,0,0.15)] rounded-full px-6 py-3 flex items-center justify-between gap-4">
        
        {/* Lado Esquerdo: Texto de Urgência */}
        <div className="hidden md:flex flex-col">
            <span className="text-[10px] font-bold text-red-500 uppercase tracking-wider flex items-center gap-2">
               <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
               </span>
               Últimas Vagas
            </span>
            <span className="text-sm font-bold text-slate-900">Mentoria Cérebro em Modo Silencioso</span>
        </div>
        
        {/* Lado Direito: Preço e Botão */}
        <div className="flex items-center gap-4 w-full md:w-auto justify-between md:justify-end">
            <div className="text-right hidden sm:block">
                <p className="text-[10px] text-slate-400 line-through">R$ 1.497</p>
                <p className="text-sm font-bold text-blue-600">12x R$ 99,70</p>
            </div>
            
            <a 
              href="#pricing" 
              className="bg-slate-900 hover:bg-blue-600 text-white px-8 py-3 rounded-full text-sm font-bold transition-all transform hover:scale-105 shadow-lg w-full md:w-auto text-center"
            >
              Quero Minha Vaga
            </a>
        </div>

      </div>
    </div>
  );
};

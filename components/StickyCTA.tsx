import React, { useEffect, useState } from 'react';

export const StickyCTA: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Pega a altura atual do scroll
      const currentScrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // 1. Mostrar após rolar 300px
      const scrolledEnough = currentScrollY > 300;

      // 2. Esconder se estiver muito perto do fim (para não cobrir o footer)
      // Se a distância do topo + altura da janela for > altura do documento - 400px
      const nearBottom = (currentScrollY + windowHeight) >= (documentHeight - 100);

      if (scrolledEnough && !nearBottom) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Check inicial
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      className={`fixed bottom-0 left-0 right-0 z-[9999] bg-white/95 backdrop-blur-xl border-t border-blue-100 p-3 md:p-4 shadow-[0_-10px_40px_rgba(0,0,0,0.1)] transition-transform duration-500 ease-in-out ${
        isVisible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
        
        {/* Lado Esquerdo: Info (Escondido em telas muito pequenas para focar no botão) */}
        <div className="hidden sm:flex items-center gap-6">
            <div className="hidden lg:block">
                <p className="text-slate-900 font-bold text-lg font-serif">Sua ansiedade não vai esperar.</p>
                <p className="text-slate-500 text-xs md:text-sm">Comece a desligar o alerta hoje.</p>
            </div>
            
            {/* Badge de Urgência Elegante (Substituindo os círculos) */}
            <div className="hidden md:flex items-center gap-2 bg-rose-50 border border-rose-100 px-3 py-1.5 rounded-full">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500"></span>
                </span>
                <span className="text-xs text-rose-600 font-bold uppercase tracking-wider">Últimas Vagas</span>
            </div>
        </div>

        {/* Lado Direito: Preço e Botão (Visível sempre) */}
        <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-end">
            <div className="text-left sm:text-right flex flex-col justify-center">
                <span className="block text-[10px] text-slate-500 line-through">de R$ 1.497</span>
                <span className="block text-sm md:text-xl font-bold text-blue-600 font-serif whitespace-nowrap">12x R$ 99,70</span>
            </div>
            <a 
              href="#pricing" 
              className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-xl font-bold shadow-lg shadow-blue-500/30 active:scale-95 transition-all font-serif tracking-wide text-sm md:text-base whitespace-nowrap flex-1 sm:flex-none text-center"
            >
                Quero Minha Vaga
            </a>
        </div>
      </div>
    </div>
  );
};
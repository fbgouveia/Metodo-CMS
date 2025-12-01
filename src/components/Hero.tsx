import React from 'react';
import { Play } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <div className="w-full relative group cursor-pointer">
      
      {/* Moldura Decorativa */}
      <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl md:rounded-[2rem] opacity-20 group-hover:opacity-40 blur transition-all duration-500"></div>
      
      {/* Container do Vídeo: Força proporção 16:9 (aspect-video) */}
      <div className="relative w-full aspect-video bg-slate-900 rounded-xl md:rounded-[1.8rem] overflow-hidden shadow-2xl ring-1 ring-white/10">
        
        {/* Placeholder ou Iframe */}
        {/* IMPORTANTE: w-full h-full garante que o vídeo preencha o box */}
        <iframe 
          className="w-full h-full absolute inset-0"
          src="https://www.youtube.com/embed/A8g2W67_H8M?rel=0&modestbranding=1" 
          title="Método CMS Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
        ></iframe>

      </div>
    </div>
  );
};

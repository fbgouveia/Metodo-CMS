import React, { useRef, useState, useEffect } from 'react';

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [shouldPlay, setShouldPlay] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Se o vídeo estiver visível na tela, ativa o play
        if (entry.isIntersecting) {
          setShouldPlay(true);
          observer.disconnect(); // Para de observar (roda só uma vez)
        }
      },
      { threshold: 0.5 } // Só toca quando 50% do vídeo estiver visível
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Base URL do vídeo
  const videoId = "NOH-u8bwVS0";
  // Parâmetros Mágicos: autoplay=1 (toca) + mute=1 (obrigatório para autoplay funcionar)
  const videoSrc = `https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1${shouldPlay ? '&autoplay=1&mute=1' : ''}`;

  return (
    <div ref={containerRef} className="w-full relative group cursor-pointer">

      {/* Moldura Decorativa (Glow de Confiança) */}
      <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-blue-400 to-cyan-500 rounded-2xl md:rounded-[2rem] opacity-20 group-hover:opacity-60 blur-xl transition-[opacity] duration-700"></div>

      {/* Container do Vídeo (16:9) */}
      <div className="relative w-full aspect-video bg-slate-900 rounded-xl md:rounded-[1.8rem] overflow-hidden shadow-2xl ring-1 ring-white/10">

        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src={videoSrc}
          title="Apresentação do Método CMS"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="lazy"
        ></iframe>

      </div>
    </div>
  );
};

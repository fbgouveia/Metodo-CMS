import React from 'react';

export const Hero: React.FC = () => {
  // Este componente simples NÃO precisa de useRef, 
  // mas se você tiver código antigo aqui, substitua por este limpo:
  
  return (
    <section className="w-full flex justify-center px-4">
      <div className="relative w-full max-w-5xl aspect-video rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white bg-black">
        <iframe 
          width="100%" 
          height="100%" 
          src="https://www.youtube.com/embed/NOH-u8bwVS0?rel=0&modestbranding=1" 
          title="Mentoria CMS" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          allowfullscreen
        ></iframe>
      </div>
    </section>
  );
};

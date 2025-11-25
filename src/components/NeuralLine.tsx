import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const NeuralLine: React.FC = () => {
  const lineRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const line = lineRef.current;
    
    // Animação de Entrada (Fade In inicial até 70% de opacidade)
    gsap.fromTo(containerRef.current, 
      { opacity: 0 }, 
      { opacity: 0.7, duration: 2, ease: "power2.out", delay: 0.5 }
    );

    // Animação de Scroll (Preenchimento da Linha)
    gsap.fromTo(line, 
      { scaleY: 0 }, 
      {
        scaleY: 1,
        ease: "none",
        scrollTrigger: {
          trigger: document.body, // Gatilho é o corpo inteiro do site
          start: "top top",       // Começa no topo
          end: "bottom bottom",   // Termina no rodapé
          scrub: 4,               // AUMENTADO: 4s de delay para movimento ultra fluido
          refreshPriority: 0      // Prioridade baixa
        }
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(t => {
        if (t.vars.trigger === document.body) t.kill();
      });
    };
  }, []);

  return (
    // Z-Index 1: Acima dos Blobs (0), mas abaixo do Blur (2) e do Conteúdo (10)
    <div 
      ref={containerRef}
      className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[2px] md:w-[4px] z-[1] pointer-events-none opacity-0"
    >
      {/* 1. Trilho Base (Caminho percorrido) - Visível suavemente */}
      <div className="absolute inset-0 bg-blue-200/10 backdrop-blur-sm rounded-full"></div>

      {/* 2. A Linha de Energia (Preenchimento Dinâmico) */}
      <div 
        ref={lineRef}
        className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-blue-400 to-cyan-300 origin-top rounded-full"
        style={{ 
          transform: 'scaleY(0)', 
          boxShadow: '0 0 20px 2px rgba(59, 130, 246, 0.2)' 
        }}
      >
        {/* Cabeça da Linha (Brilho intenso na ponta inferior) */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-32 md:h-64 bg-gradient-to-t from-white via-blue-200 to-transparent blur-md rounded-full opacity-60"></div>
      </div>
    </div>
  );
};
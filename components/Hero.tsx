import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

// Registra o plugin essencial para esse efeito
gsap.registerPlugin(ScrollTrigger);

export const Hero: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const bgImageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      
      // 1. Animação Inicial de Entrada (O texto aparece quando a página carrega)
      const tlEntry = gsap.timeline({ defaults: { ease: "power3.out" } });
      tlEntry.from(contentRef.current?.children || [], {
        y: 50,
        opacity: 0,
        duration: 1.2,
        stagger: 0.2,
        delay: 0.5 // Pequeno delay para carregar a imagem
      });

      // 2. A Animação de Scroll (O efeito principal)
      // O ScrollTrigger vai "travar" a seção e coordenar a animação com a rolagem
      const tlScroll = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top", // Começa quando o topo do Hero toca o topo da tela
          end: "+=150%", // A animação dura 150% da altura da tela de rolagem
          pin: true, // TRAVA a seção na tela
          scrub: 1, // Suaviza a animação conforme rola (leva 1s para alcançar a barra)
          // markers: true // Descomente se quiser ver os marcadores do GSAP na tela para debugar
        }
      });

      tlScroll
        // Passo A: O texto sobe e desaparece rápido
        .to(contentRef.current, {
          y: -100,
          opacity: 0,
          duration: 0.5, // Dura metade do tempo total da rolagem
          ease: "power1.in"
        }, 0) 
        // Passo B: A imagem de fundo cresce (zoom in) durante toda a rolagem
        .to(bgImageRef.current, {
          scale: 1.2, // Aumenta 20% do tamanho original
          duration: 1,
          ease: "none" // Sem aceleração, segue o scroll linearmente
        }, 0);

    }, sectionRef); // Escopo do GSAP

    return () => ctx.revert(); // Limpeza ao sair da página
  }, []);

  return (
    // A seção tem altura da tela (h-screen) e esconde o que vazar (overflow-hidden)
    <section ref={sectionRef} className="relative h-screen w-full overflow-hidden bg-slate-900">
      
      {/* --- CAMADA DA IMAGEM DE FUNDO (O "Surfista" que cresce) --- */}
      <div ref={bgImageRef} className="absolute inset-0 z-0 w-full h-full">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transform origin-center will-change-transform"
          style={{ 
            // PLACEHOLDER DE IMAGEM DRAMÁTICA (Troque este link pelo seu se tiver)
            backgroundImage: "url('https://images.unsplash.com/photo-1502680390469-be75c86b636f?q=80&w=2000&auto=format&fit=crop')" 
          }}
        />
        {/* Gradiente escuro por cima para o texto branco ler bem */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/40 to-slate-900/80"></div>
      </div>

      {/* --- CAMADA DO CONTEÚDO DE TEXTO (Que some ao rolar) --- */}
      <div ref={contentRef} className="relative z-10 container mx-auto px-6 h-full flex flex-col items-center justify-center text-center will-change-transform">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-100 text-sm font-medium mb-8 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Neurociência Aplicada
          </div>

          {/* Título Principal */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.1] drop-shadow-lg">
            O Silêncio que você implora <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              não virá de mais um remédio.
            </span>
          </h1>

          {/* Subtítulo */}
          <p className="text-lg md:text-xl text-slate-200 mb-10 max-w-2xl mx-auto leading-relaxed font-medium drop-shadow-md">
            Você já tentou "respirar fundo", terapias e comprimidos, mas o aperto continua? <strong>Sua mente está em loop.</strong> Aprenda a desligar o alerta de perigo em 21 dias.
          </p>

          {/* Botão CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#pricing" className="group w-full sm:w-auto px-8 py-4 bg-blue-600 text-white rounded-full font-bold text-lg hover:bg-blue-500 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-blue-500/20 flex items-center justify-center gap-2 backdrop-blur-sm">
              Quero Desligar o Barulho Mental
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

      </div>
    </section>
  );
};

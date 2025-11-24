import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const Hero: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const bgImageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      
      // 1. Configuração Inicial
      // Deixamos a imagem um pouco menor para ela crescer depois
      gsap.set(bgImageRef.current, { scale: 1.0 }); 
      
      // 2. Animação de Entrada (O texto sobe suave quando abre o site)
      gsap.from(contentRef.current, {
        y: 100,
        opacity: 0,
        duration: 1.5,
        ease: "power4.out",
        delay: 0.2
      });

      // 3. A MÁGICA DO SCROLL (O efeito que você quer)
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top", // Começa no topo
          end: "+=150%",    // Dura 1.5x a altura da tela (rola devagar)
          pin: true,        // TRAVA a tela
          scrub: 1,         // Animação segue o dedo suavemente
        }
      });

      tl
        // Passo A: O Texto e o Overlay escuro somem
        .to([contentRef.current, overlayRef.current], {
          opacity: 0,
          y: -50,
          duration: 1,
          ease: "power1.inOut"
        })
        // Passo B: A Imagem de fundo cresce (Zoom In) e ganha destaque
        .to(bgImageRef.current, {
          scale: 1.3,      // Aumenta 30%
          filter: "brightness(1.1)", // Fica um pouco mais brilhante
          duration: 2,     // Dura mais tempo que o texto sumindo
          ease: "none"
        }, 0); // O zero faz acontecer ao mesmo tempo que o texto some

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative h-screen w-full overflow-hidden bg-slate-900">
      
      {/* --- CAMADA 1: A IMAGEM DE FUNDO (O "Hero" que vai crescer) --- */}
      <div className="absolute inset-0 z-0 w-full h-full overflow-hidden">
        <div 
          ref={bgImageRef}
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{ 
            // COLOQUE AQUI O LINK DA SUA IMAGEM PRINCIPAL (FOTO DO CONSULTÓRIO OU SURFISTA)
            backgroundImage: "url('https://images.unsplash.com/photo-1502680390469-be75c86b636f?q=80&w=2000&auto=format&fit=crop')" 
          }}
        />
      </div>

      {/* --- CAMADA 2: OVERLAY ESCURO (Para ler o texto antes de rolar) --- */}
      <div ref={overlayRef} className="absolute inset-0 bg-slate-900/60 z-10"></div>

      {/* --- CAMADA 3: TEXTO E HEADLINE (Que vão sumir ao rolar) --- */}
      <div ref={contentRef} className="relative z-20 container mx-auto px-6 h-full flex flex-col items-center justify-center text-center">
          
          {/* Badge Neurociência */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-8 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            <span className="text-xs font-bold text-white tracking-wide uppercase">Neurociência Aplicada</span>
          </div>

          {/* Headline Principal */}
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold tracking-tighter text-white mb-6 leading-[1.1] drop-shadow-2xl">
            O Silêncio que <br/>
            você implora.
          </h1>

          {/* Subtítulo */}
          <p className="text-lg md:text-2xl text-slate-200 mb-10 max-w-2xl mx-auto font-light leading-relaxed drop-shadow-md">
            Desligue o ruído mental e retome o controle em 21 dias.<br/>
            <span className="text-blue-300 font-semibold">Role para descobrir como.</span>
          </p>

          {/* Seta indicando rolagem */}
          <div className="animate-bounce mt-10">
            <ArrowRight className="w-6 h-6 text-white/50 rotate-90" />
          </div>

      </div>
    </section>
  );
};

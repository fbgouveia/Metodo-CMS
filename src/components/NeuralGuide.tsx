import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const NeuralGuide: React.FC = () => {
  const orbRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const orb = orbRef.current;
      
      // Configuração Inicial: Começa visível para teste
      gsap.set(orb, { xPercent: -50, yPercent: -50, opacity: 0.8, scale: 0.8 });

      const triggerElement = document.body;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: triggerElement,
          start: "top top",
          end: "bottom bottom",
          scrub: 1, // Resposta mais rápida
        }
      });

      // 1. INTRO (Foco na Headline)
      tl.to(orb, {
        top: "15vh",
        left: "50%",
        scale: 1.2,
        backgroundColor: "#60A5FA", // Azul Claro
        opacity: 0.6,
        duration: 1,
      })
      // 2. HERO (Desce para o Vídeo)
      .to(orb, {
        top: "85vh",
        left: "50%",
        scale: 0.8,
        backgroundColor: "#3B82F6", // Azul Vibrante
        boxShadow: "0 0 80px 30px rgba(59, 130, 246, 0.5)",
        opacity: 0.8,
        duration: 2,
      })
      // 3. FAST TRACK (Seção de Preço Rápido)
      .to(orb, {
        top: "130vh",
        scale: 2,
        opacity: 0.4,
        duration: 1.5,
      })
      // 4. HORIZONTAL SCROLL (Segue o fluxo)
      .to(orb, {
        top: "250vh",
        left: "90%",
        scale: 1,
        backgroundColor: "#A855F7", // Roxo
        opacity: 0.8,
        duration: 4,
      })
      // 5. PROGRAM DETAILS (Movimento Z)
      .to(orb, {
        top: "350vh",
        left: "10%",
        scale: 1.5,
        backgroundColor: "#3B82F6",
        duration: 2,
      })
      .to(orb, {
        top: "380vh",
        left: "90%",
        backgroundColor: "#1E293B", // Azul Escuro
        duration: 2,
      })
      // 6. FEATURES (Explosão de Luz)
      .to(orb, {
        top: "450vh",
        left: "50%",
        scale: 4,
        opacity: 0.2, // Mais transparente para não cobrir texto
        backgroundColor: "#60A5FA",
        filter: "blur(80px)",
        duration: 3,
      })
      // 7. PRICING FINAL (Foco Central Verde)
      .to(orb, {
        top: "bottom", // Final da página
        left: "50%",
        scale: 1.5,
        opacity: 0.6,
        backgroundColor: "#22C55E", // Verde Venda
        filter: "blur(40px)",
        boxShadow: "0 0 100px 50px rgba(34, 197, 94, 0.3)",
        duration: 4,
      });

      // Respiração Constante
      gsap.to(orb, {
        scale: "+=0.2",
        opacity: "+=0.1",
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });

    }, orbRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[30] overflow-hidden">
      {/* Orbe Guia com z-index alto e blend mode normal para garantir visibilidade */}
      <div 
        ref={orbRef}
        className="absolute w-32 h-32 rounded-full blur-[40px] will-change-transform"
        style={{ backgroundColor: '#3B82F6' }}
      ></div>
    </div>
  );
};
import React, { useEffect, useRef } from 'react';
// Lucide icons removed to follow "Non-Obvious Persuasive Design" protocol
import gsap from 'gsap';

export const WhatsAppFloat: React.FC = () => {
  const buttonRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Entrada suave
      gsap.from(buttonRef.current, {
        scale: 0,
        opacity: 0,
        duration: 0.8,
        delay: 2,
        ease: "elastic.out(1, 0.5)"
      });

      // Animação de "Respiração"
      gsap.to(".wa-pulse", {
        scale: 1.5,
        opacity: 0,
        duration: 2,
        repeat: -1,
        ease: "power1.out"
      });
    }, buttonRef);

    return () => ctx.revert();
  }, []);

  return (
    <a
      ref={buttonRef}
      href="https://api.whatsapp.com/send?phone=5511956185501&text=Ola%20Quiteria!%20gostaria%20de%20saber%20mais%20sobre%20o%20curso%20e%20a%20mentoria%20cerebro%20em%20modo%20silencioso"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-28 right-6 md:bottom-24 md:right-8 z-[60] group flex items-center gap-3"
      aria-label="Falar no WhatsApp"
    >
      <div className="hidden md:block bg-white/95 backdrop-blur-md text-slate-800 text-[10px] font-black uppercase tracking-widest py-3 px-6 rounded-2xl shadow-2xl border border-white opacity-0 group-hover:opacity-100 transition-all duration-500 -translate-x-4 group-hover:translate-x-0">
        Dúvidas? <span className="text-green-600">Pergunte agora.</span>
      </div>

      <div className="relative w-16 h-16 flex items-center justify-center">
        {/* Pulse Effect */}
        <div className="wa-pulse absolute inset-0 bg-green-500 rounded-full opacity-50 z-0"></div>

        {/* Button - Typographic Version */}
        <div className="relative z-10 w-full h-full bg-slate-900 rounded-full flex flex-col items-center justify-center shadow-2xl transition-all duration-500 group-hover:bg-green-600 group-hover:scale-110 border border-white/20">
          <span className="text-white text-[10px] font-black tracking-tighter leading-none">WA</span>
          <div className="w-4 h-[1px] bg-white/30 my-1 group-hover:bg-white/60"></div>
          <span className="text-white text-[8px] font-bold tracking-widest leading-none">CHAT</span>
        </div>

        {/* Notification Dot */}
        <div className="absolute top-1 right-1 w-4 h-4 bg-rose-500 border-2 border-white rounded-full z-20 flex items-center justify-center">
          <span className="text-white text-[8px] font-black">1</span>
        </div>
      </div>
    </a>
  );
};

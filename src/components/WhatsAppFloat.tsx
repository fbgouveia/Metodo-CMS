import React, { useEffect, useRef } from 'react';
import { MessageCircle } from 'lucide-react';
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
        delay: 2, // Espera o site carregar um pouco
        ease: "elastic.out(1, 0.5)"
      });

      // Animação de "Respiração" para chamar atenção sem ser irritante
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
      <span className="hidden md:block bg-white/90 backdrop-blur-md text-slate-800 text-xs font-bold py-2 px-4 rounded-xl shadow-lg border border-white/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -translate-x-2">
        Parece que você ainda tem uma dúvida... vamos conversar?
      </span>

      <div className="relative w-14 h-14 flex items-center justify-center">
        {/* Pulse Effect */}
        <div className="wa-pulse absolute inset-0 bg-green-500 rounded-full opacity-50 z-0"></div>

        {/* Button */}
        <div className="relative z-10 w-full h-full bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center shadow-xl shadow-green-500/40 border border-white/20 transition-transform duration-300 group-hover:scale-110">
          <MessageCircle className="w-7 h-7 text-white fill-white" />
        </div>

        {/* Notification Dot */}
        <div className="absolute top-0 right-0 w-4 h-4 bg-red-500 border-2 border-white rounded-full z-20"></div>
      </div>
    </a>
  );
};

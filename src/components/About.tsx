import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const About: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.about-content', {
        y: 40,
        autoAlpha: 0,
        duration: 0.9,
        stagger: 0.18,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 75%',
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" className="py-24 relative z-10 overflow-visible bg-white">
      <div ref={containerRef} className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col lg:flex-row gap-16 items-center">

          {/* ── COLUNA ESQUERDA: IMAGEM STICKY ── */}
          <div className="lg:w-1/2 self-start about-image transition-opacity duration-700">
            <div className="relative w-full max-w-md mx-auto lg:mx-0">
              {/* Moldura com vidro */}
              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl aspect-[4/5]">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop"
                  alt="Quiteria Gouveia"
                  className="w-full h-full object-cover relative z-10"
                />
              </div>

              {/* Badge flutuante */}
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl flex flex-col items-center justify-center border border-slate-100 z-30">
                <span className="text-3xl font-serif text-blue-600 leading-none mb-1">+40</span>
                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest text-center whitespace-nowrap">Anos de Clínica</p>
              </div>
            </div>
          </div>

          {/* ── COLUNA DIREITA: TEXTO ── */}
          <div className="lg:w-1/2 space-y-8 lg:py-4">

            <div className="about-content">
              <h2 className="text-4xl md:text-5xl font-serif text-[#1d1d1f] mb-6 leading-tight">
                Quem criou o <br />
                <span className="text-blue-600 italic">Método CMS?</span>
              </h2>
            </div>

            <div className="about-content space-y-6 text-slate-600 text-lg leading-relaxed font-light text-pretty">
              <p>
                Sou Quitéria Gouveia, psicóloga. Ao longo de anos de prática clínica, comecei a perceber que muitos pacientes não precisavam apenas aprender a controlar a ansiedade.
              </p>
              <p>
                Precisavam compreender o funcionamento do próprio mundo interno. Foi dessa observação que nasceu o Método CMS.
              </p>
            </div>

            {/* Assinatura */}
            <div className="about-content pt-2 pb-4">
              <img
                src="/wp-content/uploads/2025/11/quiteria_signature.png"
                alt="Assinatura Quiteria Gouveia"
                className="h-16 md:h-20 w-auto opacity-80 transform -rotate-2"
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

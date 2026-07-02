import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const thoughtBlocks = [
  "Sua mente não desacelera.",
  "Você resolve uma preocupação... e outra aparece imediatamente.",
  "Você sente culpa quando descansa.",
  "Você termina o dia cansado... mesmo sem entender exatamente por quê.",
  "Você tenta relaxar... mas sua cabeça continua funcionando."
];

// Versão curta dos pensamentos para a ilustração "caos -> organização"
const mentalChips = [
  "A cabeça não desliga",
  "Uma preocupação puxa outra",
  "Culpa ao descansar",
  "Cansaço sem motivo claro"
];

export const TransformationJourney: React.FC = () => {
  const thoughtsRef = useRef<HTMLDivElement>(null);
  const questionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animação dos blocos de pensamento
      gsap.from(".thought-block", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: thoughtsRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse"
        }
      });

      // Animação da pergunta
      gsap.from(".the-question", {
        scale: 0.95,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: questionRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse"
        }
      });

      // Chips: entram espalhados/tortos e se organizam (caos -> clareza)
      const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (!reduceMotion) {
        gsap.from(".thought-chip", {
          opacity: 0,
          scale: 0.85,
          x: () => gsap.utils.random(-50, 50),
          y: () => gsap.utils.random(-24, 24),
          rotation: () => gsap.utils.random(-10, 10),
          duration: 0.9,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: questionRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse"
          }
        });
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="w-full bg-white">
      {/* DOBRA 2: IDENTIFICAÇÃO */}
      <section ref={thoughtsRef} className="py-20 md:py-28 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-serif text-[#1d1d1f] mb-16 tracking-tight">
            Talvez você conheça <span className="italic text-blue-600">essa sensação.</span>
          </h2>
          
          <div className="flex flex-col items-center gap-6">
            {thoughtBlocks.map((text, idx) => (
              <div 
                key={idx} 
                className="thought-block px-8 py-5 bg-slate-50 border border-slate-100 rounded-2xl shadow-sm text-slate-700 font-medium text-lg md:text-xl w-full max-w-2xl text-center"
              >
                {text}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DOBRA 3: A PERGUNTA */}
      <section ref={questionRef} className="py-24 md:py-28 bg-brand-bruma border-y border-brand-ceu overflow-hidden relative">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="the-question order-2 md:order-1">
            <h2 className="text-4xl md:text-5xl font-serif text-[#1d1d1f] leading-tight mb-8">
              E se o problema não fosse <br className="hidden md:block"/>apenas a ansiedade?
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed text-pretty">
              Ao longo da prática clínica, tornou-se evidente que muitas pessoas não sofriam apenas pela ansiedade.
              <br/><br/>
              Sofriam porque tudo parecia acontecer ao mesmo tempo dentro delas.
              <br/><br/>
              Foi dessa observação que nasceu o <strong>Método CMS</strong>.
            </p>
          </div>
          <div className="the-question order-1 md:order-2 relative w-full aspect-square md:aspect-auto md:h-[500px] bg-white rounded-3xl shadow-xl flex flex-col border border-brand-ceu/60 p-8 overflow-hidden">
             {/* Halo suave da marca */}
             <div aria-hidden className="pointer-events-none absolute -top-16 -right-16 h-48 w-48 rounded-full bg-brand-ceu/40 blur-3xl" />
             {/* Ilustração: pensamentos dispersos que se organizam em clareza */}
             <span className="relative text-[11px] font-bold tracking-[0.25em] uppercase text-brand-pedra mb-5">
               Seus pensamentos, organizados
             </span>
             <div className="relative flex-1 flex flex-col justify-center gap-3">
                {mentalChips.map((chip, i) => (
                  <div key={i} className="thought-chip flex items-center gap-3 px-4 py-3 bg-brand-bruma rounded-xl border border-brand-ceu/70">
                    <span className="h-2 w-2 rounded-full bg-brand-sereno shrink-0" aria-hidden />
                    <span className="text-sm md:text-base text-brand-noite font-medium">{chip}</span>
                  </div>
                ))}
             </div>
             <div className="relative mt-6 pt-5 border-t border-brand-ceu/70 flex items-baseline justify-between">
                <span className="text-[11px] font-bold tracking-widest uppercase text-brand-pedra">Do caos</span>
                <span className="text-2xl font-serif italic text-brand-aguada">à clareza.</span>
             </div>
          </div>
        </div>
      </section>

      {/* DOBRA 4: O QUE É O MÉTODO CMS */}
      <section className="py-24 md:py-28 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-serif text-[#1d1d1f] mb-8">
            O Método CMS é uma metodologia de <br/><span className="text-blue-600">Organização Emocional.</span>
          </h2>
          <p className="text-xl text-slate-600 font-light max-w-3xl mx-auto leading-relaxed mb-16">
            Seu objetivo não é eliminar emoções. Nem impedir pensamentos.
            <br/><br/>
            É ajudar você a compreender, diferenciar e organizar o que acontece dentro do seu mundo interno.
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center mb-4 border border-blue-100">
                <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
              </div>
              <span className="text-lg font-medium text-slate-800">Quando existe organização...</span>
              <span className="text-blue-600 font-serif italic text-xl mt-2">Surge clareza.</span>
            </div>
            
            <div className="hidden md:block w-16 h-[1px] bg-slate-200"></div>
            
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-slate-50 flex items-center justify-center mb-4 border border-slate-200">
                <div className="w-6 h-6 border-t-2 border-r-2 border-slate-400 rotate-45"></div>
              </div>
              <span className="text-lg font-medium text-slate-800">Quando existe clareza...</span>
              <span className="text-blue-600 font-serif italic text-xl mt-2">O Ruído Mental tende a diminuir.</span>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

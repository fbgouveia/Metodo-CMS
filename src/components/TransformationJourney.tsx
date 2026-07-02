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
          <div className="the-question order-1 md:order-2 relative w-full aspect-square md:aspect-auto md:h-[500px] bg-white rounded-3xl shadow-xl flex items-center justify-center border border-slate-100 p-8">
             {/* Ilustração Representativa: Congestionamento vs Respiração */}
             <div className="relative w-full h-full flex items-center justify-center">
                {/* Circulos caóticos representando o congestionamento (Mesa Mental bagunçada) */}
                <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-slate-200/50 rounded-full blur-xl animate-pulse"></div>
                <div className="absolute bottom-1/3 right-1/4 w-40 h-40 bg-blue-100/50 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s'}}></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center z-10">
                  <span className="text-sm font-bold tracking-widest uppercase text-slate-400 mb-2 block">Visualmente Congestionado</span>
                  <span className="text-2xl font-serif text-blue-600 italic">Mas Organizado.</span>
                </div>
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

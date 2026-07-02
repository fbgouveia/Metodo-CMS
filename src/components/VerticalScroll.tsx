import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Lucide icons removed to follow "Non-Obvious Persuasive Design" protocol

gsap.registerPlugin(ScrollTrigger);

const methodSteps = [
  {
    step: "01",
    shortTitle: "Reconhecendo o Ruído Mental",
    title: "Jornada 1: Reconhecendo o Ruído Mental",
    text: "Você vai descobrir por que sua mente parece nunca desligar e entender que o problema não é falta de força, mas uma sobrecarga emocional silenciosa.",
    image: "/wp-content/uploads/2025/11/card0.jpg"
  },
  {
    step: "02",
    shortTitle: "Organizando o Caos Interior",
    title: "Jornada 2: Organizando o Caos Interior",
    text: "Aprenda a diferenciar pensamentos, emoções, preocupações, cobranças e responsabilidades para recuperar a clareza emocional.",
    image: "/wp-content/uploads/2025/11/card2.jpg"
  },
  {
    step: "03",
    shortTitle: "Construindo Organização Emocional",
    title: "Jornada 3: Construindo Organização Emocional",
    text: "Comece a organizar seu mundo interno de forma prática, separando o que precisa de ação daquilo que precisa de acolhimento.",
    image: "/wp-content/uploads/2025/11/card3.jpg"
  },
  {
    step: "04",
    shortTitle: "Saindo do Modo Sobrevivência",
    title: "Jornada 4: Saindo do Modo Sobrevivência",
    text: "Entenda por que sua mente permanece em estado de alerta e aprenda a substituir a reação automática por escolhas conscientes.",
    image: "/wp-content/uploads/2025/11/card4.jpg"
  },
  {
    step: "05",
    shortTitle: "Mente Emocionalmente Organizada",
    title: "Jornada 5: Construindo uma Mente Emocionalmente Organizada",
    text: "Desenvolva uma mente emocionalmente organizada, com mais silêncio interno, presença, limites saudáveis e estabilidade emocional.",
    image: "/wp-content/uploads/2025/11/card1.jpg"
  },
  {
    step: "06",
    shortTitle: "Vivendo o Método CMS",
    title: "Jornada 6: Vivendo o Método CMS",
    text: "Consolide tudo o que aprendeu, prepare-se para lidar com recaídas e construa um plano pessoal para manter sua organização emocional ao longo da vida.",
    image: "/wp-content/uploads/2025/11/card0.jpg"
  }
];

export const VerticalScroll: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Pin the left column
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: "bottom bottom",
        pin: leftRef.current,
        scrub: true,
        pinSpacing: false
      });

      // Reveal animations for each step card
      gsap.utils.toArray<HTMLElement>(".reveal-card").forEach((card) => {
        gsap.fromTo(card,
          { opacity: 0, y: 30 },
          {
            opacity: 1, y: 0,
            duration: 0.5,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 100%", // Dispara assim que a ponta do card encosta na tela
              toggleActions: "play none none none" // Toca apenas uma vez para não sumir ao subir
            }
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="method" ref={containerRef} className="relative py-4 md:py-20 px-4 md:px-6 bg-transparent -mt-12 md:mt-0">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-start">

          {/* --- LEFT COL (Pinned) --- */}
          <aside ref={leftRef} className="lg:w-[45%] hidden lg:block z-40 self-start h-screen py-12 flex flex-col justify-center">
            <div className="flex flex-col items-start pr-8 w-full">

              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 shadow-sm mb-10">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse"></div>
                <span className="text-xs font-bold text-blue-700 tracking-wider uppercase">Mapa Clínico da Retomada</span>
              </div>

              <h2 className="text-5xl lg:text-7xl font-serif text-slate-900 mb-8 leading-[1.05] tracking-tight">
                A Ciência do <br />
                <span className="text-blue-600 italic">Silêncio.</span>
              </h2>

              <p className="text-slate-600 text-xl leading-relaxed mb-12 font-light border-l-4 border-blue-300 pl-6 max-w-sm">
                A base neurocientífica para quem busca recuperar a dignidade de viver sem pânico.
              </p>

              <div className="space-y-4 w-full max-w-xs">
                {methodSteps.map((s, idx) => (
                  <div key={idx} className="flex items-center gap-4 group cursor-help">
                    <span className="text-[10px] font-bold text-slate-300 group-hover:text-blue-600 transition-colors uppercase tracking-widest">{s.step}</span>
                    <div className="h-[1px] flex-1 bg-slate-100 group-hover:bg-blue-100 transition-colors"></div>
                    <span className="text-[9px] uppercase tracking-widest font-black text-slate-400 group-hover:text-slate-900 transition-colors">{s.shortTitle}</span>
                  </div>
                ))}
              </div>
            </div>
          </aside>

          {/* --- RIGHT COL (Scrolling Cards) --- */}
          <div ref={rightRef} className="flex-1 space-y-8 lg:space-y-24 py-4 md:py-12">
            {methodSteps.map((step, index) => (
              <div
                key={index}
                className="reveal-card bg-white/60 backdrop-blur-xl p-8 md:p-14 rounded-[3.5rem] shadow-xl border border-white hover:border-blue-100 transition-all duration-700 group flex flex-col gap-10"
              >
                <div className="flex flex-col md:flex-row gap-10 items-center">
                  <div className="w-full md:w-1/2 aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl relative">
                    <img src={step.image} alt={step.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2s]" />
                    <div className="absolute top-6 left-6 text-6xl font-serif text-white/40 italic select-none">{step.step}</div>
                  </div>
                  <div className="flex-1 space-y-6">
                    <span className="text-blue-600 font-bold uppercase tracking-[0.3em] text-[10px] block">Jornada Estratégica</span>
                    <h3 className="text-3xl md:text-4xl font-serif text-slate-900 leading-tight">{step.title}</h3>
                    <p className="text-slate-600 text-lg font-light leading-relaxed italic border-l-2 border-blue-100 pl-6">
                      {step.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* --- FINAL CTA --- */}
            <div className="reveal-card bg-slate-900 p-12 md:p-20 rounded-[3.5rem] text-center text-white relative overflow-hidden group shadow-2xl mt-4">
              <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
              <h3 className="text-4xl md:text-5xl font-serif mb-10 relative z-10 leading-tight">Chegou a hora de você <br />voltar a respirar.</h3>
              <a
                href="#pricing"
                className="inline-flex items-center gap-6 px-12 py-6 bg-white text-slate-900 rounded-full font-bold hover:bg-blue-50 transition-all shadow-xl relative z-10 text-xl group"
              >
                Garantir Minha Liberdade
                <div className="w-12 h-[1px] bg-slate-900 group-hover:bg-blue-600 transition-colors relative overflow-hidden">
                  <div className="absolute inset-0 bg-blue-600 -translate-x-full group-hover:animate-shimmer"></div>
                </div>
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Background Decor Elements */}
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-50/20 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

    </section>
  );
};
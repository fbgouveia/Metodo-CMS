import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const jornadas = [
  {
    number: "1",
    title: "Reconhecendo o Ruído Mental",
    description: "Você vai descobrir por que sua mente parece nunca desligar e entender que o problema não é falta de força, mas uma sobrecarga emocional silenciosa.",
    image: "/wp-content/uploads/2025/11/card0.jpg"
  },
  {
    number: "2",
    title: "Organizando o Caos Interior",
    description: "Aprenda a diferenciar pensamentos, emoções, preocupações, cobranças e responsabilidades para recuperar a clareza emocional.",
    image: "/wp-content/uploads/2025/11/card3.jpg"
  },
  {
    number: "3",
    title: "Construindo Organização Emocional",
    description: "Comece a organizar seu mundo interno de forma prática, separando o que precisa de ação daquilo que precisa de acolhimento.",
    image: "/wp-content/uploads/2025/11/card1.jpg"
  },
  {
    number: "4",
    title: "Saindo do Modo Sobrevivência",
    description: "Entenda por que sua mente permanece em estado de alerta e aprenda a substituir a reação automática por escolhas conscientes.",
    image: "/wp-content/uploads/2025/11/card2.jpg"
  },
  {
    number: "5",
    title: "Construindo uma Mente Emocionalmente Organizada",
    description: "Desenvolva uma mente emocionalmente organizada, com mais silêncio interno, presença, limites saudáveis e estabilidade emocional.",
    image: "/wp-content/uploads/2025/11/card4.jpg"
  },
  {
    number: "6",
    title: "Vivendo o Método CMS",
    description: "Consolide tudo o que aprendeu, prepare-se para lidar com recaídas e construa um plano pessoal para manter sua organização emocional ao longo da vida.",
    image: "/wp-content/uploads/2025/11/card1.jpg"
  }
];

export const ProgramDetails: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('.jornada-card').forEach((card) => {
        gsap.fromTo(
          card,
          { y: 80, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: { 
              trigger: card, 
              start: 'top 85%' 
            },
          }
        );
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className="py-24 md:py-28 relative bg-brand-papel overflow-hidden" id="how-it-works">
      <div ref={containerRef} className="container mx-auto px-6 max-w-6xl">

        {/* Header */}
        <div className="text-center mb-16 md:mb-20 max-w-3xl mx-auto">
          <span className="text-brand-pedra font-bold tracking-[0.3em] uppercase text-xs mb-6 block">
            O PERCURSO
          </span>
          <h2 className="text-4xl md:text-6xl font-serif text-brand-noite mb-8 tracking-tight leading-tight">
            Como funciona a <span className="text-brand-pedra italic">Jornada</span>
          </h2>
          <p className="text-brand-pedra font-light text-lg leading-relaxed text-pretty">
            O Método CMS foi desenvolvido para que cada etapa prepare você para a próxima. 
            Não se trata de aprender técnicas soltas ou acumular informações. 
            Cada jornada ajuda você a desenvolver uma habilidade essencial da Organização Emocional.
          </p>
        </div>

        {/* Grid das Jornadas */}
        <div className="flex flex-col gap-12 md:gap-24">
          {jornadas.map((jornada, i) => (
            <div key={i} className={`jornada-card flex flex-col md:flex-row items-center gap-12 md:gap-24 ${i % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
              
              {/* Imagem branded da Jornada (retrato 4:5) */}
              <div className="w-full md:w-1/2 max-w-md mx-auto aspect-[4/5] rounded-2xl overflow-hidden shadow-lg ring-1 ring-brand-ceu/60 relative">
                 <img
                    src={jornada.image}
                    alt={jornada.title}
                    loading="lazy"
                    className="w-full h-full object-cover object-center transform transition-transform duration-1000 hover:scale-105"
                 />
              </div>

              {/* Texto */}
              <div className="w-full md:w-1/2">
                <span className="text-brand-pedra font-bold tracking-[0.2em] text-sm uppercase mb-4 block">
                  Jornada {jornada.number}
                </span>
                <h3 className="text-3xl md:text-5xl font-serif text-brand-noite leading-tight mb-6">
                  {jornada.title}
                </h3>
                <p className="text-brand-pedra text-lg md:text-xl font-light leading-relaxed">
                  {jornada.description}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

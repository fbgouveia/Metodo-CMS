import React, { useLayoutEffect, useRef } from 'react';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const methodSteps = [
  {
    step: "01",
    title: "Módulo 1: O Fim da Fuga",
    text: "Chega de fugir de lugares e pessoas. Vamos desmascarar o que acontece no seu corpo para que você pare de se sentir refém do seu próprio sistema.",
    image: "https://quiteriagouveia.com/wp-content/uploads/2025/11/card0.jpg"
  },
  {
    step: "02",
    title: "Módulo 2: O Mapa Neural",
    text: "Identifique exatamente onde o seu cérebro 'trava'. Entender o mecanismo é o que impede que você perca mais um dia com medo de ter medo.",
    image: "https://quiteriagouveia.com/wp-content/uploads/2025/11/card1.jpg"
  },
  {
    step: "03",
    title: "Módulo 3: O Resgate Imediato",
    text: "Ter um protocolo de emergência não é opcional, é sobrevivência. Desligue crises de pânico em minutos e recupere seu fôlego na hora.",
    image: "https://quiteriagouveia.com/wp-content/uploads/2025/11/card2.jpg"
  },
  {
    step: "04",
    title: "Módulo 4: Silêncio Mental",
    text: "Pare de ser torturada pelos pensamentos catastróficos. Vamos silenciar a voz que rouba sua energia e sua capacidade de agir no presente.",
    image: "https://quiteriagouveia.com/wp-content/uploads/2025/11/card3.jpg"
  },
  {
    step: "05",
    title: "Módulo 5: Blindagem de Estresse",
    text: "Sua biologia está desregulada e isso está te custando caro. Ajustes precisos para que seu corpo pare de te enviar sinais de perigo falso.",
    image: "https://quiteriagouveia.com/wp-content/uploads/2025/11/card4.jpg"
  },
  {
    step: "06",
    title: "Módulo 6: Retomada da Identidade",
    text: "A ansiedade apagou quem você é. Aqui, você volta a assumir o leme da sua história e para de deixar o pânico decidir quem você deve ser.",
    image: "https://quiteriagouveia.com/wp-content/uploads/2025/11/card5.jpg"
  },
  {
    step: "07",
    title: "Módulo 7: Liberdade Real",
    text: "Um plano de vida onde o medo não tem mais cadeira cativa. Volte a viajar, dirigir e conviver sem o peso de ser um fardo para quem você ama.",
    image: "https://quiteriagouveia.com/wp-content/uploads/2025/11/card6.jpg"
  }
];

export const VerticalScroll: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      if (window.innerWidth >= 1024) {
        ScrollTrigger.create({
          trigger: containerRef.current,
          start: "top top+=120",
          end: "bottom bottom",
          pin: leftRef.current,
          pinSpacing: false,
          anticipatePin: 1,
        });
      }

      const cards = gsap.utils.toArray(".reveal-card");
      cards.forEach((card: any) => {
        gsap.fromTo(card,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "expo.out",
            scrollTrigger: {
              trigger: card,
              start: "top 90%",
              toggleActions: "play none none reverse"
            }
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="method" className="relative z-20 bg-transparent py-24 w-full">
      <div className="container mx-auto px-6">

        <div ref={containerRef} className="flex flex-col lg:flex-row gap-12 lg:gap-24 relative items-start w-full">

          {/* --- LEFT COLUMN --- */}
          <aside ref={leftRef} className="lg:w-[45%] hidden lg:block sticky top-32 z-30 self-start h-fit">
            <div className="flex flex-col items-start pr-8 w-full">

              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 border border-green-100 shadow-sm mb-10">
                <ShieldCheck className="w-4 h-4 text-green-600" />
                <span className="text-xs font-bold text-green-700 tracking-wider uppercase underline underline-offset-4 decoration-green-200">Protocolo de Segurança Ativado</span>
              </div>

              <h2 className="text-5xl lg:text-7xl font-serif text-slate-900 mb-8 leading-[1.05] tracking-tight">
                A Ciência da <br />
                <span className="text-blue-600">Paz Mental.</span>
              </h2>

              <p className="text-slate-600 text-xl leading-relaxed mb-12 font-light border-l-4 border-blue-300 pl-6 max-w-sm">
                Um guia seguro para quem está exausta de lutar sozinha contra o pânico e quer voltar a respirar livremente.
              </p>

              <a
                href="#pricing"
                className="inline-flex items-center gap-4 px-12 py-5 bg-slate-900 text-white rounded-full font-bold shadow-2xl hover:bg-blue-600 transition-all hover:scale-105 active:scale-95 outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              >
                Garantir Minha Vaga
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </aside>

          <div className="lg:hidden text-center w-full mb-12">
            <h2 className="text-4xl font-serif text-slate-900 leading-tight">A Ciência da <br />Paz Mental.</h2>
          </div>

          {/* --- RIGHT COLUMN --- */}
          <div className="lg:w-[55%] flex flex-col gap-16 lg:gap-24 pb-32 w-full">

            {methodSteps.map((item, index) => (
              <div
                key={index}
                className="reveal-card opacity-0 translate-y-12 transition-all duration-1000 ease-out group relative bg-white/95 rounded-[3rem] p-5 md:p-10 border border-slate-50 shadow-[0_15px_45px_rgba(0,0,0,0.03)] hover:shadow-2xl hover:shadow-blue-500/10"
              >
                <div className="flex flex-col md:flex-row gap-10 items-center">
                  <div className="relative w-full md:w-56 h-56 shrink-0 overflow-hidden rounded-[2rem] shadow-sm">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2s]"
                    />
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-5">
                      <span className="text-blue-600 font-serif font-black text-4xl tracking-tighter opacity-10">
                        {item.step}
                      </span>
                      <div className="h-[1px] flex-1 bg-gradient-to-r from-blue-100 to-transparent"></div>
                    </div>
                    <h3 className="text-3xl font-serif text-slate-800 mb-4 group-hover:text-blue-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-slate-500 text-lg leading-relaxed font-light">
                      {item.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            <div className="reveal-card opacity-0 bg-slate-900 p-12 md:p-20 rounded-[3.5rem] text-center text-white relative overflow-hidden group shadow-2xl mt-12">
              <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
              <h3 className="text-4xl md:text-5xl font-serif mb-10 relative z-10 leading-tight">O silêncio absoluto <br />está a um clique.</h3>
              <a
                href="#pricing"
                className="inline-flex items-center gap-4 px-12 py-6 bg-white text-slate-900 rounded-full font-bold hover:bg-blue-50 transition-all hover:scale-105 active:scale-95 shadow-xl relative z-10 text-xl"
              >
                Assumir o Controle
                <ArrowRight className="w-6 h-6" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
import React, { useState, useRef, useEffect } from 'react';
// Lucide icons removed to follow "Non-Obvious Persuasive Design" protocol
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  {
    question: "Isso realmente funciona pra mim?",
    answer: "Se você tem um sistema nervoso humano, sim. O Método CMS não é baseado em crença, é baseado em psicologia comportamental. Nós regulamos na prática seu estado de alerta. O CMS age na reestruturação cognitiva e no comportamento. Não tem como não funcionar se você aplicar."
  },
  {
    question: "Eu já tentei de tudo e nada adiantou.",
    answer: "Você tentou controlar a ansiedade usando a própria mente que está ansiosa. Biologicamente, isso é ineficiente. O CMS te ensina a regular o sistema nervoso via corpo e comportamento (bottom-up). É uma ciência que você ainda não aplicou, por isso os métodos anteriores falharam."
  },
  {
    question: "E se eu tiver uma crise durante o curso?",
    answer: "Você terá o 'Botão de Pânico'. Um módulo específico onde eu te guio, passo a passo, para sair da crise em até 5 minutos. Você nunca mais vai se sentir sozinha e desamparada no meio do pânico."
  },
  {
    question: "Preciso parar meus remédios?",
    answer: "Absolutamente não. O CMS é o melhor amigo do seu tratamento psiquiátrico. Enquanto o remédio regula a química, o CMS te ensina a lidar com as emoções. Com o tempo, é muito comum que o médico reduza sua medicação porque você aprendeu a se regular sozinha."
  },
  {
    question: "Não tenho tempo para assistir aulas longas.",
    answer: "Eu sei que ansioso não tem paciência. Por isso as aulas são 'pílulas' de 10 minutos. Direto ao ponto. Você assiste no ônibus, no almoço, antes de dormir. É feito para a vida corrida."
  },
  {
    question: "A Mentoria vale a pena?",
    answer: "Se você sente que precisa de segurança, sim. Na mentoria, eu praticamente seguro sua mão. Analiso seu caso, tiro suas dúvidas ao vivo e te dou o suporte emocional que falta pra você não desistir. É um investimento na certeza do resultado."
  },
  {
    question: "Meu marido/família não me entende.",
    answer: "Temos um módulo inteiro sobre isso. Você vai aprender a explicar o que sente e, mais importante, vai parar de depender da validação deles. Quando você melhora, a casa inteira melhora."
  },
  {
    question: "Sou muito velha (ou nova) para isso?",
    answer: "A neuroplasticidade (capacidade do cérebro mudar) existe até o último dia de vida. Tenho alunas de 80 anos que se libertaram do medo. Nunca é tarde para ter paz."
  },
  {
    question: "Tenho medo de comprar e me arrepender.",
    answer: "O risco é todo meu. Compre, entre na plataforma. Se não gostar da minha voz, da cor do site ou do método, me mande um oi e eu devolvo seu dinheiro. Você não tem nada a perder, só a ansiedade."
  },
  {
    question: "Como recebo o acesso?",
    answer: "Imediatamente. Assim que o pagamento aprovar, você recebe um e-mail com login e senha. Em 2 minutos você já pode estar assistindo à primeira aula de alívio imediato."
  },
  {
    question: "Tem certificado?",
    answer: "Sim, um lindo certificado de conclusão. Mas o maior prêmio não é o papel, é você voltar a dirigir, a dormir e a sorrir de verdade."
  },
  {
    question: "Aceita boleto parcelado?",
    answer: "O parcelamento é exclusivo no cartão de crédito. No boleto ou PIX é à vista. Mas chame minha equipe no botão do WhatsApp se tiver dificuldade, tentaremos te ajudar."
  }
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header Animation
      gsap.fromTo(".faq-header",
        { y: 30, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.8,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 90%",
          }
        }
      );

      // Items Animation
      gsap.fromTo(".faq-item",
        { y: 20, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.5,
          stagger: 0.05,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 85%",
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="faq" className="py-24 relative z-10">
      <div ref={containerRef} className="container mx-auto px-6 max-w-3xl">
        <div className="faq-header text-center mb-16 opacity-0">
          <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 mb-6">
            <div className="w-1 h-1 rounded-full bg-blue-600 animate-pulse"></div>
            <span className="text-xs font-bold text-blue-600 tracking-wider uppercase">Tire suas Dúvidas</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-serif text-slate-900 mb-4">
            Ainda com medo de tentar?
          </h2>
          <p className="text-slate-500 font-light">
            Eu entendo seu ceticismo. Aqui estão as respostas honestas que você precisa.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq-item opacity-0 rounded-2xl overflow-hidden transition-all duration-300 ${openIndex === index
                ? 'bg-white shadow-lg shadow-blue-900/5 ring-1 ring-blue-100 border border-blue-50'
                : 'bg-white/40 hover:bg-white/60'
                }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none group"
              >
                <div className="flex items-center gap-4">
                  <span className={`text-[10px] font-bold tracking-widest ${openIndex === index ? 'text-blue-600' : 'text-slate-300'}`}>0{index + 1}</span>
                  <span className={`font-serif text-lg pr-4 transition-colors ${openIndex === index ? 'text-blue-600' : 'text-slate-800 group-hover:text-blue-600'}`}>
                    {faq.question}
                  </span>
                </div>
                <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-500 border ${openIndex === index ? 'bg-blue-600 border-blue-600 text-white rotate-180' : 'bg-transparent border-slate-200 text-slate-400 group-hover:border-blue-300 group-hover:text-blue-600'
                  }`}>
                  <span className="text-xl leading-none font-light mb-0.5">{openIndex === index ? '−' : '+'}</span>
                </div>
              </button>

              <div
                className={`grid transition-[grid-template-rows] duration-500 ease-in-out ${openIndex === index ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                  }`}
              >
                <div className="overflow-hidden">
                  <div className="p-8 pt-0 text-slate-600 leading-relaxed border-t border-dashed border-blue-100/50 mt-4 text-base font-light italic">
                    {faq.answer}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center faq-item opacity-0">
          <p className="text-slate-400 text-sm">Não deixe a dúvida te paralisar. <br className="md:hidden" /> <a href="https://api.whatsapp.com/send?phone=5511956185501&text=Ola%20Quiteria!%20gostaria%20de%20saber%20mais%20sobre%20o%20curso%20e%20a%20mentoria%20cerebro%20em%20modo%20silencioso" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-bold underline hover:text-blue-700 ml-1">Fale comigo no WhatsApp</a></p>
        </div>
      </div>
    </section>
  );
};

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
// Lucide icons removed to follow "Non-Obvious Persuasive Design" protocol

gsap.registerPlugin(ScrollTrigger);

const journeySteps = [
    {
        title: "O Pântano da Solidão",
        description: "Você sente que o mundo ficou grande demais e seu quarto parece ser o único refúgio. Cada 'não' que você diz para a vida dói, mas o seu cérebro entende que o isolamento é o único escudo de proteção que lhe restou.",
        roman: "I",
        color: "from-slate-700 to-slate-950"
    },
    {
        title: "O Basta Interno",
        description: "O cansaço de apenas 'tentar passar o dia' finalmente superou o medo de buscar ajuda. No fundo, você sente que sua identidade ainda está lá guardada e decide que não quer mais apenas sobreviver.",
        roman: "II",
        color: "from-blue-600 to-indigo-900"
    },
    {
        title: "A Voz da Experiência",
        description: "Você encontra na Dra. Quitéria não apenas uma técnica, mas 40 anos de casos reais resolvidos. Ela estende a mão com um mapa clínico validado por milhares de mulheres que recuperaram a autonomia.",
        roman: "III",
        color: "from-blue-500 to-blue-700"
    },
    {
        title: "O Silêncio dos Sintomas",
        description: "Ao iniciar o Método CMS, o seu sistema nervoso finalmente começa a entender que o perigo passou. O volume do medo baixa, o peito relaxa e você volta a ouvir a sua própria voz em vez do pânico.",
        roman: "IV",
        color: "from-blue-700 to-slate-900"
    },
    {
        title: "A Reconquista do Espaço",
        description: "A quebra do ciclo de fuga. Você volta a dirigir, volta a frequentar lugares e a planejar o futuro. O 'E se eu passar mal?' é substituído pela certeza de que você tem as ferramentas para se autorregular.",
        roman: "V",
        color: "from-emerald-600 to-teal-700"
    },
    {
        title: "Dona do Próprio Destino",
        description: "A liberdade é devolvida. O medo agora é apenas um sinal distante que você sabe gerenciar. Você está livre para respirar fundo, sorrir e ser exatamente a mulher que foi feita para ser.",
        roman: "VI",
        color: "from-amber-600 to-orange-700"
    }
];

export const TransformationJourney: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const lineRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Animação da linha central
            gsap.fromTo(lineRef.current,
                { scaleY: 0 },
                {
                    scaleY: 1,
                    ease: "none",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 20%",
                        end: "bottom 80%",
                        scrub: true
                    }
                }
            );

            // Animação dos itens
            gsap.utils.toArray(".journey-item").forEach((item: any, i) => {
                gsap.from(item, {
                    x: i % 2 === 0 ? -50 : 50,
                    opacity: 0,
                    duration: 1,
                    scrollTrigger: {
                        trigger: item,
                        start: "top 85%",
                        toggleActions: "play none none reverse"
                    }
                });
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id="journey" ref={sectionRef} className="py-32 relative bg-white overflow-hidden">
            <div className="container mx-auto px-6">

                <div className="text-center mb-24">
                    <span className="text-blue-600 font-bold tracking-[0.3em] uppercase text-xs mb-4 block">O Protocolo de Retomada</span>
                    <h2 className="text-4xl md:text-6xl font-serif text-slate-900 leading-tight">
                        De Prisioneira do Medo <br />
                        <span className="text-blue-600 italic">à Dona de Si Mesma</span>
                    </h2>
                </div>

                <div className="relative max-w-5xl mx-auto">
                    {/* Linha Neural Central - Scoped to this section */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-[2px] md:w-[4px] -translate-x-1/2 hidden md:block">
                        {/* Trilho Base */}
                        <div className="absolute inset-0 bg-slate-100/50 rounded-full"></div>

                        {/* Linha de Energia Dinâmica */}
                        <div
                            ref={lineRef}
                            className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-slate-900 via-blue-600 to-emerald-400 origin-top rounded-full shadow-[0_0_15px_rgba(59,130,246,0.5)] scale-y-0"
                        >
                            {/* Ponta de Brilho (Neural Head) */}
                            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-32 bg-gradient-to-t from-white via-blue-300 to-transparent blur-md rounded-full opacity-80"></div>
                        </div>
                    </div>

                    <div className="space-y-24 md:space-y-32">
                        {journeySteps.map((step, index) => (
                            <div
                                key={index}
                                className={`journey-item flex flex-col md:flex-row items-center gap-8 md:gap-16 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                                    }`}
                            >
                                {/* Lado do Conteúdo */}
                                <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                                    <div className={`p-8 rounded-[2.5rem] bg-white shadow-xl border border-slate-50 transition-transform duration-500 hover:-translate-y-2`}>
                                        <h3 className="text-2xl font-serif text-slate-900 mb-4">{step.title}</h3>
                                        <p className="text-slate-600 font-light leading-relaxed">
                                            {step.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Marcador Tipográfico Central */}
                                <div className="relative z-10">
                                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center text-white shadow-lg ring-8 ring-white rotate-45 group-hover:rotate-0 transition-transform duration-700`}>
                                        <span className="text-3xl font-serif font-black -rotate-45 group-hover:rotate-0 transition-transform duration-700">{step.roman}</span>
                                    </div>
                                    {/* Numero auxiliar sutil */}
                                    <span className="absolute -top-4 -right-4 bg-slate-900 text-white text-[8px] p-2 rounded-full font-bold w-6 h-6 flex items-center justify-center">
                                        0{index + 1}
                                    </span>
                                </div>

                                {/* Lado Vazio (para equilíbrio no grid) */}
                                <div className="flex-1 hidden md:block"></div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-32 text-center">
                        <div className="inline-block p-12 rounded-[3.5rem] bg-slate-50 border border-slate-200 relative group overflow-hidden">
                            <div className="absolute inset-0 bg-blue-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                            <div className="relative z-10">
                                <h3 className="text-3xl font-serif text-slate-900 group-hover:text-white mb-6 transition-colors tracking-tight">
                                    O final dessa jornada <br />é você livre.
                                </h3>
                                <a
                                    href="#pricing"
                                    className="inline-flex items-center gap-6 px-10 py-5 bg-blue-600 text-white group-hover:bg-white group-hover:text-blue-600 rounded-full font-bold transition-all shadow-xl group"
                                >
                                    Quero meu Silêncio de Volta
                                    <div className="w-8 h-[1px] bg-white group-hover:bg-blue-600 relative overflow-hidden">
                                        <div className="absolute inset-0 bg-blue-200 -translate-x-full group-hover:animate-shimmer"></div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};



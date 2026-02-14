import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Compass, Lock, Eye, Key, Map, Sun, Wind } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const journeySteps = [
    {
        title: "O Exílio no Próprio Corpo",
        description: "Sua vida hoje é um labirinto de nãos. Não sai, não dirige, não vive. O pânico sequestrou sua liberdade e você se sente uma estrangeira dentro da própria casa.",
        icon: <Lock className="w-8 h-8" />,
        color: "from-slate-700 to-slate-950"
    },
    {
        title: "O Grito de 'Basta'",
        description: "A dor de ver a vida passar pela janela tornou-se insuportável. Você cansou de ouvir que 'é só emocional'. Você quer sua biologia de volta.",
        icon: <Compass className="w-8 h-8" />,
        color: "from-blue-600 to-indigo-900"
    },
    {
        title: "A Mão do Mentor",
        description: "A Dra. Quitéria não te dá conselhos rasos. Ela te dá o mapa clínico que ela mesma usou para silenciar o medo em mais de 5.000 mulheres.",
        icon: <Eye className="w-8 h-8" />,
        color: "from-blue-500 to-blue-700"
    },
    {
        title: "A Travessia do Deserto",
        description: "Início do Método CMS. Você para de lutar contra os sintomas e aprende a desarmá-los. O alarme começa a baixar o volume pela primeira vez.",
        icon: <Key className="w-8 h-8" />,
        color: "from-indigo-600 to-purple-800"
    },
    {
        title: "O Primeiro Suspiro Livre",
        description: "A quebra do ciclo. Você vai à padaria sozinha. Você dirige um quarteirão. O 'E se...?' é substituído pelo 'Eu consigo'.",
        icon: <Wind className="w-8 h-8" />,
        color: "from-emerald-600 to-teal-700"
    },
    {
        title: "O Retorno da Capitã",
        description: "A vida que estava trancada é devolvida. Você volta a viajar, a sorrir e a planejar o futuro. O medo agora é apenas uma sombra pequena no retrovisor.",
        icon: <Map className="w-8 h-8" />,
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
        <section ref={sectionRef} className="py-32 relative bg-white overflow-hidden">
            <div className="container mx-auto px-6">

                <div className="text-center mb-24">
                    <span className="text-blue-600 font-bold tracking-[0.3em] uppercase text-xs mb-4 block">A Jornada do Herói</span>
                    <h2 className="text-4xl md:text-6xl font-serif text-slate-900 leading-tight">
                        De Prisioneira do Medo <br />
                        <span className="text-blue-600">à Capitã da Própria Vida</span>
                    </h2>
                </div>

                <div className="relative max-w-5xl mx-auto">
                    {/* Linha Central Vertical */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-slate-100 -translate-x-1/2 hidden md:block"></div>
                    <div
                        ref={lineRef}
                        className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-slate-900 via-blue-600 to-emerald-500 -translate-x-1/2 origin-top hidden md:block scale-y-0"
                    ></div>

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

                                {/* Ícone Central */}
                                <div className="relative z-10">
                                    <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center text-white shadow-lg ring-8 ring-white`}>
                                        {step.icon}
                                    </div>
                                    {/* Numero flutuante */}
                                    <span className="absolute -top-4 -right-4 bg-slate-900 text-white text-[10px] p-2 rounded-full font-bold w-8 h-8 flex items-center justify-center">
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
                                    className="inline-flex items-center gap-3 px-10 py-5 bg-blue-600 text-white group-hover:bg-white group-hover:text-blue-600 rounded-full font-bold transition-all shadow-xl"
                                >
                                    Começar Minha Travessia
                                    <ChevronRight />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const ChevronRight = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
);

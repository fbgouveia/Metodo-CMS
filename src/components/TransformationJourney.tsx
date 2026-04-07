import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
// Lucide icons removed to follow "Non-Obvious Persuasive Design" protocol

gsap.registerPlugin(ScrollTrigger);

const journeySteps = [
    {
        title: "O Medo de Falhar com Eles",
        description: "Você cancela a festa da escola, não consegue dirigir com os filhos no carro, finge que está bem na frente deles. Mas por dentro, o peito aperta e a voz na sua cabeça diz: 'Que tipo de mãe eu sou?'. Esse peso invisível é a sua dor mais profunda.",
        roman: "I",
        color: "from-slate-700 to-slate-950"
    },
    {
        title: "O Basta que Vem do Amor",
        description: "Não é por você que você decide agir — é por eles. Você se recusa a deixar que seus filhos cresçam com a memória de uma mãe com medo. Esse 'basta' movido pelo amor é o acionador mais poderoso de mudança que existe.",
        roman: "II",
        color: "from-blue-600 to-indigo-900"
    },
    {
        title: "O Mecanismo que Faltava",
        description: "Você já tentou respiração, terapia, florais e remédio. O que faltava era entender por que o alarme do seu cérebro está quebrado. A Dra. Quitéria não te dá mais uma técnica — ela te ensina a desligar o interruptor neural que aciona o pânico.",
        roman: "III",
        color: "from-blue-500 to-blue-700"
    },
    {
        title: "O Silêncio de 5 Minutos",
        description: "A primeira vez que você usa o Protocolo SOS do Método CMS e o ataque para em 5 minutos, algo muda para sempre. Você percebe: 'Não estava louca. Meu cérebro aprendeu um padrão errado e agora eu sei como reescrevê-lo.'",
        roman: "IV",
        color: "from-blue-700 to-slate-900"
    },
    {
        title: "De Volta à Direção",
        description: "Você volta a levar seus filhos na escola. Assiste à peça de teatro do final de ano sem sair correndo no meio. Entra num supermercado sem o coração disparado. Cada ação pequena é uma vitória enorme — e eles percebem a mãe que você está se tornando novamente.",
        roman: "V",
        color: "from-emerald-600 to-teal-700"
    },
    {
        title: "A Mãe que Eles Merecem",
        description: "O medo não desaparece da vida, mas perde o poder sobre você. Você tem as ferramentas. Você tem o mapa. Você voltou a ser a base — aquela que abraça sem tremuras, que faz planos e que dorme a noite inteira. Seus filhos têm a mãe que sempre mereceram.",
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
                    <span className="text-blue-600 font-bold tracking-[0.3em] uppercase text-xs mb-4 block">A Jornada Clínica de Recuperação</span>
                    <h2 className="text-4xl md:text-6xl font-serif text-slate-900 leading-tight">
                        De Mãe com Medo <br />
                        <span className="text-blue-600 italic">à Base da Família</span>
                    </h2>
                </div>

                <div className="relative max-w-5xl mx-auto">
                    {/* Linha Neural Central (Desktop) / Lateral (Mobile) */}
                    <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[2px] md:w-[4px] md:-translate-x-1/2 block">
                        {/* Trilho Base */}
                        <div className="absolute inset-0 bg-slate-100/50 rounded-full"></div>

                        {/* Linha de Energia Dinâmica */}
                        <div
                            ref={(el) => { lineRef.current = el; }}
                            className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-slate-900 via-blue-600 to-emerald-400 origin-top rounded-full shadow-[0_0_15px_rgba(59,130,246,0.5)]"
                        >
                            {/* Ponta de Brilho (Neural Head) */}
                            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-32 bg-gradient-to-t from-white via-blue-300 to-transparent blur-md rounded-full opacity-80"></div>
                        </div>
                    </div>

                    <div className="space-y-16 md:space-y-32">
                        {journeySteps.map((step, index) => (
                            <div
                                key={index}
                                className={`journey-item flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-16 relative pl-20 md:pl-0 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                                    }`}
                            >
                                {/* Lado do Conteúdo */}
                                <div className={`flex-1 w-full ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                                    <div className={`p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem] bg-white shadow-lg md:shadow-xl border border-slate-50 transition-transform duration-500 hover:-translate-y-1 md:hover:-translate-y-2 group hover:border-blue-100`}>
                                        <h3 className="text-xl md:text-2xl font-serif text-slate-900 mb-3 md:mb-4 text-balance leading-tight group-hover:text-blue-700 transition-colors">{step.title}</h3>
                                        <p className="text-slate-600 text-sm md:text-base font-light leading-relaxed text-pretty">
                                            {step.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Marcador Tipográfico (Mobile: Lateral Absoluto / Desktop: Central Estático) */}
                                <div className="absolute left-4 top-0 md:static md:left-auto md:top-auto z-10 flex-shrink-0">
                                    <div className={`w-12 h-12 md:w-20 md:h-20 rounded-xl md:rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center text-white shadow-lg ring-4 md:ring-8 ring-white rotate-45 transform transition-transform duration-700 hover:rotate-0 hover:scale-110`}>
                                        <span className="text-xl md:text-3xl font-serif font-black -rotate-45">{step.roman}</span>
                                    </div>
                                </div>

                                {/* Lado Vazio (para equilíbrio no grid desktop) */}
                                <div className="flex-1 hidden md:block"></div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-32 text-center">
                        <div className="inline-block p-12 rounded-[3.5rem] bg-slate-50 border border-slate-200 relative group overflow-hidden">
                            <div className="absolute inset-0 bg-blue-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                            <div className="relative z-10">
                                <h3 className="text-3xl font-serif text-slate-900 group-hover:text-white mb-4 transition-colors tracking-tight">
                                    Cada dia de espera é um dia a menos <br />com os seus filhos.
                                </h3>
                                <p className="text-slate-500 group-hover:text-white/70 text-sm mb-6 transition-colors font-light italic">O Método CMS começou a funcionar para mais de 2.500 mulheres. Você pode ser a próxima.</p>
                                <a
                                    href="#pricing"
                                    className="inline-flex items-center gap-6 px-10 py-5 bg-blue-600 text-white group-hover:bg-white group-hover:text-blue-600 rounded-full font-bold transition-all shadow-xl group"
                                >
                                    Quero ser essa mãe de novo
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



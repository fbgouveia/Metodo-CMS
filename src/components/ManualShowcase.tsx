import React from 'react';
// Lucide icons removed to follow "Non-Obvious Persuasive Design" protocol

const manualFeatures = [
    {
        title: "O Botão de Pânico",
        desc: "Técnica biofísica para desativar crises de taquicardia em menos de 60 segundos.",
        type: "EMERGÊNCIA"
    },
    {
        title: "O Segundo Alarme",
        desc: "Como identificar se a sensação é física ou um alarme falso do seu sistema nervoso.",
        type: "AUTOCONHECIMENTO"
    },
    {
        title: "Manual de Sobrevivência",
        desc: "O que fazer quando a ansiedade bater no meio de um mercado, avião ou reunião.",
        type: "ESTRATÉGIA"
    }
];

export const ManualShowcase: React.FC = () => {
    return (
        <section className="py-24 relative bg-[#F8FAFC]">
            <div className="container mx-auto px-6">

                <div className="flex flex-col lg:flex-row gap-16 items-center max-w-6xl mx-auto">

                    {/* Visual do Manual */}
                    <div className="flex-1 relative order-2 lg:order-1">
                        <div className="absolute -inset-10 bg-blue-400/10 rounded-full blur-[100px] opacity-50"></div>
                        <div className="relative group">
                            <img
                                src="https://quiteriagouveia.com/wp-content/uploads/2026/01/mockup-promp6final_ok.png"
                                alt="Manual de Gestão da Ansiedade"
                                className="w-full h-auto drop-shadow-[0_35px_35px_rgba(0,0,0,0.15)] transition-transform duration-[2s] group-hover:scale-[1.02]"
                            />
                            {/* Floating Badge - Typographic */}
                            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-2xl border border-blue-50 animate-bounce group-hover:animate-none z-30">
                                <div className="text-center">
                                    <p className="text-3xl font-serif text-slate-900 leading-none">R$ 47</p>
                                    <div className="w-8 h-[1px] bg-blue-200 mx-auto my-2"></div>
                                    <p className="text-[10px] font-black uppercase text-blue-600 tracking-tighter">Valor de Mercado</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Conteúdo Persuasivo */}
                    <div className="flex-1 order-1 lg:order-2">
                        <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 mb-6">
                            <div className="w-1 h-1 rounded-full bg-blue-600 animate-pulse"></div>
                            <span className="text-xs font-bold text-blue-700 tracking-wider uppercase">Bônus Especial Incluso</span>
                        </div>

                        <h2 className="text-4xl md:text-6xl font-serif text-slate-900 mb-8 leading-tight">
                            Manual de <br />
                            <span className="text-blue-600 italic">Gestão da Ansiedade.</span>
                        </h2>

                        <div className="space-y-6 text-slate-600 font-light text-lg mb-10 leading-relaxed italic border-l-2 border-blue-100 pl-8">
                            <p>
                                Sabia que <strong>70% das visitas ao pronto-socorro</strong> com sintomas de "infarto" são, na verdade, crises de ansiedade não tratadas?
                            </p>
                            <p>
                                O Manual foca naqueles sintomas que você tenta ignorar: a tensão na mandíbula, o "nó" na garganta e o medo constante de errar.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                            {manualFeatures.map((feat, i) => (
                                <div key={i} className="flex gap-4 group">
                                    <div className="w-1.5 h-1.5 rounded-full bg-blue-300 mt-2 shrink-0 group-hover:bg-blue-600 transition-colors"></div>
                                    <div>
                                        <span className="text-[9px] font-black text-blue-400 uppercase tracking-widest block mb-1">{feat.type}</span>
                                        <h4 className="font-serif text-slate-900 text-lg mb-1">{feat.title}</h4>
                                        <p className="text-slate-500 text-xs leading-relaxed font-light">{feat.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="p-10 rounded-[2.5rem] bg-slate-900 text-white shadow-2xl relative overflow-hidden group/card shadow-blue-900/40">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/20 rounded-full blur-[50px] -translate-y-1/2 translate-x-1/2"></div>
                            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                                <div>
                                    <p className="text-blue-400 text-[10px] font-black uppercase tracking-[0.3em] mb-3">Oferta de Lançamento V2</p>
                                    <h3 className="text-2xl md:text-3xl font-serif text-white/90 leading-tight">Grátis hoje com a <br />Mentoria VIP</h3>
                                </div>
                                <a
                                    href="#mentorship-funnel"
                                    className="bg-white text-slate-900 px-10 py-5 rounded-full font-bold hover:bg-blue-50 transition-all flex items-center justify-center gap-6 shadow-xl group/btn min-w-[240px]"
                                >
                                    <span className="uppercase tracking-widest text-xs">Garantir Meu Presente</span>
                                    <div className="w-8 h-[1px] bg-slate-900 relative overflow-hidden">
                                        <div className="absolute inset-0 bg-blue-600 -translate-x-full group-hover/btn:animate-shimmer"></div>
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

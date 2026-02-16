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
                        <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-orange-50 border border-orange-100 mb-6 animate-pulse">
                            <div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div>
                            <span className="text-xs font-bold text-orange-600 tracking-wider uppercase">Emergência Emocional</span>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-serif text-slate-900 mb-6 leading-tight">
                            Precisa de Alívio <br />
                            <span className="text-blue-600 italic">Imediato?</span>
                        </h2>

                        <div className="space-y-6 text-slate-600 font-light text-lg mb-10 leading-relaxed italic border-l-4 border-orange-200 pl-6 bg-orange-50/30 p-4 rounded-r-2xl">
                            <p>
                                "Se você sente que vai explodir <strong>AGORA</strong> e não pode esperar um curso inteiro para melhorar, comece por aqui."
                            </p>
                            <p className="text-sm not-italic font-medium text-slate-500">
                                O Manual é o protocolo de primeiros socorros da Dra. Quitéria para parar uma crise em até 5 minutos.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 gap-6 mb-12">
                            {manualFeatures.map((feat, i) => (
                                <div key={i} className="flex gap-4 group p-4 hover:bg-white hover:shadow-lg rounded-2xl transition-all border border-transparent hover:border-blue-50">
                                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors text-blue-600 font-serif font-bold">
                                        {i + 1}
                                    </div>
                                    <div>
                                        <h4 className="font-serif text-slate-900 text-lg mb-1">{feat.title}</h4>
                                        <p className="text-slate-500 text-sm leading-relaxed">{feat.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="p-8 rounded-[2rem] bg-slate-900 text-white shadow-2xl relative overflow-hidden group/card shadow-orange-900/20 border border-white/10">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-[60px] pointer-events-none"></div>

                            <div className="relative z-10 flex flex-col items-center text-center gap-6">
                                <div>
                                    <p className="text-orange-400 text-[10px] font-black uppercase tracking-[0.3em] mb-2">Oferta Relâmpago</p>
                                    <div className="flex items-center justify-center gap-3">
                                        <span className="text-slate-500 line-through text-sm">R$ 97,00</span>
                                        <span className="text-4xl font-serif italic text-white">R$ 47,00</span>
                                    </div>
                                    <p className="text-xs text-slate-400 mt-2">Menos que um pedido de delivery.</p>
                                </div>

                                <a
                                    href="https://pay.kiwify.com.br/valorde47"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full bg-white text-slate-900 px-8 py-4 rounded-full font-black uppercase tracking-widest text-xs hover:bg-orange-50 transition-all shadow-lg hover:shadow-orange-500/20 flex items-center justify-center gap-2 group/btn"
                                >
                                    <span>Baixar Agora</span>
                                    <svg className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </a>

                                <p className="text-[9px] text-slate-500 font-medium uppercase tracking-wider">
                                    🔒 Acesso Imediato via E-mail
                                </p>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
};

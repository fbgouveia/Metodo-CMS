import React from 'react';
import { BookOpen, CheckCircle2, AlertCircle, Sparkles, ArrowRight } from 'lucide-react';

const manualFeatures = [
    {
        title: "O Botão de Pânico",
        desc: "Técnica biofísica para desativar crises de taquicardia em menos de 60 segundos.",
        icon: <AlertCircle className="w-6 h-6 text-rose-500" />
    },
    {
        title: "O Segundo Alarme",
        desc: "Como identificar se a sensação é física ou um alarme falso do seu sistema nervoso.",
        icon: <BookOpen className="w-6 h-6 text-blue-500" />
    },
    {
        title: "Manual de Sobrevivência",
        desc: "O que fazer quando a ansiedade bater no meio de um mercado, avião ou reunião.",
        icon: <Sparkles className="w-6 h-6 text-amber-500" />
    }
];

export const ManualShowcase: React.FC = () => {
    return (
        <section className="py-24 relative bg-[#F8FAFC]">
            <div className="container mx-auto px-6">

                <div className="flex flex-col lg:flex-row gap-16 items-center max-w-6xl mx-auto">

                    {/* Visual do Manual (Extraído do Projeto Ebook) */}
                    <div className="flex-1 relative order-2 lg:order-1">
                        <div className="absolute -inset-10 bg-blue-400/10 rounded-full blur-[100px] opacity-50"></div>
                        <div className="relative group perspective-1000">
                            <img
                                src="https://quiteriagouveia.com/wp-content/uploads/2026/01/mockup-promp6final_ok.png"
                                alt="Mockup Manual CMS"
                                className="w-full h-auto drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)] transition-transform duration-700 group-hover:rotate-y-12"
                            />
                            {/* Floating Badge */}
                            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-2xl border border-blue-50 animate-bounce-slow">
                                <div className="text-center">
                                    <p className="text-3xl font-bold text-slate-900">R$ 47</p>
                                    <p className="text-[10px] font-black uppercase text-blue-600 tracking-tighter">Valor de Mercado</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Conteúdo Persuasivo */}
                    <div className="flex-1 order-1 lg:order-2">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100 border border-blue-200 mb-6">
                            <Sparkles className="w-4 h-4 text-blue-600" />
                            <span className="text-xs font-bold text-blue-700 tracking-wider uppercase">Bônus Especial Incluso</span>
                        </div>

                        <h2 className="text-4xl md:text-6xl font-serif text-slate-900 mb-8 leading-tight">
                            Manual de <br />
                            <span className="text-blue-600">Gestão da Ansiedade.</span>
                        </h2>

                        <div className="space-y-6 text-slate-600 font-light text-lg mb-10">
                            <p>
                                Sabia que <strong>70% das visitas ao pronto-socorro</strong> com sintomas de "infarto" são, na verdade, crises de ansiedade não tratadas?
                            </p>
                            <p>
                                O Manual foca naqueles sintomas que você tenta ignorar: a tensão na mandíbula, o "nó" na garganta e o medo constante de errar.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                            {manualFeatures.map((feat, i) => (
                                <div key={i} className="flex gap-4 group">
                                    <div className="w-10 h-10 rounded-xl bg-white shadow-md flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-all">
                                        {feat.icon}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 text-base mb-1">{feat.title}</h4>
                                        <p className="text-slate-500 text-xs leading-relaxed">{feat.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="p-8 rounded-[2.5rem] bg-slate-900 text-white shadow-2xl relative overflow-hidden">
                            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
                                <div>
                                    <p className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-2">Oferta de Lançamento V2</p>
                                    <h3 className="text-2xl font-serif">Grátis hoje com a Mentoria VIP</h3>
                                </div>
                                <a
                                    href="#mentorship-funnel"
                                    className="bg-white text-slate-900 px-8 py-4 rounded-full font-bold hover:bg-blue-600 hover:text-white transition-all flex items-center gap-2 shadow-xl"
                                >
                                    Garantir Meu Presente <ArrowRight size={18} />
                                </a>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
};

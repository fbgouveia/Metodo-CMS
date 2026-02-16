import React from 'react';
// Lucide icons removed to follow "Non-Obvious Persuasive Design" protocol

interface PricingProps {
    id?: string;
    isPreview?: boolean;
    customTitle?: string;
    customSubtitle?: string;
    customBadge?: string;
}

export const Pricing: React.FC<PricingProps> = ({
    id = "pricing",
    isPreview = false,
    customTitle,
    customSubtitle,
    customBadge
}) => {

    const linkCurso = "https://pay.kiwify.com.br/cUO2x97";
    const linkMentoria = "https://pay.kiwify.com.br/7zPIO6z";

    if (isPreview) {
        return (
            <div id={id} className="w-full">
                <div className="bg-white/50 backdrop-blur-xl p-6 rounded-[2rem] shadow-lg border border-white/50 flex flex-col md:flex-row items-center justify-between gap-6 transform hover:scale-[1.01] transition-transform duration-300">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-md animate-pulse">!</div>
                        <div className="text-center md:text-left">
                            {customBadge && <p className="text-[10px] text-slate-600 font-bold uppercase tracking-wide mb-1">{customBadge}</p>}
                            <h3 className="text-lg font-bold text-slate-900 leading-tight">{customTitle || "Oferta Relâmpago"}</h3>
                            <p className="text-sm text-slate-700">{customSubtitle || "12x R$ 49,90"}</p>
                        </div>
                    </div>
                    <a
                        href={linkCurso}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-slate-900 text-white px-8 py-3 rounded-full text-sm font-bold hover:bg-blue-600 transition-all shadow-md w-full md:w-auto text-center flex items-center justify-center gap-4 group"
                    >
                        Quero minha vaga
                        <div className="w-4 h-[1px] bg-white group-hover:bg-cyan-400 transition-colors"></div>
                    </a>
                </div>
            </div>
        );
    }

    return (
        <section id={id} className="py-24 px-4 relative z-10">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-20">
                    <span className="text-blue-700 font-bold tracking-widest uppercase text-xs">O Próximo Passo Para Sua Paz</span>
                    <h2 className="text-4xl md:text-6xl font-serif text-slate-900 mt-4 mb-6 tracking-tight leading-tight">
                        A Sua Retomada <br /><span className="text-blue-600 italic">Começa Aqui.</span>
                    </h2>
                    <p className="text-slate-500 text-xl max-w-3xl mx-auto font-light leading-relaxed italic border-l-2 border-blue-100 pl-8">
                        Eu sei o quanto você já lutou sozinha. O Método CMS é o <strong>apoio seguro</strong> que faltava para você parar de apenas sobreviver e voltar a ser a dona do seu destino.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto mb-16">
                    <div className="bg-blue-50/50 border border-blue-100 p-10 rounded-[3rem] flex flex-col md:flex-row items-center gap-10 shadow-sm transition-all hover:bg-white/60">
                        <div className="w-24 h-24 shrink-0 rounded-[2rem] overflow-hidden shadow-2xl border border-white">
                            <img
                                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200"
                                alt="Relato Real"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div>
                            <div className="text-amber-500 font-serif text-sm tracking-widest mb-3">5.0 / 5.0</div>
                            <p className="text-slate-700 italic text-xl leading-relaxed mb-4">
                                "Eu achava que meu caso não tinha solução. Em 3 dias aplicando o que a Dra. Quitéria ensina no Módulo 3, eu parei de sentir que ia infartar a qualquer momento."
                            </p>
                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">— Juliana Costa, Aluna CMS</p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-12 max-w-4xl mx-auto items-center">
                    {/* Simplified for brevity while keeping the same logic as the rest of the site */}
                    <div className="w-full relative group">
                        <div className="bg-slate-900 text-white p-12 md:p-16 rounded-[3rem] shadow-2xl border border-white/10 flex flex-col md:flex-row gap-12 items-center">
                            <div className="flex-1">
                                <span className="text-blue-400 font-black uppercase tracking-[0.3em] text-[10px] block mb-4">Padrão Ouro</span>
                                <h3 className="text-4xl font-serif mb-8 italic">Mentoria VIP</h3>
                                <ul className="space-y-6 text-slate-400 font-light italic text-base">
                                    <li className="flex items-center gap-4">
                                        <div className="w-1.5 h-1.5 rounded-full bg-blue-600"></div>
                                        <span>Acompanhamento Direto</span>
                                    </li>
                                    <li className="flex items-center gap-4">
                                        <div className="w-1.5 h-1.5 rounded-full bg-blue-600"></div>
                                        <span>6 Encontros ao Vivo</span>
                                    </li>
                                    <li className="flex items-center gap-4">
                                        <div className="w-1.5 h-1.5 rounded-full bg-blue-600"></div>
                                        <span>Manual CMS Digital Incluso</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="w-full md:w-80 bg-white/5 p-10 rounded-[2.5rem] border border-white/10 text-center">
                                <span className="text-xs text-gray-500 line-through block mb-2 font-bold uppercase tracking-widest">R$ 2.990</span>
                                <span className="text-6xl font-black text-white mb-4 block">R$ 1.480</span>
                                <p className="text-blue-400 font-bold italic mb-8">ou 12x R$ 153,10</p>
                                <a href={linkMentoria} target="_blank" className="block w-full py-6 bg-blue-600 rounded-full font-black uppercase tracking-widest text-xs hover:bg-blue-700 transition-all shadow-xl shadow-blue-900/40">Garantir Meu Seguro</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

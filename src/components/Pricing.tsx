import React from 'react';
import { Check, ArrowRight, Star, MessageCircle } from 'lucide-react';

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

    // Links de Compra (Hotmart)
    const linkCurso = "https://pay.kiwify.com.br/cUO2x97";
    const linkMentoria = "https://pay.kiwify.com.br/7zPIO6z";

    // --- MODO BARRA DE OFERTA (Topo) ---
    if (isPreview) {
        return (
            <div id={id} className="w-full">
                <div className="bg-white/50 backdrop-blur-xl p-6 rounded-[2rem] shadow-lg border border-white/50 flex flex-col md:flex-row items-center justify-between gap-6 transform hover:scale-[1.01] transition-transform duration-300">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-md animate-pulse">⚡</div>
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
                        className="bg-slate-900 text-white px-8 py-3 rounded-full text-sm font-bold hover:bg-blue-600 transition-[background-color,shadow,transform] duration-300 shadow-md w-full md:w-auto text-center flex items-center justify-center gap-2 outline-none focus-visible:ring-2 focus-visible:ring-blue-500 active:scale-95"
                    >
                        Quero minha vaga <ArrowRight size={16} />
                    </a>
                </div>
            </div>
        );
    }

    // --- MODO TABELA (Final) ---
    return (
        <section id={id} className="py-24 px-4 relative z-10">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-20 animate-fade-in">
                    <span className="text-blue-700 font-bold tracking-widest uppercase text-sm">Investimento Seguro na sua Paz</span>
                    <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mt-4 mb-6 tracking-tight">O Custo de Continuar Assim</h2>
                    <p className="text-slate-600 text-xl max-w-3xl mx-auto font-light leading-relaxed">
                        Você já perdeu meses, talvez anos de vida. Cada viagem cancelada ou sorriso evitado é um <strong>custo afundado</strong> que você não recupera. O CMS não é um gasto, é o resgate do seu ativo mais caro: o seu tempo.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto mb-16">
                    <div className="bg-blue-50/50 border border-blue-100 p-8 rounded-[2.5rem] flex flex-col md:flex-row items-center gap-8 shadow-sm">
                        <div className="w-20 h-20 shrink-0 rounded-2xl overflow-hidden shadow-md">
                            <img
                                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200"
                                alt="Depoimento Real"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div>
                            <div className="flex gap-1 mb-2">
                                {[1, 2, 3, 4, 5].map(s => <Star key={s} size={12} className="text-amber-500 fill-amber-500" />)}
                            </div>
                            <p className="text-slate-700 italic text-lg leading-relaxed mb-2">
                                "Eu achava que meu caso não tinha solução. Em 3 dias aplicando o que a Dra. Quitéria ensina no Módulo 3, eu parei de sentir que ia infartar a qualquer momento."
                            </p>
                            <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">— Juliana Costa, Voltou a Dirigir</p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-12 max-w-4xl mx-auto items-center">

                    {/* SEÇÃO 1: MENTORIA VIP (A ÂNCORA DE ALTO VALOR) */}
                    <div className="w-full relative group z-10">
                        <div className="text-center mb-10">
                            <span className="text-rose-600 font-bold tracking-[0.2em] uppercase text-xs">A Experiência Elite</span>
                            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">Segurança Total e Acompanhamento Direto</h3>
                        </div>

                        <div className="absolute -inset-[3px] bg-gradient-to-r from-blue-600 via-blue-400 to-rose-500 rounded-[3rem] opacity-75 blur-md group-hover:opacity-100 transition-[opacity] duration-1000 animate-pulse"></div>
                        <div className="relative bg-[#1d1d1f] text-white p-10 md:p-16 rounded-[3rem] shadow-2xl h-full border border-gray-800 flex flex-col md:flex-row gap-12 items-center transition-[transform,shadow] duration-300">

                            <div className="absolute top-6 right-6 bg-gradient-to-r from-rose-600 to-blue-600 px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-lg flex items-center gap-1">
                                <Star size={10} fill="white" /> Apenas 10 Vagas/Mês
                            </div>

                            <div className="flex-1">
                                <div className="mb-8">
                                    <h3 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 italic font-serif">Mentoria VIP</h3>
                                    <p className="text-gray-400 text-sm mt-2">O seu seguro contra o fracasso. Eu e minha equipe pessoalmente cuidando do seu caso.</p>
                                </div>
                                <ul className="space-y-5 mb-10 text-sm md:text-base text-gray-300">
                                    <li className="flex gap-4 text-white"><div className="bg-blue-600/20 p-1.5 rounded-full shrink-0"><Check size={16} className="text-blue-400" /></div> <span><strong>Acesso Vitalício</strong> (Nunca mais fique só)</span></li>
                                    <li className="flex gap-4 text-white"><div className="bg-blue-600/20 p-1.5 rounded-full shrink-0"><Check size={16} className="text-blue-400" /></div> <span><strong>6 Encontros Vivos</strong> (Sessões de resgate em grupo)</span></li>
                                    <li className="flex gap-4 text-white"><div className="bg-blue-600/20 p-1.5 rounded-full shrink-0"><Check size={16} className="text-blue-400" /></div> <span><strong>Suporte Direto</strong> (WhatsApp sem intermediários)</span></li>
                                    <li className="flex gap-4 text-white"><div className="bg-blue-600/20 p-1.5 rounded-full shrink-0"><Check size={16} className="text-blue-400" /></div> <span><strong>Manual de Gestão Incluso</strong> (Versão Digital)</span></li>
                                </ul>
                            </div>

                            <div className="w-full md:w-80 bg-white/5 backdrop-blur-md p-8 rounded-[2.5rem] border border-white/10 text-center flex flex-col justify-center">
                                <span className="text-sm text-gray-500 line-through block mb-1 uppercase tracking-widest font-bold">De R$ 2.990</span>
                                <span className="text-6xl font-bold text-white mb-2">R$ 1.480</span>
                                <span className="text-sm text-gray-400 block mb-6">ou 12x R$ 153,10</span>

                                <a
                                    href={linkMentoria}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block w-full py-5 bg-gradient-to-r from-blue-600 to-rose-600 rounded-full font-bold hover:from-blue-500 hover:to-rose-500 transition-[background-image,shadow,transform] duration-300 shadow-lg shadow-blue-900/50 hover:shadow-rose-600/50 text-base text-center outline-none focus-visible:ring-2 focus-visible:ring-rose-400 active:scale-95 mb-4"
                                >
                                    Garantir Meu Seguro VIP
                                </a>
                                <p className="text-[10px] text-gray-500 uppercase tracking-widest leading-tight">
                                    Vagas limitadas para manter o acompanhamento clínico.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* DIVIDER: A PONTE DE DECISÃO (O CONTRASTE DE VALOR) */}
                    <div className="py-16 flex flex-col items-center text-center max-w-2xl mx-auto">
                        <div className="w-px h-16 bg-gradient-to-b from-blue-600 to-transparent mb-8"></div>
                        <h4 className="text-slate-900 font-bold text-xl mb-4">A Oportunidade Única</h4>
                        <p className="text-slate-600 font-light text-lg leading-relaxed mb-6">
                            Para quem não precisa do acompanhamento individual agora, mas quer o mesmo **protocolo clínico** que liberou 5.000 mulheres do pânico, com um investimento 5x menor e ainda levar o meu Manual de bônus:
                        </p>
                    </div>

                    {/* SEÇÃO 2: CURSO CMS (A SOLUÇÃO ACESSÍVEL + BÔNUS E-BOOK) */}
                    <div className="w-full max-w-4xl bg-white/40 backdrop-blur-xl p-10 md:p-14 rounded-[3rem] border border-white/60 shadow-xl hover:border-blue-300 transition-all duration-300 relative z-0">
                        <div className="flex flex-col md:flex-row gap-12 items-center">

                            {/* Visual do Pack (Course + eBook) */}
                            <div className="hidden md:flex flex-1 items-center justify-center relative">
                                <div className="absolute inset-0 bg-blue-100 rounded-full blur-3xl opacity-30"></div>
                                <div className="relative flex items-center justify-center">
                                    <div className="w-48 h-64 bg-slate-800 rounded-xl shadow-2xl border border-white/20 flex items-center justify-center text-white p-4">
                                        <div className="text-center">
                                            <p className="text-[10px] font-bold uppercase text-blue-400">Curso CMS</p>
                                            <img src="https://quiteriagouveia.com/wp-content/uploads/2026/01/capa.png" className="w-full h-auto mt-2 rounded" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex-[1.5]">
                                <div className="mb-6">
                                    <h3 className="text-3xl font-bold text-slate-900">Curso CMS + Manual Grátis</h3>
                                    <p className="text-blue-600 text-sm font-bold mt-1">A solução completa por uma fração do valor.</p>
                                </div>
                                <ul className="space-y-4 mb-8 text-sm text-slate-700">
                                    <li className="flex gap-3"><Check size={18} className="text-green-600 shrink-0" /> <span>Protocolo de Resgate em 5 min</span></li>
                                    <li className="flex gap-3"><Check size={18} className="text-green-600 shrink-0" /> <span>Metodologia CMS (Aulas Gravadas)</span></li>
                                    <li className="flex gap-3"><Check size={18} className="text-green-600 shrink-0" /> <span>Acesso Imediato e Vitalício</span></li>
                                </ul>

                                <div className="flex items-center justify-between gap-6 pt-6 border-t border-slate-100">
                                    <div className="text-left">
                                        <span className="text-sm text-slate-400 line-through block mb-1 uppercase tracking-widest font-bold">R$ 997</span>
                                        <span className="text-5xl font-bold text-slate-900">R$ 497</span>
                                        <p className="text-sm text-blue-700 font-bold mt-1 italic">ou 12x R$ 49,90</p>
                                    </div>
                                    <a
                                        href={linkCurso}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 py-5 bg-slate-900 text-white rounded-full font-bold hover:bg-blue-600 transition-all text-center shadow-xl active:scale-95"
                                    >
                                        Quero Minha Liberdade
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>

                <div className="mt-16 text-center text-sm text-slate-500 font-medium">
                    <p className="flex items-center justify-center gap-2 mb-8">
                        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                        Pagamento seguro via Cartão, Pix ou Boleto. Garantia de 7 dias.
                    </p>

                    <div className="inline-flex flex-col md:flex-row items-center gap-6 bg-slate-50 p-6 rounded-[2rem] border border-slate-100">
                        <p className="text-slate-600 font-semibold italic">Ainda não tem certeza se o Método CMS é para você?</p>
                        <a
                            href="https://api.whatsapp.com/send?phone=5511956185501&text=Ola!%2C%20Gostaria%20de%20saber%20mais%20sobre%20as%20consultas"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-6 py-3 bg-white text-green-700 rounded-full font-bold shadow-sm hover:shadow-md transition-all border border-green-100"
                        >
                            <MessageCircle className="w-4 h-4" />
                            Fale comigo agora
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

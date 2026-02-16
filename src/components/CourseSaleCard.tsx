import React from 'react';
// Lucide icons removed to follow "Non-Obvious Persuasive Design" protocol
import { motion } from 'framer-motion';

const KIWIFY_URL = "https://pay.kiwify.com.br/cUO2x97";

export const CourseSaleCard: React.FC = () => {
    return (
        <section className="py-24 relative overflow-hidden bg-white/30">
            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-6xl mx-auto px-6"
                >
                    <div className="flex flex-col gap-12 md:gap-16">

                        {/* HEADER: Limpo e Direto */}
                        <div className="text-center md:text-left space-y-4">
                            <span className="text-blue-600 font-black tracking-[0.4em] text-[10px] uppercase block">O Próximo Passo da Sua Jornada</span>
                            <h2 className="text-5xl md:text-7xl font-serif text-slate-900 leading-none tracking-tighter">
                                Método CMS: <span className="text-blue-600 italic">Sua Retomada</span>
                            </h2>
                        </div>

                        {/* VISUAL PRINCIPAL: Banner Isolado e Imponente */}
                        <div className="w-full relative group">
                            <div className="relative aspect-video rounded-[3rem] overflow-hidden shadow-[0_32px_100px_-20px_rgba(0,0,0,0.15)] border border-blue-50 bg-slate-100">
                                <img
                                    src="https://quiteriagouveia.com/wp-content/uploads/2026/02/banner-do-curso-1280x720-1.png"
                                    alt="Método CMS: Sua Retomada"
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[6s] ease-out object-center md:object-top"
                                />
                                {/* Badge reposicionado para a esquerda para não cobrir o rosto */}
                                <div className="absolute top-4 left-4 md:top-8 md:left-8 bg-blue-600/90 backdrop-blur-md text-white px-4 py-2 md:px-8 md:py-3 rounded-full font-bold text-xs md:text-sm shadow-xl italic font-serif border border-white/20">
                                    Acesso Vitalício
                                </div>
                            </div>
                        </div>

                        {/* GRID DE CONTEÚDO E PREÇO: Alinhamento Perfeito */}
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                            {/* Benefícios */}
                            <div className="lg:col-span-7 space-y-10">
                                <p className="text-2xl text-slate-600 leading-relaxed font-light italic border-l-4 border-blue-100 pl-8">
                                    "Você não está comprando um curso. Você está pagando o resgate da sua própria vida. O Método CMS é o mapa clínico para silenciar o cérebro e voltar a ser dona de si."
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {[
                                        "7 Módulos de Reativação Neural",
                                        "Protocolo Anti-Crise de 5min",
                                        "Aulas de Alívio Físico Imediato",
                                        "Comunidade de Mães que Silenciam",
                                        "Mapa da Autonomia (PDF)",
                                        "Suporte Humanizado Vitalício"
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-center gap-4 text-slate-700 p-4 bg-slate-50/50 rounded-2xl border border-slate-100 hover:border-blue-200 transition-colors">
                                            <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                                            <span className="text-xs font-black uppercase tracking-widest text-slate-500 leading-none">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Card de Preço (Sem sobreposição) */}
                            <div className="lg:col-span-5">
                                <div className="bg-slate-900 rounded-[3rem] p-10 md:p-12 shadow-2xl relative overflow-hidden text-white group hover:shadow-[0_20px_80px_-10px_rgba(37,99,235,0.3)] transition-all duration-700">
                                    <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 rounded-full blur-[80px] group-hover:bg-blue-500/30 transition-all"></div>

                                    <div className="relative z-10 space-y-8">
                                        <div className="text-center lg:text-left">
                                            <div className="flex items-center justify-between mb-4">
                                                <span className="text-blue-400 text-[10px] font-black uppercase tracking-[0.3em]">Investimento Único</span>
                                                <span className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-widest border border-green-500/30">-50% OFF HOJE</span>
                                            </div>

                                            <div className="flex items-baseline justify-center lg:justify-start gap-2">
                                                <span className="text-xl font-serif text-slate-500 italic">12x de</span>
                                                <span className="text-7xl font-black tracking-tighter text-white">49,70</span>
                                            </div>
                                            <p className="text-slate-400 text-xs mt-3 font-medium flex items-center justify-center lg:justify-start gap-2">
                                                <span>⚡ Menos que 1 café por dia (R$ 1,65)</span>
                                            </p>
                                        </div>

                                        <a
                                            href={KIWIFY_URL}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="group relative block w-full py-7 bg-blue-600 text-white rounded-full font-black uppercase tracking-[0.2em] text-center shadow-xl hover:bg-white hover:text-slate-900 transition-all duration-500 text-xs active:scale-95 overflow-hidden"
                                        >
                                            <span className="relative z-10 group-hover:hidden">Iniciar Meu Resgate</span>
                                            <span className="relative z-10 hidden group-hover:inline">Quero Minha Paz de Volta</span>
                                            <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
                                        </a>

                                        <div className="flex justify-center lg:justify-start gap-6 opacity-60 pt-2">
                                            <div className="flex items-center gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.5)]"></div>
                                                <span className="text-[9px] font-bold uppercase tracking-widest text-slate-300">Ambiente Seguro</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-blue-400 shadow-[0_0_10px_rgba(96,165,250,0.5)]"></div>
                                                <span className="text-[9px] font-bold uppercase tracking-widest text-slate-300">7 Dias de Garantia</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Footer do Card */}
                <div className="mt-12 text-center space-y-8">
                    <p className="flex items-center justify-center gap-2 text-sm text-slate-500 font-bold uppercase tracking-widest">
                        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                        Pagamento via Cartão, Pix ou Boleto.
                    </p>

                    <div className="inline-flex flex-col md:flex-row items-center gap-6 bg-white/40 backdrop-blur-md p-6 rounded-[2.5rem] border border-white/60 shadow-lg">
                        <p className="text-slate-700 font-bold italic">Precisa de ajuda com o pagamento?</p>
                        <a
                            href="https://api.whatsapp.com/send?phone=5511956185501"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-3 bg-white text-green-700 rounded-full font-black uppercase tracking-widest text-xs border border-green-100 hover:shadow-md transition-all"
                        >
                            Falar com Suporte
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

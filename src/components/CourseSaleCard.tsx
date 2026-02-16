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
                    className="max-w-5xl mx-auto bg-white/60 backdrop-blur-2xl p-12 md:p-20 lg:p-24 rounded-[4rem] border border-white shadow-2xl relative overflow-hidden group"
                >
                    <div className="flex flex-col gap-20">
                        {/* Visual do Produto - Ampliado com mais respiro */}
                        <div className="w-full relative group">
                            <div className="absolute -inset-6 bg-gradient-to-r from-blue-500/10 to-transparent rounded-[5rem] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
                            <div className="relative aspect-video rounded-[3.5rem] overflow-hidden shadow-[0_48px_80px_-20px_rgba(0,0,0,0.25)] border border-white/50 bg-slate-900">
                                <img
                                    src="https://quiteriagouveia.com/wp-content/uploads/2026/02/banner-do-curso-1280x720-1.png"
                                    alt="Método CMS: Sua Retomada"
                                    className="w-full h-full object-cover scale-[1.01] group-hover:scale-105 transition-transform duration-[6s] ease-out"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent opacity-40"></div>

                                <div className="absolute top-10 right-10 bg-blue-600 text-white px-10 py-4 rounded-full font-bold text-base shadow-2xl italic font-serif tracking-wide">
                                    Acesso Vitalício
                                </div>
                            </div>

                            {/* Trust Badge - Mais elegante */}
                            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-10 px-12 py-5 bg-white/95 backdrop-blur-xl rounded-full border border-blue-50 shadow-2xl z-20">
                                <div className="flex items-center gap-3">
                                    <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
                                    <span className="text-[11px] font-black text-slate-500 uppercase tracking-[0.2em]">Compra 100% Segura</span>
                                </div>
                                <div className="w-[1px] h-5 bg-slate-200"></div>
                                <div className="flex items-center gap-3">
                                    <div className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
                                    <span className="text-[11px] font-black text-slate-500 uppercase tracking-[0.2em]">Garantia 7 Dias</span>
                                </div>
                            </div>
                        </div>

                        {/* Conteudo com margens generosas */}
                        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start pt-12">
                            <div className="w-full lg:w-[55%]">
                                <h2 className="text-5xl md:text-7xl font-serif text-slate-900 mb-10 leading-[1.05] tracking-tight">
                                    Método CMS: <br />
                                    <span className="text-blue-600 italic">Sua Retomada</span>
                                </h2>

                                <p className="text-2xl text-slate-600 mb-12 leading-relaxed font-light italic border-l-4 border-blue-100 pl-10 max-w-2xl">
                                    "A autonomia é o seu maior bem. Com o Método CMS, você tem o mapa clínico para silenciar o cérebro desregulado e voltar a ser dona de si."
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-16">
                                    {[
                                        "7 Módulos de Reativação Neural",
                                        "Acesso Vitalício ao Protocolo",
                                        "Aulas de Alívio Físico Imediato",
                                        "Comunidade Segura de Alunas",
                                        "Mapa da Autonomia em PDF",
                                        "Suporte VIP via WhatsApp"
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-center gap-5 text-slate-700 group/item">
                                            <div className="w-2.5 h-2.5 rounded-full bg-blue-100 border border-blue-500 group-hover/item:bg-blue-600 transition-colors" />
                                            <span className="text-sm font-bold tracking-tight text-slate-600 uppercase tracking-widest">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="w-full lg:w-[45%] flex flex-col gap-10">
                                <div className="bg-slate-50/50 backdrop-blur-sm p-12 lg:p-14 rounded-[4rem] border border-slate-100 relative overflow-hidden group/price shadow-inner text-center lg:text-left">
                                    <div className="relative z-10">
                                        <span className="text-slate-400 text-sm font-medium line-through mb-4 block font-sans tracking-wide">De R$ 997 por apenas:</span>
                                        <div className="flex items-baseline justify-center lg:justify-start gap-4">
                                            <span className="text-slate-900 font-bold text-3xl font-serif">12x R$</span>
                                            <span className="text-blue-600 font-black text-7xl md:text-8xl tracking-tighter">49,70</span>
                                        </div>
                                        <div className="mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-4">
                                            <span className="px-5 py-2 bg-emerald-100 text-emerald-700 text-[10px] font-black uppercase rounded-full tracking-[0.2em] shadow-sm">Oferta Ativa</span>
                                            <span className="text-slate-400 text-xs font-bold font-sans">Economia de R$ 947,30 anual</span>
                                        </div>
                                    </div>
                                </div>

                                <a
                                    href={KIWIFY_URL}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group relative w-full py-10 bg-slate-900 text-white rounded-full font-black uppercase tracking-[0.3em] text-center shadow-2xl hover:scale-[1.01] active:scale-95 transition-all flex items-center justify-center gap-10 overflow-hidden text-lg"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                                    <span className="relative z-10">Garantir Meu Silêncio</span>
                                    <div className="w-16 h-[1px] bg-white/30 relative overflow-hidden z-10">
                                        <div className="absolute inset-0 bg-white -translate-x-full group-hover:animate-shimmer"></div>
                                    </div>
                                </a>
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

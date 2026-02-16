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
                    className="max-w-4xl mx-auto bg-white/60 backdrop-blur-2xl p-10 md:p-14 rounded-[3.5rem] border border-white shadow-2xl relative overflow-hidden group"
                >
                    <div className="flex flex-col gap-16">
                        {/* Visual do Produto - FULL WIDTH WOW FACTOR */}
                        <div className="w-full relative group">
                            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-[4rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
                            <div className="relative aspect-video rounded-[3.5rem] overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.3)] border border-white/50 bg-slate-900">
                                <img
                                    src="https://quiteriagouveia.com/wp-content/uploads/2026/02/banner-do-curso-1280x720-1.png"
                                    alt="Método CMS: Sua Retomada"
                                    className="w-full h-full object-cover scale-[1.01] group-hover:scale-105 transition-transform duration-[5s] ease-out"
                                />
                                {/* Overlay de Proteção Sutil */}
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent opacity-60"></div>

                                <div className="absolute top-8 right-8 bg-blue-600 text-white px-8 py-3 rounded-full font-bold text-base shadow-2xl italic font-serif tracking-wide animate-float">
                                    Acesso Vitalício
                                </div>
                            </div>

                            {/* Trust Badge Abaixo da Imagem */}
                            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-8 px-10 py-4 bg-white/90 backdrop-blur-xl rounded-full border border-blue-50 shadow-xl z-20">
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                                    <span className="text-[11px] font-black text-slate-600 uppercase tracking-widest">Compra 100% Segura</span>
                                </div>
                                <div className="w-[1px] h-4 bg-slate-200"></div>
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                                    <span className="text-[11px] font-black text-slate-600 uppercase tracking-widest">Garantia 7 Dias</span>
                                </div>
                            </div>
                        </div>

                        {/* Conteúdo de Venda - Centralizado e Imponente */}
                        <div className="flex flex-col md:flex-row gap-12 lg:gap-20 items-start pt-8">
                            <div className="w-full md:w-1/2">
                                <h2 className="text-5xl md:text-6xl font-serif text-slate-900 mb-8 leading-[1.1] tracking-tight">
                                    Método CMS: <br />
                                    <span className="text-blue-600 italic">Sua Retomada</span>
                                </h2>

                                <p className="text-xl text-slate-600 mb-10 leading-relaxed font-light italic border-l-4 border-blue-100 pl-8">
                                    "A autonomia é o seu maior bem. Com o Método CMS, você tem o mapa clínico para silenciar o cérebro desregulado e voltar a ser dona de si."
                                </p>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-12">
                                    {[
                                        "7 Módulos de Reativação Neural",
                                        "Acesso Vitalício ao Protocolo",
                                        "Aulas de Alívio Físico Imediato",
                                        "Comunidade Segura de Alunas",
                                        "Mapa da Autonomia em PDF",
                                        "Suporte VIP via WhatsApp"
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-center gap-4 text-slate-700 group/item">
                                            <div className="w-2 h-2 rounded-full bg-blue-500 group-hover/item:scale-150 transition-transform" />
                                            <span className="text-sm font-bold tracking-tight text-slate-600">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="w-full md:w-1/2 flex flex-col gap-8">
                                <div className="bg-slate-50/80 backdrop-blur-sm p-10 rounded-[3rem] border border-slate-100 relative overflow-hidden group/price">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl group-hover/price:bg-blue-500/10 transition-colors"></div>

                                    <div className="relative z-10">
                                        <span className="text-slate-400 text-sm font-medium line-through mb-2 block font-sans">De R$ 997 por apenas:</span>
                                        <div className="flex items-baseline gap-3">
                                            <span className="text-slate-900 font-bold text-2xl font-serif">12x R$</span>
                                            <span className="text-blue-600 font-black text-7xl lg:text-8xl tracking-tighter">49,70</span>
                                        </div>
                                        <div className="mt-6 flex items-center gap-3">
                                            <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-[10px] font-black uppercase rounded-md tracking-widest">Oferta Ativa</span>
                                            <span className="text-slate-500 text-xs font-bold font-sans">Economia de R$ 947,30 anual</span>
                                        </div>
                                    </div>
                                </div>

                                <a
                                    href={KIWIFY_URL}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group relative w-full py-8 bg-slate-900 text-white rounded-full font-black uppercase tracking-[0.2em] text-center shadow-[0_20px_40px_-10px_rgba(15,23,42,0.3)] hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-8 overflow-hidden"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    <span className="relative z-10">Iniciar Minha Retomada Hoje</span>
                                    <div className="w-12 h-[1px] bg-white relative overflow-hidden z-10">
                                        <div className="absolute inset-0 bg-blue-200 -translate-x-full group-hover:animate-shimmer"></div>
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

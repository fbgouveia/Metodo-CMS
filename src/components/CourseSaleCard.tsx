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
                    <div className="flex flex-col md:flex-row gap-12 items-center">
                        {/* Visual do Produto */}
                        <div className="w-full md:w-1/2 relative space-y-6">
                            <div className="relative aspect-square rounded-[2.5rem] overflow-hidden shadow-2xl">
                                <img
                                    src="https://quiteriagouveia.com/wp-content/uploads/2025/11/mockup-curso.jpg"
                                    alt="Método CMS: Sua Retomada"
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[3s]"
                                />
                                <div className="absolute top-6 right-6 bg-blue-600 text-white px-6 py-2 rounded-full font-bold text-sm shadow-xl italic font-serif">
                                    Acesso Vitalício
                                </div>
                            </div>

                            {/* Trust Badge Superior - Design Persuasivo Sutil */}
                            <div className="flex items-center justify-center gap-6 py-4 bg-slate-50/50 rounded-2xl border border-slate-100">
                                <div className="flex items-center gap-2">
                                    <div className="w-1 h-1 rounded-full bg-green-500"></div>
                                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-tighter">Compra 100% Segura</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-1 h-1 rounded-full bg-blue-500"></div>
                                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-tighter">Garantia 7 Dias</span>
                                </div>
                            </div>
                        </div>

                        {/* Conteúdo de Venda */}
                        <div className="w-full md:w-1/2 flex flex-col items-start">
                            <h2 className="text-4xl md:text-5xl font-serif text-slate-900 mb-6 leading-tight">
                                Método CMS: <br />
                                <span className="text-blue-600 italic">Sua Retomada</span>
                            </h2>

                            <p className="text-lg text-slate-600 mb-8 leading-relaxed italic">
                                "A autonomia é o seu maior bem. Com o Método CMS, você tem o mapa clínico para silenciar o cérebro desregulado e voltar a ser dona de si."
                            </p>

                            <div className="w-full space-y-4 mb-10">
                                {[
                                    "7 Módulos de Reativação Neural",
                                    "Acesso Vitalício ao Protocolo",
                                    "Aulas de Alívio Físico Imediato",
                                    "Comunidade Segura de Alunas",
                                    "Mapa da Autonomia em PDF"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-4 text-slate-700">
                                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                                        <span className="text-sm font-medium tracking-wide">{item}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="w-full bg-blue-50/50 p-8 rounded-[2.5rem] border border-blue-100/50 mb-10 relative overflow-hidden">
                                <div className="flex flex-col">
                                    <span className="text-slate-400 text-sm line-through mb-1">De R$ 997 por apenas:</span>
                                    <div className="flex items-baseline gap-2">
                                        <span className="text-slate-900 font-bold text-xl font-serif">12x R$</span>
                                        <span className="text-blue-600 font-black text-6xl tracking-tighter">49,70</span>
                                    </div>
                                    <span className="text-slate-500 text-[10px] font-bold uppercase mt-2 opacity-60">Você economiza R$ 500,00 hoje</span>
                                </div>
                            </div>

                            <a
                                href={KIWIFY_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full py-6 bg-slate-900 text-white rounded-full font-black uppercase tracking-widest text-center shadow-2xl hover:bg-blue-600 transition-all flex items-center justify-center gap-6 group/btn"
                            >
                                Quero Minha Liberdade
                                <div className="w-10 h-[1px] bg-white group-hover/btn:bg-blue-200 transition-colors relative overflow-hidden">
                                    <div className="absolute inset-0 bg-blue-400 -translate-x-full group-hover/btn:animate-shimmer"></div>
                                </div>
                            </a>
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

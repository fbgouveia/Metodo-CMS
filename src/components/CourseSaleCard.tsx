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
                    className="max-w-6xl mx-auto relative"
                >
                    {/* Elementos Decorativos de Fundo (Neural Blueprint) */}
                    <div className="absolute -top-20 -left-20 w-64 h-64 bg-blue-100/30 rounded-full blur-3xl pointer-events-none"></div>
                    <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-cyan-100/20 rounded-full blur-3xl pointer-events-none"></div>

                    <div className="relative bg-white border border-slate-100 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] rounded-[4rem] overflow-hidden">

                        {/* HEADER DA SEÇÃO: Editorial Style */}
                        <div className="p-12 md:p-20 pb-0 flex flex-col md:flex-row justify-between items-end gap-10">
                            <div className="max-w-2xl">
                                <span className="text-blue-600 font-black tracking-[0.4em] text-[11px] uppercase mb-6 block">Investimento em Liberdade</span>
                                <h2 className="text-6xl md:text-8xl font-serif text-slate-900 leading-[0.9] tracking-tighter">
                                    Método <br />
                                    <span className="text-blue-600 italic">CMS.</span>
                                </h2>
                            </div>
                            <div className="hidden md:block text-right">
                                <p className="text-slate-400 text-sm font-medium uppercase tracking-widest mb-2">Status do Protocolo</p>
                                <div className="flex items-center gap-3 justify-end">
                                    <span className="text-xl font-serif italic text-slate-900">Inscrições Liberadas</span>
                                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                                </div>
                            </div>
                        </div>

                        {/* COMPOSIÇÃO CENTRAL: Overlapping Layers */}
                        <div className="relative p-8 md:p-20 pt-12 md:pt-16">
                            <div className="flex flex-col lg:flex-row gap-12 lg:gap-0 items-center">

                                {/* Camada 1: O Banner (O Anchor) */}
                                <div className="w-full lg:w-[70%] relative z-10 group">
                                    <div className="relative aspect-video rounded-[3rem] overflow-hidden shadow-2xl border border-white/50 bg-slate-900">
                                        <img
                                            src="https://quiteriagouveia.com/wp-content/uploads/2026/02/banner-do-curso-1280x720-1.png"
                                            alt="Método CMS: Sua Retomada"
                                            className="w-full h-full object-cover scale-[1.01] group-hover:scale-105 transition-transform duration-[6s] ease-out"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-50"></div>

                                        {/* Tag flutuante interna */}
                                        <div className="absolute bottom-8 left-8 flex items-center gap-4 bg-white/10 backdrop-blur-md border border-white/20 px-6 py-3 rounded-full">
                                            <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                                            <span className="text-white text-xs font-bold uppercase tracking-widest">Protocolo Original Dra. Quitéria</span>
                                        </div>
                                    </div>

                                    {/* Trust Badges - Estilo Floating Manifest */}
                                    <div className="absolute -bottom-6 -left-6 hidden xl:flex flex-col gap-2 p-6 bg-slate-900 text-white rounded-[2rem] shadow-2xl z-30 border border-white/10">
                                        <div className="flex items-center gap-3">
                                            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400"></div>
                                            <span className="text-[10px] font-black uppercase tracking-widest">Acesso Vitalício</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                                            <span className="text-[10px] font-black uppercase tracking-widest">7 Dias de Garantia</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Camada 2: O Manifesto de Preço (The Overlap) */}
                                <div className="w-full lg:w-[40%] lg:-ml-[10%] relative z-20">
                                    <div className="bg-slate-900 text-white rounded-[4rem] p-12 md:p-16 shadow-[0_50px_100px_-30px_rgba(15,23,42,0.5)] border border-white/10 relative overflow-hidden group/card shadow-blue-900/20">
                                        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-[80px]"></div>

                                        <div className="relative z-10 space-y-10">
                                            <div>
                                                <span className="text-blue-400 text-[10px] font-black uppercase tracking-[0.4em] mb-4 block">Oferta Exclusiva</span>
                                                <div className="flex items-baseline gap-3 mb-2">
                                                    <span className="text-2xl font-serif text-slate-500 italic">12x</span>
                                                    <span className="text-7xl lg:text-8xl font-black tracking-tighter">49,70</span>
                                                </div>
                                                <p className="text-slate-400 text-sm font-light">ou R$ 497 à vista no PIX</p>
                                            </div>

                                            <div className="h-[1px] w-full bg-white/10"></div>

                                            <ul className="space-y-6">
                                                {[
                                                    "7 Módulos de Reativação",
                                                    "Mapa da Autonomia (PDF)",
                                                    "Suporte VIP WhatsApp",
                                                    "Comunidade de Alunas"
                                                ].map((item, i) => (
                                                    <li key={i} className="flex items-center gap-4 group/item">
                                                        <div className="w-1 h-1 rounded-full bg-blue-500 group-hover/item:scale-150 transition-all"></div>
                                                        <span className="text-[11px] font-bold uppercase tracking-widest text-slate-300">{item}</span>
                                                    </li>
                                                ))}
                                            </ul>

                                            <a
                                                href={KIWIFY_URL}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="block w-full py-8 bg-blue-600 text-white rounded-full font-black uppercase tracking-[0.3em] text-center shadow-xl hover:bg-white hover:text-slate-900 transition-all duration-500 text-sm active:scale-95"
                                            >
                                                Resgatar Minha Paz
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* FOOTER DO CARD: Editorial Fine Print */}
                        <div className="bg-slate-50 p-12 md:px-20 py-16 flex flex-col md:flex-row justify-between items-center gap-10 border-t border-slate-100">
                            <div className="flex flex-col gap-6 max-w-lg">
                                <p className="text-slate-500 text-xl font-serif italic leading-relaxed">
                                    "Você não está comprando um curso. Está assinando o armistício com a sua própria mente."
                                </p>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-[1px] bg-blue-200"></div>
                                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Dra. Quitéria Gouveia</span>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="px-8 py-4 bg-white rounded-2xl border border-slate-200 shadow-sm flex flex-col items-center">
                                    <span className="text-2xl font-serif text-slate-900 mb-1">100%</span>
                                    <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Segurança</span>
                                </div>
                                <div className="px-8 py-4 bg-white rounded-2xl border border-slate-200 shadow-sm flex flex-col items-center">
                                    <span className="text-2xl font-serif text-slate-900 mb-1">24h</span>
                                    <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Suporte</span>
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

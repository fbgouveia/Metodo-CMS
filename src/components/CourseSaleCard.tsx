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
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[6s] ease-out"
                                />
                                <div className="absolute top-8 right-8 bg-blue-600/90 backdrop-blur-md text-white px-8 py-3 rounded-full font-bold text-sm shadow-xl italic font-serif">
                                    Acesso Vitalício
                                </div>
                            </div>
                        </div>

                        {/* GRID DE CONTEÚDO E PREÇO: Alinhamento Perfeito */}
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                            {/* Benefícios */}
                            <div className="lg:col-span-7 space-y-10">
                                <p className="text-2xl text-slate-600 leading-relaxed font-light italic border-l-4 border-blue-100 pl-8">
                                    "A autonomia é o seu maior bem. Com o Método CMS, você tem o mapa clínico para silenciar o cérebro desregulado e voltar a ser dona de si."
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {[
                                        "7 Módulos de Reativação Neural",
                                        "Acesso Vitalício ao Protocolo",
                                        "Aulas de Alívio Físico Imediato",
                                        "Comunidade Segura de Alunas",
                                        "Mapa da Autonomia em PDF",
                                        "Suporte VIP via WhatsApp"
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-center gap-4 text-slate-700 p-4 bg-slate-50/50 rounded-2xl border border-slate-100">
                                            <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                                            <span className="text-xs font-black uppercase tracking-widest text-slate-500 leading-none">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Card de Preço (Sem sobreposição) */}
                            <div className="lg:col-span-5">
                                <div className="bg-slate-900 rounded-[3rem] p-10 md:p-12 shadow-2xl relative overflow-hidden text-white">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/10 rounded-full blur-3xl"></div>

                                    <div className="relative z-10 space-y-8">
                                        <div className="text-center lg:text-left">
                                            <span className="text-blue-400 text-[10px] font-black uppercase tracking-[0.3em] block mb-4">Investimento Especial</span>
                                            <div className="flex items-baseline justify-center lg:justify-start gap-4">
                                                <span className="text-xl font-serif text-slate-500 italic">12x</span>
                                                <span className="text-7xl font-black tracking-tighter">49,70</span>
                                            </div>
                                            <p className="text-slate-400 text-xs mt-2 font-medium">Equivalente a menos de R$ 1,70 por dia</p>
                                        </div>

                                        <a
                                            href={KIWIFY_URL}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="group relative block w-full py-7 bg-blue-600 text-white rounded-full font-black uppercase tracking-[0.2em] text-center shadow-xl hover:bg-white hover:text-slate-900 transition-all duration-500 text-xs active:scale-95 overflow-hidden"
                                        >
                                            <span className="relative z-10">Resgatar Minha Paz Hoje</span>
                                            <div className="absolute inset-0 bg-white -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                                        </a>

                                        <div className="flex justify-center lg:justify-start gap-8 opacity-60">
                                            <div className="flex items-center gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400"></div>
                                                <span className="text-[9px] font-bold uppercase tracking-widest text-slate-300">Seguro</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                                                <span className="text-[9px] font-bold uppercase tracking-widest text-slate-300">Garantido</span>
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

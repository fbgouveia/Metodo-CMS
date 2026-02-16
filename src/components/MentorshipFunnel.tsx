import React from 'react';
// Lucide icons removed to follow "Non-Obvious Persuasive Design" protocol
import { motion } from 'framer-motion';

export const MentorshipFunnel: React.FC = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: 'spring',
                stiffness: 70,
                damping: 15
            }
        }
    };

    return (
        <section id="pricing" className="py-16 md:py-32 relative overflow-hidden bg-transparent">
            {/* Background elements */}
            <div className="absolute top-20 right-[-10%] w-[40%] h-[40%] bg-blue-200/20 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute bottom-10 left-[-5%] w-[30%] h-[30%] bg-rose-200/10 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="max-w-6xl mx-auto"
                >
                    {/* Header Section */}
                    <div className="text-center mb-20">
                        <motion.div variants={itemVariants} className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-rose-50 border border-rose-100 mb-8 shadow-sm">
                            <div className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse"></div>
                            <span className="text-xs font-bold text-rose-600 tracking-wider uppercase">Vagas Extremamente Limitadas</span>
                        </motion.div>

                        <motion.h2 variants={itemVariants} className="text-5xl md:text-7xl font-serif text-slate-900 mb-8 tracking-tight leading-tight">
                            Mentoria VIP: <br />
                            <span className="text-blue-600 italic">O Amparo que sua Mente Merece.</span>
                        </motion.h2>

                        <motion.p variants={itemVariants} className="max-w-3xl mx-auto text-slate-600 text-xl font-light leading-relaxed">
                            Algumas histórias de dor exigem mais do que apenas aulas gravadas. Elas exigem um
                            <strong className="text-slate-900 font-bold italic"> olhar atento</strong>, um diagnóstico cuidadoso e a certeza absoluta de que você nunca mais caminhará sozinha.
                        </motion.p>
                    </div>

                    {/* Content Section */}
                    <div className="flex flex-col lg:flex-row gap-12 items-start">

                        {/* Features List */}
                        <div className="flex-1 space-y-4 md:space-y-6">
                            {[
                                {
                                    title: "Diagnóstico Clínico Pessoal",
                                    desc: "Eu vou analisar seu histórico e desenhar o mapa exato para o seu cérebro parar de lutar.",
                                    tag: "Exclusivo",
                                    type: "INDIVIDUAL"
                                },
                                {
                                    title: "WhatsApp Pessoal da Dra. Quitéria",
                                    desc: "Acesso direto a mim durante 2 meses. Quando o medo vier, você não estará sozinha. Eu estarei no seu bolso.",
                                    tag: "VIP Acesso Total",
                                    type: "HUMANO"
                                },
                                {
                                    title: "BÔNUS: Acesso Vitalício ao Método CMS",
                                    desc: "Você ganha o curso completo (R$ 997) e o Manual (R$ 97) inclusos no seu pacote.",
                                    tag: "Economia Real",
                                    type: "PRESENTE",
                                    highlight: true
                                }
                            ].map((feature, idx) => (
                                <motion.div
                                    key={idx}
                                    variants={itemVariants}
                                    whileHover={{ y: -5 }}
                                    className={`p-6 md:p-10 rounded-[2rem] md:rounded-[2.5rem] border transition-all duration-300 ${feature.highlight
                                        ? 'bg-rose-50 border-rose-100 shadow-xl shadow-rose-900/5'
                                        : 'bg-white/40 backdrop-blur-xl border-white hover:border-blue-100 hover:shadow-xl'
                                        }`}
                                >
                                    <div className="flex justify-between items-center mb-4 md:mb-6">
                                        <span className={`text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] md:tracking-[0.3em] ${feature.highlight ? 'text-rose-600' : 'text-blue-600'}`}>
                                            {feature.type}
                                        </span>
                                        <span className={`text-[9px] md:text-[10px] font-bold uppercase tracking-widest ${feature.highlight ? 'text-rose-400' : 'text-slate-400'}`}>
                                            {feature.tag}
                                        </span>
                                    </div>
                                    <h4 className="text-xl md:text-2xl font-serif text-slate-900 mb-2 md:mb-4 text-balance leading-tight">{feature.title}</h4>
                                    <p className="text-slate-600 text-base md:text-lg leading-relaxed font-light italic text-pretty">{feature.desc}</p>
                                </motion.div>
                            ))}
                        </div>

                        {/* Pricing Card */}
                        <div className="w-full lg:w-[420px] lg:sticky lg:top-24">
                            <motion.div
                                variants={itemVariants}
                                className="bg-slate-900 text-white p-8 md:p-12 rounded-[2.5rem] md:rounded-[3.5rem] shadow-2xl relative overflow-hidden border border-white/10"
                            >
                                <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-600/20 rounded-full blur-[80px] pointer-events-none"></div>

                                <div className="relative z-10 text-center md:text-left">
                                    <div className="inline-flex items-center gap-2 mb-8 md:mb-10 bg-white/5 px-4 py-2 rounded-full border border-white/10">
                                        <div className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse"></div>
                                        <span className="text-[9px] font-black uppercase tracking-[0.2em] text-rose-300">Apenas 3 Vagas/Mês</span>
                                    </div>

                                    <div className="mb-10 md:mb-12">
                                        <div className="flex items-baseline justify-center md:justify-start gap-2 opacity-50 mb-2 font-serif italic text-sm text-gray-400">
                                            <span>Valor real: R$ 5.000</span>
                                        </div>
                                        <div className="flex items-baseline justify-center md:justify-start gap-2 mb-2">
                                            <span className="text-5xl md:text-6xl font-bold tracking-tighter text-white">R$ 1.480</span>
                                        </div>
                                        <p className="text-sm text-blue-300 font-bold italic mt-4 border-t border-white/10 pt-4">
                                            ou 12x de R$ 148,00 <br />
                                            <span className="text-slate-400 font-normal not-italic text-[10px] uppercase tracking-wider block mt-1">(Menos que uma sessão de terapia)</span>
                                        </p>
                                    </div>

                                    <a
                                        href="https://pay.kiwify.com.br/7zPIO6z"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group w-full flex items-center justify-center py-6 md:py-8 bg-white text-slate-900 rounded-full font-black uppercase tracking-widest text-xs hover:bg-blue-50 transition-all shadow-xl relative overflow-hidden active:scale-95"
                                    >
                                        <span className="relative z-10 text-center">Garantir Mentoria VIP</span>
                                        <div className="absolute inset-0 bg-blue-100/50 -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                                    </a>

                                    <div className="mt-8 md:mt-10 pt-6 border-t border-white/10 space-y-3 flex flex-col items-center md:items-start opacity-70">
                                        <div className="flex items-center gap-3 text-[9px] md:text-[10px] text-slate-400 font-bold uppercase tracking-widest">
                                            <div className="w-1 h-1 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
                                            Acompanhamento de 60 Dias
                                        </div>
                                        <div className="flex items-center gap-3 text-[9px] md:text-[10px] text-slate-400 font-bold uppercase tracking-widest">
                                            <div className="w-1 h-1 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
                                            Garantia Blindada de 7 Dias
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div
                                variants={itemVariants}
                                className="mt-8 flex items-center justify-center gap-3 text-slate-500 font-bold uppercase tracking-widest text-[9px]"
                            >
                                <span className="w-1.5 h-1.5 bg-rose-500 rounded-full animate-pulse"></span>
                                Inscrições encerram em breve
                            </motion.div>
                        </div>

                    </div>
                </motion.div>
            </div>
        </section>
    );
};

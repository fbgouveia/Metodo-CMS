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
        <section id="mentorship-funnel" className="py-32 relative overflow-hidden bg-transparent">
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
                        <div className="flex-1 space-y-6">
                            {[
                                {
                                    title: "Análise de Caso Individual",
                                    desc: "Eu vou olhar para os SEUS gatilhos específicos e te dar o mapa exato para desarmá-los.",
                                    tag: "Padrão Ouro",
                                    type: "INDIVIDUAL"
                                },
                                {
                                    title: "Suporte VIP via WhatsApp",
                                    desc: "Acesso direto à minha equipe e orientações personalizadas para que você nunca fique sem resposta.",
                                    tag: "Suporte Total",
                                    type: "HUMANO"
                                },
                                {
                                    title: "GRÁTIS: Manual de Gestão da Ansiedade",
                                    desc: "O seu guia físico de R$ 47,00 sai de graça ao garantir sua vaga na mentoria.",
                                    tag: "Bônus Exclusivo",
                                    type: "PRESENTADO",
                                    highlight: true
                                }
                            ].map((feature, idx) => (
                                <motion.div
                                    key={idx}
                                    variants={itemVariants}
                                    whileHover={{ y: -5 }}
                                    className={`p-10 rounded-[2.5rem] border transition-all duration-300 ${feature.highlight
                                        ? 'bg-rose-50 border-rose-100 shadow-xl shadow-rose-900/5'
                                        : 'bg-white/40 backdrop-blur-xl border-white hover:border-blue-100 hover:shadow-xl'
                                        }`}
                                >
                                    <div className="flex justify-between items-center mb-6">
                                        <span className={`text-[10px] font-black uppercase tracking-[0.3em] ${feature.highlight ? 'text-rose-600' : 'text-blue-600'}`}>
                                            {feature.type}
                                        </span>
                                        <span className={`text-[10px] font-bold uppercase tracking-widest ${feature.highlight ? 'text-rose-400' : 'text-slate-400'}`}>
                                            {feature.tag}
                                        </span>
                                    </div>
                                    <h4 className="text-2xl font-serif text-slate-900 mb-4">{feature.title}</h4>
                                    <p className="text-slate-600 text-lg leading-relaxed font-light italic">{feature.desc}</p>
                                </motion.div>
                            ))}
                        </div>

                        {/* Pricing Card */}
                        <div className="w-full lg:w-[420px] lg:sticky lg:top-24">
                            <motion.div
                                variants={itemVariants}
                                className="bg-slate-900 text-white p-12 rounded-[3.5rem] shadow-2xl relative overflow-hidden border border-white/10"
                            >
                                <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-600/20 rounded-full blur-[80px] pointer-events-none"></div>

                                <div className="relative z-10">
                                    <div className="inline-flex items-center gap-2 mb-10">
                                        <div className="w-1 h-1 rounded-full bg-green-500 animate-pulse"></div>
                                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-400">Inscrição Segura</span>
                                    </div>

                                    <div className="mb-12">
                                        <div className="flex items-baseline gap-2 opacity-30 line-through mb-2 font-serif italic text-lg text-gray-400">
                                            <span>R$ 2.990</span>
                                        </div>
                                        <div className="flex items-baseline gap-2 mb-2">
                                            <span className="text-6xl md:text-7xl font-bold tracking-tighter">R$ 1.480</span>
                                        </div>
                                        <p className="text-lg text-blue-400 font-bold italic">ou 12x R$ 153,10</p>
                                    </div>

                                    <a
                                        href="https://pay.kiwify.com.br/7zPIO6z"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group flex flex-col items-center justify-center gap-4 w-full py-8 bg-blue-600 rounded-full text-white font-bold uppercase tracking-widest text-sm hover:bg-blue-700 transition-all shadow-xl shadow-blue-900/40 relative overflow-hidden"
                                    >
                                        <span className="relative z-10">Garantir Minha Paz</span>
                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-shimmer"></div>
                                    </a>

                                    <div className="mt-10 pt-8 border-t border-white/10 flex items-center gap-4 text-[10px] text-slate-500 font-bold uppercase tracking-widest leading-relaxed">
                                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
                                        Garantia Incondicional de 7 Dias <br />Risco Zero para você.
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

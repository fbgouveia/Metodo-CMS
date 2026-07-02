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
        <section id="mentoria" className="py-16 md:py-28 relative overflow-hidden bg-brand-papel">
            {/* Background elements removed for a cleaner look */}

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
                        <motion.div variants={itemVariants} className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-brand-bruma border border-brand-ceu mb-8 shadow-sm">
                            <div className="w-1.5 h-1.5 rounded-full bg-brand-aguada animate-pulse"></div>
                            <span className="text-xs font-bold text-brand-pedra tracking-wider uppercase">Apenas 3 Vagas Disponíveis Este Mês</span>
                        </motion.div>

                        <motion.h2 variants={itemVariants} className="text-5xl md:text-7xl font-serif text-brand-noite mb-8 tracking-tight leading-tight">
                            Mentoria VIP: <br />
                            <span className="text-brand-pedra italic">A Quiteria pegando na sua mão.</span>
                        </motion.h2>

                        <motion.p variants={itemVariants} className="max-w-3xl mx-auto text-brand-pedra text-xl font-light leading-relaxed">
                            Algumas pessoas precisam de mais do que um método. Elas precisam de
                            <strong className="text-brand-noite font-bold italic"> alguém que conheça o nome delas</strong>, que saiba a sua história e que esteja lá quando o ataque vier na terça-feira à noite.
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
                                    title: "WhatsApp Pessoal da Quiteria",
                                    desc: "Acesso direto a mim durante 2 meses. Quando o medo vier, você não estará sozinha. Eu estarei no seu bolso.",
                                    tag: "VIP Acesso Total",
                                    type: "HUMANO"
                                },
                                {
                                    title: "BÔNUS: E-book 'Manual de Gestão da Ansiedade'",
                                    desc: "Um material exclusivo com hábitos e práticas para você organizar sua rotina matinal e reduzir o ruído mental logo ao acordar.",
                                    tag: "Exclusivo Mentes",
                                    type: "PRESENTE",
                                    highlight: true
                                }
                            ].map((feature, idx) => (
                                <motion.div
                                    key={idx}
                                    variants={itemVariants}
                                    whileHover={{ y: -5 }}
                                    className={`p-6 md:p-10 rounded-2xl border transition-all duration-300 ${feature.highlight
                                        ? 'bg-brand-bruma border-brand-ceu shadow-sm'
                                        : 'bg-white border-brand-bruma hover:border-brand-ceu shadow-sm'
                                        }`}
                                >
                                    <div className="flex justify-between items-center mb-4 md:mb-6">
                                        <span className={`text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] md:tracking-[0.3em] ${feature.highlight ? 'text-brand-aguada' : 'text-brand-pedra'}`}>
                                            {feature.type}
                                        </span>
                                        <span className={`text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-brand-pedra`}>
                                            {feature.tag}
                                        </span>
                                    </div>
                                    <h4 className="text-xl md:text-2xl font-serif text-brand-noite mb-2 md:mb-4 text-balance leading-tight">{feature.title}</h4>
                                    <p className="text-brand-pedra text-base md:text-lg leading-relaxed font-light italic text-pretty">{feature.desc}</p>
                                </motion.div>
                            ))}
                        </div>

                        {/* Pricing Card */}
                        <div className="w-full lg:w-[420px] lg:sticky lg:top-24">
                            <motion.div
                                variants={itemVariants}
                                className="bg-brand-noite text-brand-papel p-8 md:p-12 rounded-2xl shadow-lg relative overflow-hidden"
                            >
                                <div className="relative z-10 text-center md:text-left">
                                    <div className="inline-flex items-center gap-2 mb-8 md:mb-10 bg-brand-carvao px-4 py-2 rounded-full border border-brand-pedra/30">
                                        <div className="w-1.5 h-1.5 rounded-full bg-brand-areia animate-pulse"></div>
                                        <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-brand-areia">Apenas 3 Vagas/Mês</span>
                                    </div>

                                    <div className="mb-10 md:mb-12">
                                        <div className="flex items-baseline justify-center md:justify-start gap-2 opacity-70 mb-2 font-serif italic text-sm text-brand-bruma">
                                            <span>Valor real: R$ 5.000</span>
                                        </div>
                                        <div className="flex items-baseline justify-center md:justify-start gap-2 mb-2">
                                            <span className="text-5xl md:text-6xl font-bold tracking-tighter text-white">R$ 1.480</span>
                                        </div>
                                        <p className="text-sm text-brand-sereno font-bold mt-4 border-t border-brand-carvao pt-4">
                                            ou 12x de R$ 148,00 <br />
                                            <span className="text-brand-pedra font-normal text-[10px] uppercase tracking-wider block mt-1">(Menos que uma sessão de terapia)</span>
                                        </p>
                                    </div>

                                        <a
                                            href="https://pay.kiwify.com.br/7zPIO6z"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            onClick={() => {
                                                if (typeof window !== 'undefined' && (window as any).fbq) {
                                                    (window as any).fbq('track', 'InitiateCheckout', {
                                                        content_name: 'Mentoria VIP',
                                                        currency: 'BRL',
                                                        value: 1480.00
                                                    });
                                                }
                                            }}
                                            className="group w-full flex items-center justify-center py-5 md:py-6 bg-brand-sereno hover:bg-brand-aguada text-white rounded-full font-bold uppercase tracking-widest text-xs transition-colors shadow-md relative overflow-hidden active:scale-95"
                                        >
                                            <span className="relative z-10 text-center">Garantir Minha Vaga VIP Agora</span>
                                        </a>

                                    <div className="mt-8 md:mt-10 pt-6 border-t border-brand-carvao space-y-3 flex flex-col items-center md:items-start opacity-70">
                                        <div className="flex items-center gap-3 text-[9px] md:text-[10px] text-brand-bruma font-bold uppercase tracking-widest">
                                            Acompanhamento de 60 Dias
                                        </div>
                                        <div className="flex items-center gap-3 text-[9px] md:text-[10px] text-brand-bruma font-bold uppercase tracking-widest">
                                            Garantia Blindada de 7 Dias
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div
                                variants={itemVariants}
                                className="mt-6 flex items-center justify-center gap-3 text-brand-pedra font-bold uppercase tracking-widest text-[9px]"
                            >
                                <span className="w-1.5 h-1.5 bg-brand-areia rounded-full"></span>
                                Inscrições encerram em breve
                            </motion.div>
                        </div>

                    </div>
                </motion.div>
            </div>
        </section>
    );
};

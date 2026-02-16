import React from 'react';
// Lucide icons removed to follow "Non-Obvious Persuasive Design" protocol
import { motion } from 'framer-motion';

export const TriplePricing: React.FC = () => {
    const products = [
        {
            id: 'book',
            name: "Manual Gestão da Ansiedade",
            subtitle: "Sua Rota de Fuga Imediata: Técnicas práticas para silenciar crises em minutos.",
            price: "47,00",
            originalPrice: "97,00",
            badge: "Início",
            type: "ESSENCIAL",
            features: [
                "Guia Digital (PDF)",
                "O Alívio da Respiração Neural",
                "Protocolo SOS Crise de Pânico",
                "Acesso Imediato no E-mail"
            ],
            cta: "Começar Minha Fuga",
            primary: false
        },
        {
            id: 'course',
            name: "Método CMS Completo",
            subtitle: "A Retomada de Identidade: O passo a passo clínico para viver sem medo.",
            price: "497,00",
            originalPrice: "997,00",
            badge: "+2.500 Alunas",
            type: "LIBERDADE",
            features: [
                "Acesso ao Mapeamento Neural",
                "7 Módulos de Cura Profunda",
                "Comunidade Mães que Silenciam",
                "Acesso Vitalício (Para Sempre)",
                "Bônus: Mentorias Gravadas"
            ],
            cta: "Garantir Minha Liberdade",
            primary: true
        },
        {
            id: 'mentorship',
            name: "Mentoria VIP Individual",
            subtitle: "O Resgate Profundo: Dra. Quitéria pegando na sua mão pessoalmente.",
            price: "1.480,00",
            originalPrice: "2.500,00",
            badge: "Restrito",
            type: "EXCLUSIVO",
            features: [
                "Tudo do Método CMS Completo",
                "6 Encontros Individuais (Zoom)",
                "Suporte Direto (WhatsApp VIP)",
                "Ajuste de Rota Personalizado",
                "Prioridade em Novos Cursos"
            ],
            cta: "Agendar Meu Resgate",
            primary: false
        }
    ];

    return (
        <section id="pricing" className="py-24 relative overflow-hidden bg-transparent">
            {/* Background elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[600px] bg-blue-100/20 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 shadow-sm mb-10"
                    >
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse"></div>
                        <span className="text-[10px] font-black text-blue-700 tracking-[0.2em] uppercase">Escolha o seu caminho</span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-5xl md:text-7xl font-serif text-slate-900 mb-6 tracking-tight"
                    >
                        A Paz Mental <br /> <span className="text-blue-600 italic">não tem preço.</span>
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-7xl mx-auto">
                    {products.map((product, idx) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className={`relative flex flex-col p-10 rounded-[3rem] transition-all duration-500 overflow-hidden border ${product.primary
                                ? 'bg-blue-600 shadow-[0_40px_100px_rgba(8,_112,_184,_0.15)] border-blue-100 scale-105 z-20'
                                : 'bg-white/40 backdrop-blur-xl border-white/60 shadow-xl hover:shadow-2xl z-10 scale-100'
                                }`}
                        >
                            <div className="flex-1">
                                <div className="flex items-center justify-between mb-8">
                                    <div className={`${product.primary ? 'text-blue-400' : 'text-blue-600'} font-black text-[10px] tracking-[0.3em] uppercase`}>
                                        {product.type}
                                    </div>
                                    {product.badge && (
                                        <span className={`px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest ${product.primary ? 'bg-blue-600 text-white' : 'bg-blue-50 text-blue-600'}`}>
                                            {product.badge}
                                        </span>
                                    )}
                                </div>

                                <h3 className={`text-3xl font-serif mb-3 leading-tight ${product.primary ? 'text-white' : 'text-slate-900'} transition-colors`}>
                                    {product.name}
                                </h3>
                                <p className={`text-sm mb-10 leading-relaxed ${product.primary ? 'text-white/80' : 'text-slate-500'}`}>
                                    {product.subtitle}
                                </p>

                                <div className="mb-12">
                                    <span className={`line-through block text-sm font-bold uppercase tracking-widest mb-1 ${product.primary ? 'text-blue-200' : 'text-slate-400'}`}>R$ {product.originalPrice}</span>
                                    <div className="flex items-baseline gap-2">
                                        <span className={`text-sm font-bold ${product.primary ? 'text-white' : 'text-slate-900'}`}>R$</span>
                                        <span className={`text-6xl font-black ${product.primary ? 'text-white' : 'text-slate-900'} tracking-tighter`}>{product.price}</span>
                                    </div>
                                </div>

                                <div className="space-y-4 mb-12">
                                    {product.features.map((feature, i) => (
                                        <div key={i} className="flex items-center gap-4 group/item">
                                            <div className={`w-1 h-1 rounded-full transition-all group-hover/item:scale-150 ${product.primary ? 'bg-blue-400' : 'bg-blue-600'}`}></div>
                                            <span className={`text-sm tracking-wide ${product.primary ? 'text-white/90' : 'text-slate-600'}`}>
                                                {feature}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <a
                                href={`https://pay.kiwify.com.br/cUO2x97?plan=${product.id}`}
                                className={`w-full py-5 rounded-full font-bold flex items-center justify-center gap-6 transition-all group/btn ${product.primary
                                    ? 'bg-white text-slate-900 hover:bg-blue-50'
                                    : 'bg-blue-600 text-white hover:bg-blue-700 shadow-xl'
                                    }`}
                            >
                                <span className="uppercase tracking-widest text-xs">{product.cta}</span>
                                <div className={`w-8 h-[1px] ${product.primary ? 'bg-slate-900' : 'bg-white'} relative overflow-hidden`}>
                                    <div className={`absolute inset-0 ${product.primary ? 'bg-blue-600' : 'bg-blue-200'} -translate-x-full group-hover/btn:animate-shimmer`}></div>
                                </div>
                            </a>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <div className="inline-flex items-center gap-6 px-10 py-6 bg-white/40 backdrop-blur-md rounded-[2.5rem] border border-white/60 shadow-lg">
                        <div className="flex items-center gap-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
                            <span className="text-xs font-bold text-slate-700 uppercase tracking-widest">Acesso Seguro & Garantido</span>
                        </div>
                        <div className="w-[1px] h-4 bg-slate-200"></div>
                        <p className="text-xs text-slate-500 font-medium italic">7 dias de garantia incondicional em qualquer escolha.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

import React from 'react';
import { motion } from 'framer-motion';

const CheckIcon = ({ className = "" }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={`w-5 h-5 ${className}`}>
        <polyline points="20 6 9 17 4 12" />
    </svg>
);

const ShieldCheckIcon = ({ className = "" }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`w-6 h-6 ${className}`}>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="m9 12 2 2 4-4" />
    </svg>
);

const SparkleIcon = ({ className = "" }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`w-3 h-3 ${className}`}>
        <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
    </svg>
);

const IconEssencial = ({ className = "" }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`w-5 h-5 ${className}`}>
        <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
    </svg>
);

const IconLiberdade = ({ className = "" }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`w-5 h-5 ${className}`}>
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4 Z" />
    </svg>
);

const IconExclusivo = ({ className = "" }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`w-5 h-5 ${className}`}>
        <path d="M2 16V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v11" />
        <path d="M22 16c0 3-4 5-10 5S2 19 2 16" />
        <path d="M12 21v-5" />
    </svg>
);


export const TriplePricing: React.FC = () => {
    const products = [
        {
            id: 'book',
            name: "Manual Ansiedade",
            subtitle: "Sua rota de fuga imediata. Prático para silenciar crises em minutos.",
            price: "47",
            originalPrice: "97,00",
            badge: "",
            type: "Essencial",
            icon: <IconEssencial />,
            features: [
                "Guia Digital Completo (PDF)",
                "O Alívio da Respiração Neural",
                "Protocolo SOS Crise de Pânico",
                "Acesso Imediato no E-mail"
            ],
            cta: "Começar Minha Fuga",
            primary: false,
            link: "https://pay.kiwify.com.br/OZD5KB0"
        },
        {
            id: 'course',
            name: "Método CMS",
            subtitle: "A retomada de identidade. O passo a passo clínico para viver sem medo.",
            price: "497",
            originalPrice: "997,00",
            badge: "Mais Escolhido",
            type: "Liberdade",
            icon: <IconLiberdade />,
            features: [
                "Acesso ao Mapeamento Neural",
                "7 Módulos de Cura Profunda",
                "Comunidade Exclusiva de Alunos",
                "Acesso Vitalício (Para Sempre)",
                "Bônus: Mentorias Gravadas"
            ],
            cta: "Garantir Minha Liberdade",
            primary: true,
            link: "https://pay.kiwify.com.br/cUO2x97"
        },
        {
            id: 'mentorship',
            name: "Mentoria VIP",
            subtitle: "O resgate profundo. Quiteria pegando na sua mão pessoalmente.",
            price: "1.480",
            originalPrice: "2.500,00",
            badge: "",
            type: "Exclusivo",
            icon: <IconExclusivo />,
            features: [
                "Tudo do Método CMS Completo",
                "6 Encontros Individuais (Zoom)",
                "Suporte Direto (WhatsApp VIP)",
                "Ajuste de Rota Personalizado",
                "Prioridade em Novos Cursos"
            ],
            cta: "Agendar Meu Resgate",
            primary: false,
            link: "https://pay.kiwify.com.br/7zPIO6z"
        }
    ];

    return (
        <section id="pricing" className="py-24 relative overflow-hidden bg-brand-papel">
            <div className="container mx-auto px-6 relative z-10">
                
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white border border-brand-bruma/50 shadow-sm mb-8"
                    >
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-sereno animate-pulse"></div>
                        <span className="text-[10px] font-bold text-brand-noite tracking-[0.2em] uppercase">Escolha o seu caminho</span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-serif text-brand-noite tracking-tight max-w-2xl mx-auto leading-tight"
                    >
                        A Paz Mental <span className="text-brand-pedra italic font-light">não tem preço.</span>
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch max-w-7xl mx-auto mt-12">
                    {products.map((product, idx) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className={`relative flex flex-col p-8 md:p-10 rounded-[2rem] transition-all duration-300 border ${
                                product.primary
                                    ? 'bg-brand-noite border-brand-sereno shadow-2xl z-20 md:-translate-y-4'
                                    : 'bg-white border-brand-bruma/40 shadow-sm hover:shadow-md z-10'
                            }`}
                        >
                            {/* Header: Icon & Type & Badge */}
                            <div className="flex justify-between items-center mb-8">
                                <div className={`flex items-center gap-2.5 font-bold text-sm tracking-wide ${product.primary ? 'text-brand-papel' : 'text-brand-noite'}`}>
                                    <div className={`${product.primary ? 'text-brand-sereno' : 'text-brand-pedra'}`}>
                                        {product.icon}
                                    </div>
                                    {product.type}
                                </div>
                                {product.badge && (
                                    <span className="bg-brand-sereno/20 text-brand-sereno px-3 py-1.5 rounded-full text-[10px] font-bold tracking-widest uppercase flex items-center gap-1.5">
                                        <SparkleIcon /> {product.badge}
                                    </span>
                                )}
                            </div>

                            {/* Name & Pricing */}
                            <h3 className={`text-4xl font-serif mb-4 tracking-tight ${product.primary ? 'text-brand-papel' : 'text-brand-noite'}`}>
                                {product.name}
                            </h3>
                            
                            <div className="mb-4 flex flex-col">
                                <div className="flex items-baseline gap-1">
                                    <span className={`text-2xl font-bold ${product.primary ? 'text-brand-papel' : 'text-brand-noite'}`}>R$</span>
                                    <span className={`text-6xl font-bold tracking-tighter ${product.primary ? 'text-brand-papel' : 'text-brand-noite'}`}>
                                        {product.price}
                                    </span>
                                </div>
                                <span className={`text-sm mt-1 font-medium line-through ${product.primary ? 'text-brand-pedra' : 'text-brand-bruma'}`}>
                                    De R$ {product.originalPrice}
                                </span>
                            </div>

                            <p className={`text-sm mb-8 min-h-[44px] leading-relaxed ${product.primary ? 'text-brand-pedra' : 'text-brand-noite/70'}`}>
                                {product.subtitle}
                            </p>

                            {/* CTA Button placed right after price/subtitle */}
                            <a
                                href={product.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => {
                                    if (typeof window !== 'undefined' && (window as any).fbq) {
                                        (window as any).fbq('track', 'InitiateCheckout', {
                                            content_name: product.name,
                                            currency: 'BRL',
                                            value: parseFloat(product.price.replace('.', '').replace(',', '.'))
                                        });
                                    }
                                }}
                                className={`w-full py-4 md:py-5 rounded-full font-bold flex items-center justify-center transition-all ${
                                    product.primary
                                        ? 'bg-gradient-to-r from-brand-sereno to-[#0ea5e9] text-white shadow-lg hover:shadow-brand-sereno/25 hover:scale-[1.02] active:scale-[0.98]'
                                        : 'bg-brand-areia/50 hover:bg-brand-areia text-brand-noite border border-brand-bruma/50 hover:border-brand-bruma active:scale-[0.98]'
                                }`}
                            >
                                <span className="uppercase tracking-widest text-xs">{product.cta}</span>
                            </a>

                            <div className="my-8 w-full h-[1px] bg-brand-bruma/20"></div>

                            {/* Features */}
                            <div className="flex-1 mb-10">
                                <ul className="space-y-4">
                                    {product.features.map((feature, i) => (
                                        <li key={i} className="flex items-start gap-3.5">
                                            <CheckIcon className={`mt-0.5 shrink-0 ${product.primary ? 'text-brand-sereno' : 'text-brand-pedra'}`} />
                                            <span className={`text-sm leading-relaxed ${product.primary ? 'text-brand-papel' : 'text-brand-noite'}`}>
                                                {feature}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Guarantee Bottom */}
                            <div className={`pt-6 mt-auto border-t ${product.primary ? 'border-brand-pedra/20' : 'border-brand-bruma/30'}`}>
                                <div className="flex items-start gap-4">
                                    <ShieldCheckIcon className={`shrink-0 ${product.primary ? 'text-emerald-400' : 'text-emerald-600'}`} />
                                    <div>
                                        <p className={`font-bold text-sm mb-1 ${product.primary ? 'text-brand-papel' : 'text-brand-noite'}`}>
                                            Garantia de 7 Dias
                                        </p>
                                        <p className={`text-[11px] leading-tight ${product.primary ? 'text-brand-pedra' : 'text-brand-noite/60'}`}>
                                            Acesso seguro. Se não for para você, o reembolso é imediato.
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};


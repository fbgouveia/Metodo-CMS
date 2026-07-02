import React from 'react';
// Lucide icons removed to follow "Non-Obvious Persuasive Design" protocol
import { motion } from 'framer-motion';

const KIWIFY_URL = "https://pay.kiwify.com.br/cUO2x97";

export const CourseSaleCard: React.FC = () => {
    return (
        <section className="py-24 relative overflow-hidden bg-brand-papel">
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
                            <span className="text-brand-pedra font-black tracking-[0.4em] text-[10px] uppercase block">O Próximo Passo da Sua Jornada</span>
                            <h2 className="text-5xl md:text-7xl font-serif text-brand-noite leading-none tracking-tighter">
                                Método CMS: <span className="text-brand-pedra italic">Sua Retomada</span>
                            </h2>
                        </div>

                        {/* VISUAL PRINCIPAL: Banner Isolado e Imponente */}
                        <div className="w-full relative group">
                            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-lg border border-brand-bruma bg-white">
                                <img
                                    src="/wp-content/uploads/2026/02/banner-do-curso-1280x720-1.png"
                                    alt="Método CMS: Sua Retomada"
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[6s] ease-out object-center md:object-top"
                                />
                                {/* Badge reposicionado para a esquerda para não cobrir o rosto */}
                                <div className="absolute top-4 left-4 md:top-8 md:left-8 bg-brand-noite text-brand-papel px-4 py-2 md:px-8 md:py-3 rounded-full font-bold text-xs md:text-sm shadow-xl italic font-serif border border-brand-carvao">
                                    Acesso Vitalício
                                </div>
                            </div>
                        </div>

                        {/* GRID DE CONTEÚDO E PREÇO: Alinhamento Perfeito */}
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                            {/* Benefícios */}
                            <div className="lg:col-span-7 space-y-10">
                                <p className="text-2xl text-brand-pedra leading-relaxed font-light italic border-l-4 border-brand-sereno pl-8">
                                    "O Método CMS é o mapa clínico seguro que desenhei em <strong>4 décadas de clínica</strong> para ajudar você a voltar a respirar em paz. É biológico, não é apenas conversa."
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {[
                                        "Protocolo Clínico Quiteria",
                                        "CRP 06/21065 Ativo",
                                        "O PROTOCOLO DE 5 MINUTOS",
                                        "Acesso Imediato ao Portal",
                                        "Comunidade Método CMS",
                                        "Suporte Técnico Prioritário"
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-center gap-4 text-brand-noite p-4 bg-white rounded-xl border border-brand-bruma hover:border-brand-sereno transition-colors">
                                            <div className="w-1.5 h-1.5 rounded-full bg-brand-sereno" />
                                            <span className="text-xs font-bold uppercase tracking-widest text-brand-pedra leading-none">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Card de Preço (Sem sobreposição) */}
                            <div className="lg:col-span-5">
                                <div className="bg-brand-noite rounded-2xl p-10 md:p-12 shadow-lg relative overflow-hidden text-brand-papel border border-brand-carvao">
                                    <div className="absolute top-0 right-0 w-64 h-64 bg-brand-carvao/50 rounded-full blur-[80px]"></div>

                                    <div className="relative z-10 space-y-8">
                                        <div className="text-center lg:text-left">
                                            <div className="flex items-center justify-between mb-4">
                                                <span className="text-brand-sereno text-[10px] font-bold uppercase tracking-[0.3em]">Investimento Único</span>
                                                <span className="bg-green-900/40 text-green-400 px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-widest border border-green-800/50">-50% OFF HOJE</span>
                                            </div>

                                            <div className="flex items-baseline justify-center lg:justify-start gap-2">
                                                <span className="text-xl font-serif text-brand-bruma italic">12x de</span>
                                                <span className="text-7xl font-bold tracking-tighter text-brand-papel">49,70</span>
                                            </div>
                                            <p className="text-brand-pedra text-xs mt-3 font-medium flex items-center justify-center lg:justify-start gap-2">
                                                <span>⚡ Menos que 1 café por dia (R$ 1,65)</span>
                                            </p>
                                        </div>

                                        <a
                                            href={KIWIFY_URL}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            onClick={() => {
                                                if (typeof window !== 'undefined' && (window as any).fbq) {
                                                    (window as any).fbq('track', 'InitiateCheckout', {
                                                        content_name: 'Método CMS: Sua Retomada',
                                                        currency: 'BRL',
                                                        value: 497.00
                                                    });
                                                }
                                            }}
                                            className="group relative block w-full py-6 bg-brand-sereno text-white rounded-full font-bold uppercase tracking-[0.2em] text-center shadow-sm hover:bg-brand-aguada transition-colors text-xs overflow-hidden"
                                        >
                                            <span className="relative z-10 group-hover:hidden">Iniciar Meu Resgate</span>
                                            <span className="relative z-10 hidden group-hover:inline">Quero Minha Paz de Volta</span>
                                        </a>

                                        <div className="flex justify-center lg:justify-start gap-6 pt-2">
                                            <div className="flex items-center gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                                                <span className="text-[9px] font-bold uppercase tracking-widest text-brand-bruma">Ambiente Seguro</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-brand-sereno"></div>
                                                <span className="text-[9px] font-bold uppercase tracking-widest text-brand-bruma">7 Dias de Garantia</span>
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
                    <p className="flex items-center justify-center gap-2 text-sm text-brand-pedra font-bold uppercase tracking-widest">
                        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                        Pagamento via Cartão, Pix ou Boleto.
                    </p>

                    <div className="inline-flex flex-col md:flex-row items-center gap-6 bg-white p-6 rounded-2xl border border-brand-bruma shadow-sm">
                        <p className="text-brand-noite font-bold italic">Precisa de ajuda com o pagamento?</p>
                        <a
                            href="https://api.whatsapp.com/send?phone=5511956185501"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-3 bg-brand-papel text-brand-pedra rounded-full font-bold uppercase tracking-widest text-xs border border-brand-bruma hover:bg-brand-bruma/20 transition-colors"
                        >
                            Falar com Suporte
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

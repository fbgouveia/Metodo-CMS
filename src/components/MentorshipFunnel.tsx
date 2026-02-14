import React from 'react';
import { Star, Check, ArrowRight, ShieldCheck, Zap } from 'lucide-react';

export const MentorshipFunnel: React.FC = () => {
    return (
        <section id="mentorship-funnel" className="py-24 relative overflow-hidden bg-white">
            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 items-center max-w-6xl mx-auto">

                    {/* Imagem/Visual da Autoridade */}
                    <div className="flex-1 relative">
                        <div className="absolute -inset-4 bg-blue-100/50 rounded-[3rem] blur-2xl opacity-50"></div>
                        <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white aspect-[4/5]">
                            <img
                                src="https://metodocms.com/wp-content/uploads/2025/07/hero-bottom.webp"
                                alt="Dra. Quitéria Gouveia"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900 to-transparent p-10 text-white">
                                <p className="text-sm font-bold uppercase tracking-widest text-blue-400 mb-2">Acompanhamento Direto</p>
                                <h3 className="text-3xl font-serif">"Você não vai mais trilhar esse caminho sozinha."</h3>
                            </div>
                        </div>
                    </div>

                    {/* Conteúdo da Mentoria */}
                    <div className="flex-1">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-50 border border-rose-100 mb-8">
                            <Star className="w-4 h-4 text-rose-600 fill-rose-600" />
                            <span className="text-xs font-bold text-rose-600 tracking-wider uppercase">Vagas Extremamente Limitadas</span>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-serif text-slate-900 mb-8 leading-tight">
                            Mentoria VIP: <br />
                            <span className="text-blue-600">O Atalho para o Silêncio.</span>
                        </h2>

                        <p className="text-slate-600 text-lg mb-10 leading-relaxed font-light">
                            Algumas histórias de pânico são tão profundas que o curso gravado é apenas o começo. Você precisa de um diagnóstico personalizado e de alguém que <strong>pegue na sua mão</strong> e não te deixe desistir.
                        </p>

                        <div className="space-y-6 mb-12">
                            <div className="flex gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-100">
                                <div className="bg-blue-600 text-white p-2 rounded-lg h-fit"><Zap size={20} /></div>
                                <div>
                                    <h4 className="font-bold text-slate-900">Análise de Caso Individual</h4>
                                    <p className="text-sm text-slate-500">Eu vou olhar para os SEUS gatilhos específicos e te dar o mapa exato para desarmá-los.</p>
                                </div>
                            </div>
                            <div className="flex gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-100">
                                <div className="bg-blue-600 text-white p-2 rounded-lg h-fit"><ShieldCheck size={20} /></div>
                                <div>
                                    <h4 className="font-bold text-slate-900">Suporte VIP via WhatsApp</h4>
                                    <p className="text-sm text-slate-500">Acesso direto à minha equipe e orientações personalizadas para que você nunca fique sem resposta na hora da crise.</p>
                                </div>
                            </div>
                            <div className="flex gap-4 p-5 rounded-2xl bg-rose-50 border border-rose-100 animate-pulse">
                                <div className="bg-rose-600 text-white p-2 rounded-lg h-fit"><Check size={20} /></div>
                                <div>
                                    <h4 className="font-bold text-rose-900">GRÁTIS: Manual de Gestão da Ansiedade</h4>
                                    <p className="text-sm text-rose-600">O seu guia físico de R$ 47,00 sai de graça ao garantir sua vaga na mentoria.</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-slate-900 rounded-3xl p-8 text-white shadow-2xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
                                <Star size={100} fill="white" />
                            </div>
                            <p className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-4">Investimento Padrão Ouro</p>
                            <div className="mb-8">
                                <span className="text-sm text-slate-500 line-through block mb-1 uppercase tracking-widest font-bold">Valor Original: R$ 2.990</span>
                                <div className="flex items-baseline gap-3">
                                    <span className="text-5xl font-bold">R$ 1.480</span>
                                    <span className="text-slate-400 text-sm italic">ou 12x R$ 153,10</span>
                                </div>
                            </div>
                            <a
                                href="https://pay.kiwify.com.br/7zPIO6z"
                                className="block w-full py-5 bg-gradient-to-r from-blue-600 to-rose-600 rounded-xl text-center font-bold text-white hover:scale-105 transition-all shadow-xl"
                            >
                                Quero o Acompanhamento da Dra. Quitéria
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

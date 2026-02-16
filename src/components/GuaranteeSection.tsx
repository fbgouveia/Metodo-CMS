import React from 'react';
import { motion } from 'framer-motion';

export const GuaranteeSection: React.FC = () => {
    return (
        <section className="py-24 relative overflow-hidden bg-white">
            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-6xl mx-auto bg-slate-50 rounded-[4rem] p-12 md:p-20 border border-slate-100 flex flex-col md:flex-row items-center gap-16 overflow-hidden relative shadow-2xl shadow-blue-900/5">

                    {/* Elemento Decorativo de Fundo */}
                    <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/30 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2"></div>

                    {/* Visual de Segurança Aprimorado */}
                    <div className="relative flex-shrink-0 group">
                        <div className="w-56 h-56 md:w-72 md:h-72 rounded-full border border-blue-100 bg-white shadow-xl flex items-center justify-center relative z-10 transition-transform duration-700 group-hover:scale-105">
                            <div className="absolute inset-2 rounded-full border-2 border-dashed border-blue-200 animate-spin-slow opacity-50"></div>

                            <div className="text-center flex flex-col items-center justify-center h-full pt-4">
                                <span className="text-9xl font-serif text-slate-900 leading-none block -translate-y-6">7</span>
                                <div className="-mt-8 space-y-1">
                                    <span className="text-[10px] font-black text-blue-600 uppercase tracking-[0.4em] block">Dias de</span>
                                    <span className="text-2xl font-serif italic text-slate-400 block">Teste Total</span>
                                </div>
                            </div>
                        </div>

                        {/* Selo Flutuante */}
                        <div className="absolute -bottom-4 -right-4 bg-green-500 text-white px-6 py-3 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg flex items-center gap-2 z-20 animate-bounce-slow">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                            Garantia Blindada
                        </div>
                    </div>

                    {/* Conteúdo de Texto Persuasivo */}
                    <div className="flex-1 text-center md:text-left relative z-10">
                        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-slate-900 text-white mb-8 shadow-lg">
                            <svg className="w-3 h-3 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span className="text-[10px] font-black uppercase tracking-widest">Risco Zero para Você</span>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-serif text-slate-900 mb-8 leading-tight">
                            "Eu tiro o peso da <br />
                            <span className="text-blue-600 italic">decisão dos seus ombros."</span>
                        </h2>

                        <div className="space-y-6 text-slate-600 text-lg font-light leading-relaxed italic border-l-4 border-blue-200 pl-8 bg-white/50 p-6 rounded-r-3xl mb-10">
                            <p>
                                Eu confio tanto que o Método CMS vai silenciar sua mente que assumo todo o risco.
                            </p>
                            <p>
                                Entre, assista às aulas, use os áudios de reprogramação. Se em <strong>7 dias</strong> você não sentir que sua vida está mudando, eu devolvo 100% do seu dinheiro. Sem letras miúdas. Basta um e-mail.
                            </p>
                        </div>

                        <div className="flex flex-col md:flex-row gap-6 opacity-70">
                            <div className="flex items-center gap-3 bg-white px-4 py-2 rounded-lg shadow-sm border border-slate-100">
                                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Reembolso Automático</span>
                            </div>
                            <div className="flex items-center gap-3 bg-white px-4 py-2 rounded-lg shadow-sm border border-slate-100">
                                <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Proteção Kiwify</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Background elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50/50 rounded-full blur-[120px] -z-0"></div>
        </section>
    );
};

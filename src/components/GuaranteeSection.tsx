import React from 'react';
import { motion } from 'framer-motion';

export const GuaranteeSection: React.FC = () => {
    return (
        <section className="py-24 relative overflow-hidden bg-white">
            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-5xl mx-auto bg-slate-50 rounded-[4rem] p-12 md:p-24 border border-slate-100 flex flex-col md:flex-row items-center gap-16 overflow-hidden group">

                    {/* Visual de Segurança */}
                    <div className="relative flex-shrink-0">
                        <div className="w-48 h-48 md:w-64 md:h-64 rounded-full border-2 border-dashed border-blue-200 flex items-center justify-center relative animate-spin-slow">
                            {/* Pontos fixos na borda como marcador técnico */}
                            {[0, 90, 180, 270].map((deg) => (
                                <div
                                    key={deg}
                                    className="absolute w-2 h-2 bg-blue-600 rounded-full"
                                    style={{
                                        transform: `rotate(${deg}deg) translateY(-128px)`,
                                        transformOrigin: 'center'
                                    }}
                                ></div>
                            ))}
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center flex-col text-center">
                            <span className="text-7xl font-serif text-slate-900 leading-none">7</span>
                            <span className="text-[10px] font-black text-blue-600 uppercase tracking-[0.3em] mt-2">Dias de Paz</span>
                        </div>
                    </div>

                    {/* Conteúdo de Texto */}
                    <div className="flex-1 text-center md:text-left">
                        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-blue-100/50 border border-blue-200 mb-8">
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-600"></div>
                            <span className="text-[10px] font-black text-blue-700 uppercase tracking-widest">Risco Zero Absoluto</span>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-serif text-slate-900 mb-6 leading-tight">
                            Experimente o Método CMS <br />
                            <span className="text-blue-600 italic">por minha conta.</span>
                        </h2>

                        <p className="text-slate-500 text-lg font-light leading-relaxed italic mb-10 border-l-2 border-blue-100 pl-8">
                            Não quero seu dinheiro se este método não trouxer o silêncio que você busca. Você tem 7 dias para testar as ferramentas do Módulo 1 e 3. Se sentir que não é para você, devolvo 100% do seu investimento com um único clique. Sem perguntas, sem burocracia e continuamos amigas.
                        </p>

                        <div className="flex flex-wrap justify-center md:justify-start gap-8 opacity-60">
                            <div className="flex items-center gap-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-slate-900"></div>
                                <span className="text-[10px] font-bold uppercase tracking-widest">Compra Criptografada</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-slate-900"></div>
                                <span className="text-[10px] font-bold uppercase tracking-widest">Acesso Imediato</span>
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

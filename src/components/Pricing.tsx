import React from 'react';
import { Check, ArrowRight } from 'lucide-react';

interface PricingProps {
  id?: string;
  isPreview?: boolean; // Se for true, mostra a barra pequena. Se false, mostra a tabela grande.
  customTitle?: string;
  customSubtitle?: string;
  customBadge?: string;
}

export const Pricing: React.FC<PricingProps> = ({ 
  id = "pricing", 
  isPreview = false, 
  customTitle, 
  customSubtitle,
  customBadge 
}) => {

  // --- MODO 1: BARRA DE OFERTA RÁPIDA (Horizontal) ---
  // Aparece apenas quando chamamos <Pricing isPreview={true} />
  if (isPreview) {
    return (
      <div id={id} className="w-full">
        <div className="bg-white/80 backdrop-blur-xl p-6 rounded-[2rem] shadow-lg border border-white/60 flex flex-col md:flex-row items-center justify-between gap-6 transform hover:scale-[1.01] transition-transform duration-300">
            <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-md animate-pulse">⚡</div>
                <div className="text-center md:text-left">
                    {customBadge && <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wide mb-1">{customBadge}</p>}
                    <h3 className="text-lg font-bold text-slate-900 leading-tight">{customTitle || "Oferta Relâmpago"}</h3>
                    <p className="text-sm text-slate-600">{customSubtitle || "12x R$ 49,90"}</p>
                </div>
            </div>
            <a href="#pricing" className="bg-slate-900 text-white px-8 py-3 rounded-full text-sm font-bold hover:bg-blue-600 transition-all shadow-md w-full md:w-auto text-center flex items-center justify-center gap-2">
                Quero minha vaga <ArrowRight size={16}/>
            </a>
        </div>
      </div>
    );
  }

  // --- MODO 2: TABELA DE PREÇOS PRINCIPAL (Vertical) ---
  // Aparece quando chamamos <Pricing /> (sem props) no final da página
  return (
    <section id={id} className="py-24 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
                <span className="text-blue-600 font-bold tracking-widest uppercase text-sm">Investimento</span>
                <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mt-4 mb-6">Escolha seu Caminho</h2>
                <p className="text-slate-500 text-xl max-w-2xl mx-auto">
                    Você tem duas opções para entrar no Método CMS hoje.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto items-start">
                
                {/* CARD 1: CURSO GRAVADO (R$ 497) */}
                <div className="bg-white p-10 rounded-[3rem] border border-slate-200 shadow-xl hover:border-blue-300 transition-all relative">
                    <div className="mb-8">
                        <h3 className="text-2xl font-bold text-slate-900">Curso CMS</h3>
                        <p className="text-slate-500 text-sm mt-1">Acesso Imediato às Aulas.</p>
                    </div>
                    <div className="mb-8">
                        <span className="text-5xl font-bold text-slate-900">R$ 497</span>
                        <span className="text-sm text-slate-500">/à vista</span>
                        <p className="text-xs text-blue-600 mt-2 font-bold">ou 12x R$ 49,90</p>
                    </div>
                    <ul className="space-y-4 mb-10 text-sm text-slate-600">
                        <li className="flex gap-3"><Check size={18} className="text-green-500 shrink-0"/> <span>Acesso por <strong>1 Ano</strong></span></li>
                        <li className="flex gap-3"><Check size={18} className="text-green-500 shrink-0"/> <span>7 Módulos Gravados</span></li>
                        <li className="flex gap-3"><Check size={18} className="text-green-500 shrink-0"/> <span>Ferramentas Anti-Crise</span></li>
                        <li className="flex gap-3"><Check size={18} className="text-green-500 shrink-0"/> <span>Suporte na Plataforma</span></li>
                    </ul>
                    <button className="w-full py-4 border-2 border-slate-900 text-slate-900 rounded-full font-bold hover:bg-slate-900 hover:text-white transition-all duration-300">
                        Começar Agora
                    </button>
                </div>

                {/* CARD 2: MENTORIA VIP (R$ 997) */}
                <div className="bg-[#1d1d1f] text-white p-10 rounded-[3rem] shadow-2xl relative transform md:-translate-y-6 border border-gray-800 ring-4 ring-blue-500/20">
                    <div className="absolute top-6 right-6 bg-blue-600 px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-lg">
                        Recomendado
                    </div>
                    <div className="mb-8">
                        <h3 className="text-2xl font-bold">Mentoria Premium</h3>
                        <p className="text-gray-400 text-sm mt-1">Acompanhamento + Aulas.</p>
                    </div>
                    <div className="mb-8">
                        <span className="text-5xl font-bold">R$ 997</span>
                        <span className="text-sm text-gray-400">/à vista</span>
                        <p className="text-xs text-blue-400 mt-2 font-bold">ou 12x R$ 99,70</p>
                    </div>
                    <ul className="space-y-4 mb-10 text-sm text-gray-300">
                        <li className="flex gap-3 text-white"><Check size={18} className="text-blue-500 shrink-0"/> <span><strong>Acesso Vitalício</strong></span></li>
                        <li className="flex gap-3 text-white"><Check size={18} className="text-blue-500 shrink-0"/> <span>6 Encontros <strong>Ao Vivo</strong></span></li>
                        <li className="flex gap-3 text-white"><Check size={18} className="text-blue-500 shrink-0"/> <span>Análise de Caso Individual</span></li>
                        <li className="flex gap-3 text-white"><Check size={18} className="text-blue-500 shrink-0"/> <span><strong>Suporte WhatsApp</strong> (2 meses)</span></li>
                    </ul>
                    <button className="w-full py-4 bg-blue-600 rounded-full font-bold hover:bg-blue-500 transition-all shadow-lg shadow-blue-900/50 hover:shadow-blue-600/50 hover:scale-[1.02]">
                        Quero Mentoria VIP
                    </button>
                </div>

            </div>
            
            <div className="mt-12 text-center text-sm text-slate-400">
                <p>Pagamento seguro via Cartão, Pix ou Boleto. Garantia de 7 dias.</p>
            </div>
        </div>
    </section>
  );
};

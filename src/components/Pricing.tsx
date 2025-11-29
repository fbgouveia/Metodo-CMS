import React from 'react';
import { Check, ArrowRight } from 'lucide-react';

interface PricingProps {
  id?: string;
  isPreview?: boolean;
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

  // --- MODO BARRA DE OFERTA (Horizontal) ---
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

  // --- MODO TABELA COMPLETA ---
  return (
    <section id={id} className="py-24 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
                <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">Invista na sua Saúde Mental</h2>
                <p className="text-slate-500 text-xl">Quanto custa sua paz?</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto items-start">
                {/* Card Curso */}
                <div className="bg-white p-10 rounded-[3rem] border border-slate-200 shadow-xl hover:border-blue-300 transition-all">
                    <div className="mb-8"><h3 className="text-2xl font-bold text-slate-900">Curso CMS</h3><p className="text-slate-500 text-sm">Gravado.</p></div>
                    <div className="mb-8"><span className="text-5xl font-bold">R$ 497</span><span className="text-sm">/à vista</span></div>
                    <ul className="space-y-4 mb-8 text-sm text-slate-600">
                        <li className="flex gap-2"><Check size={18} className="text-green-500"/> Acesso por 1 Ano</li>
                        <li className="flex gap-2"><Check size={18} className="text-green-500"/> Ferramentas Anti-Crise</li>
                        <li className="flex gap-2"><Check size={18} className="text-green-500"/> Suporte na Plataforma</li>
                    </ul>
                    <button className="w-full py-4 border border-slate-300 rounded-full font-bold hover:bg-slate-50 transition">Começar Agora</button>
                </div>

                {/* Card Mentoria */}
                <div className="bg-[#1d1d1f] text-white p-10 rounded-[3rem] shadow-2xl relative transform md:-translate-y-6 border border-gray-800">
                    <div className="absolute top-6 right-6 bg-blue-600 px-3 py-1 rounded-full text-[10px] font-bold uppercase">Recomendado</div>
                    <div className="mb-8"><h3 className="text-2xl font-bold">Mentoria Premium</h3><p className="text-gray-400 text-sm">Ao vivo + Suporte.</p></div>
                    <div className="mb-8"><span className="text-5xl font-bold">R$ 997</span><span class="text-sm">/à vista</span><p className="text-xs text-gray-400 mt-2">ou 12x R$ 99,70</p></div>
                    <ul className="space-y-4 mb-8 text-sm text-gray-300">
                        <li className="flex gap-2 text-white"><Check size={18}/> <strong>Acesso Vitalício</strong></li>
                        <li className="flex gap-2 text-white"><Check size={18}/> 6 Encontros ao Vivo</li>
                        <li className="flex gap-2 text-white"><Check size={18}/> <strong>Suporte WhatsApp (2 meses)</strong></li>
                    </ul>
                    <button className="w-full py-4 bg-blue-600 rounded-full font-bold hover:bg-blue-700 transition shadow-lg shadow-blue-900/50">Quero Mentoria VIP</button>
                </div>
            </div>
        </div>
    </section>
  );
};

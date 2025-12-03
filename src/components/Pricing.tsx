import React from 'react';
import { Check, ArrowRight, Star } from 'lucide-react';

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

  // Links de Compra (Hotmart)
  const linkCurso = "https://pay.hotmart.com/V101096199I?off=txjwdlvn";
  const linkMentoria = "https://pay.hotmart.com/V101096199I?off=mjlpu0qq";

  // --- MODO BARRA DE OFERTA (Topo) ---
  if (isPreview) {
    return (
      <div id={id} className="w-full">
        <div className="bg-white/50 backdrop-blur-xl p-6 rounded-[2rem] shadow-lg border border-white/50 flex flex-col md:flex-row items-center justify-between gap-6 transform hover:scale-[1.01] transition-transform duration-300">
            <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-md animate-pulse">⚡</div>
                <div className="text-center md:text-left">
                    {customBadge && <p className="text-[10px] text-slate-600 font-bold uppercase tracking-wide mb-1">{customBadge}</p>}
                    <h3 className="text-lg font-bold text-slate-900 leading-tight">{customTitle || "Oferta Relâmpago"}</h3>
                    <p className="text-sm text-slate-700">{customSubtitle || "12x R$ 49,90"}</p>
                </div>
            </div>
            <a href={linkCurso} target="_blank" rel="noopener noreferrer" className="bg-slate-900 text-white px-8 py-3 rounded-full text-sm font-bold hover:bg-blue-600 transition-all shadow-md w-full md:w-auto text-center flex items-center justify-center gap-2">
                Quero minha vaga <ArrowRight size={16}/>
            </a>
        </div>
      </div>
    );
  }

  // --- MODO TABELA (Final) ---
  return (
    <section id={id} className="py-24 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
                <span className="text-blue-700 font-bold tracking-widest uppercase text-sm">Investimento</span>
                <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mt-4 mb-6">Escolha seu Caminho</h2>
                <p className="text-slate-600 text-xl max-w-2xl mx-auto">
                    Você tem duas opções para transformar sua vida hoje.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto items-center">
                
                {/* CARD 1: CURSO GRAVADO (Standard) */}
                <div className="bg-white/40 backdrop-blur-xl p-10 rounded-[3rem] border border-white/60 shadow-xl hover:border-blue-300 transition-all relative transform hover:scale-[1.02] duration-300 z-0">
                    <div className="mb-8">
                        <h3 className="text-2xl font-bold text-slate-900">Curso CMS</h3>
                        <p className="text-slate-600 text-sm mt-1">Acesso Imediato às Aulas.</p>
                    </div>
                    <div className="mb-8">
                        <span className="text-5xl font-bold text-slate-900">R$ 497</span>
                        <span className="text-sm text-slate-600">/à vista</span>
                        <p className="text-xs text-blue-700 mt-2 font-bold">ou 12x R$ 49,90</p>
                    </div>
                    <ul className="space-y-4 mb-10 text-sm text-slate-700">
                        <li className="flex gap-3"><Check size={18} className="text-green-600 shrink-0"/> <span>Acesso por <strong>1 Ano</strong></span></li>
                        <li className="flex gap-3"><Check size={18} className="text-green-600 shrink-0"/> <span>7 Módulos Gravados</span></li>
                        <li className="flex gap-3"><Check size={18} className="text-green-600 shrink-0"/> <span>Ferramentas Anti-Crise</span></li>
                        <li className="flex gap-3"><Check size={18} className="text-green-600 shrink-0"/> <span>Suporte na Plataforma</span></li>
                    </ul>
                    <a href={linkCurso} target="_blank" rel="noopener noreferrer" className="block w-full py-4 border-2 border-slate-900 text-slate-900 rounded-full font-bold hover:bg-slate-900 hover:text-white transition-all duration-300 text-center">
                        Começar Agora
                    </a>
                </div>

                {/* CARD 2: MENTORIA VIP (LINK MENTORIA) */}
                <div className="relative group z-10 md:-my-8"> 
                    <div className="absolute -inset-[3px] bg-gradient-to-r from-blue-600 via-purple-500 to-blue-600 rounded-[3rem] opacity-75 blur-sm group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
                    <div className="relative bg-[#1d1d1f] text-white p-10 rounded-[3rem] shadow-2xl h-full border border-gray-800 flex flex-col justify-between transform transition-transform duration-300 group-hover:scale-[1.02]">
                        <div className="absolute top-6 right-6 bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-lg flex items-center gap-1">
                            <Star size={10} fill="white" /> Recomendado
                        </div>
                        <div>
                            <div className="mb-8">
                                <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">Mentoria VIP</h3>
                                <p className="text-gray-400 text-sm mt-1">Acompanhamento + Aulas.</p>
                            </div>
                            <div className="mb-8">
                                <span className="text-6xl font-bold">R$ 1.480</span>
                                <span className="text-sm text-gray-400">/à vista</span>
                                <p className="text-sm text-blue-400 mt-2 font-bold">ou 12x R$ 153,07</p>
                            </div>
                            <ul className="space-y-5 mb-10 text-sm text-gray-300">
                                <li className="flex gap-3 text-white"><div className="bg-blue-600/20 p-1 rounded-full"><Check size={14} className="text-blue-400"/></div> <span><strong>Acesso Vitalício</strong></span></li>
                                <li className="flex gap-3 text-white"><div className="bg-blue-600/20 p-1 rounded-full"><Check size={14} className="text-blue-400"/></div> <span>6 Encontros <strong>Ao Vivo</strong></span></li>
                                <li className="flex gap-3 text-white"><div className="bg-blue-600/20 p-1 rounded-full"><Check size={14} className="text-blue-400"/></div> <span>Análise de Caso Individual</span></li>
                                <li className="flex gap-3 text-white"><div className="bg-blue-600/20 p-1 rounded-full"><Check size={14} className="text-blue-400"/></div> <span><strong>Suporte WhatsApp</strong> (2 meses)</span></li>
                            </ul>
                        </div>
                        <a href={linkMentoria} target="_blank" rel="noopener noreferrer" className="block w-full py-5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full font-bold hover:from-blue-500 hover:to-purple-500 transition-all shadow-lg shadow-blue-900/50 hover:shadow-blue-600/50 text-lg tracking-wide text-center">
                            Quero Mentoria VIP
                        </a>
                    </div>
                </div>

            </div>
            
            <div className="mt-16 text-center text-sm text-slate-500 font-medium">
                <p className="flex items-center justify-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span> 
                    Pagamento seguro via Cartão, Pix ou Boleto. Garantia de 7 dias.
                </p>
            </div>
        </div>
    </section>
  );
};

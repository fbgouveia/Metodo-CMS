import React from 'react';
import { Check, Star, Users, Lock, AlertCircle, MessageCircle } from 'lucide-react';
import { PricingTier } from '../types';

interface PricingProps {
  isPreview?: boolean;
  id?: string;
  customTitle?: string;
  customSubtitle?: string;
  customBadge?: string;
}

const tiers: PricingTier[] = [
  {
    name: "Curso CMS Essencial",
    price: "R$ 497",
    features: [
      "Acesso Imediato por 1 Ano",
      "Kit SOS (Técnicas de Alívio Rápido)",
      "Módulo: Como Ajudar quem Ama",
      "Protocolo de Desinflamação Neural",
      "Certificado de Conclusão",
      "Suporte na Plataforma de Aulas"
    ],
    cta: "Comprar Curso",
    highlighted: false,
    href: "#curso-checkout"
  },
  {
    name: "Mentoria Premium + CMS",
    price: "R$ 997",
    features: [
      "Acesso VITALÍCIO ao Conteúdo",
      "6 Encontros ao Vivo (Olho no Olho)",
      "Análise Pessoal do SEU caso",
      "Grupo VIP de Acompanhamento",
      "2 Meses de Suporte Individual",
      "BÔNUS: Manual Impresso de Gestão (PDF)"
    ],
    cta: "Comprar Mentoria",
    highlighted: true,
    href: "#mentoria-checkout"
  }
];

export const Pricing: React.FC<PricingProps> = ({ 
  isPreview = false, 
  id = "pricing",
  customTitle,
  customSubtitle,
  customBadge
}) => {
  return (
    <section id={id} className={`${isPreview ? 'py-20 bg-white/50 border-y border-blue-100/50 backdrop-blur-sm' : 'py-32 bg-transparent'} relative overflow-hidden transition-all`}>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          {!isPreview ? (
            <>
              <div className="inline-block px-4 py-1.5 rounded-full bg-amber-50 border border-amber-200 mb-6">
                <span className="text-xs font-bold text-amber-600 tracking-wider uppercase flex items-center gap-2">
                   <AlertCircle className="w-3 h-3" /> Fechamento das vagas em breve
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-serif mb-6 text-slate-900">Quanto custa mais um ano perdido?</h2>
              <p className="text-slate-600 font-light max-w-xl mx-auto">
                Você gasta mais que isso em remédios, deliveries e terapias que não funcionam. Hoje você pode investir na única coisa que resolve: <strong>sua cura definitiva</strong>.
              </p>
            </>
          ) : (
            <>
              <div className={`inline-block px-4 py-1.5 rounded-full border mb-4 ${customBadge ? 'bg-blue-50 border-blue-200' : 'bg-green-50 border-green-200'}`}>
                 <span className={`text-xs font-bold tracking-wider uppercase ${customBadge ? 'text-blue-600' : 'text-green-600'}`}>
                   {customBadge || "Decisão Inteligente"}
                 </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-serif mb-4 text-slate-900 leading-tight">
                {customTitle || "Pare de sofrer agora."}
              </h2>
              <p className="text-slate-600 font-light max-w-xl mx-auto text-sm leading-relaxed">
                 {customSubtitle || "Para quem já entendeu que esperar só piora a ansiedade."}
              </p>
            </>
          )}
        </div>

        <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto ${isPreview ? 'mb-0' : 'mb-12'}`}>
          {tiers.map((tier, index) => (
            <div 
              key={index}
              className={`relative flex flex-col ${isPreview ? 'p-6 md:p-8' : 'p-10'} rounded-[2.5rem] border backdrop-blur-xl transition-all duration-500 ${
                tier.highlighted 
                  ? 'bg-gradient-to-b from-white to-blue-50 border-blue-200 shadow-xl scale-[1.01] ring-1 ring-blue-100 z-10' 
                  : 'bg-white/60 border-white/60 hover:bg-white/80 hover:shadow-lg'
              }`}
            >
              {tier.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-blue-600 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase flex items-center gap-2 shadow-lg shadow-blue-200 text-white whitespace-nowrap z-20">
                  <Star className="w-3 h-3 fill-current" /> Escolha da Maioria
                </div>
              )}

              <div className="mb-6">
                <h3 className={`font-serif mb-2 ${tier.highlighted ? 'text-blue-600 text-2xl' : 'text-slate-800 text-xl'}`}>{tier.name}</h3>
                {!isPreview && (
                  <p className="text-slate-500 text-sm">
                     {tier.highlighted ? 'Para quem tem medo de falhar sozinha e quer segurança.' : 'Para quem quer as ferramentas e caminhar só.'}
                  </p>
                )}
              </div>

              <div className={`flex flex-col border-b border-slate-200 ${isPreview ? 'mb-6 pb-6' : 'mb-10 pb-10'}`}>
                {tier.highlighted && !isPreview && <span className="text-slate-400 text-sm line-through mb-1">Valor real: R$ 2.497</span>}
                <div className="flex items-baseline gap-1">
                    <span className={`${isPreview ? 'text-4xl' : 'text-5xl'} font-bold text-slate-900`}>{tier.price}</span>
                    <span className="text-slate-500 text-sm font-light">/à vista</span>
                </div>
                <span className="text-blue-600 text-xs mt-2 font-medium">ou 12x de {(parseInt(tier.price.replace('R$ ', '')) / 10).toFixed(2).replace('.', ',')}</span>
              </div>

              {tier.highlighted && !isPreview && (
                 <div className="mb-8 p-4 rounded-xl bg-blue-50 border border-blue-100 flex items-start gap-3">
                    <Users className="w-5 h-5 text-blue-600 shrink-0 mt-1" />
                    <div>
                       <p className="text-blue-800 text-sm font-semibold">Garantia de Não-Abandono</p>
                       <p className="text-blue-600/80 text-xs leading-relaxed mt-1">
                         Eu vou pessoalmente garantir que você não desista. Na mentoria, você tem acesso ao meu WhatsApp.
                       </p>
                    </div>
                 </div>
              )}

              <ul className={`flex-1 space-y-3 mb-8 ${isPreview ? 'text-xs' : 'text-sm'}`}>
                {tier.features.slice(0, isPreview ? 4 : undefined).map((feat, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-600 font-medium">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${tier.highlighted ? 'bg-blue-100 text-blue-600' : 'bg-slate-200 text-slate-500'}`}>
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                    <span className={feat.includes("BÔNUS") || feat.includes("VITALÍCIO") ? "text-blue-600 font-bold" : ""}>{feat}</span>
                  </li>
                ))}
              </ul>

              <a 
                href={tier.href}
                className={`block w-full py-4 rounded-2xl font-bold transition-all text-sm tracking-wide uppercase text-center ${
                  tier.highlighted 
                    ? 'bg-blue-600 text-white hover:bg-blue-500 shadow-lg hover:shadow-blue-500/30 hover:-translate-y-1' 
                    : 'bg-slate-900 text-white hover:bg-slate-800 shadow-md'
                }`}
              >
                {tier.cta}
              </a>
            </div>
          ))}
        </div>

        {!isPreview && (
          <>
            {/* WhatsApp CTA for Payments */}
            <div className="text-center mb-16">
              <a 
                href="https://api.whatsapp.com/send?phone=5511956185501&text=Tenho%20dúvida%20sobre%20as%20formas%20de%20pagamento" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-slate-500 hover:text-green-600 transition-colors text-sm font-medium group"
              >
                 <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 group-hover:bg-green-600 group-hover:text-white transition-all">
                    <MessageCircle className="w-4 h-4" />
                 </div>
                 <span>Não tem limite no cartão? <span className="underline decoration-green-500/30">Chame no WhatsApp que damos um jeito.</span></span>
              </a>
            </div>
            
            <div className="flex justify-center">
               <div className="bg-white/60 border border-white/40 rounded-2xl p-6 max-w-2xl flex items-center gap-6 backdrop-blur-md shadow-xl">
                  <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center shrink-0 text-blue-600">
                      <Lock className="w-6 h-6" />
                  </div>
                  <div>
                      <h4 className="text-slate-900 font-bold mb-1">Risco Zero Absoluto.</h4>
                      <p className="text-slate-500 text-sm">Entre, assista, aplique. Se você não sentir seu corpo acalmar em 7 dias, eu devolvo cada centavo. Sem burocracia.</p>
                  </div>
               </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
};
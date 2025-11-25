import React, { useRef, useEffect } from 'react';
import { Check, Star, Users, Lock, AlertCircle, MessageCircle } from 'lucide-react';
import { PricingTier } from '../types';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

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
      "Protocolo de Regulação da Ansiedade",
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
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray('.pricing-card');

      cards.forEach((card: any, index) => {
        const border = card.querySelector('.pricing-border');
        const isHighlighted = card.classList.contains('highlight-card');

        // 1. Animação Contínua do Gradiente (Fluxo Eterno)
        gsap.to(border, {
          backgroundPosition: "200% center",
          duration: 3,
          ease: "linear",
          repeat: -1
        });

        // 2. ANIMAÇÃO DE ENTRADA SUAVIZADA (Premium Feel)
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: card,
            start: "top 75%", // Começa um pouco mais cedo para dar tempo de apreciar
            toggleActions: "play none none reverse"
          }
        });

        // A. O Card desliza e encaixa (sem parecer gelatina)
        tl.fromTo(card, 
          { 
            y: 60, // Menos deslocamento vertical
            scale: 0.95, // Começa quase do tamanho real (não parece pequeno)
            opacity: 0,
            rotationX: 5 // Inclinação muito sutil
          },
          {
            y: 0,
            scale: isHighlighted ? 1.05 : 1, 
            opacity: 1,
            rotationX: 0,
            duration: 1, // Duração controlada
            ease: "back.out(1.2)", // Encaixe suave com leve overshoot, sem tremedeira
            delay: index * 0.15 
          }
        );

        // B. A Borda aparece suavemente
        tl.fromTo(border,
          { 
            opacity: 0,
            scale: 0.98,
          },
          {
            opacity: 1,
            scale: 1,
            filter: "blur(4px)",
            duration: 0.8,
            ease: "power2.out"
          },
          "-=0.8" 
        );

      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id={id} ref={containerRef} className={`${isPreview ? 'py-20 bg-white/50 border-y border-blue-100/50 backdrop-blur-sm' : 'py-32 bg-transparent'} relative overflow-hidden transition-all perspective-1000`}>
      
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

        <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto ${isPreview ? 'mb-0' : 'mb-12'}`}>
          {tiers.map((tier, index) => (
            <div 
              key={index}
              className={`pricing-card relative flex flex-col ${isPreview ? 'p-6 md:p-8' : 'p-10'} rounded-[2.5rem] transition-transform duration-500 transform-gpu ${
                tier.highlighted ? 'highlight-card z-10' : ''
              }`}
            >
              {/* CAMADA 1: Borda Animada (Gradiente em Movimento) */}
              <div className={`pricing-border absolute -inset-[3px] rounded-[2.6rem] bg-gradient-to-r opacity-0 transition-opacity z-0 bg-[length:200%_auto] ${
                tier.highlighted 
                  ? 'from-blue-500 via-purple-500 to-blue-500 shadow-[0_0_40px_rgba(59,130,246,0.3)]' 
                  : 'from-slate-300 via-blue-300 to-slate-300'
              }`}></div>

              {/* CAMADA 2: Fundo do Card (Masking) */}
              <div className={`absolute inset-0 rounded-[2.5rem] z-10 backdrop-blur-xl border border-white/60 ${
                tier.highlighted 
                 ? 'bg-gradient-to-b from-white/95 to-blue-50/90' 
                 : 'bg-white/90'
              }`}></div>

              {/* CAMADA 3: Conteúdo (Z-20 para ficar acima de tudo) */}
              <div className="relative z-20 h-full flex flex-col">
                {tier.highlighted && (
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 px-6 py-2 bg-blue-600 rounded-full text-xs font-bold tracking-[0.2em] uppercase flex items-center gap-2 shadow-xl shadow-blue-500/40 text-white whitespace-nowrap border-2 border-white">
                    <Star className="w-3 h-3 fill-current animate-pulse" /> Escolha da Maioria
                  </div>
                )}

                <div className="mb-6 mt-2">
                  <h3 className={`font-serif mb-2 ${tier.highlighted ? 'text-blue-600 text-3xl' : 'text-slate-800 text-2xl'}`}>{tier.name}</h3>
                  {!isPreview && (
                    <p className="text-slate-500 text-sm">
                      {tier.highlighted ? 'Para quem tem medo de falhar sozinha e quer segurança.' : 'Para quem quer as ferramentas e caminhar só.'}
                    </p>
                  )}
                </div>

                <div className={`flex flex-col border-b border-slate-200/60 ${isPreview ? 'mb-6 pb-6' : 'mb-10 pb-10'}`}>
                  {tier.highlighted && !isPreview && <span className="text-slate-400 text-sm line-through mb-1">Valor real: R$ 2.497</span>}
                  <div className="flex items-baseline gap-1">
                      <span className={`${isPreview ? 'text-4xl' : 'text-6xl'} font-bold text-slate-900 tracking-tighter`}>{tier.price}</span>
                      <span className="text-slate-500 text-sm font-light">/à vista</span>
                  </div>
                  <span className="text-blue-600 text-sm mt-2 font-bold bg-blue-50 inline-block w-fit px-3 py-1 rounded-lg">ou 12x de {(parseInt(tier.price.replace('R$ ', '')) / 10).toFixed(2).replace('.', ',')}</span>
                </div>

                {tier.highlighted && !isPreview && (
                  <div className="mb-8 p-4 rounded-xl bg-blue-50/50 border border-blue-100/50 flex items-start gap-3">
                      <Users className="w-5 h-5 text-blue-600 shrink-0 mt-1" />
                      <div>
                        <p className="text-blue-800 text-sm font-semibold">Garantia de Não-Abandono</p>
                        <p className="text-blue-600/80 text-xs leading-relaxed mt-1">
                          Eu vou pessoalmente garantir que você não desista. Na mentoria, você tem acesso ao meu WhatsApp.
                        </p>
                      </div>
                  </div>
                )}

                <ul className={`flex-1 space-y-4 mb-10 ${isPreview ? 'text-xs' : 'text-sm'}`}>
                  {tier.features.slice(0, isPreview ? 4 : undefined).map((feat, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-600 font-medium">
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 -mt-0.5 ${tier.highlighted ? 'bg-blue-100 text-blue-600 shadow-sm' : 'bg-slate-200 text-slate-500'}`}>
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </div>
                      <span className={feat.includes("BÔNUS") || feat.includes("VITALÍCIO") ? "text-blue-600 font-bold" : ""}>{feat}</span>
                    </li>
                  ))}
                </ul>

                <a 
                  href={tier.href}
                  className={`block w-full py-5 rounded-2xl font-bold transition-all text-sm tracking-wide uppercase text-center relative overflow-hidden group ${
                    tier.highlighted 
                      ? 'bg-blue-600 text-white shadow-xl shadow-blue-500/30 hover:scale-[1.02] hover:-translate-y-1' 
                      : 'bg-slate-900 text-white hover:bg-slate-800 shadow-md'
                  }`}
                >
                  <span className="relative z-10">{tier.cta}</span>
                  {tier.highlighted && <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out skew-x-12"></div>}
                </a>
              </div>
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
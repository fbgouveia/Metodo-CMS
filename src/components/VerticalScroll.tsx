import React, { useEffect, useRef } from 'react';
import { ArrowRight, CheckCircle2, Brain, Zap, Sparkles, Shield, Lock } from 'lucide-react';

const methodSteps = [
  {
    step: "01",
    title: "A Verdade Emocional",
    text: "Sua ansiedade não é 'coisa da sua cabeça'. É uma desregulação biológica do sistema de alerta. Vamos identificar quais gatilhos estão sabotando sua paz e nomear os inimigos invisíveis.",
    image: "https://images.unsplash.com/photo-1620121692029-d088224ddc74?q=80&w=2000&auto=format&fit=crop",
    icon: <Brain className="w-6 h-6" />
  },
  {
    step: "02",
    title: "O Freio Emocional",
    text: "Você vai aprender técnicas práticas para ativar seu sistema parassimpático (relaxamento). É como puxar o freio de mão de um carro desgovernado. A mente desacelera fisicamente.",
    image: "https://images.unsplash.com/photo-1544367563-12123d8965cd?q=80&w=2000&auto=format&fit=crop",
    icon: <Zap className="w-6 h-6" />
  },
  {
    step: "03",
    title: "O Detox da Ansiedade",
    text: "Seu cérebro aprendeu a ter medo de tudo. Vamos 'ressignificar' esse centro de medo (amígdala) para que você volte a dormir, a sonhar e a sentir prazer nas pequenas coisas.",
    image: "https://images.unsplash.com/photo-1515023115689-589c33041697?q=80&w=2000&auto=format&fit=crop",
    icon: <Sparkles className="w-6 h-6" />
  },
  {
    step: "04",
    title: "Resgate da Identidade",
    text: "Quem era você antes do medo travar sua vida? A ansiedade roubou sua personalidade e te tornou insegura. Aqui nós vamos buscar sua versão original e confiante de volta.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2000&auto=format&fit=crop",
    icon: <Shield className="w-6 h-6" />
  },
  {
    step: "05",
    title: "Soberania Emocional",
    text: "O objetivo final não é apenas 'controlar' a crise, é viver sem medo dela. Você se torna a maior especialista no seu próprio funcionamento. Você volta a pilotar sua vida.",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=2000&auto=format&fit=crop",
    icon: <Lock className="w-6 h-6" />
  }
];

export const VerticalScroll: React.FC = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // API Nativa: Intersection Observer para o efeito "Reveal"
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Quando entra na tela
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-24');
        }
      });
    }, {
      threshold: 0.15, // Dispara quando 15% do card está visível
      rootMargin: "0px 0px -100px 0px" // Margem negativa para disparar um pouco antes do fim
    });

    // Seleciona todos os cards para observar
    const cards = document.querySelectorAll('.reveal-card');
    cards.forEach((card) => observerRef.current?.observe(card));

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <section id="method" className="relative z-30 bg-slate-50 border-t border-slate-200">
      
      {/* Background Decorativo Suave */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[5%] left-[-5%] w-[40vw] h-[40vw] bg-blue-50 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[20%] right-[-10%] w-[30vw] h-[30vw] bg-purple-50 rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* 
          IMPORTANTE: items-start garante que a altura do container pai seja 
          definida pelo filho mais alto (coluna direita), permitindo que o 
          sticky da esquerda tenha espaço para "correr".
        */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-start relative">
          
          {/* --- LEFT COLUMN: STICKY NATIVO --- */}
          {/* 
              sticky top-0 h-screen: 
              - sticky: cola na tela
              - top-0: cola no topo
              - h-screen: ocupa a altura toda para centralizar o conteúdo verticalmente
          */}
          <div className="lg:w-5/12 hidden lg:flex lg:sticky lg:top-0 lg:h-screen lg:flex-col lg:justify-center pt-20 lg:pt-0 z-20">
            <div className="flex flex-col items-start pr-0 lg:pr-12">
              
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-blue-100 shadow-sm mb-8">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                <span className="text-xs font-bold text-blue-600 tracking-wider uppercase">O Método CMS</span>
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-slate-900 mb-8 leading-[1.1] tracking-tight">
                A Ciência da <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Regulação Emocional.</span>
              </h2>

              <p className="text-slate-600 text-lg leading-relaxed mb-10 font-light border-l-4 border-blue-200 pl-6">
                Esqueça as dicas genéricas de internet. Desenvolvemos um protocolo clínico dividido em 5 fases para desligar o alarme de perigo do seu cérebro de forma biológica.
              </p>
              
              <div className="flex flex-col gap-4 mb-10 w-full max-w-sm">
                 <div className="flex items-center gap-4 p-4 bg-white/60 backdrop-blur-sm rounded-2xl border border-slate-200/60 shadow-sm">
                    <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center text-green-600 shrink-0">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800 text-sm">Sem Dependência Química</h4>
                      <p className="text-xs text-slate-500">Complementa seu tratamento.</p>
                    </div>
                 </div>
              </div>

              <a 
                href="#pricing" 
                className="inline-flex items-center gap-3 text-sm font-bold tracking-widest uppercase text-blue-600 hover:text-blue-800 transition-colors group"
              >
                  Ver todos os planos
                  <div className="w-8 h-[1px] bg-blue-600 group-hover:w-12 transition-all"></div>
              </a>
            </div>
          </div>

          {/* Versão Mobile do Header (Visível apenas em telas pequenas) */}
          <div className="lg:hidden pt-20">
             <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-blue-100 shadow-sm mb-6">
                <span className="text-xs font-bold text-blue-600 tracking-wider uppercase">O Método CMS</span>
             </div>
             <h2 className="text-4xl font-serif text-slate-900 mb-6 leading-[1.1]">
                A Ciência da <br/>Regulação Emocional.
             </h2>
             <p className="text-slate-600 leading-relaxed mb-8">
                Um protocolo clínico em 5 fases para desligar o alarme de perigo do seu cérebro.
             </p>
          </div>

          {/* --- RIGHT COLUMN: SCROLLABLE CARDS --- */}
          {/* A altura desta coluna dita a duração do sticky da esquerda. */}
          <div className="lg:w-7/12 flex flex-col gap-16 lg:gap-24 pb-32 pt-0 lg:pt-32 w-full">
            
            {methodSteps.map((item, index) => (
              <div 
                key={index} 
                className="reveal-card opacity-0 translate-y-24 transition-all duration-1000 ease-out group relative bg-white rounded-[2.5rem] p-3 md:p-4 border border-slate-100 shadow-[0_20px_60px_rgba(15,23,42,0.05)] will-change-transform hover:shadow-[0_30px_80px_rgba(59,130,246,0.1)] hover:-translate-y-1"
              >
                <div className="flex flex-col h-full rounded-[2rem] overflow-hidden">
                   {/* Imagem Editorial */}
                   <div className="relative h-64 md:h-80 overflow-hidden rounded-[2rem]">
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent z-10"></div>
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-[1.5s] ease-out"
                      />
                      <span className="absolute top-6 right-8 text-9xl font-serif font-bold text-white/10 z-0 leading-none select-none">
                        {item.step}
                      </span>
                      <div className="absolute bottom-6 left-6 z-20 w-14 h-14 bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl flex items-center justify-center text-white shadow-lg">
                        {item.icon}
                      </div>
                   </div>

                   {/* Texto */}
                   <div className="pt-8 pb-8 px-6 md:px-10 bg-white flex-1">
                      <h3 className="text-2xl md:text-4xl font-serif text-slate-900 mb-6 group-hover:text-blue-600 transition-colors">
                        {item.title}
                      </h3>
                      <div className="w-full h-[1px] bg-slate-100 mb-6"></div>
                      <p className="text-slate-600 leading-relaxed font-light text-base md:text-lg">
                        {item.text}
                      </p>
                   </div>
                </div>
              </div>
            ))}

            {/* FINAL CTA CARD */}
            <div className="reveal-card opacity-0 translate-y-24 transition-all duration-1000 ease-out relative rounded-[2.5rem] overflow-hidden shadow-2xl mt-8 group text-center lg:text-left bg-slate-900 text-white">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-slate-900 opacity-90"></div>
                {/* Efeito de brilho de fundo */}
                <div className="absolute top-[-50%] right-[-10%] w-[500px] h-[500px] bg-blue-400/30 rounded-full blur-[80px]"></div>

                <div className="relative z-10 p-10 md:p-16 flex flex-col xl:flex-row items-center justify-between gap-10">
                    <div className="max-w-lg">
                       <h3 className="text-3xl md:text-4xl font-serif mb-4 leading-tight">
                         Está pronta para o <br/>silêncio mental?
                       </h3>
                       <p className="text-blue-100 font-light text-lg opacity-90">
                         O passo a passo está desenhado. Dê o primeiro passo agora e recupere o controle.
                       </p>
                    </div>

                    <a 
                      href="#pricing" 
                      className="shrink-0 whitespace-nowrap px-10 py-5 bg-white text-blue-900 rounded-full font-bold text-base md:text-lg shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all flex items-center gap-3"
                    >
                      Ver Planos e Valores
                      <ArrowRight className="w-5 h-5" />
                    </a>
                </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
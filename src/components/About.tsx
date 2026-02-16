import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
// Lucide icons removed to follow "Non-Obvious Persuasive Design" protocol

gsap.registerPlugin(ScrollTrigger);

export const About: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".about-content", {
        y: 50,
        autoAlpha: 0,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
        }
      });

      gsap.from(".about-image", {
        scale: 0.9,
        autoAlpha: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" className="py-24 relative z-10 overflow-hidden">
      <div ref={containerRef} className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">

          {/* Coluna da Imagem */}
          <div className="about-image flex-1 relative w-full max-w-lg mx-auto lg:mx-0">
            {/* Elemento decorativo de fundo ajustado para não bloquear a transparência total */}
            <div className="absolute inset-0 bg-blue-200/20 rounded-[3rem] rotate-3 scale-105 opacity-50 blur-sm pointer-events-none"></div>

            {/* Moldura com fundo transparente/vidro */}
            <div className="relative rounded-[3rem] overflow-hidden border-4 border-white/50 shadow-2xl aspect-[4/5] bg-white/5 backdrop-blur-sm">
              <img
                src="https://metodocms.com/wp-content/uploads/2025/07/hero-bottom.webp"
                alt="Dra. Quitéria Gouveia"
                className="w-full h-full object-contain relative z-10"
              />
              {/* Gradiente inferior para legibilidade do texto */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900/80 to-transparent p-8 text-white z-20">
                <p className="font-serif text-2xl">Dra. Quitéria Gouveia</p>
                <p className="text-blue-300 text-sm font-medium uppercase tracking-wider">Psicóloga CRP 06/21065</p>
              </div>
            </div>

            {/* Badge Flutuante - Agora puramente tipográfica e editorial */}
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl flex flex-col items-center justify-center border border-slate-100 animate-bounce duration-[3000ms] z-30">
              <span className="text-4xl font-serif text-blue-600 leading-none mb-1">+40</span>
              <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest text-center whitespace-nowrap">Anos de Clínica</p>
              <div className="w-8 h-[1px] bg-blue-200 mt-2"></div>
            </div>
          </div>

          {/* Coluna de Texto */}
          <div className="flex-1 space-y-8">
            <div className="about-content">
              <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 mb-6">
                <div className="w-1 h-1 rounded-full bg-blue-600 animate-pulse"></div>
                <span className="text-xs font-bold text-blue-600 tracking-wider uppercase">A Mente por Trás do Método</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-serif text-slate-900 mb-6 leading-tight">
                Eu estive exatamente onde você está hoje.<br />
                <span className="text-blue-600">E eu sei o caminho de volta para a paz.</span>
              </h2>
            </div>

            <div className="about-content space-y-6 text-slate-600 text-lg leading-relaxed font-light">
              <p>
                Olá. Eu sou a Dra. Quitéria. Se você chegou até aqui, é porque o mundo parece estar desabando e o seu corpo — ou o corpo de alguém que você ama muito — se tornou um território de medo constante. Eu vejo esse olhar de cansaço profundo todos os dias, mas não falo apenas como psicóloga com 40 anos de prática. Falo como alguém que <strong>já sentiu o que você sente agora.</strong>
              </p>
              <p>
                No início da minha carreira clínica, eu também senti o coração disparar sem motivo e o receio de não conseguir voltar para casa. Foi essa dor que me levou a buscar a raiz biológica do problema. E o que você mais precisa ouvir hoje é: <strong>Isso não é falta de fé, não é frescura e não é loucura.</strong>
              </p>
              <p>
                A ansiedade é apenas um sistema de alarme cerebral que esqueceu como desligar devido aos traumas e perigos da vida. Eu criei o <strong>Método CMS</strong> para ser esse interruptor, unindo o acolhimento maternal de quem já esteve lá com o rigor da neurociência para ajudar você (ou o seu familiar) a silenciar o pânico definitivamente.
              </p>
            </div>

            {/* Assinatura movida para cá (entre o texto e os selos) */}
            <div className="about-content pt-2 pb-4">
              <img
                src="https://metodocms.com/wp-content/uploads/2025/11/quiteria_signature.png"
                alt="Assinatura Dra. Quitéria Gouveia"
                className="h-16 md:h-20 w-auto opacity-80 transform -rotate-2"
              />
            </div>

            <div className="about-content grid grid-cols-2 gap-6 pt-6 border-t border-slate-200">
              <div className="bg-white/60 p-6 rounded-2xl border border-white shadow-sm flex flex-col justify-between">
                <div>
                  <span className="block text-3xl font-serif text-slate-900 mb-1">+5.000</span>
                  <p className="text-[10px] text-blue-600 font-bold uppercase tracking-widest mb-3">Vidas Transformadas</p>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed font-medium">Alunos que pararam de sobreviver e começaram a viver.</p>
              </div>
              <div className="bg-white/60 p-6 rounded-2xl border border-white shadow-sm flex flex-col justify-between">
                <div>
                  <span className="block text-3xl font-serif text-slate-900 mb-1">Acolhimento</span>
                  <p className="text-[10px] text-rose-600 font-bold uppercase tracking-widest mb-3">Protocolo Humano</p>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed font-medium">Eu serei a voz firme e carinhosa que vai te guiar.</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

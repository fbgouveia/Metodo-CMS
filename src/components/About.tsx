import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { Award, Users, Heart, Brain } from 'lucide-react';

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

            {/* Badge Flutuante */}
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3 animate-bounce duration-[3000ms] z-30">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                <Brain className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-slate-500 font-bold uppercase">Experiência</p>
                <p className="text-slate-900 font-bold text-sm">+40 Anos de Clínica</p>
              </div>
            </div>
          </div>

          {/* Coluna de Texto */}
          <div className="flex-1 space-y-8">
            <div className="about-content">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 mb-6">
                <Award className="w-4 h-4 text-blue-600" />
                <span className="text-xs font-bold text-blue-600 tracking-wider uppercase">A Mente por Trás do Método</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-serif text-slate-900 mb-6 leading-tight">
                Não vou passar a mão na sua&nbsp;cabeça.<br />
                <span className="text-blue-600">Estou aqui para te devolver a vida.</span>
              </h2>
            </div>

            <div className="about-content space-y-6 text-slate-600 text-lg leading-relaxed font-light">
              <p>
                Olá. Eu sou a Dra. Quitéria. Eu sei que o mundo parece estar desabando e que seu corpo se tornou seu pior inimigo. Eu vejo esse olhar de cansaço profundo todos os dias no meu consultório há 40 anos. O olhar de quem sente que está morrendo por dentro enquanto o mundo lá fora continua girando.
              </p>
              <p>
                Vou te falar o que ninguém teve coragem: <strong>Você não é louca e não tem culpa.</strong> Eu te entendo porque eu mesma já estive no seu lugar antes de ser psicóloga. Eu já senti o coração disparar sem motivo e o medo de não voltar pra casa. Criei o <strong>Método CMS</strong> primeiro para me salvar, e depois para salvar outras 5.000 mulheres.
              </p>
              <p>
                Criei o <strong>Método CMS</strong> para ser o interruptor que desliga esse alarme. Uni o rigor da TCC (Terapia Cognitivo-Comportamental) com o que há de mais avançado na neurociência da regulação emocional.
              </p>
              <p>
                Não é apenas um curso. É o seu retorno seguro para casa. Para o seu próprio&nbsp;silêncio.
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
              <div className="bg-white/60 p-4 rounded-2xl border border-white shadow-sm">
                <div className="flex items-center gap-2 text-blue-600 mb-2">
                  <Users className="w-5 h-5" />
                  <span className="font-bold text-2xl text-slate-900">+5.000</span>
                </div>
                <p className="text-sm text-slate-500 leading-tight">Alunos que pararam de sobreviver e começaram a&nbsp;viver.</p>
              </div>
              <div className="bg-white/60 p-4 rounded-2xl border border-white shadow-sm">
                <div className="flex items-center gap-2 text-rose-600 mb-2">
                  <Heart className="w-5 h-5" />
                  <span className="font-bold text-2xl text-slate-900">Acolhimento</span>
                </div>
                <p className="text-sm text-slate-500 leading-tight">Eu serei a voz firme e carinhosa que vai te&nbsp;guiar.</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

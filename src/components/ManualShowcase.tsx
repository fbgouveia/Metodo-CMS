import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const tools = [
  {
    name: "Mesa Mental",
    desc: "Visualize e desentulhe o que está congestionando a sua mente no momento atual.",
    image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=800&auto=format&fit=crop"
  },
  {
    name: "Potinhos",
    desc: "Aprenda a categorizar e separar emoções de responsabilidades para reduzir a sobrecarga.",
    image: "https://images.unsplash.com/photo-1616628188550-808682f392a4?q=80&w=800&auto=format&fit=crop"
  },
  {
    name: "Mapa Mental",
    desc: "Estruture seus pensamentos de forma visual para transformar caos em clareza.",
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=800&auto=format&fit=crop"
  },
  {
    name: "Road Map",
    desc: "Crie um caminho organizado para tomar decisões sem o peso da culpa ou paralisia.",
    image: "https://images.unsplash.com/photo-1473186578172-c141e6798cf4?q=80&w=800&auto=format&fit=crop"
  },
  {
    name: "Visualizações Guiadas",
    desc: "Exercícios em áudio para ajudar seu sistema nervoso a voltar ao modo silencioso.",
    image: "https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?q=80&w=800&auto=format&fit=crop"
  },
  {
    name: "Exercícios de Organização Emocional",
    desc: "Práticas diárias rápidas para manter o seu mundo interno limpo e sustentável.",
    image: "https://images.unsplash.com/photo-1544716278-e513176f20b5?q=80&w=800&auto=format&fit=crop"
  }
];

export const ManualShowcase: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.tool-item', {
        y: 30,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 md:py-28 bg-white relative">
      <div className="container mx-auto px-6 max-w-6xl">
        
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-serif text-[#1d1d1f] mb-6">
            <span className="text-blue-600 italic">Ferramentas Clínicas</span> do Método CMS
          </h2>
          <p className="text-lg text-slate-600 font-light max-w-2xl mx-auto text-pretty">
            O Método CMS não é feito de "materiais de leitura". Ele é composto por ferramentas ativas de Organização Emocional, 
            projetadas para serem aplicadas quando você mais precisar.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {tools.map((tool, index) => (
            <div key={index} className="tool-item group flex flex-col items-start">
              <div className="w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-lg mb-6 relative">
                <div className="absolute inset-0 bg-blue-900/10 mix-blend-multiply z-10 group-hover:opacity-0 transition-opacity duration-500"></div>
                <img 
                  src={tool.image} 
                  alt={tool.name} 
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <h3 className="text-2xl font-serif text-[#1d1d1f] mb-3">{tool.name}</h3>
              <p className="text-slate-600 font-light leading-relaxed">
                {tool.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

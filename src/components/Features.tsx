import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

// Lucide icons removed to follow "Non-Obvious Persuasive Design" protocol

const features = [
  {
    title: "O Fim da Vergonha",
    description: "Cada minuto que você passa escondendo o que sente é um minuto de vida jogado fora. Entenda a biologia do medo e pare de se sentir um defeito físico.",
    type: "DIGNIDADE"
  },
  {
    title: "Resgate Biológico",
    description: "A ansiedade sequestrou sua respiração. Vamos tomar de volta o controle do seu sistema nervoso via corpo, sem depender apenas de química.",
    type: "AUTONOMIA"
  },
  {
    title: "Basta de 'Diquinhas'",
    description: "Conselhos rasos de internet não resolvem pânico profundo. Você precisa de um protocolo clínico, não de paliativos que só te atrasam.",
    type: "CIÊNCIA"
  },
  {
    title: "Corte o Ruído",
    description: "Aquela voz catastrófica que rouba seu sono tem um interruptor. Vamos localizar esse interruptor e dar o comando de silêncio agora.",
    type: "SILÊNCIO"
  },
  {
    title: "Segurança Absoluta",
    description: "O medo vem da falta de rota de fuga. Aqui você terá um mapa de resgate: sentiu o pânico? Faça isso, isso e aquilo. O controle é seu.",
    type: "MAPA"
  },
  {
    title: "Dormir sem Medo",
    description: "O custo de uma noite mal dormida é a sua sanidade no dia seguinte. Aprenda a 'desligar a chave' e apagar com segurança total.",
    type: "DESCANSO"
  },
  {
    title: "Retome sua Força",
    description: "Você não é um fardo; você é uma mulher forte que está sob ataque. Vamos desarmar esse ataque e resgatar sua autoestima.",
    type: "IDENTIDADE"
  },
  {
    title: "O Mapa do Futuro",
    description: "Saia do modo 'sobrevivência'. Onde você quer estar daqui a um ano? Viajando ou presa num quarto? A escolha é agir agora.",
    type: "LIBERDADE"
  }
];

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-32 relative bg-transparent overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mb-24">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 shadow-sm mb-10">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse"></div>
            <span className="text-xs font-bold text-blue-700 tracking-wider uppercase">Por que o Método CMS?</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-serif text-slate-900 mb-8 leading-[1.1] tracking-tight">
            Não é sobre <span className="text-blue-600 italic">gerenciar</span> a dor. <br className="hidden lg:block" /> É sobre deixá-la no passado.
          </h2>
          <p className="text-slate-500 text-xl font-light leading-relaxed max-w-2xl">
            O pânico se alimenta da sua incerteza. O Método CMS substitui o medo pelo conhecimento clínico e pela ferramenta prática.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className="flex flex-col p-10 bg-white/40 backdrop-blur-xl rounded-[3.5rem] border border-white hover:border-blue-100 transition-all group shadow-sm hover:shadow-xl"
            >
              <div className="mb-8 flex items-center justify-between">
                <span className="text-[10px] font-black text-blue-400 tracking-[0.3em] uppercase">{feature.type}</span>
                <div className="w-1.5 h-1.5 rounded-full bg-slate-200 group-hover:bg-blue-400 transition-colors"></div>
              </div>
              <h3 className="text-2xl font-serif text-slate-900 mb-4 leading-tight group-hover:text-blue-600 transition-colors">{feature.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed font-light">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background Decor */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-blue-50/30 rounded-full blur-[100px] -z-10 translate-x-1/2"></div>
    </section>
  );
};
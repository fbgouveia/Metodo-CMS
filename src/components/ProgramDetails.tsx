import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const technicalSpecs = [
  "Acesso Imediato via E-mail",
  "Plataforma Compatível com Celular e TV",
  "Certificado de Conclusão (30h)",
  "Áudios em Alta Definição (Dolby Digital)",
  "Material de Apoio em PDF",
  "7 Módulos Gravados em 4K",
  "Garantia Incondicional de 7 Dias",
  "Suporte Técnico Dedicado"
];

export const ProgramDetails: React.FC = () => {
  return (
    // REMOVI TODOS OS BACKGROUNDS AQUI
    // bg-transparent: Fundo invisível
    // Sem shadow, sem border
    <section className="py-24 px-4 relative z-10 bg-transparent">
      <div className="max-w-5xl mx-auto">
        
        {/* Título */}
        <div className="text-center mb-16">
          <span className="text-blue-700 font-bold tracking-widest uppercase text-sm">Ficha Técnica</span>
          <h2 className="text-3xl md:text-5xl font-serif text-slate-900 mt-4">
            O que você vai receber
          </h2>
        </div>

        {/* Grid de Itens */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
          {technicalSpecs.map((spec, index) => (
            <div 
              key={index} 
              className="flex items-center gap-4 group p-2 rounded-xl transition-all hover:bg-white/10"
            >
              {/* Ícone */}
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <CheckCircle2 size={20} className="text-blue-600" />
              </div>
              
              {/* Texto */}
              <p className="text-lg text-slate-800 font-medium group-hover:text-blue-900 transition-colors">
                {spec}
              </p>
            </div>
          ))}
        </div>

        {/* Box de Garantia (Opcional - mantive transparente também) */}
        <div className="mt-16 text-center border-t border-slate-200/50 pt-10">
           <p className="text-slate-600 text-sm">
             Todo o conteúdo é liberado automaticamente após a aprovação do pagamento.
           </p>
        </div>

      </div>
    </section>
  );
};

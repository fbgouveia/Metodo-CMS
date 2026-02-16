import React, { useEffect } from 'react';
// Lucide icons removed to follow "Non-Obvious Persuasive Design" protocol
import gsap from 'gsap';

interface LegalModalProps {
  type: 'manifesto' | 'terms' | 'privacy' | 'support' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  useEffect(() => {
    gsap.fromTo(".legal-modal-content",
      { y: 50, opacity: 0, scale: 0.95 },
      { y: 0, opacity: 1, scale: 1, duration: 0.4, ease: "power3.out" }
    );
    gsap.fromTo(".legal-overlay",
      { opacity: 0 },
      { opacity: 1, duration: 0.3 }
    );

    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  const getContent = () => {
    switch (type) {
      case 'manifesto':
        return (
          <>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-600"></div>
              <h2 className="text-3xl font-serif text-slate-900 italic">Manifesto CMS</h2>
            </div>
            <div className="space-y-6 text-slate-600 leading-relaxed font-light italic text-lg border-l-2 border-blue-100 pl-8">
              <p><strong>Acreditamos que a ansiedade não é uma falha de caráter.</strong></p>
              <p>Durante décadas, disseram às mulheres que seus sentimentos eram "exagero", "drama" ou "fraqueza". A medicina tradicional tratou a mente como algo separado do corpo. Nós discordamos.</p>
              <p>O Método Cérebro em Modo Silencioso (CMS) nasceu de uma revolta silenciosa contra a cultura do remédio imediato. Acreditamos na <strong>Psicologia Baseada em Evidências</strong>. Acreditamos que, se você tratar a causa real (seus padrões emocionais), o comportamento volta a ser saudável.</p>
              <p>Nossa missão não é apenas "acalmar" você. É devolver sua soberania. É permitir que você confie no seu próprio corpo novamente. <strong>Uma mulher sem medo é imparável.</strong></p>
            </div>
          </>
        );
      case 'terms':
        return (
          <>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-1.5 h-1.5 rounded-full bg-slate-400"></div>
              <h2 className="text-3xl font-serif text-slate-900 italic">Termos de Uso</h2>
            </div>
            <div className="space-y-6 text-slate-500 text-sm leading-relaxed font-light pl-8 border-l border-slate-100">
              <p><strong>1. Natureza Educacional:</strong> O Método CMS é um programa educacional de desenvolvimento pessoal e regulação emocional. Embora baseado em princípios da neurociência e psicologia, ele <strong>não substitui</strong> tratamento médico, psiquiátrico ou terapia clínica individualizada.</p>
              <p><strong>2. Resultados:</strong> Os resultados apresentados no site são reais, mas variam de pessoa para pessoa. O sucesso depende da aplicação consistente das técnicas ensinadas.</p>
              <p><strong>3. Propriedade Intelectual:</strong> Todo o material (vídeos, textos, manuais) é propriedade exclusiva da Dra. Quitéria Gouveia. O compartilhamento de acesso ou pirataria levará ao bloqueio imediato da conta sem reembolso e medidas judiciais cabíveis.</p>
              <p><strong>4. Reembolso:</strong> Oferecemos garantia incondicional de 7 dias conforme o Art. 49 do Código de Defesa do Consumidor.</p>
            </div>
          </>
        );
      case 'privacy':
        return (
          <>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
              <h2 className="text-3xl font-serif text-slate-900 italic">Privacidade & LGPD</h2>
            </div>
            <div className="space-y-6 text-slate-500 text-sm leading-relaxed font-light pl-8 border-l border-green-50">
              <p>Sua privacidade é inegociável para nós.</p>
              <p><strong>Coleta de Dados:</strong> Coletamos apenas os dados necessários para a prestação do serviço (Nome, E-mail, Telefone e CPF para emissão de Nota Fiscal).</p>
              <p><strong>Segurança:</strong> Seus dados de pagamento são processados por gateways criptografados (ex: Hotmart/Eduzz). Nós <strong>nunca</strong> temos acesso ao número completo do seu cartão de crédito.</p>
              <p><strong>Sigilo Profissional:</strong> Qualquer informação compartilhada dentro da área de membros ou mentoria é protegida pelo sigilo profissional ético da psicologia.</p>
              <p>Você pode solicitar a exclusão dos seus dados a qualquer momento enviando um e-mail para nosso suporte.</p>
            </div>
          </>
        );
      case 'support':
        return (
          <>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
              <h2 className="text-3xl font-serif text-slate-900 italic">Central de Suporte</h2>
            </div>
            <div className="space-y-8 text-slate-600 pl-8 border-l border-blue-50">
              <p className="italic font-light">Estamos aqui para te ajudar. Escolha o melhor canal:</p>

              <div className="grid gap-6">
                <a href="https://api.whatsapp.com/send?phone=5511956185501" target="_blank" rel="noreferrer" className="flex items-center justify-between p-6 rounded-2xl border border-green-100 bg-green-50/30 hover:bg-green-100 transition-all group">
                  <div className="flex items-center gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                    <div>
                      <h3 className="font-bold text-slate-800 uppercase tracking-widest text-[10px]">WhatsApp Oficial</h3>
                      <p className="text-xs text-slate-500 font-light">Resposta em horário comercial.</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-black text-green-600 uppercase tracking-tighter opacity-0 group-hover:opacity-100 transition-opacity">Abrir Chat</span>
                </a>

                <a href="mailto:contato@quiteriagouveia.com" className="flex items-center justify-between p-6 rounded-2xl border border-blue-100 bg-blue-50/30 hover:bg-blue-100 transition-all group">
                  <div className="flex items-center gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                    <div>
                      <h3 className="font-bold text-slate-800 uppercase tracking-widest text-[10px]">E-mail Editorial</h3>
                      <p className="text-xs text-slate-500 font-light">contato@quiteriagouveia.com</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-black text-blue-600 uppercase tracking-tighter opacity-0 group-hover:opacity-100 transition-opacity">Enviar E-mail</span>
                </a>
              </div>
            </div>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="legal-overlay fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-md overflow-hidden sm:bg-slate-900/60 transition-all">
      <div className="absolute inset-0" onClick={onClose}></div>
      <div className="legal-modal-content relative w-full max-w-2xl max-h-[85vh] overflow-y-auto bg-white rounded-[3rem] shadow-2xl flex flex-col overscroll-behavior-contain border border-white">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-4 bg-slate-50 rounded-full text-slate-400 hover:text-slate-900 transition-colors z-10 font-black text-[10px] uppercase tracking-widest border border-slate-100"
          aria-label="Fechar"
        >
          FECHAR
        </button>

        <div className="p-10 md:p-16">
          {getContent()}
        </div>

        <div className="p-10 border-t border-slate-50 bg-slate-50/50 text-center rounded-b-[3rem]">
          <button
            onClick={onClose}
            className="px-12 py-4 bg-slate-900 text-white rounded-full font-black uppercase tracking-widest text-[10px] hover:bg-slate-800 transition-all shadow-xl"
          >
            Entendido
          </button>
        </div>
      </div>
    </div>
  );
};

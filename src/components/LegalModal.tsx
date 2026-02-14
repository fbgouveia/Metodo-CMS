import React, { useEffect } from 'react';
import { X, Shield, FileText, Heart, Mail } from 'lucide-react';
import gsap from 'gsap';

interface LegalModalProps {
  type: 'manifesto' | 'terms' | 'privacy' | 'support' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  // A verificação if (!type) return null foi movida para o Pai (Footer)
  // Isso garante que os Hooks abaixo sempre rodem na montagem

  useEffect(() => {
    // Animação de entrada
    gsap.fromTo(".legal-modal-content",
      { y: 50, opacity: 0, scale: 0.95 },
      { y: 0, opacity: 1, scale: 1, duration: 0.4, ease: "power3.out" }
    );
    gsap.fromTo(".legal-overlay",
      { opacity: 0 },
      { opacity: 1, duration: 0.3 }
    );

    // Travar scroll do body
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = 'hidden';

    // Cleanup function: Roda garantido quando o componente desmonta
    return () => {
      document.body.style.overflow = ''; // Remove o estilo inline para voltar ao CSS original
    };
  }, []);

  const getContent = () => {
    switch (type) {
      case 'manifesto':
        return (
          <>
            <div className="flex items-center gap-3 mb-6 text-blue-600">
              <Heart className="w-6 h-6" />
              <h2 className="text-2xl font-serif font-bold">Manifesto CMS</h2>
            </div>
            <div className="space-y-4 text-slate-600 leading-relaxed font-light">
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
            <div className="flex items-center gap-3 mb-6 text-slate-800">
              <FileText className="w-6 h-6" />
              <h2 className="text-2xl font-serif font-bold">Termos de Uso</h2>
            </div>
            <div className="space-y-4 text-slate-500 text-sm leading-relaxed">
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
            <div className="flex items-center gap-3 mb-6 text-green-600">
              <Shield className="w-6 h-6" />
              <h2 className="text-2xl font-serif font-bold">Privacidade & LGPD</h2>
            </div>
            <div className="space-y-4 text-slate-500 text-sm leading-relaxed">
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
            <div className="flex items-center gap-3 mb-6 text-blue-600">
              <Mail className="w-6 h-6" />
              <h2 className="text-2xl font-serif font-bold">Central de Suporte</h2>
            </div>
            <div className="space-y-6 text-slate-600">
              <p>Estamos aqui para te ajudar. Escolha o melhor canal:</p>

              <div className="grid gap-4">
                <a href="https://api.whatsapp.com/send?phone=5511956185501&text=Ola%20Quiteria%20gostaria!%20de%20saber%20mais%20sobre%20o%20curso%20e%20a%20mentoria%20cerebro%20em%20modo%20silencioso" target="_blank" rel="noreferrer" className="flex items-center gap-4 p-4 rounded-xl border border-green-200 bg-green-50 hover:bg-green-100 transition-colors group">
                  <div className="w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-800">WhatsApp Oficial</h3>
                    <p className="text-sm text-slate-500">Resposta rápida em horário comercial.</p>
                  </div>
                </a>

                <a href="mailto:contato@quiteriagouveia.com" className="flex items-center gap-4 p-4 rounded-xl border border-blue-200 bg-blue-50 hover:bg-blue-100 transition-colors group">
                  <div className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-800">E-mail</h3>
                    <p className="text-sm text-slate-500">contato@quiteriagouveia.com</p>
                  </div>
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
    <div className="legal-overlay fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900 overflow-hidden sm:bg-slate-900/60 sm:backdrop-blur-sm">
      <div className="absolute inset-0" onClick={onClose}></div>
      <div className="legal-modal-content relative w-full max-w-2xl max-h-[85vh] overflow-y-auto bg-white rounded-3xl shadow-2xl flex flex-col overscroll-behavior-contain">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 bg-slate-100 rounded-full text-slate-500 hover:bg-slate-200 transition-colors z-10 outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          aria-label="Fechar modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-8 md:p-12">
          {getContent()}
        </div>

        <div className="p-6 border-t border-slate-100 bg-slate-50 text-center rounded-b-3xl">
          <button
            onClick={onClose}
            className="px-6 py-2 bg-slate-200 text-slate-700 rounded-lg font-medium hover:bg-slate-300 transition-colors"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
};

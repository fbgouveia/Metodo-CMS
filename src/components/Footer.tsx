import React, { useState } from 'react';
// Lucide icons removed to follow "Non-Obvious Persuasive Design" protocol
import { LegalModal } from './LegalModal';

export const Footer: React.FC = () => {
  const [activeModal, setActiveModal] = useState<'manifesto' | 'terms' | 'privacy' | 'support' | null>(null);

  return (
    <>
      <footer id="main-footer" className="py-16 border-t border-slate-800 bg-slate-900 text-white relative z-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex flex-col items-start gap-4">
              <div className="flex items-center gap-3">
                <img
                  src="https://metodocms.com/wp-content/uploads/2025/08/logo.png"
                  alt="Método CMS"
                  className="h-10 w-auto object-contain brightness-0 invert"
                />
                <div className="flex flex-col items-start leading-none">
                  <span className="font-serif font-bold text-white text-base md:text-lg tracking-tight">Cérebro em Modo Silencioso</span>
                  <span className="text-[10px] md:text-xs text-slate-400 font-medium tracking-widest uppercase mt-0.5">Método CMS</span>
                </div>
              </div>
              <p className="text-slate-400 text-xs max-w-[200px] leading-relaxed">Psicologia aplicada para uma vida mais leve e focada.</p>
            </div>

            <div className="flex flex-wrap justify-center gap-8 text-sm text-slate-400">
              <button onClick={() => setActiveModal('manifesto')} className="hover:text-blue-400 transition-colors text-left uppercase tracking-widest text-[10px] font-bold">Manifesto</button>
              <button onClick={() => setActiveModal('terms')} className="hover:text-blue-400 transition-colors text-left uppercase tracking-widest text-[10px] font-bold">Termos de Uso</button>
              <button onClick={() => setActiveModal('privacy')} className="hover:text-blue-400 transition-colors text-left uppercase tracking-widest text-[10px] font-bold">Privacidade</button>
              <button onClick={() => setActiveModal('support')} className="hover:text-blue-400 transition-colors text-left uppercase tracking-widest text-[10px] font-bold">Suporte</button>
            </div>

            <div className="flex gap-4">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-white transition-all text-[10px] font-black tracking-tighter">
                INSTA
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-white transition-all text-[10px] font-black tracking-tighter">
                YTUBE
              </a>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-white/5 text-center text-slate-600 text-[10px] font-bold uppercase tracking-widest">
            © 2024 Cérebro em Modo Silencioso. Todos os direitos reservados.
          </div>
        </div>
      </footer>

      {/* Render Modal condicionalmente para forçar Unmount e limpar o overflow do body */}
      {activeModal && (
        <LegalModal type={activeModal} onClose={() => setActiveModal(null)} />
      )}
    </>
  );
};
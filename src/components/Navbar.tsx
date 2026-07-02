import React, { useEffect, useState } from 'react';
// Lucide icons removed to follow "Non-Obvious Persuasive Design" protocol
import gsap from 'gsap';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Usa múltiplas propriedades para garantir que a rolagem seja detectada em qualquer navegador/contexto CSS
      const scrollPosition = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
      setScrolled(scrollPosition > 10);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    // Adiciona listener também no document para contextos onde o body é o scroll container
    document.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    const element = document.querySelector(id);
    if (element) {
      const navHeight = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
        ? 'bg-white/95 backdrop-blur-md border-b border-brand-bruma py-4 shadow-sm'
        : 'bg-transparent border-transparent py-6'
        }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <button
          className="flex items-center gap-3 group cursor-pointer text-left outline-none"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Ir para o topo"
        >
          <img
            src="/wp-content/uploads/2025/08/logo.png"
            alt="Método CMS"
            className="h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />
          <div className="flex flex-col items-start leading-none">
            <span className="font-serif font-bold text-xl tracking-tight text-brand-sereno transition-colors">Cérebro em Modo Silencioso</span>
            <span className="text-[11px] text-brand-pedra font-mono tracking-widest uppercase mt-1">Método CMS</span>
          </div>
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#how-it-works" onClick={(e) => scrollToSection(e, '#how-it-works')} className="text-[11px] font-bold uppercase tracking-widest text-brand-pedra hover:text-brand-sereno transition-colors">O Método</a>
          <a href="#features" onClick={(e) => scrollToSection(e, '#features')} className="text-[11px] font-bold uppercase tracking-widest text-brand-pedra hover:text-brand-sereno transition-colors">Benefícios</a>
          <a href="#pricing" onClick={(e) => scrollToSection(e, '#pricing')} className="text-[11px] font-bold uppercase tracking-widest text-brand-pedra hover:text-brand-sereno transition-colors">Jornada</a>
          <a href="#faq" onClick={(e) => scrollToSection(e, '#faq')} className="text-[11px] font-bold uppercase tracking-widest text-brand-pedra hover:text-brand-sereno transition-colors">Dúvidas</a>

          {/* WhatsApp Action Link - Typographic Version */}
          <a
            href="https://api.whatsapp.com/send?phone=5511956185501&text=Ola!%2C%20Gostaria%20de%20saber%20mais%20sobre%20as%20consultas"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 group/wa px-5 py-2 bg-green-50 rounded-full transition-all border border-green-100"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
            <span className="text-[10px] font-black text-green-700 uppercase tracking-widest">Dúvidas? Fale comigo</span>
          </a>

          {/* CTA Button */}
          <a
            href="#pricing"
            onClick={(e) => scrollToSection(e, '#pricing')}
            className="group px-8 py-3 rounded-full bg-brand-noite hover:bg-brand-carvao text-brand-papel transition-colors duration-300 shadow-sm active:scale-95"
          >
            <span className="text-[11px] font-bold uppercase tracking-[0.2em]">
              Quero Minha Liberdade
            </span>
          </a>
        </div>

        {/* Mobile Toggle - Typographic Version */}
        <button
          className="md:hidden text-brand-noite text-[10px] font-bold uppercase tracking-widest p-2 border border-brand-bruma rounded-lg bg-brand-papel"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? 'Fechar' : 'Menu'}
        </button>
      </div>

      {/* Mobile Menu Overlay (Fixed Full Screen) */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[60] bg-brand-papel flex flex-col items-center justify-center gap-10 p-8 animate-in fade-in zoom-in-95 duration-300 md:hidden">

          {/* Close Button */}
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="absolute top-8 right-8 p-2 rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200"
            aria-label="Fechar menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <a href="#how-it-works" className="text-4xl font-serif text-brand-noite active:scale-95 transition-transform" onClick={(e) => scrollToSection(e, '#how-it-works')}>O Método</a>
          <a href="#features" className="text-4xl font-serif text-brand-noite active:scale-95 transition-transform" onClick={(e) => scrollToSection(e, '#features')}>Benefícios</a>
          <a href="#pricing" className="text-4xl font-serif text-brand-noite active:scale-95 transition-transform" onClick={(e) => scrollToSection(e, '#pricing')}>Jornada</a>
          <a href="#faq" className="text-4xl font-serif text-brand-noite active:scale-95 transition-transform" onClick={(e) => scrollToSection(e, '#faq')}>Dúvidas</a>

          <a
            href="https://api.whatsapp.com/send?phone=5511956185501"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full max-w-xs flex items-center justify-between p-6 bg-green-50 rounded-[2rem] border border-green-100 mt-4 group active:scale-95 transition-transform shadow-lg shadow-green-100/50"
            onClick={() => setMobileMenuOpen(false)}
          >
            <span className="text-green-700 font-bold text-lg">Fale comigo</span>
            <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
          </a>

          <a
            href="#pricing"
            className="w-full max-w-xs py-5 rounded-[2rem] bg-brand-noite hover:bg-brand-carvao text-brand-papel text-center active:scale-95 transition-all shadow-md"
            onClick={(e) => scrollToSection(e, '#pricing')}
          >
            <span className="font-bold uppercase tracking-[0.2em] text-sm">Garantir Minha Vaga</span>
          </a>
        </div>
      )}
    </nav>
  );
};
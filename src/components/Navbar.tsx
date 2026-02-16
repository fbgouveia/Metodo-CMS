import React, { useEffect, useState } from 'react';
// Lucide icons removed to follow "Non-Obvious Persuasive Design" protocol
import gsap from 'gsap';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);

    // Animação Contínua da Borda do CTA (Fluxo Eterno)
    const ctx = gsap.context(() => {
      gsap.to(".nav-cta-border", {
        backgroundPosition: "200% center",
        duration: 3,
        ease: "linear",
        repeat: -1,
        onUpdate: () => {
          if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            gsap.set(".nav-cta-border", { backgroundPosition: "0% center" });
          }
        }
      });
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      ctx.revert();
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
        ? 'bg-white/95 backdrop-blur-xl border-b border-slate-100 py-4 shadow-sm'
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
            src="https://metodocms.com/wp-content/uploads/2025/08/logo.png"
            alt="Método CMS"
            className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />
          <div className="flex flex-col items-start leading-none">
            <span className="font-serif font-bold text-blue-600 text-lg tracking-tight group-hover:text-blue-700 transition-colors">Cérebro em Modo Silencioso</span>
            <span className="text-[10px] text-slate-500 font-medium tracking-widest uppercase mt-0.5">Método CMS</span>
          </div>
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#method" onClick={(e) => scrollToSection(e, '#method')} className="text-[11px] font-black uppercase tracking-widest text-slate-600 hover:text-blue-600 transition-colors">O Método</a>
          <a href="#features" onClick={(e) => scrollToSection(e, '#features')} className="text-[11px] font-black uppercase tracking-widest text-slate-600 hover:text-blue-600 transition-colors">Benefícios</a>
          <a href="#pricing" onClick={(e) => scrollToSection(e, '#pricing')} className="text-[11px] font-black uppercase tracking-widest text-slate-600 hover:text-blue-600 transition-colors">Jornada</a>
          <a href="#faq" onClick={(e) => scrollToSection(e, '#faq')} className="text-[11px] font-black uppercase tracking-widest text-slate-600 hover:text-blue-600 transition-colors">Dúvidas</a>

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
            className="relative group px-8 py-3 rounded-full overflow-hidden shadow-lg transition-all duration-300 active:scale-95"
          >
            <div className="nav-cta-border absolute -inset-[3px] bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500 bg-[length:200%_auto]"></div>
            <div className="absolute inset-[2px] bg-slate-900 rounded-full transition-colors group-hover:bg-slate-800"></div>
            <span className="relative z-10 text-white text-[11px] font-black uppercase tracking-[0.2em]">
              Quero Minha Liberdade
            </span>
          </a>
        </div>

        {/* Mobile Toggle - Typographic Version */}
        <button
          className="md:hidden text-slate-900 text-[10px] font-black uppercase tracking-widest p-2 border border-slate-200 rounded-lg bg-white/50 backdrop-blur-sm"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? 'Fechar' : 'Menu'}
        </button>
      </div>

      {/* Mobile Menu Overlay (Fixed Full Screen) */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[60] bg-white/95 backdrop-blur-3xl flex flex-col items-center justify-center gap-10 p-8 animate-in fade-in zoom-in-95 duration-300 md:hidden">

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

          <a href="#method" className="text-4xl font-serif text-slate-900 active:scale-95 transition-transform" onClick={(e) => scrollToSection(e, '#method')}>O Método</a>
          <a href="#features" className="text-4xl font-serif text-slate-900 active:scale-95 transition-transform" onClick={(e) => scrollToSection(e, '#features')}>Benefícios</a>
          <a href="#pricing" className="text-4xl font-serif text-slate-900 active:scale-95 transition-transform" onClick={(e) => scrollToSection(e, '#pricing')}>Jornada</a>
          <a href="#faq" className="text-4xl font-serif text-slate-900 active:scale-95 transition-transform" onClick={(e) => scrollToSection(e, '#faq')}>Dúvidas</a>

          <a
            href="https://api.whatsapp.com/send?phone=5511956185501"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full max-w-xs flex items-center justify-between p-6 bg-green-50 rounded-[2rem] border border-green-100 mt-4 group active:scale-95 transition-transform shadow-lg shadow-green-100/50"
            onClick={() => setMobileMenuOpen(false)}
          >
            <span className="text-green-700 font-bold text-lg">Fale com a Dra.</span>
            <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
          </a>

          <a
            href="#pricing"
            className="w-full max-w-xs relative group py-6 rounded-[2rem] overflow-hidden shadow-2xl text-center active:scale-95 transition-transform"
            onClick={(e) => scrollToSection(e, '#pricing')}
          >
            <div className="nav-cta-border absolute -inset-[3px] bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500 bg-[length:200%_auto]"></div>
            <div className="absolute inset-[2px] bg-slate-900 rounded-[1.8rem]"></div>
            <span className="relative z-10 text-white font-black uppercase tracking-[0.2em] text-sm">Garantir Minha Vaga</span>
          </a>
        </div>
      )}
    </nav>
  );
};
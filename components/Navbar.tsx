import React, { useEffect, useState } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
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
        repeat: -1
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
      const navHeight = 80; // Altura aproximada da navbar para compensação
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
      className={`fixed top-0 left-0 right-0 z-[10000] transition-all duration-500 border-b ${
        scrolled
          ? 'bg-white/90 backdrop-blur-xl border-white/40 py-4 shadow-sm'
          : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-3 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <img 
            src="https://metodocms.com/wp-content/uploads/2025/08/logo.png" 
            alt="Método CMS" 
            className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105" 
          />
          <div className="flex flex-col items-start leading-none">
             <span className="font-serif font-bold text-blue-600 text-base md:text-lg tracking-tight group-hover:text-blue-700 transition-colors">Cérebro em Modo Silencioso</span>
             <span className="text-[10px] md:text-xs text-slate-500 font-medium tracking-widest uppercase mt-0.5">Método CMS</span>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#method" onClick={(e) => scrollToSection(e, '#method')} className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">O Método</a>
          <a href="#features" onClick={(e) => scrollToSection(e, '#features')} className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Benefícios</a>
          <a href="#pricing" onClick={(e) => scrollToSection(e, '#pricing')} className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Jornada</a>
          
          {/* WhatsApp Icon Link */}
          <a 
            href="https://api.whatsapp.com/send?phone=5511956185501&text=Ola!%2C%20Gostaria%20de%20saber%20mais%20sobre%20as%20consultas" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-green-600 transition-colors"
            title="Suporte WhatsApp"
          >
            <MessageCircle className="w-5 h-5" />
          </a>

          {/* CTA Button with Animated Border */}
          <a 
            href="#pricing" 
            onClick={(e) => scrollToSection(e, '#pricing')} 
            className="relative group px-6 py-2.5 rounded-full overflow-hidden shadow-lg hover:shadow-blue-500/30 transition-all hover:scale-105 active:scale-95 cursor-pointer"
          >
            {/* 1. Borda Animada */}
            <div className="nav-cta-border absolute -inset-[3px] bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 bg-[length:200%_auto]"></div>
            
            {/* 2. Fundo/Máscara (Simulando botão sólido) */}
            <div className="absolute inset-[2px] bg-slate-900 rounded-full transition-colors group-hover:bg-slate-800"></div>
            
            {/* 3. Texto */}
            <span className="relative z-10 text-white text-sm font-semibold flex items-center gap-2">
              Começar minha Cura
            </span>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-slate-800 p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl border-b border-slate-200 p-6 flex flex-col gap-6 md:hidden animate-in slide-in-from-top-5 min-h-[50vh] shadow-xl">
          <a href="#method" className="text-xl font-medium text-slate-700" onClick={(e) => scrollToSection(e, '#method')}>O Método</a>
          <a href="#features" className="text-xl font-medium text-slate-700" onClick={(e) => scrollToSection(e, '#features')}>Benefícios</a>
          <a href="#pricing" className="text-xl font-medium text-slate-700" onClick={(e) => scrollToSection(e, '#pricing')}>Jornada</a>
          <a 
            href="https://api.whatsapp.com/send?phone=5511956185501&text=Ola!%2C%20Gostaria%20de%20saber%20mais%20sobre%20as%20consultas" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl font-medium text-green-600 flex items-center gap-2"
            onClick={() => setMobileMenuOpen(false)}
          >
             <MessageCircle className="w-5 h-5" /> Suporte WhatsApp
          </a>
          
          {/* Mobile CTA with Animated Border */}
          <a 
            href="#pricing" 
            className="relative group w-full py-4 rounded-xl overflow-hidden shadow-lg shadow-blue-200 text-center mt-auto" 
            onClick={(e) => scrollToSection(e, '#pricing')}
          >
             <div className="nav-cta-border absolute -inset-[3px] bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 bg-[length:200%_auto]"></div>
             <div className="absolute inset-[2px] bg-blue-600 rounded-[0.6rem]"></div>
             <span className="relative z-10 text-white font-semibold">Começar minha Cura</span>
          </a>
        </div>
      )}
    </nav>
  );
};
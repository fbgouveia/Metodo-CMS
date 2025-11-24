import React, { useEffect, useState } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(id);
    if (element) {
      const navHeight = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - navHeight;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${scrolled ? 'bg-white/90 backdrop-blur-xl border-white/40 py-4 shadow-sm' : 'bg-transparent border-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        
        {/* LOGO E NOME */}
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          
          {/* IMAGEM COM LINK ABSOLUTO DO WORDPRESS */}
          <img 
            src="https://metodocms.com/wp-content/uploads/2025/08/logo.png" 
            alt="Logo Método CMS" 
            className="h-12 w-auto object-contain" 
          /> 
          
          {/* Texto ao lado */}
          <div className="flex flex-col">
            <span className="text-lg font-bold tracking-tight text-slate-800 leading-none">Cérebro em Modo Silencioso</span>
            <span className="text-lg text-slate-500 tracking-[0.2em] uppercase" style={{ fontSize: '10px' }}>Método CMS</span>
          </div>
        </div>

        {/* MENU DESKTOP */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#method" onClick={(e) => scrollToSection(e, '#method')} className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">O Método</a>
          <a href="#features" onClick={(e) => scrollToSection(e, '#features')} className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Benefícios</a>
          <a href="#pricing" onClick={(e) => scrollToSection(e, '#pricing')} className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Jornada</a>
          
          <a href="https://api.whatsapp.com/send?phone=5511956185501&text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20as%20consultas" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-green-600 transition-colors">
            <MessageCircle className="w-5 h-5" />
          </a>

          <a href="#pricing" onClick={(e) => scrollToSection(e, '#pricing')} className="px-6 py-2.5 bg-slate-900 text-white rounded-full text-sm font-semibold hover:bg-slate-800 transition-all shadow-lg cursor-pointer">
            Começar minha Cura
          </a>
        </div>

        {/* BOTÃO MOBILE */}
        <button className="md:hidden text-slate-800 p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* MENU MOBILE */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl border-b border-slate-200 p-6 flex flex-col gap-6 md:hidden shadow-xl h-screen">
          <a href="#method" className="text-xl font-medium text-slate-700" onClick={(e) => scrollToSection(e, '#method')}>O Método</a>
          <a href="#features" className="text-xl font-medium text-slate-700" onClick={(e) => scrollToSection(e, '#features')}>Benefícios</a>
          <a href="#pricing" className="text-xl font-medium text-slate-700" onClick={(e) => scrollToSection(e, '#pricing')}>Jornada</a>
          <a href="https://api.whatsapp.com/send?phone=5511956185501&text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20as%20consultas" className="text-xl font-medium text-green-600 flex items-center gap-2">
             <MessageCircle className="w-5 h-5" /> Suporte WhatsApp
          </a>
        </div>
      )}
    </nav>
  );
};

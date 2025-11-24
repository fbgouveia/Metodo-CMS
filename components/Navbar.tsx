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

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
        scrolled
          ? 'bg-white/90 backdrop-blur-xl border-white/40 py-4 shadow-sm'
          : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-3 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          
          {/* --- SEU LOGO AQUI --- */}
          <div className="relative flex items-center justify-center">
             <img 
                src="https://metodocms.com/wp-content/uploads/2025/08/logo.png" 
                alt="Logo Método CMS" 
                className="h-12 w-auto object-contain" 
             />
          </div>

          {/* Texto ao lado do Logo */}
          <div className="flex flex-col">
            <span className="text-lg font-bold tracking-tight text-slate-800 leading-none">Cérebro em Modo Silencioso</span>
            <span className="text-lg text-slate-500 tracking-[0.2em] uppercase" style={{ fontSize: '10px' }}>Método CMS</span>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#method" onClick={(e) => scrollToSection(e, '#method')} className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">O Método</a>
          <a href="#features" onClick={(e) => scrollToSection(e, '#features')} className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-

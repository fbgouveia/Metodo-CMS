import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero'; // ATIVADO!
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function App() {
  return (
    <div className="bg-slate-50 min-h-screen relative selection:bg-blue-200 selection:text-blue-900">
      
      <Navbar />
      
      <main>
        {/* Mostrando a Capa */}
        <Hero />
        
        {/* Aviso de construção */}
        <div className="py-32 text-center">
          <p className="text-slate-400 text-sm">Próximos passos: Copywriting, Vantagens e Preços.</p>
        </div>
      </main>

    </div>
  );
}

export default App;

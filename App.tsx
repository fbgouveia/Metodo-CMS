import React from 'react';
import { Navbar } from './components/Navbar';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function App() {
  return (
    <div className="bg-slate-50 min-h-screen relative">
      {/* Aqui chamamos o Menu consertado */}
      <Navbar />
      
      <main className="pt-32 px-6 container mx-auto text-center">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Sucesso! O Menu voltou! 🚀</h1>
        <p className="text-lg text-slate-600 mb-8">
          Se você está vendo o menu no topo com o seu logo, vencemos essa etapa.
        </p>
        
        <div className="p-10 border-2 border-dashed border-slate-300 rounded-xl bg-white/50">
           <p className="text-slate-400">Próximo passo: Criar o Hero (Capa do site).</p>
        </div>
      </main>
    </div>
  );
}

export default App;

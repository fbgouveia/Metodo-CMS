import React from 'react';
import { Navbar } from './components/Navbar';
// As linhas abaixo estão comentadas para o site não quebrar enquanto criamos os arquivos
// import { Hero } from './components/Hero';
// import { Pricing } from './components/Pricing';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function App() {
  return (
    <div className="bg-slate-50 min-h-screen relative">
      <Navbar />
      
      <main className="pt-32 px-6 container mx-auto text-center">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Sucesso! O Site Carregou! 🚀</h1>
        <p className="text-lg text-slate-600 mb-8">
          O Navbar acima já é o componente real funcionando. <br/>
          Agora o site parou de dar tela branca.
        </p>
        
        <div className="p-10 border-2 border-dashed border-slate-300 rounded-xl bg-white/50">
           <p className="text-slate-400">Aqui entrará o Hero, Pricing, etc...</p>
        </div>
      </main>
    </div>
  );
}

export default App;

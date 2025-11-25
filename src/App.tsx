import React from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
// Componentes complexos desligados temporariamente para teste
// import { IntroHook } from './components/IntroHook';
// import { HorizontalScroll } from './components/HorizontalScroll';
import { Hero } from './components/Hero'; 
import { Pricing } from './components/Pricing';

function App() {
  return (
    <div className="bg-slate-50 min-h-screen w-full overflow-x-hidden font-sans text-[#1d1d1f]">
      <Navbar />
      
      <main className="pt-20">
        <div className="text-center py-20">
          <h1 className="text-4xl font-bold text-green-600">O SITE ESTÁ VIVO!</h1>
          <p className="text-gray-600 mt-4">Se você está lendo isso, o erro está na Intro ou no Scroll Horizontal.</p>
        </div>

        {/* Testando o Hero sozinho */}
        <Hero />
        
        {/* Testando Pricing sozinho */}
        <Pricing />
      </main>

      <Footer />
    </div>
  );
}

export default App;

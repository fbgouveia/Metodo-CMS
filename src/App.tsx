// ... imports

function App() {
  return (
    <div className="bg-slate-50 min-h-screen w-full overflow-x-hidden relative font-sans text-[#1d1d1f]">
       {/* ... Background e Navbar ... */}

      <main className="relative z-10 w-full flex flex-col">
        
        {/* 1. INTRO (Vai travar a tela e expandir) */}
        <IntroHook />
        
        {/* 2. HORIZONTAL SCROLL (Vem logo depois, naturalmente) */}
        {/* Removemos qualquer padding-top exagerado aqui, pois o Intro já empurrou */}
        <div className="relative z-20 bg-[#f5f5f7]"> 
            <HorizontalScroll />
        </div>

        {/* 3. HERO (VÍDEO) */}
        <div className="relative z-20 bg-white py-20">
           <div className="max-w-2xl mx-auto px-4 mb-12">
              {/* ... Card de Oferta Rápida ... */}
           </div>
           <Hero />
        </div>

        {/* ... Resto do site ... */}

// ... dentro do return do App
<main className="relative z-10 w-full flex flex-col">
    
    {/* 1. INTRO (Vai ocupar 100vh + 150% de scroll) */}
    <IntroHook />
    
    {/* 2. OFERTA + VÍDEO (Vem naturalmente DEPOIS do scroll da intro acabar) */}
    <div className="relative z-20 bg-white pt-0 md:pt-10 pb-20">
        
        {/* Oferta Rápida */}
        <div className="max-w-2xl mx-auto px-4 mb-12 -mt-6 relative z-30"> 
            {/* Pequena margem negativa só para sobrepor a borda da foto, charme visual */}
             <Pricing isPreview={true} ... /> 
        </div>

        <Hero />
    </div>
    
    {/* ... resto do site */}

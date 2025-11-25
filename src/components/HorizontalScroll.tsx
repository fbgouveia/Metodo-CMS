// ... Imports ...
// ... Steps Array ...

export const HorizontalScroll: React.FC = () => {
  const componentRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // Desktop Only
      if (window.innerWidth > 768) {
        const slider = sliderRef.current;
        const container = componentRef.current;
        
        if (slider && container) {
          const totalWidth = slider.scrollWidth - window.innerWidth;
          gsap.to(slider, {
            x: -totalWidth,
            ease: "none",
            scrollTrigger: {
              trigger: container,
              start: "top top", // Começa EXATAMENTE quando ele chega no topo
              end: () => `+=${totalWidth}`,
              pin: true, 
              scrub: 1,
              invalidateOnRefresh: true,
              anticipatePin: 1
            }
          });
        }
      }
    }, componentRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={componentRef} id="method" className="relative bg-[#f5f5f7] overflow-hidden py-24 z-30">
       {/* ... resto do código dos cards ... */}
       {/* Use o código dos cards que te mandei na resposta anterior, que já está correto */}
       <div className="hidden md:flex h-screen items-center overflow-hidden">
          <div ref={sliderRef} className="flex gap-16 px-20 w-max h-full items-center">
             {/* ... Conteúdo Desktop ... */}
             {steps.map((step) => (
                /* ... Card ... */
                <div key={step.id} className="relative min-w-[600px] h-[70vh] rounded-[2.5rem] overflow-hidden shadow-2xl bg-white border-4 border-white group">
                    <img src={step.image} className="absolute inset-0 w-full h-full object-cover"/>
                    {/* ... textos ... */}
                </div>
             ))}
          </div>
       </div>
       
       {/* Mobile View */}
       <div className="md:hidden ...">
          {/* ... Cards Mobile ... */}
       </div>
    </section>
  );
}

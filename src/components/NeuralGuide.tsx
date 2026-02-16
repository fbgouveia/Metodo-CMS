import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const NeuralGuide: React.FC = () => {
  const orbRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const orb = orbRef.current;

      // Start hidden/subtle
      gsap.set(orb, { xPercent: -50, yPercent: -50, opacity: 0.4, scale: 0.6 });

      const triggerElement = document.body;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: triggerElement,
          start: "top top",
          end: "bottom bottom",
          scrub: 2,
        }
      });

      // 1. INTRO
      tl.to(orb, {
        top: "15vh",
        left: "50%",
        scale: 1,
        backgroundColor: "#60A5FA",
        opacity: 0.4,
        duration: 1,
      })
        // 2. HERO
        .to(orb, {
          top: "85vh",
          left: "10%",
          scale: 0.8,
          backgroundColor: "#3B82F6",
          boxShadow: "0 0 100px 40px rgba(59, 130, 246, 0.3)",
          opacity: 0.6,
          duration: 2,
        })
        // 4. TRANSFORMATION
        .to(orb, {
          top: "200vh",
          left: "90%",
          scale: 1.2,
          backgroundColor: "#0EA5E9", // Cyan 500 (No purple)
          opacity: 0.5,
          duration: 3,
        })
        // 5. PROGRAM DETAILS
        .to(orb, {
          top: "400vh",
          left: "50%",
          scale: 2,
          backgroundColor: "#1E40AF", // Deep Blue
          opacity: 0.3,
          duration: 4,
        })
        // 7. PRICING FINAL
        .to(orb, {
          top: "95vh", // Back to sticky-like position at the end
          left: "50%",
          scale: 1,
          opacity: 0.4,
          backgroundColor: "#22C55E", // Success Green
          filter: "blur(60px)",
          duration: 4,
        });

      // Breathing
      gsap.to(orb, {
        scale: "+=0.1",
        opacity: "+=0.05",
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });

    }, orbRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[5] overflow-hidden">
      <div
        ref={orbRef}
        className="absolute w-48 h-48 rounded-full blur-[60px] will-change-transform"
        style={{ backgroundColor: '#3B82F6' }}
      ></div>
    </div>
  );
};
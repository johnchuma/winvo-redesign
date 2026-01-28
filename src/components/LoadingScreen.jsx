import { useEffect, useState } from "react";
import gsap from "gsap";

const LoadingScreen = ({ onComplete }) => {
  const [setCurrentWordIndex] = useState(0);
  const words = ["INVEST", "GROW", "REPEAT"];

  useEffect(() => {
    const timeline = gsap.timeline();

    // Animate each word
    words.forEach((word, index) => {
      timeline
        .fromTo(
          `.word-${index}`,
          { opacity: 0, scale: 0.8, y: 30 },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.8,
            ease: "power4.out",
            onStart: () => setCurrentWordIndex(index),
          },
        )
        .to(`.word-${index}`, {
          opacity: 0,
          scale: 0.8,
          y: -30,
          duration: 0.6,
          ease: "power4.in",
          delay: 0.8,
        });
    });

    // Fade out loading screen
    timeline.to(".loading-screen", {
      opacity: 0,
      duration: 0.8,
      ease: "power2.inOut",
      onComplete: () => {
        if (onComplete) onComplete();
      },
    });

    return () => timeline.kill();
  }, [onComplete]);

  return (
    <div className="loading-screen fixed inset-0 z-[100] flex items-center justify-center bg-[#050505]">
      {/* Background gradient orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#D4AF37] opacity-10 blur-[150px] rounded-full"></div>

      {/* Animated words */}
      <div className="relative">
        {words.map((word, index) => (
          <h1
            key={word}
            className={`word-${index} absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-7xl md:text-9xl lg:text-[10rem] font-bold text-gradient-gold opacity-0 whitespace-nowrap`}
          >
            {word}
          </h1>
        ))}
      </div>

      {/* Logo watermark */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
        <img src="/logo.webp" alt="Winvo" className="h-6 opacity-30" />
      </div>
    </div>
  );
};

export default LoadingScreen;

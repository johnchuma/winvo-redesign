import { useEffect, useState } from "react";
import gsap from "gsap";

const LoadingScreen = ({ onComplete }) => {
  const [setCurrentWordIndex] = useState(0);
  const words = ["INVEST", "GROW", "REPEAT"];

  useEffect(() => {
    const timeline = gsap.timeline();

    // Animate each word with corresponding chart
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
        .fromTo(
          `.chart-${index}`,
          { opacity: 0, scale: 0.9 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.6,
            ease: "power2.out",
          },
          "-=0.6",
        )
        .to(`.word-${index}`, {
          opacity: 0,
          scale: 0.8,
          y: -30,
          duration: 0.6,
          ease: "power4.in",
          delay: 0.8,
        })
        .to(
          `.chart-${index}`,
          {
            opacity: 0,
            scale: 0.9,
            duration: 0.5,
            ease: "power2.in",
          },
          "-=0.6",
        );
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
            className={`word-${index} absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-7xl md:text-9xl lg:text-[8rem] font-bold text-gradient-gold opacity-0 whitespace-nowrap`}
          >
            {word}
          </h1>
        ))}
      </div>

      {/* Animated Charts */}
      {/* INVEST Chart - Bar chart going up */}
      <svg
        className="chart-0 absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-12 md:translate-y-32 w-32 h-24 opacity-0"
        viewBox="0 0 200 80"
      >
        <rect
          x="20"
          y="50"
          width="30"
          height="30"
          fill="#D4AF37"
          opacity="0.4"
        />
        <rect
          x="60"
          y="35"
          width="30"
          height="45"
          fill="#D4AF37"
          opacity="0.6"
        />
        <rect
          x="100"
          y="20"
          width="30"
          height="60"
          fill="#D4AF37"
          opacity="0.8"
        />
        <rect x="140" y="10" width="30" height="70" fill="#FFD700" />
      </svg>

      {/* GROW Chart - Growth curve */}
      <svg
        className="chart-1 absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-12 md:translate-y-32 w-32 h-24 opacity-0"
        viewBox="0 0 200 80"
      >
        <defs>
          <linearGradient
            id="loadingGradient"
            x1="0%"
            y1="0%"
            x2="0%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          d="M 10 70 Q 60 60, 100 40 T 190 10"
          fill="none"
          stroke="#FFD700"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M 10 70 Q 60 60, 100 40 T 190 10 L 190 80 L 10 80 Z"
          fill="url(#loadingGradient)"
        />
        <circle
          cx="100"
          cy="40"
          r="4"
          fill="#FFD700"
          className="animate-pulse"
        />
        <circle
          cx="190"
          cy="10"
          r="4"
          fill="#FFD700"
          className="animate-pulse"
          style={{ animationDelay: "0.2s" }}
        />
      </svg>

      {/* REPEAT Chart - Circular arrows */}
      <svg
        className="chart-2 absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-12 md:translate-y-32 w-32 h-24 opacity-0"
        viewBox="0 0 200 80"
      >
        <defs>
          <marker
            id="arrowhead"
            markerWidth="10"
            markerHeight="7"
            refX="9"
            refY="3.5"
            orient="auto"
          >
            <polygon points="0 0, 10 3.5, 0 7" fill="#FFD700" />
          </marker>
        </defs>
        <circle
          cx="100"
          cy="40"
          r="25"
          fill="none"
          stroke="#D4AF37"
          strokeWidth="3"
          strokeDasharray="5,5"
          opacity="0.4"
        />
        <path
          d="M 125 40 A 25 25 0 1 1 124.9 40"
          fill="none"
          stroke="#FFD700"
          strokeWidth="3"
          markerEnd="url(#arrowhead)"
        />
        <circle cx="100" cy="40" r="8" fill="#D4AF37" opacity="0.6" />
      </svg>

      {/* Logo watermark */}
      {/* <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
        <img src="/logo.webp" alt="Winvo" className="h-4 opacity-30" />
      </div> */}
    </div>
  );
};

export default LoadingScreen;

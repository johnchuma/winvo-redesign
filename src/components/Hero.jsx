import { useEffect, useRef } from "react";
import gsap from "gsap";

const Hero = () => {
  const heroRef = useRef(null);
  const btnRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".hero-intro",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.2, ease: "power4.out", delay: 0.3 },
      );

      gsap.fromTo(
        ".hero-title",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power4.out",
          stagger: 0.2,
          delay: 0.5,
        },
      );

      gsap.fromTo(
        ".hero-subtitle",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, ease: "power4.out", delay: 0.8 },
      );

      gsap.fromTo(
        ".stat-card",
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: "expo.out",
          stagger: 0.15,
          delay: 1,
        },
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const handleMouseMove = (e) => {
    if (!btnRef.current) return;
    const btn = btnRef.current;
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    const distance = Math.sqrt(x * x + y * y);

    if (distance < 100) {
      const strength = (100 - distance) / 100;
      gsap.to(btn, {
        x: x * strength * 0.3,
        y: y * strength * 0.3,
        duration: 0.3,
        ease: "power2.out",
      });
    }
  };

  const handleMouseLeave = () => {
    gsap.to(btnRef.current, {
      x: 0,
      y: 0,
      duration: 0.5,
      ease: "expo.out",
    });
  };

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-8 pt-32 pb-20 overflow-hidden"
    >
      {/* Background gradient orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#D4AF37] opacity-5 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#D4AF37] opacity-3 blur-[100px] rounded-full"></div>

      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center space-y-8 mb-20">
          {/* Introduction */}
          <div className="hero-intro mb-8">
            <div className="text-sm uppercase tracking-[0.3em] text-[#D4AF37] mb-6">
              Your winning partner in invoice financing
            </div>
          </div>

          {/* Main heading */}
          <h1 className="hero-title text-5xl md:text-6xl lg:text-7xl max-w-4xl mx-auto leading-[1.2]">
            Your trusted partner for{" "}
            <span className="text-gradient-gold">secure money</span> investments
          </h1>

          {/* Subtitle */}
          <p className="hero-subtitle text-lg md:text-xl text-white/60 max-w-3xl mx-auto leading-relaxed">
            WINVO connects investors to opportunities, businesses to capital,
            and vetted clients to resources. Explore our platform today to
            unlock your full potential.
          </p>

          {/* CTA Button */}
          <div
            className="inline-block mt-12"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <button
              ref={btnRef}
              className="magnetic-btn group relative px-12 py-5 bg-[#D4AF37] text-[#050505] font-semibold text-lg rounded-full overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(212,175,55,0.4)]"
            >
              <span className="relative z-10">Start Investing</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#FFD700] to-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
        </div>

        {/* Stats cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto mt-24">
          <div className="stat-card glass-card p-8 text-center rounded-3xl relative group">
            <svg
              className="absolute inset-0 w-full h-full animate-[cardFade_9s_ease-in-out_infinite]"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="1"
                y="1"
                width="calc(100% - 2px)"
                height="calc(100% - 2px)"
                rx="23"
                ry="23"
                fill="none"
                stroke="url(#gradient1)"
                strokeWidth="2"
                strokeDasharray="200"
                strokeDashoffset="0"
                className="animate-[dash_3s_linear_infinite]"
              />
              <defs>
                <linearGradient
                  id="gradient1"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#D4AF37" stopOpacity="0" />
                  <stop offset="50%" stopColor="#D4AF37" stopOpacity="1" />
                  <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
            <div className="relative z-10">
              <div className="text-5xl font-bold text-gradient-gold mb-2">
                30+
              </div>
              <div className="text-white/60">Active Borrowers</div>
            </div>
          </div>

          <div className="stat-card glass-card p-8 text-center rounded-3xl relative group">
            <svg
              className="absolute inset-0 w-full h-full animate-[cardFade_9s_ease-in-out_3s_infinite]"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="1"
                y="1"
                width="calc(100% - 2px)"
                height="calc(100% - 2px)"
                rx="23"
                ry="23"
                fill="none"
                stroke="url(#gradient2)"
                strokeWidth="2"
                strokeDasharray="200"
                strokeDashoffset="0"
                className="animate-[dash_3s_linear_infinite]"
              />
              <defs>
                <linearGradient
                  id="gradient2"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#D4AF37" stopOpacity="0" />
                  <stop offset="50%" stopColor="#D4AF37" stopOpacity="1" />
                  <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
            <div className="relative z-10">
              <div className="text-5xl font-bold text-gradient-gold mb-2">
                50+
              </div>
              <div className="text-white/60">Total Investors</div>
            </div>
          </div>

          <div className="stat-card glass-card p-8 text-center rounded-3xl relative group">
            <svg
              className="absolute inset-0 w-full h-full animate-[cardFade_9s_ease-in-out_6s_infinite]"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="1"
                y="1"
                width="calc(100% - 2px)"
                height="calc(100% - 2px)"
                rx="23"
                ry="23"
                fill="none"
                stroke="url(#gradient3)"
                strokeWidth="2"
                strokeDasharray="200"
                strokeDashoffset="0"
                className="animate-[dash_3s_linear_infinite]"
              />
              <defs>
                <linearGradient
                  id="gradient3"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#D4AF37" stopOpacity="0" />
                  <stop offset="50%" stopColor="#D4AF37" stopOpacity="1" />
                  <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
            <div className="relative z-10">
              <div className="text-5xl font-bold text-gradient-gold mb-2">
                10+
              </div>
              <div className="text-white/60">Total Clients</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

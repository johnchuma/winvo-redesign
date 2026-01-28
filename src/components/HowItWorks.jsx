import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CircleDot, ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const HowItWorks = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animations
      gsap.fromTo(
        ".works-title",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power4.out",
          scrollTrigger: {
            trigger: ".works-title",
            start: "top 80%",
          },
        },
      );

      // Animated connecting line
      gsap.fromTo(
        ".step-card",
        {
          opacity: 0,
          y: 100,
          rotateX: -15,
          scale: 0.9,
        },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          scale: 1,
          duration: 1.2,
          ease: "expo.out",
          stagger: {
            amount: 0.6,
            from: "start",
          },
          scrollTrigger: {
            trigger: ".steps-grid",
            start: "top 60%",
          },
        },
      );

      // Floating animation for step numbers
      gsap.to(".step-number", {
        y: -10,
        duration: 2,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        stagger: {
          amount: 0.5,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const steps = [
    {
      number: "01",
      title: "Create your Winvo Account",
      description:
        "Invest with Winvo and take advantage of opportunities in outstanding invoices.",
    },
    {
      number: "02",
      title: "Start your Investment",
      description:
        "Select from a network of opportunities offering the best terms for your investments.",
    },
    {
      number: "03",
      title: "Increase your cashflow",
      description: "Discover opportunities to maintain a healthy cash flow.",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-32 px-4 sm:px-8 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="works-title text-sm uppercase tracking-[0.3em] text-[#D4AF37] mb-6">
            How It Works
          </h2>
          <h3 className="works-title text-5xl md:text-6xl mb-6">
            How we build Winvo <br />
            for Investors like you
          </h3>
        </div>

        {/* Three Column Grid Layout */}
        <div className="steps-grid relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {steps.map((step, index) => (
              <div key={index} className="step-card perspective-1000">
                <div className="glass-card glass-card-hover p-8 rounded-3xl relative overflow-hidden group h-full">
                  {/* Animated gradient background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Step number with animation */}
                  <div className="relative mb-6">
                    <div className="step-number inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-[#D4AF37]/20 to-[#D4AF37]/5 border-2 border-[#D4AF37]/30 relative">
                      <CircleDot className="w-10 h-10 text-[#D4AF37]" />
                      <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-[#D4AF37] flex items-center justify-center text-xs font-bold text-[#050505]">
                        {step.number}
                      </div>
                    </div>
                  </div>

                  <div className="relative z-10">
                    <h4 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-[#D4AF37] transition-colors duration-300">
                      {step.title}
                    </h4>
                    <p className="text-base text-white/60 leading-relaxed mb-6">
                      {step.description}
                    </p>

                    {/* Arrow indicator */}
                    <div className="flex items-center gap-2 text-[#D4AF37] opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-2 transition-all duration-300">
                      <span className="text-sm font-semibold">Learn more</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <button className="group px-10 py-4 bg-transparent border-2 border-[#D4AF37] text-[#D4AF37] font-semibold rounded-full hover:bg-[#D4AF37] hover:text-[#050505] transition-all duration-300">
            Start Investing
            <span className="inline-block ml-2 transform group-hover:translate-x-1 transition-transform">
              →
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

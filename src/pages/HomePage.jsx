import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Hero from "../components/Hero";
import Features from "../components/Features";
import HowItWorks from "../components/HowItWorks";
import Testimonials from "../components/Testimonials";
import Partners from "../components/Partners";
import Calculator from "../components/Calculator";
import Footer from "../components/Footer";

gsap.registerPlugin(ScrollTrigger);

const HomePage = () => {
  const wealthNodeRef = useRef(null);
  const sectionsRef = useRef([]);

  useEffect(() => {
    // Small delay to ensure DOM is fully ready after page transition
    const timer = setTimeout(() => {
      // The Golden Thread: Wealth node animation
      const wealthNode = wealthNodeRef.current;

      if (wealthNode) {
        gsap.to(wealthNode, {
          scrollTrigger: {
            trigger: "body",
            start: "top top",
            end: "bottom bottom",
            scrub: 1,
          },
          y: "100vh",
          rotation: 720,
          scale: 1.5,
          ease: "none",
        });
      }

      // Stacking cards animation with proper pinning
      sectionsRef.current.forEach((section, index) => {
        if (!section) return;

        ScrollTrigger.create({
          trigger: section,
          start: "top top",
          end: "bottom top",
          pin: true,
          pinSpacing: false,
          scrub: 1,
          markers: false, // Set to true for debugging
        });
      });

      // Force ScrollTrigger to recalculate
      ScrollTrigger.refresh();
    }, 100);

    // Cleanup
    return () => {
      clearTimeout(timer);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="relative overflow-hidden">
      {/* Background gradients */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-[#D4AF37] opacity-[0.02] blur-[150px] rounded-full"></div>
        <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-[#D4AF37] opacity-[0.03] blur-[120px] rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-[700px] h-[700px] bg-[#D4AF37] opacity-[0.02] blur-[140px] rounded-full"></div>
      </div>

      {/* The Golden Thread: Wealth Node */}
      <div
        ref={wealthNodeRef}
        className="wealth-node fixed top-20 right-20 w-6 h-6 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#FFD700] blur-[2px] opacity-40 pointer-events-none z-50"
        style={{ willChange: "transform" }}
      />

      {/* Stacking Cards Sections */}
      <div className="stacking-sections">
        <section
          id="home"
          ref={(el) => (sectionsRef.current[0] = el)}
          className="stacking-card min-h-screen relative"
          style={{ zIndex: 10 }}
        >
          <Hero />
        </section>

        <section
          id="services"
          ref={(el) => (sectionsRef.current[1] = el)}
          className="stacking-card min-h-screen relative bg-gradient-to-b from-[#050505] to-[#0a0a0a]"
          style={{ zIndex: 20 }}
        >
          <Features />
        </section>

        <section
          id="how-it-works"
          ref={(el) => (sectionsRef.current[2] = el)}
          className="stacking-card min-h-screen relative bg-gradient-to-b from-[#0a0a0a] to-[#050505]"
          style={{ zIndex: 30 }}
        >
          <HowItWorks />
        </section>

        <section
          id="about"
          ref={(el) => (sectionsRef.current[3] = el)}
          className="stacking-card min-h-screen relative bg-gradient-to-b from-[#050505] to-[#0a0a0a]"
          style={{ zIndex: 40 }}
        >
          <Testimonials />
        </section>

        <section
          id="partners"
          ref={(el) => (sectionsRef.current[4] = el)}
          className="stacking-card min-h-screen relative bg-gradient-to-b from-[#0a0a0a] to-[#050505]"
          style={{ zIndex: 50 }}
        >
          <Partners />
        </section>

        <section
          id="calculator"
          ref={(el) => (sectionsRef.current[5] = el)}
          className="stacking-card min-h-screen relative bg-gradient-to-b from-[#050505] to-[#0a0a0a]"
          style={{ zIndex: 60 }}
        >
          <Calculator />
        </section>

        <section
          id="contact"
          ref={(el) => (sectionsRef.current[6] = el)}
          className="stacking-card min-h-screen relative bg-[#050505]"
          style={{ zIndex: 70 }}
        >
          <Footer />
        </section>
      </div>
    </div>
  );
};

export default HomePage;

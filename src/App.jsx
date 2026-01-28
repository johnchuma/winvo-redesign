import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LoadingScreen from "./components/LoadingScreen";
import ScrollProgress from "./components/ScrollProgress";
import CustomCursor from "./components/CustomCursor";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import Testimonials from "./components/Testimonials";
import Partners from "./components/Partners";
import Calculator from "./components/Calculator";
import Footer from "./components/Footer";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const wealthNodeRef = useRef(null);
  const sectionsRef = useRef([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isLoading) return;

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

      // Calculate the proper end point
      const nextSection = sectionsRef.current[index + 1];

      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: nextSection
          ? () => `+=${nextSection.offsetTop - section.offsetTop}`
          : "max",
        pin: true,
        pinSpacing: false,
        scrub: true,
        anticipatePin: 1,
      });
    });

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [isLoading]);

  return (
    <>
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}

      <ScrollProgress />
      <CustomCursor />

      <div className="relative overflow-hidden cursor-none">
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

        {/* Main Content */}
        <Navbar />

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
    </>
  );
}

export default App;

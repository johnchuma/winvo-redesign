import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const PageTransition = ({ children }) => {
  const pageRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const page = pageRef.current;

    // Reset scroll position on route change
    window.scrollTo(0, 0);

    // Page enter animation
    gsap.fromTo(
      page,
      {
        opacity: 0,
        y: 20,
        scale: 0.98,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.6,
        ease: "power3.out",
        onComplete: () => {
          // Refresh ScrollTrigger after transition completes
          ScrollTrigger.refresh();
        },
      },
    );

    return () => {
      // Cleanup
      gsap.killTweensOf(page);
    };
  }, [location.pathname]);

  return (
    <div ref={pageRef} className="page-transition">
      {children}
    </div>
  );
};

export default PageTransition;

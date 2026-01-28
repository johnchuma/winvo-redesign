import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollProgress = () => {
  const progressBarRef = useRef(null);

  useEffect(() => {
    const progressBar = progressBarRef.current;

    if (progressBar) {
      gsap.to(progressBar, {
        scaleX: 1,
        transformOrigin: "left",
        ease: "none",
        scrollTrigger: {
          trigger: "body",
          start: "top top",
          end: "bottom bottom",
          scrub: 0.3,
        },
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-[100] h-1">
      <div
        ref={progressBarRef}
        className="h-full bg-gradient-to-r from-[#D4AF37] via-[#FFD700] to-[#D4AF37] origin-left scale-x-0 shadow-[0_0_10px_rgba(212,175,55,0.5)]"
      />
    </div>
  );
};

export default ScrollProgress;

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Testimonials = () => {
  const sectionRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      text: "WINVO has been a game-changer for our business. By leveraging their invoice financing solutions, we've been able to improve our cash flow and accelerate our growth. The process is seamless, and the returns have exceeded our expectations. Highly recommended!",
      name: "Sarah Johnson",
      role: "CEO, TechStart Inc.",
      image: "https://i.pravatar.cc/150?img=1",
    },
    {
      text: "I've been investing with WINVO for over a year now, and I'm impressed by the consistent returns and the level of transparency they provide. The platform is user-friendly, and the team is always available to answer any questions. WINVO has become a crucial part of my investment portfolio.",
      name: "Michael Chen",
      role: "Private Investor",
      image: "https://i.pravatar.cc/150?img=12",
    },
    {
      text: "WINVO has been a game-changer for our business. By leveraging their invoice financing solutions, we've been able to improve our cash flow and accelerate our growth. The process is seamless, and the returns have exceeded our expectations. Highly recommended!",
      name: "Emily Rodriguez",
      role: "CFO, Growth Capital",
      image: "https://i.pravatar.cc/150?img=5",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".testimonial-title",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power4.out",
          scrollTrigger: {
            trigger: ".testimonial-title",
            start: "top 80%",
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    gsap.fromTo(
      ".testimonial-card",
      { opacity: 0, scale: 0.9 },
      { opacity: 1, scale: 1, duration: 0.6, ease: "power2.out" },
    );
  }, [activeIndex]);

  return (
    <section ref={sectionRef} className="py-32 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="testimonial-title text-sm uppercase tracking-[0.3em] text-[#D4AF37] mb-6">
            Our Customer Feedback
          </h2>
          <h3 className="testimonial-title text-5xl md:text-6xl mb-6">
            Don't take our word for it. <br />
            Trust the people who actually use WINVO
          </h3>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="testimonial-card glass-card p-10 md:p-16 rounded-3xl mb-8">
            <div className="text-6xl text-[#D4AF37] mb-6">"</div>
            <p className="text-xl md:text-2xl text-white/80 leading-relaxed mb-8">
              {testimonials[activeIndex].text}
            </p>
            <div className="flex items-center gap-4">
              <img
                src={testimonials[activeIndex].image}
                alt={testimonials[activeIndex].name}
                className="w-16 h-16 rounded-full border-2 border-[#D4AF37]/50 object-cover"
              />
              <div>
                <div className="font-semibold text-lg">
                  {testimonials[activeIndex].name}
                </div>
                <div className="text-white/60">
                  {testimonials[activeIndex].role}
                </div>
              </div>
            </div>
          </div>

          {/* Pagination dots */}
          <div className="flex justify-center gap-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? "bg-[#D4AF37] w-8"
                    : "bg-white/20 hover:bg-white/40"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

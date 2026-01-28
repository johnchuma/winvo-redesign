import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TrendingUp, Shield, BarChart3, HeadphonesIcon } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const Features = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".feature-title",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power4.out",
          scrollTrigger: {
            trigger: ".feature-title",
            start: "top 80%",
          },
        },
      );

      gsap.fromTo(
        ".feature-card",
        { opacity: 0, y: 60, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "expo.out",
          stagger: 0.15,
          scrollTrigger: {
            trigger: ".features-grid",
            start: "top 75%",
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const features = [
    {
      title: "Investment opportunities",
      description:
        "Explore diverse invoice financing opportunities to enhance your portfolio & returns.",
      icon: TrendingUp,
      image:
        "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&auto=format&fit=crop&q=80",
      rotation: "rotate-[-2deg]",
      tilt: "rotateY(5deg)",
    },
    {
      title: "Risk Management",
      description:
        "Manage risk by grasping the differences between recourse and non-recourse financing.",
      icon: Shield,
      image:
        "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&auto=format&fit=crop&q=80",
      rotation: "rotate-[3deg]",
      tilt: "rotateY(-3deg)",
    },
    {
      title: "Investor Dashboard",
      description:
        "Select from a network of opportunities offering the best terms for your investments.",
      icon: BarChart3,
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80",
      rotation: "rotate-[-3deg]",
      tilt: "rotateX(2deg)",
    },
    {
      title: "Support and Assistance",
      description: "Discover opportunities to maintain a healthy cash flow.",
      icon: HeadphonesIcon,
      image:
        "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&auto=format&fit=crop&q=80",
      rotation: "rotate-[2deg]",
      tilt: "rotateY(4deg)",
    },
  ];

  return (
    <section ref={sectionRef} className="py-32 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="feature-title text-sm uppercase tracking-[0.3em] text-[#D4AF37] mb-6">
            Why Invest With Winvo?
          </h2>
          <h3 className="feature-title text-5xl md:text-6xl mb-6">
            Discover Investment <br />
            opportunities
          </h3>
          <p className="feature-title text-lg md:text-xl text-white/60 max-w-3xl mx-auto">
            Invest with Winvo and take advantage of opportunities in outstanding
            invoices.
          </p>
        </div>

        {/* Single Row Grid with Tilted Cards */}
        <div className="features-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className={`feature-card glass-card glass-card-hover p-6 rounded-3xl flex flex-col justify-between overflow-visible relative group perspective-1000 ${feature.rotation}`}
                style={{
                  transform: `${feature.tilt}`,
                  transformStyle: "preserve-3d",
                }}
              >
                {/* Background Image */}
                <div className="absolute inset-0 rounded-3xl opacity-5 group-hover:opacity-20 transition-opacity duration-500 overflow-hidden">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#D4AF37]/20 to-[#D4AF37]/5 border border-[#D4AF37]/30 flex items-center justify-center mb-4">
                    <Icon className="w-7 h-7 text-[#D4AF37]" />
                  </div>
                  <h4 className="text-xl font-bold mb-3">{feature.title}</h4>
                </div>
                <p className="text-sm text-white/60 leading-relaxed relative z-10">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;

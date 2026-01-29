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
      rotation: "rotate-[-1.5deg]",
      tilt: "rotateY(3deg) rotateX(-1deg)",
    },
    {
      title: "Risk Management",
      description:
        "Manage risk by grasping the differences between recourse and non-recourse financing.",
      icon: Shield,
      image:
        "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&auto=format&fit=crop&q=80",
      rotation: "rotate-[2.5deg]",
      tilt: "rotateY(-2deg) rotateX(1.5deg)",
    },
    {
      title: "Investor Dashboard",
      description:
        "Select from a network of opportunities offering the best terms for your investments.",
      icon: BarChart3,
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80",
      rotation: "rotate-[-2deg]",
      tilt: "rotateY(1.5deg) rotateX(-2deg)",
    },
    {
      title: "Support and Assistance",
      description: "Discover opportunities to maintain a healthy cash flow.",
      icon: HeadphonesIcon,
      image:
        "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&auto=format&fit=crop&q=80",
      rotation: "rotate-[1.8deg]",
      tilt: "rotateY(-1deg) rotateX(2deg)",
    },
  ];

  return (
    <section ref={sectionRef} className="py-32 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="feature-title text-sm uppercase tracking-[0.3em] text-[#D4AF37] mb-6">
            Why Invest With Winvo?
          </h2>
          <h3 className="feature-title text-5xl md:text-5xl mb-6">
            Discover Investment <br />
            opportunities
          </h3>
          <p className="feature-title text-lg md:text-xl text-white/60 max-w-3xl mx-auto">
            Invest with Winvo and take advantage of opportunities in outstanding
            invoices.
          </p>
        </div>

        {/* Investment Growth Chart */}
        <div className="feature-chart mb-12 w-full h-24 relative overflow-hidden">
          <svg
            className="w-full h-full"
            viewBox="0 0 1200 100"
            preserveAspectRatio="none"
          >
            {/* Grid lines */}
            <g className="opacity-10">
              <line
                x1="0"
                y1="25"
                x2="1200"
                y2="25"
                stroke="#D4AF37"
                strokeWidth="0.5"
              />
              <line
                x1="0"
                y1="50"
                x2="1200"
                y2="50"
                stroke="#D4AF37"
                strokeWidth="0.5"
              />
              <line
                x1="0"
                y1="75"
                x2="1200"
                y2="75"
                stroke="#D4AF37"
                strokeWidth="0.5"
              />
            </g>

            {/* Area fill */}
            <defs>
              <linearGradient
                id="chartGradient"
                x1="0%"
                y1="0%"
                x2="0%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
              </linearGradient>
            </defs>

            {/* Growth area */}
            <path
              d="M 0 95 L 0 70 Q 150 65, 300 55 T 600 35 T 900 25 T 1200 15 L 1200 95 Z"
              fill="url(#chartGradient)"
            />

            {/* Growth line */}
            <path
              d="M 0 70 Q 150 65, 300 55 T 600 35 T 900 25 T 1200 15"
              fill="none"
              stroke="#D4AF37"
              strokeWidth="2"
              strokeLinecap="round"
              className="chart-line"
            />

            {/* Data points */}
            <circle
              cx="300"
              cy="55"
              r="3"
              fill="#D4AF37"
              className="animate-pulse"
            />
            <circle
              cx="600"
              cy="35"
              r="3"
              fill="#D4AF37"
              className="animate-pulse"
              style={{ animationDelay: "0.2s" }}
            />
            <circle
              cx="900"
              cy="25"
              r="3"
              fill="#D4AF37"
              className="animate-pulse"
              style={{ animationDelay: "0.4s" }}
            />
            <circle
              cx="1200"
              cy="15"
              r="3"
              fill="#FFD700"
              className="animate-pulse"
              style={{ animationDelay: "0.6s" }}
            />
          </svg>

          {/* Chart labels */}
          <div className="absolute inset-0 flex justify-between items-end px-4 pb-1 pointer-events-none">
            <span className="text-[10px] text-white/40">Q1</span>
            <span className="text-[10px] text-white/40">Q2</span>
            <span className="text-[10px] text-white/40">Q3</span>
            <span className="text-[10px] text-white/40">Q4</span>
          </div>
        </div>

        {/* Single Row Grid with Tilted Cards */}
        <div className="features-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="feature-card glass-card glass-card-hover p-6 rounded-3xl flex flex-col justify-between overflow-visible relative group perspective-1000"
                style={{
                  transform: `${feature.rotation.replace("rotate-[", "rotate(").replace("]", ")")} ${feature.tilt}`,
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

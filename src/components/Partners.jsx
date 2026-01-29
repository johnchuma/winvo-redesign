import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Users, Building2 } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const Partners = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".partners-title",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power4.out",
          scrollTrigger: {
            trigger: ".partners-title",
            start: "top 80%",
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const partnerLogos = [
    {
      name: "Smart Foundry",
      url: "https://www.smartafrica.group/uploads/smartfoundry-logo.png",
    },
    {
      name: "Selcom",
      url: "https://images.squarespace-cdn.com/content/v1/528206a7e4b0f4289e544eda/fca25423-05b4-494d-8ce9-673f902848e4/selcom.png",
    },
    {
      name: "Visa",
      url: "https://cdn.sanity.io/images/0k2k2bbv/production/41fe5e9d3f2cd4474a88020f15561b6eda43ebef-3840x2160.png",
    },
    {
      name: "Mastercard",
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/MasterCard_Logo.svg/1280px-MasterCard_Logo.svg.png",
    },
    {
      name: "NCBA",
      url: "https://ug.ncbagroup.com/wp-content/uploads/2020/06/Webp.net-resizeimage-3.png",
    },
  ];

  return (
    <section ref={sectionRef} className="py-16 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="partners-title text-3xl md:text-4xl font-bold text-center mb-10">
          Partners we worked with
        </h2>

        <div className="glass-card p-6 md:p-8 rounded-3xl">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center">
            {partnerLogos.map((partner, index) => (
              <div
                key={index}
                className="flex items-center justify-center opacity-50 hover:opacity-100 transition-all duration-300"
              >
                <img
                  src={partner.url}
                  alt={partner.name}
                  className="h-8 md:h-10 w-auto object-contain brightness-0 hover:brightness-100 hover:invert-0  invert"
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.parentElement.innerHTML = `<span class="text-white/40 text-sm font-semibold">${partner.name}</span>`;
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Who We Serve */}
        <div className="mt-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Who We serve</h2>
          <p className="text-lg text-white/60 mb-8 max-w-3xl mx-auto">
            WINVO connects businesses with capital and investors with
            opportunities. Explore our platform to unlock your potential today.
          </p>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="glass-card glass-card-hover p-8 rounded-3xl text-left">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#D4AF37]/20 to-[#D4AF37]/5 border border-[#D4AF37]/30 flex items-center justify-center mb-4">
                <Users className="w-7 h-7 text-[#D4AF37]" />
              </div>
              <h3 className="text-2xl font-bold mb-3">For Investors</h3>
              <p className="text-white/60 mb-6 leading-relaxed ">
                WINVO connects businesses with capital and investors with
                opportunities. Explore our platform to unlock your potential
                today.
              </p>
              <button className="group px-6 py-2.5 bg-transparent border-2 border-[#D4AF37] text-[#D4AF37] font-semibold rounded-full hover:bg-[#D4AF37] hover:text-[#050505] transition-all duration-300 text-sm">
                Join as Investor
                <span className="inline-block ml-2 transform group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </button>
            </div>

            <div className="glass-card glass-card-hover p-8 rounded-3xl text-left">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#D4AF37]/20 to-[#D4AF37]/5 border border-[#D4AF37]/30 flex items-center justify-center mb-4">
                <Building2 className="w-7 h-7 text-[#D4AF37]" />
              </div>
              <h3 className="text-2xl font-bold mb-3">For Businesses</h3>
              <p className="text-white/60 mb-6 leading-relaxed ">
                Access immediate capital through invoice financing. Grow your
                business without waiting for payment cycles.
              </p>
              <button className="group px-6 py-2.5 bg-transparent border-2 border-[#D4AF37] text-[#D4AF37] font-semibold rounded-full hover:bg-[#D4AF37] hover:text-[#050505] transition-all duration-300 text-sm">
                Join as Business
                <span className="inline-block ml-2 transform group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;

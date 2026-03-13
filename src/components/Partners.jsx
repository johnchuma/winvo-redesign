import { Users, Building2 } from "lucide-react";

const Partners = () => {
  return (
    <section className="py-16 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Who We Serve */}
        <div className="text-center">
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

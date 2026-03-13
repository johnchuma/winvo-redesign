import { ArrowRight, Users, TrendingUp, Target, Lightbulb } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-linear-to-r from-white via-[#D4AF37] to-white bg-clip-text text-transparent">
            About Us
          </h1>
          <p className="text-xl text-white/60">
            Bridging the gap between opportunity and capital
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4 sm:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-8 md:p-12 rounded-3xl space-y-8">
            <div>
              <p className="text-lg md:text-xl text-white/80 leading-relaxed">
                Most investing and lending platforms feel like a maze of complex
                forms and gatekeepers. At WINVO, we started with a simple
                realization. On one side, there are brilliant vendors who have
                the invoices but lack the immediate funds to fulfill their next
                delivery. On the other, there are investors who have the capital
                but struggle to find a trustworthy place to put it to work.
              </p>
            </div>

            <div className="border-l-4 border-[#D4AF37] pl-6">
              <p className="text-lg md:text-xl text-white/80 leading-relaxed italic">
                The gap between these two isn't a lack of interest. It is a lack
                of connection.
              </p>
            </div>

            <div>
              <p className="text-lg md:text-xl text-white/80 leading-relaxed">
                One person is waiting on a payout to keep their business moving,
                while the other is looking for a way to earn high interest on a
                timeline that makes sense.
              </p>
            </div>

            <div>
              <p className="text-lg md:text-xl text-white/80 leading-relaxed">
                We built WINVO to bridge that gap. We don't believe that finding
                capital or discovering a solid investment should feel like a
                stroke of luck. It should be a streamlined and intentional
                process where the right people meet at the right time. By
                stripping away traditional barriers, we have created a space
                where businesses can focus on growth and investors can focus on
                impact.
              </p>
            </div>

            <div>
              <p className="text-lg md:text-xl text-white/80 leading-relaxed">
                Whether you are a vendor looking for a simplified way to fund
                your next big order or an investor searching for a reliable
                platform to grow your wealth, we provide the tools to make it
                happen. We are here because we believe that when the right
                capital meets the right opportunity, everyone wins.
              </p>
            </div>

            <div className="pt-6">
              <p className="text-xl md:text-2xl font-semibold text-[#D4AF37]">
                Explore our platform and let's get to work on what comes next.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-16 px-4 sm:px-8 bg-linear-to-b from-[#050505] to-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
            Our Mission
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Mission Card 1 */}
            <div className="glass-card glass-card-hover p-8 rounded-3xl text-center">
              <div className="w-16 h-16 rounded-full bg-linear-to-br from-[#D4AF37]/20 to-[#D4AF37]/5 border border-[#D4AF37]/30 flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-[#D4AF37]" />
              </div>
              <h3 className="text-xl font-bold mb-3">Connect</h3>
              <p className="text-white/60">
                Bridge the gap between capital and opportunity
              </p>
            </div>

            {/* Mission Card 2 */}
            <div className="glass-card glass-card-hover p-8 rounded-3xl text-center">
              <div className="w-16 h-16 rounded-full bg-linear-to-br from-[#D4AF37]/20 to-[#D4AF37]/5 border border-[#D4AF37]/30 flex items-center justify-center mx-auto mb-6">
                <Lightbulb className="w-8 h-8 text-[#D4AF37]" />
              </div>
              <h3 className="text-xl font-bold mb-3">Simplify</h3>
              <p className="text-white/60">
                Remove barriers and streamline the process
              </p>
            </div>

            {/* Mission Card 3 */}
            <div className="glass-card glass-card-hover p-8 rounded-3xl text-center">
              <div className="w-16 h-16 rounded-full bg-linear-to-br from-[#D4AF37]/20 to-[#D4AF37]/5 border border-[#D4AF37]/30 flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-8 h-8 text-[#D4AF37]" />
              </div>
              <h3 className="text-xl font-bold mb-3">Empower</h3>
              <p className="text-white/60">
                Enable growth for businesses and investors alike
              </p>
            </div>

            {/* Mission Card 4 */}
            <div className="glass-card glass-card-hover p-8 rounded-3xl text-center">
              <div className="w-16 h-16 rounded-full bg-linear-to-br from-[#D4AF37]/20 to-[#D4AF37]/5 border border-[#D4AF37]/30 flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-[#D4AF37]" />
              </div>
              <h3 className="text-xl font-bold mb-3">Build Trust</h3>
              <p className="text-white/60">
                Create a reliable platform for all stakeholders
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass-card p-12 rounded-3xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-white/60 mb-8">
              Join thousands of businesses and investors already using WINVO to
              unlock their potential.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/borrower"
                className="group px-8 py-4 bg-[#D4AF37] text-[#050505] font-bold rounded-full hover:bg-[#FFD700] transition-all duration-300 flex items-center justify-center gap-2"
              >
                Get Funding
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/"
                className="group px-8 py-4 bg-transparent border-2 border-[#D4AF37] text-[#D4AF37] font-bold rounded-full hover:bg-[#D4AF37] hover:text-[#050505] transition-all duration-300 flex items-center justify-center gap-2"
              >
                Start Investing
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;

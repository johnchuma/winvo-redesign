import { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Newsletter signup:", email);
    setEmail("");
  };

  return (
    <footer className="border-t border-white/10 pt-12 pb-0 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Newsletter Section */}
        <div className="glass-card p-12 md:p-16 rounded-3xl mb-20 text-center">
          <h2 className="text-sm uppercase tracking-[0.3em] text-[#D4AF37] mb-4">
            Keep up with the latest
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-6">
            Stay up to date
          </h3>
          <p className="text-white/60 mb-8 max-w-2xl mx-auto">
            Join our newsletter to stay up to date on features and releases.
          </p>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 bg-white/5 border border-white/10 rounded-full text-white placeholder:text-white/40 focus:outline-none focus:border-[#D4AF37]/50 transition-colors"
              required
            />
            <button
              type="submit"
              className="px-8 py-4 bg-[#D4AF37] text-[#050505] font-semibold rounded-full hover:bg-[#FFD700] transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div>
            <h4 className="font-semibold mb-4 text-white">Products</h4>
            <ul className="space-y-3 text-white/60">
              <li>
                <a href="#" className="hover:text-[#D4AF37] transition-colors">
                  Personal
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#D4AF37] transition-colors">
                  Business
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#D4AF37] transition-colors">
                  Invoices
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-white">Company</h4>
            <ul className="space-y-3 text-white/60">
              <li>
                <a href="#" className="hover:text-[#D4AF37] transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#D4AF37] transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#D4AF37] transition-colors">
                  Press Kit
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-white">Community</h4>
            <ul className="space-y-3 text-white/60">
              <li>
                <a href="#" className="hover:text-[#D4AF37] transition-colors">
                  Refer a Friend
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#D4AF37] transition-colors">
                  Gift
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-white">Support</h4>
            <ul className="space-y-3 text-white/60">
              <li>
                <a href="#" className="hover:text-[#D4AF37] transition-colors">
                  Help
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#D4AF37] transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#D4AF37] transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-white/10">
          <div className="flex items-center gap-2">
            <img src="/logo.webp" alt="Winvo" className="h-6" />
            <span className="text-white/40 text-sm">
              Your winning partner in invoice financing
            </span>
          </div>

          <div className="flex gap-6 text-sm text-white/60">
            <a href="#" className="hover:text-[#D4AF37] transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-[#D4AF37] transition-colors">
              Terms of Services
            </a>
            <a href="#" className="hover:text-[#D4AF37] transition-colors">
              Cookies
            </a>
          </div>
        </div>

        <div className="text-center mt-8 text-white/40 text-sm">
          © {new Date().getFullYear()} Winvo. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

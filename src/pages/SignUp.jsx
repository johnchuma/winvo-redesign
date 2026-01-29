import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import gsap from "gsap";
import { Eye, EyeOff, Users, Building2, ArrowLeft } from "lucide-react";

const SignUp = () => {
  const [step, setStep] = useState("choose"); // 'choose', 'borrower', 'investor'
  const [userType, setUserType] = useState(""); // 'borrower', 'investor'
  const [investorType, setInvestorType] = useState("individual"); // 'individual', 'business'
  const [showPassword, setShowPassword] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
  });

  const pageRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".auth-card",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power4.out" },
      );

      gsap.fromTo(
        ".form-field",
        { opacity: 0, x: -20 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          ease: "power3.out",
          stagger: 0.1,
          delay: 0.3,
        },
      );

      gsap.fromTo(
        ".user-type-card",
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          ease: "expo.out",
          stagger: 0.15,
          delay: 0.3,
        },
      );
    }, pageRef);

    return () => ctx.revert();
  }, [step]);

  const handleContinue = (type) => {
    setUserType(type);
    setStep(type);
  };

  const handleBack = () => {
    setStep("choose");
    setUserType("");
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div
      ref={pageRef}
      className="min-h-screen flex items-center justify-center px-4 py-20"
    >
      <div className="w-full max-w-4xl">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link to="/">
            <img src="/logo.webp" alt="Winvo" className="h-6 mx-auto mb-8" />
          </Link>
        </div>

        {/* Choose User Type */}
        {step === "choose" && (
          <div className="auth-card glass-card p-8 md:p-10 rounded-3xl">
            <h1 className="text-3xl md:text-4xl font-bold mb-2 text-center">
              Get started with Winvo!
            </h1>
            <p className="text-white/60 text-center mb-8">
              Thousands trust WINVO for a seamless experience. Share your
              details, and we'll secure funding.
            </p>

            {/* Benefits Grid */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {/* Borrowers Benefits */}
              <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                <h3 className="text-xl font-bold mb-4 text-[#D4AF37]">
                  Borrowers Benefits
                </h3>
                <ul className="space-y-3 text-sm text-white/70">
                  <li className="flex items-start gap-2">
                    <span className="text-[#D4AF37] mt-1">•</span>
                    <span>Access working capital when you need it</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#D4AF37] mt-1">•</span>
                    <span>Receive up to 85% invoice discount</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#D4AF37] mt-1">•</span>
                    <span>
                      No hidden costs—use our calculator to know exactly how
                      much you'll receive
                    </span>
                  </li>
                </ul>
              </div>

              {/* Investors Benefits */}
              <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                <h3 className="text-xl font-bold mb-4 text-[#D4AF37]">
                  Investors Benefits
                </h3>
                <ul className="space-y-3 text-sm text-white/70">
                  <li className="flex items-start gap-2">
                    <span className="text-[#D4AF37] mt-1">•</span>
                    <span>Offers a low-risk investment opportunity</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#D4AF37] mt-1">•</span>
                    <span>Earn a monthly return of at least 4%</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#D4AF37] mt-1">•</span>
                    <span>
                      No hidden costs—use our calculator to see your potential
                      earnings
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Terms Checkbox */}
            <div className="mb-6">
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={agreedToTerms}
                  onChange={(e) => setAgreedToTerms(e.target.checked)}
                  className="w-5 h-5 bg-white/5 border border-white/20 rounded cursor-pointer accent-[#D4AF37]"
                />
                <span className="text-sm text-white/70">
                  Agree to our{" "}
                  <a
                    href="/terms"
                    className="text-[#D4AF37] hover:text-[#FFD700]"
                  >
                    Terms & Conditions
                  </a>
                </span>
              </label>
            </div>

            {/* User Type Selection */}
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <button
                onClick={() => handleContinue("borrower")}
                disabled={!agreedToTerms}
                className="user-type-card group p-6 bg-white/5 border-2 border-white/10 hover:border-[#D4AF37] rounded-2xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Building2 className="w-12 h-12 text-[#D4AF37] mx-auto mb-3" />
                <div className="text-lg font-semibold">
                  Continue as Borrower
                </div>
              </button>

              <button
                onClick={() => handleContinue("investor")}
                disabled={!agreedToTerms}
                className="user-type-card group p-6 bg-white/5 border-2 border-white/10 hover:border-[#D4AF37] rounded-2xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Users className="w-12 h-12 text-[#D4AF37] mx-auto mb-3" />
                <div className="text-lg font-semibold">
                  Continue as Investor
                </div>
              </button>
            </div>

            {/* Sign In Link */}
            <div className="text-center text-sm text-white/60">
              Already have an account?{" "}
              <Link
                to="/signin"
                className="text-[#D4AF37] hover:text-[#FFD700] font-semibold transition-colors"
              >
                Sign In
              </Link>
            </div>
          </div>
        )}

        {/* Registration Form */}
        {(step === "borrower" || step === "investor") && (
          <div className="auth-card glass-card p-8 md:p-10 rounded-3xl max-w-2xl mx-auto">
            {/* Back Button */}
            <button
              onClick={handleBack}
              className="flex items-center gap-2 text-white/60 hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm">Go back</span>
            </button>

            <h1 className="text-3xl md:text-4xl font-bold mb-2">
              Welcome to Winvo!
            </h1>
            <p className="text-white/60 mb-8">Fill in your account details</p>

            {/* Investor Type Toggle */}
            {step === "investor" && (
              <div className="form-field flex gap-4 mb-6">
                <button
                  onClick={() => setInvestorType("individual")}
                  className={`flex-1 py-3 px-6 rounded-full font-semibold transition-all duration-300 ${
                    investorType === "individual"
                      ? "bg-[#D4AF37] text-[#050505]"
                      : "bg-white/5 text-white/60 hover:bg-white/10"
                  }`}
                >
                  Invest as Individual
                </button>
                <button
                  onClick={() => setInvestorType("business")}
                  className={`flex-1 py-3 px-6 rounded-full font-semibold transition-all duration-300 ${
                    investorType === "business"
                      ? "bg-[#D4AF37] text-[#050505]"
                      : "bg-white/5 text-white/60 hover:bg-white/10"
                  }`}
                >
                  Invest as Business
                </button>
              </div>
            )}

            <form className="space-y-6">
              {/* Name Fields */}
              <div className="grid md:grid-cols-3 gap-4">
                <div className="form-field">
                  <label className="block text-sm text-white/80 mb-2">
                    First name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-white placeholder-white/30 focus:outline-none focus:border-[#D4AF37] transition-colors"
                  />
                </div>
                <div className="form-field">
                  <label className="block text-sm text-white/80 mb-2">
                    Middle name
                  </label>
                  <input
                    type="text"
                    name="middleName"
                    value={formData.middleName}
                    onChange={handleInputChange}
                    className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-white placeholder-white/30 focus:outline-none focus:border-[#D4AF37] transition-colors"
                  />
                </div>
                <div className="form-field">
                  <label className="block text-sm text-white/80 mb-2">
                    Last name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-white placeholder-white/30 focus:outline-none focus:border-[#D4AF37] transition-colors"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="form-field">
                <label className="block text-sm text-white/80 mb-2">
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-white placeholder-white/30 focus:outline-none focus:border-[#D4AF37] transition-colors"
                />
              </div>

              {/* Phone */}
              <div className="form-field">
                <label className="block text-sm text-white/80 mb-2">
                  Business phone number
                </label>
                <div className="flex gap-2">
                  <div className="bg-white/5 border border-white/10 rounded-2xl py-4 px-4 flex items-center gap-2">
                    <span className="text-white/60">+255</span>
                  </div>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="flex-1 bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-white placeholder-white/30 focus:outline-none focus:border-[#D4AF37] transition-colors"
                  />
                </div>
              </div>

              {/* Password */}
              <div className="form-field">
                <label className="block text-sm text-white/80 mb-2">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 pr-12 text-white placeholder-white/30 focus:outline-none focus:border-[#D4AF37] transition-colors"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 hover:text-white/80 transition-colors"
                  >
                    {showPassword ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>

              {/* Terms */}
              <div className="form-field">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    className="w-5 h-5 bg-white/5 border border-white/20 rounded cursor-pointer accent-[#D4AF37]"
                  />
                  <span className="text-sm text-white/70">
                    Agree to our{" "}
                    <a
                      href="/terms"
                      className="text-[#D4AF37] hover:text-[#FFD700]"
                    >
                      Terms & Conditions
                    </a>
                  </span>
                </label>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="form-field w-full py-4 bg-[#D4AF37] text-[#050505] font-semibold text-lg rounded-full hover:bg-[#FFD700] hover:shadow-[0_0_40px_rgba(212,175,55,0.4)] transition-all duration-300"
              >
                Sign Up
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default SignUp;

import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { Eye, EyeOff } from "lucide-react";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const pageRef = useRef(null);

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
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={pageRef}
      className="min-h-screen flex items-center justify-center px-4 py-20"
    >
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link to="/">
            <img src="/logo.webp" alt="Winvo" className="h-6 mx-auto mb-8" />
          </Link>
        </div>

        {/* Auth Card */}
        <div className="auth-card glass-card p-8 md:p-10 rounded-3xl">
          <h1 className="text-3xl md:text-4xl font-bold mb-2 text-center">
            Welcome back to Winvo!
          </h1>
          <p className="text-white/60 text-center mb-8">
            Login to your dashboard
          </p>

          <form className="space-y-6">
            {/* Email/Phone Field */}
            <div className="form-field">
              <label className="block text-sm text-white/80 mb-2">
                Email address or Phone number
              </label>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-white placeholder-white/30 focus:outline-none focus:border-[#D4AF37] transition-colors"
                placeholder="Enter your email or phone"
              />
            </div>

            {/* Password Field */}
            <div className="form-field">
              <label className="block text-sm text-white/80 mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 pr-12 text-white placeholder-white/30 focus:outline-none focus:border-[#D4AF37] transition-colors"
                  placeholder="Enter your password"
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

            {/* Forgot Password */}
            <div className="form-field text-right">
              <Link
                to="/forgot-password"
                className="text-sm text-[#D4AF37] hover:text-[#FFD700] transition-colors"
              >
                Forgot password?
              </Link>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="form-field w-full py-4 bg-[#D4AF37] text-[#050505] font-semibold text-lg rounded-full hover:bg-[#FFD700] hover:shadow-[0_0_40px_rgba(212,175,55,0.4)] transition-all duration-300"
            >
              Sign In
            </button>
          </form>

          {/* Sign Up Link */}
          <div className="mt-8 text-center text-sm text-white/60">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="text-[#D4AF37] hover:text-[#FFD700] font-semibold transition-colors"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;

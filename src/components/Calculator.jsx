import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Calculator as CalcIcon, DollarSign, Calendar } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const Calculator = () => {
  const sectionRef = useRef(null);
  const [userType, setUserType] = useState("borrower");
  const [invoiceAmount, setInvoiceAmount] = useState("");
  const [amountRequested, setAmountRequested] = useState("");
  const [loanDuration, setLoanDuration] = useState("");
  const [result, setResult] = useState(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".calculator-title",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power4.out",
          scrollTrigger: {
            trigger: ".calculator-title",
            start: "top 80%",
          },
        },
      );

      gsap.fromTo(
        ".calculator-form",
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "expo.out",
          scrollTrigger: {
            trigger: ".calculator-form",
            start: "top 75%",
          },
        },
      );

      // Animate calculator icon
      gsap.to(".calc-icon", {
        rotation: 360,
        duration: 20,
        ease: "none",
        repeat: -1,
      });

      gsap.to(".calc-icon", {
        scale: 1.1,
        duration: 2,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const calculateLoan = () => {
    const requested = parseFloat(amountRequested) || 0;
    const duration = parseInt(loanDuration) || 30;

    // Simple calculation (these rates should match actual business logic)
    const interestRate = 0.02; // 2%
    const processingFee = 0.01; // 1%

    const interest = requested * interestRate;
    const fee = requested * processingFee;
    const totalDisbursed = requested - fee;

    setResult({
      amountRequested: requested,
      interestRate: interestRate * 100,
      interest: interest,
      processingFee: processingFee * 100,
      fee: fee,
      totalDisbursed: totalDisbursed,
      duration: duration,
    });
  };

  const resetCalculator = () => {
    setInvoiceAmount("");
    setAmountRequested("");
    setLoanDuration("");
    setResult(null);
  };

  return (
    <section
      ref={sectionRef}
      className="py-32 pt-12 px-4 sm:px-8 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="calculator-title text-sm uppercase tracking-[0.3em] text-[#D4AF37] mb-6">
            Calculator
          </h2>
          <h3 className="calculator-title text-4xl md:text-5xl mb-6">
            Find the best option <br />
            for you today
          </h3>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Calculator Form */}
          <div className="calculator-form glass-card p-8 md:p-12 rounded-3xl">
            {/* User Type Toggle */}
            <div className="flex gap-4 mb-8">
              <button
                onClick={() => setUserType("borrower")}
                className={`flex-1 py-3 px-6 rounded-full font-semibold transition-all duration-300 ${
                  userType === "borrower"
                    ? "bg-[#D4AF37] text-[#050505]"
                    : "bg-white/5 text-white/60 hover:bg-white/10"
                }`}
              >
                Borrower
              </button>
              <button
                onClick={() => setUserType("investor")}
                className={`flex-1 py-3 px-6 rounded-full font-semibold transition-all duration-300 ${
                  userType === "investor"
                    ? "bg-[#D4AF37] text-[#050505]"
                    : "bg-white/5 text-white/60 hover:bg-white/10"
                }`}
              >
                Investor
              </button>
            </div>

            {/* Form Fields */}
            <div className="space-y-6">
              <div>
                <label className="block text-sm text-white/60 mb-2">
                  Invoice Amount
                  <span className="text-xs ml-2 text-white/40">
                    VAT Inclusive
                  </span>
                </label>
                <div className="relative">
                  <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#D4AF37]" />
                  <input
                    type="number"
                    value={invoiceAmount}
                    onChange={(e) => setInvoiceAmount(e.target.value)}
                    placeholder="Enter invoice amount"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl py-2 pl-12 pr-4 text-white placeholder-white/30 focus:outline-none focus:border-[#D4AF37] transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm text-white/60 mb-2">
                  Amount Requested
                  <span className="text-xs ml-2 text-white/40">
                    VAT Inclusive
                  </span>
                </label>
                <div className="relative">
                  <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#D4AF37]" />
                  <input
                    type="number"
                    value={amountRequested}
                    onChange={(e) => setAmountRequested(e.target.value)}
                    placeholder="Enter amount requested"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl py-2 pl-12 pr-4 text-white placeholder-white/30 focus:outline-none focus:border-[#D4AF37] transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm text-white/60 mb-2">
                  Loan Duration (Days)
                </label>
                <div className="relative">
                  <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#D4AF37]" />
                  <select
                    value={loanDuration}
                    onChange={(e) => setLoanDuration(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-2xl py-2 pl-12 pr-4 text-white focus:outline-none focus:border-[#D4AF37] transition-colors appearance-none"
                  >
                    <option value="" className="bg-[#0a0a0a]">
                      Select a loan duration
                    </option>
                    <option value="7" className="bg-[#0a0a0a]">
                      7 days
                    </option>
                    <option value="14" className="bg-[#0a0a0a]">
                      14 days
                    </option>
                    <option value="30" className="bg-[#0a0a0a]">
                      30 days
                    </option>
                    <option value="60" className="bg-[#0a0a0a]">
                      60 days
                    </option>
                    <option value="90" className="bg-[#0a0a0a]">
                      90 days
                    </option>
                  </select>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 pt-4">
                <button
                  onClick={resetCalculator}
                  className="flex-1 py-2 px-6 bg-white/5 border-2 border-white/10 text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300"
                >
                  Reset
                </button>
                <button
                  onClick={calculateLoan}
                  className="flex-1 py-2 px-6 bg-[#D4AF37] text-[#050505] font-semibold rounded-full hover:shadow-[0_0_40px_rgba(212,175,55,0.4)] transition-all duration-300"
                >
                  Calculate
                </button>
              </div>
            </div>
          </div>

          {/* Results Panel */}
          <div className="calculator-form glass-card p-8 md:p-12 rounded-3xl">
            <div className="flex items-center gap-4 mb-8">
              <div className="size-12 rounded-2xl bg-gradient-to-br from-[#D4AF37]/20 to-[#D4AF37]/5 border border-[#D4AF37]/30 flex items-center justify-center">
                <CalcIcon className=" size-6 text-[#D4AF37]" />
              </div>
              <h4 className="text-2xl font-bold">Result</h4>
            </div>

            {result ? (
              <div className="space-y-6">
                <div>
                  <h5 className="text-2xl font-bold mb-6 text-[#D4AF37]">
                    Calculation Details
                  </h5>

                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-3 border-b border-white/10">
                      <span className="text-white/60 text-sm">
                        Amount Requested:
                      </span>
                      <span className="text-xl font-semibold">
                        TZS {result.amountRequested.toLocaleString()}
                      </span>
                    </div>

                    <div className="flex justify-between items-center py-3 border-b border-white/10">
                      <span className="text-white/60 text-sm">
                        Interest rate: {result.interestRate}%
                      </span>
                      <span className="text-xl font-semibold">
                        TZS {result.interest.toLocaleString()}
                      </span>
                    </div>

                    <div className="flex justify-between items-center py-3 border-b border-white/10">
                      <span className="text-white/60 text-sm">
                        Processing fee: {result.processingFee}%
                      </span>
                      <span className="text-xl font-semibold">
                        TZS {result.fee.toLocaleString()}
                      </span>
                    </div>

                    <div className="flex justify-between items-center py-2 mt-6 bg-[#D4AF37]/10 rounded-2xl px-4">
                      <span className="text-lg font-bold text-sm">
                        Total loan disbursed:
                      </span>
                      <span className="text-2xl font-bold text-[#D4AF37]">
                        TZS {result.totalDisbursed.toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="text-sm text-white/40 mt-6">
                  <p>* Loan duration: {result.duration} days</p>
                  <p>* These are estimated figures. Actual terms may vary.</p>
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center h-64 text-center">
                <div className="w-24 h-24 rounded-full bg-white/5 flex items-center justify-center mb-4">
                  <CalcIcon className="w-12 h-12 text-white/20" />
                </div>
                <p className="text-white/40 text-lg">
                  Enter your details and click Calculate <br />
                  to see your loan estimation
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Calculator;

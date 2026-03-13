import { useState } from "react";
import {
  TrendingUp,
  Upload,
  CheckCircle,
  Clock,
  Zap,
  Calendar,
  DollarSign,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Borrower = () => {
  const [invoiceAmount, setInvoiceAmount] = useState("");

  const calculateFees = (amount) => {
    if (!amount || isNaN(amount)) return null;

    const numAmount = parseFloat(amount);
    const amountRequested = numAmount * 0.85;
    const processingFee = amountRequested * 0.005;
    const serviceFee = amountRequested * 0.005;
    const loanInsurance = amountRequested * 0.01;
    const governmentCharge = amountRequested * 0.1;

    return {
      amountRequested,
      processingFee,
      serviceFee,
      loanInsurance,
      governmentCharge,
      total:
        amountRequested -
        processingFee -
        serviceFee -
        loanInsurance -
        governmentCharge,
    };
  };

  const fees = calculateFees(invoiceAmount);

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-TZ", {
      style: "currency",
      currency: "TZS",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    })
      .format(amount)
      .replace("TZS", "Tsh");
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-linear-to-r from-white via-[#D4AF37] to-white bg-clip-text text-transparent">
            Unlock Cash Flow. Fuel Your Growth.
          </h1>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Turn your unpaid invoices into fast, flexible funding designed for
            growing businesses like yours.
          </p>
        </div>
      </section>

      {/* Borrowing Calculator Section */}
      <section className="py-16 px-4 sm:px-8 bg-linear-to-b from-[#050505] to-[#0a0a0a]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Borrowing Calculator
            </h2>
            <p className="text-white/60">
              Office ipsum you must be muted. Prioritize.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Input Section */}
            <div className="glass-card p-8 rounded-3xl">
              <h3 className="text-2xl font-bold mb-6">Invoice Amount</h3>
              <div className="mb-6">
                <label className="block text-sm text-white/60 mb-2">
                  Enter Amount requested
                </label>
                <div className="relative">
                  <input
                    type="number"
                    value={invoiceAmount}
                    onChange={(e) => setInvoiceAmount(e.target.value)}
                    placeholder="0"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-2xl font-bold focus:outline-none focus:border-[#D4AF37] transition-colors"
                  />
                  <span className="absolute right-6 top-1/2 -translate-y-1/2 text-white/40">
                    TZS
                  </span>
                </div>
                <p className="text-sm text-white/40 mt-2">
                  The amount that you need
                </p>
              </div>
            </div>

            {/* Calculation Details */}
            <div className="glass-card p-8 rounded-3xl">
              <h3 className="text-2xl font-bold mb-4">Calculation Details</h3>
              <p className="text-sm text-white/60 mb-6">
                Turn your unpaid invoices into fast, flexible funding designed
                for growing businesses like yours.
              </p>

              {fees ? (
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-3 border-b border-white/10">
                    <span className="text-white/80">
                      Amount Requested: (Up to 85%)
                    </span>
                    <span className="font-bold text-[#D4AF37]">
                      {formatCurrency(fees.amountRequested)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/60 text-sm">
                      Processing fee: 0.5%
                    </span>
                    <span className="text-white/80">
                      - {formatCurrency(fees.processingFee)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/60 text-sm">
                      Service fee: 0.5%
                    </span>
                    <span className="text-white/80">
                      - {formatCurrency(fees.serviceFee)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/60 text-sm">
                      Loan insurance: 1%
                    </span>
                    <span className="text-white/80">
                      - {formatCurrency(fees.loanInsurance)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center pb-4">
                    <span className="text-white/60 text-sm">
                      Government charge: 10%
                    </span>
                    <span className="text-white/80">
                      - {formatCurrency(fees.governmentCharge)}
                    </span>
                  </div>

                  <div className="pt-4 border-t border-white/10">
                    <div className="flex justify-between items-center mb-4">
                      <span className="font-bold">You'll Receive:</span>
                      <span className="text-2xl font-bold text-[#D4AF37]">
                        {formatCurrency(fees.total)}
                      </span>
                    </div>
                    <button className="w-full px-6 py-4 bg-[#D4AF37] text-[#050505] font-bold rounded-full hover:bg-[#FFD700] transition-all duration-300 flex items-center justify-center gap-2">
                      Apply Now
                      <Zap className="w-5 h-5" />
                    </button>
                  </div>

                  <p className="text-xs text-white/40 text-center mt-3">
                    Apply in 3 mins • No long waits
                  </p>
                </div>
              ) : (
                <div className="text-center py-8 text-white/40">
                  <DollarSign className="w-12 h-12 mx-auto mb-4 opacity-20" />
                  <p>Enter an invoice amount to see your calculation</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              HOW IT WORKS
            </h2>
            <p className="text-xl text-white/60 mb-2">
              Getting funding has never been this easy!
            </p>
            <p className="text-white/40">
              Office ipsum you must be muted. Believe horse didn't 2 supervisor
              growth work.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="glass-card glass-card-hover p-8 rounded-3xl text-center">
              <div className="w-20 h-20 rounded-full bg-linear-to-br from-[#D4AF37]/20 to-[#D4AF37]/5 border border-[#D4AF37]/30 flex items-center justify-center mx-auto mb-6">
                <Upload className="w-10 h-10 text-[#D4AF37]" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Upload Your Invoice</h3>
              <p className="text-white/60">
                Submit your outstanding invoice in just a few clicks.
              </p>
            </div>

            {/* Step 2 */}
            <div className="glass-card glass-card-hover p-8 rounded-3xl text-center">
              <div className="w-20 h-20 rounded-full bg-linear-to-br from-[#D4AF37]/20 to-[#D4AF37]/5 border border-[#D4AF37]/30 flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-[#D4AF37]" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Get Verified</h3>
              <p className="text-white/60">
                We assess your application and verify details swiftly.
              </p>
            </div>

            {/* Step 3 */}
            <div className="glass-card glass-card-hover p-8 rounded-3xl text-center">
              <div className="w-20 h-20 rounded-full bg-linear-to-br from-[#D4AF37]/20 to-[#D4AF37]/5 border border-[#D4AF37]/30 flex items-center justify-center mx-auto mb-6">
                <Clock className="w-10 h-10 text-[#D4AF37]" />
              </div>
              <h3 className="text-2xl font-bold mb-4">
                Receive Funds in (Hours)
              </h3>
              <p className="text-white/60">
                Get money in your account within 48 hours, no stress.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Winvo */}
      <section className="py-16 px-4 sm:px-8 bg-linear-to-b from-[#0a0a0a] to-[#050505]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Why Winvo?</h2>
            <p className="text-xl text-white/60">
              Built for SMEs. Backed by Trust. Believe horse didn't 2 supervisor
              growth work.
            </p>
          </div>

          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center mb-8">
              Why they prefer Winvo
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="glass-card p-8 rounded-3xl">
                <div className="text-[#D4AF37] text-6xl font-bold mb-4">1</div>
                <h4 className="text-xl font-bold mb-3">Fast Funding</h4>
                <p className="text-white/60">
                  Approvals and disbursement within 48 hours.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="glass-card p-8 rounded-3xl">
                <div className="text-[#D4AF37] text-6xl font-bold mb-4">2</div>
                <h4 className="text-xl font-bold mb-3">Flexible Terms</h4>
                <p className="text-white/60">
                  Choose repayment that works for your business cycle.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="glass-card p-8 rounded-3xl">
                <div className="text-[#D4AF37] text-6xl font-bold mb-4">3</div>
                <h4 className="text-xl font-bold mb-3">Transparent Pricing</h4>
                <p className="text-white/60">
                  No hidden charges, know exactly what you're paying.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Impact */}
      <section className="py-16 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Impact</h2>
            <p className="text-xl text-white/60 mb-2">
              We've helped Small and Medium Businesses companies
            </p>
            <p className="text-white/40">
              Hundreds of all small and medium businesses across all industries
              have made big improvements with us.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Stat 1 */}
            <div className="glass-card p-8 rounded-3xl text-center">
              <div className="text-5xl md:text-6xl font-bold text-[#D4AF37] mb-4">
                50K+
              </div>
              <p className="text-lg text-white/80">Active Borrowers</p>
            </div>

            {/* Stat 2 */}
            <div className="glass-card p-8 rounded-3xl text-center">
              <div className="text-5xl md:text-6xl font-bold text-[#D4AF37] mb-4">
                30K+
              </div>
              <p className="text-lg text-white/80">Total Investors</p>
            </div>

            {/* Stat 3 */}
            <div className="glass-card p-8 rounded-3xl text-center">
              <div className="text-5xl md:text-6xl font-bold text-[#D4AF37] mb-4">
                25K+
              </div>
              <p className="text-lg text-white/80">Total Suppliers</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Borrower;

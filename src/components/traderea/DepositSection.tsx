"use client";

import { motion } from "framer-motion";

const methods = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
      </svg>
    ),
    title: "Wire Transfer",
    subtitle: "Bank wire transfer (ACH/SWIFT)",
    time: "1-3 business days",
    fee: "Free",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
      </svg>
    ),
    title: "ACH Transfer",
    subtitle: "Link your US bank account",
    time: "3-5 business days",
    fee: "Free",
  },
];

export default function DepositSection() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="max-w-[1320px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left - Deposit methods */}
          <div>
            <motion.h2
              className="text-3xl md:text-4xl font-sans text-navy mb-4"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              Start Investing In Minutes
            </motion.h2>

            <motion.p
              className="text-navy/70 text-xl leading-[1.7] mb-12 font-medium"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Fund Your Account Securely With Multiple Deposit Options.
            </motion.p>

            <div className="space-y-4">
              {methods.map((method, i) => (
                <motion.div
                  key={method.title}
                  className="border border-navy/10 p-6 hover:border-orange/30 hover:shadow-[0_8px_30px_rgba(15,28,63,0.06)] transition-all duration-500 cursor-pointer group"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-navy/5 flex items-center justify-center text-navy group-hover:bg-orange/10 group-hover:text-orange transition-all duration-300">
                        {method.icon}
                      </div>
                      <div>
                        <h3 className="text-navy text-lg font-bold">{method.title}</h3>
                        <p className="text-navy/70 text-base font-semibold">{method.subtitle}</p>
                      </div>
                    </div>
                    <svg className="w-5 h-5 text-navy/30 group-hover:text-orange transition-colors" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                  </div>
                  <div className="flex items-center gap-6 mt-4 pl-16">
                    <span className="flex items-center gap-1.5 text-navy/50 text-sm">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {method.time}
                    </span>
                    <span className="flex items-center gap-1.5 text-sm">
                      <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-green-600 font-semibold">Fee: {method.fee}</span>
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right - Wire transfer preview */}
          <motion.div
            className="bg-gray-light p-8 md:p-10 border border-navy/5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h3 className="text-navy text-2xl font-bold mb-8">Wire Transfer Instructions</h3>

            <div className="space-y-4">
              <div>
                <p className="text-navy/50 text-sm mb-1">Amount (USD)</p>
                <div className="bg-white border border-navy/10 px-4 py-3 text-navy text-lg font-semibold">200</div>
              </div>

              <div className="bg-white border border-navy/10 p-4 space-y-3">
                <div className="flex justify-between text-base">
                  <span className="text-navy/70">Deposit Amount</span>
                  <span className="text-navy font-semibold">$200.00</span>
                </div>
                <div className="flex justify-between text-base">
                  <span className="text-navy/70">Fee</span>
                  <span className="text-green-600 font-semibold">Free</span>
                </div>
                <div className="border-t border-navy/10 pt-3 flex justify-between text-base">
                  <span className="text-navy font-semibold">Amount credited</span>
                  <span className="text-navy font-bold text-lg">$200.00</span>
                </div>
              </div>

              <div className="bg-white border border-navy/10 p-4 space-y-3">
                <p className="text-navy font-bold text-base">Bank Details</p>
                {[
                  { label: "Bank Name", value: "NorthCapital" },
                  { label: "Account Name", value: "Avrance Exchange FBO" },
                  { label: "Routing", value: "122105278" },
                ].map((item) => (
                  <div key={item.label} className="flex justify-between text-base">
                    <span className="text-navy/70">{item.label}</span>
                    <span className="text-navy font-semibold">{item.value}</span>
                  </div>
                ))}
              </div>

              <button className="w-full bg-orange text-white py-4 text-base font-bold hover:bg-orange-light transition-colors duration-300 flex items-center justify-center gap-2">
                Generate Reference Code
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

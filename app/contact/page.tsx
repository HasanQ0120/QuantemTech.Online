'use client';

import { useEffect, useState } from 'react';

export default function ContactPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const whatsappNumber = '923001234567';
  const whatsappMessage = encodeURIComponent(
    'Hi, I found QuantumTech online and want to ask about a product.'
  );

  return (
    <div className="bg-quantum-bg min-h-screen">
      <div
        className={`max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20 space-y-8 sm:space-y-12 md:space-y-16 ${
          isVisible ? 'animate-fade-slide-up' : 'opacity-0'
        }`}
      >
        {/* Page Header */}
        <div className="text-center space-y-3 sm:space-y-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-quantum-text">
            Contact & Founder
          </h1>
          <p className="text-quantum-textMuted text-base sm:text-lg md:text-xl">
            Muhammad Hasan — Founder & CEO, QuantumTech
          </p>
          <p className="text-quantum-textMuted leading-relaxed text-sm sm:text-base max-w-2xl mx-auto pt-2 sm:pt-4 px-2">
            QuantumTech is a small, focused store built by Muhammad Hasan to make
            buying tech in Pakistan simpler and more trustworthy. Every product is
            curated with care, from local suppliers and partners he personally talks
            to.
          </p>
        </div>

        {/* Two Column Layout: Founder & Contact */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10">
          {/* Founder Section */}
          <div className="bg-quantum-bgAlt/50 border border-quantum-border rounded-2xl p-5 sm:p-6 md:p-8 space-y-4 sm:space-y-6">
            <h2 className="text-xl sm:text-2xl font-bold text-quantum-text">About the founder</h2>
            <p className="text-quantum-textMuted leading-relaxed text-sm sm:text-base">
              Muhammad Hasan is a student, builder, and tech enthusiast who loves
              bridging ideas and execution. QuantumTech is his way of learning
              business the right way – starting small, staying honest, and delivering
              real value to customers.
            </p>

            <div className="pt-2 sm:pt-4">
              <h3 className="text-base sm:text-lg font-semibold text-quantum-text mb-3 sm:mb-4">
                What you can expect
              </h3>
              <ul className="space-y-2 sm:space-y-3">
                <li className="flex items-start gap-2 sm:gap-3">
                  <span className="text-quantum-primary mt-1">•</span>
                  <span className="text-quantum-textMuted text-sm sm:text-base">
                    Honest, clearly shown pricing
                  </span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <span className="text-quantum-primary mt-1">•</span>
                  <span className="text-quantum-textMuted text-sm sm:text-base">
                    Products checked before listing
                  </span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <span className="text-quantum-primary mt-1">•</span>
                  <span className="text-quantum-textMuted text-sm sm:text-base">
                    Cash on delivery to build trust
                  </span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <span className="text-quantum-primary mt-1">•</span>
                  <span className="text-quantum-textMuted text-sm sm:text-base">
                    Responsive support via WhatsApp
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Section */}
          <div className="space-y-4 sm:space-y-6">
            <h2 className="text-xl sm:text-2xl font-bold text-quantum-text">Get in touch</h2>
            <p className="text-quantum-textMuted leading-relaxed text-sm sm:text-base">
              Whether you're a customer with a question or a supplier who wants to
              partner on quality gadgets, you can reach out any time.
            </p>

            <div className="space-y-4 sm:space-y-6 pt-2 sm:pt-4">
              {/* WhatsApp Button */}
              <a
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full px-6 py-3.5 sm:py-4 bg-gradient-to-r from-quantum-primary to-cyan-400 text-quantum-bg font-semibold rounded-xl hover:shadow-lg hover:shadow-quantum-primary/50 transition-all duration-300 text-center text-sm sm:text-base"
              >
                Chat on WhatsApp
              </a>

              {/* Email Line */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-0 py-2">
                <span className="text-quantum-textMuted text-sm sm:text-base">Email</span>
                <a
                  href="mailto:hello@quantumtech.online"
                  className="text-quantum-text hover:text-quantum-primary transition-colors duration-200 text-sm sm:text-base break-all sm:break-normal"
                >
                  hello@quantumtech.online
                </a>
              </div>

              {/* Response Time */}
              <p className="text-quantum-textMuted text-xs sm:text-sm pt-2">
                Typical response time: within 24 hours · Karachi time (PKT)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const quotes = [
  {
    stars: 5,
    quote:
      "Egolia represents a new model for real estate investment — one that combines institutional discipline with the accessibility of modern technology to create durable, compounding value.",
    name: "Samuel Babarinde",
    title: "Founder & Chairman Of The Board",
    image: "/images/Board Member/samuel.png",
  },
  {
    stars: 5,
    quote:
      "Our platform is purpose-built to align capital with long-term development opportunities, creating value that grows over time for all stakeholders across the ecosystem.",
    name: "Ravi Thakur",
    title: "Founder & Vice Chairman, Acting CEO",
    image: "/images/Board Member/raviheadshot512.512.png",
  },
  {
    stars: 5,
    quote:
      "What sets Egolia apart is the integration across development, capital markets, and digital infrastructure — a unified ecosystem that creates a genuine competitive moat.",
    name: "Tihomir Bajic",
    title: "Board Of Director",
    image: "/images/Board Member/tihomir.png",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function HomeTestimonials() {
  return (
    <section className="bg-[#FAFAF7] py-28 md:py-36">
      <div className="max-w-[1320px] mx-auto px-6 lg:px-12">

        {/* Heading */}
        <div className="max-w-xl mx-auto text-center mb-20">
          <motion.span
            className="inline-block text-orange text-[11px] font-bold tracking-[0.22em] uppercase mb-5"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Leadership
          </motion.span>
          <motion.h2
            className="text-4xl md:text-5xl font-sans text-navy leading-[1.1]"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            Hear from the{" "}
            <span className="text-orange">leaders</span>{" "}
            building Egolia.
          </motion.h2>
        </div>

        {/* Quote cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {quotes.map((q, i) => (
            <motion.div
              key={q.name}
              className="bg-white rounded-2xl p-8 flex flex-col shadow-[0_4px_24px_rgba(15,28,63,0.06)] hover:shadow-[0_16px_48px_rgba(15,28,63,0.10)] transition-shadow duration-500"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
            >
              {/* Quote mark */}
              <div className="text-orange/20 mb-4">
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              <Stars count={q.stars} />

              <p className="text-navy/60 text-sm leading-[1.9] mt-5 mb-8 flex-1">
                {q.quote}
              </p>

              {/* Divider */}
              <div className="border-t border-gray-medium pt-5 flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 relative ring-2 ring-orange/10">
                  <Image
                    src={q.image}
                    alt={q.name}
                    fill
                    className="object-cover object-top"
                    sizes="48px"
                  />
                </div>
                <div>
                  <div className="text-navy font-bold text-sm">{q.name}</div>
                  <div className="text-navy/45 text-xs mt-0.5">{q.title}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

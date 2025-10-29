"use client";
import Link from "next/link";
import { motion } from "framer-motion";

const CTASection = () => {
  return (
    <section className="relative overflow-hidden bg-linear-to-br from-black via-[#1a0d00] to-black py-24 md:py-32 lg:py-40">
      {/* Background Glowing Circles (Overflow Hidden) */}
      <div className="absolute top-0 -right-48 w-96 h-96 md:w-[500px] md:h-[500px] bg-orange-600/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 md:w-[450px] md:h-[450px] bg-orange-700/10 rounded-full blur-3xl animate-pulse delay-700"></div>

      {/* Top-Right Decorative Circle (animated from top to bottom) */}
      <motion.div
        className="absolute -top-[130px] -right-40 w-[376px] h-[376px] rounded-full"
        style={{
          background:
            "linear-gradient(180deg, rgba(239, 116, 30, 0.10) 0%, rgba(239, 116, 30, 0.10) 46.05%, rgba(239, 116, 30, 0.10) 97.43%)",
          boxShadow: `
            -1px -2px 4px 0 rgba(239, 116, 30, 0.60) inset,
            0 4px 4px 0 #EF741E,
            1px 2px 4px 0 rgba(239, 116, 30, 0.60) inset,
            0 4px 4px 0 rgba(239, 116, 30, 0.50)
          `,
          flexShrink: 0,
        }}
        initial={{ opacity: 0, y: -60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ type: "tween", ease: "easeOut", duration: 0.8 }}
      />

      {/* Bottom-Left Decorative Circle (animated) */}
      <motion.div
        className="absolute -bottom-[150px] -left-[150px] rounded-[502px]"
        style={{
          width: "502px",
          height: "502px",
          background:
            "linear-gradient(180deg, rgba(239, 116, 30, 0.10) -97%, rgba(239, 116, 30, 0.10) 6.35%, rgba(239, 116, 30, 0.04) 120.15%)",
          boxShadow:
            "1px 2px 4px 0 rgba(239, 116, 30, 0.60) inset, 0 4px 4px 0 #EF741E",
          flexShrink: 0,
        }}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ type: "tween", ease: "easeOut", duration: 0.8 }}
      />

      {/* Middle Glowing Decorative Circle */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-[796px]"
        style={{
          width: "796px",
          height: "334px",
          background: "#EF741E",
          filter: "blur(250px)",
          flexShrink: 0,
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
          Are You Ready To
          <br />
          <span className="text-orange-500">Start To Build?</span>
        </h1>

        <div className="mt-8 flex justify-center">
          <Link
            href="#"
            className="inline-flex items-center px-8 py-3 rounded-full transition-transform duration-300 hover:scale-105 text-white text-lg font-normal tracking-tight"
            style={{
              fontFamily: "Inter, sans-serif",
              letterSpacing: "-0.54px",
              lineHeight: "135%",
              borderRadius: "12px",
              border: "1px solid #EF741E",
              background:
                "linear-gradient(90deg, #EF741E 25.9%, rgba(239, 116, 30, 0.00) 100%)",
              boxShadow: "1px 1px 2px 0 rgba(255, 255, 255, 0.60) inset",
            }}
          >
            Get Started
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

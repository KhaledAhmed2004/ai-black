"use client";

import { useState } from "react";
import Link from "next/link";
import { Send, WandSparkles } from "lucide-react";

export default function HeroAI() {
  const [prompt, setPrompt] = useState("");

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Placeholder: hook up to your AI backend/action
    // For now, just log so the UI feels responsive
    console.log("Prompt submitted:", prompt);
  }

  return (
    <section className="relative bg-black text-white py-16 md:py-24 lg:py-32 overflow-hidden">
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Headline */}
        <h1 className="relative z-10 text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
          <span className="block">Build Smarter</span>
          <span className="block">Create Faster</span>
        </h1>

        {/* Left glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 -translate-x-[290px] shrink-0"
          style={{
            top: "-80px",
            width: "302px",
            height: "302px",
            borderRadius: "302px",
            background: "rgba(201, 135, 28, 0.65)",
            mixBlendMode: "plus-lighter",
            filter: "blur(45px)",
            zIndex: 0,
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "200px",
              height: "200px",
              borderRadius: "999px",
              background:
                "radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 60%, rgba(0,0,0,0.95) 80%, rgba(0,0,0,0.85) 100%)",
              opacity: 1,
              filter: "blur(6px)",
              boxShadow:
                "inset 0 0 40px rgba(0,0,0,1), 0 0 30px rgba(0,0,0,0.8)",
            }}
          />
        </div>

        {/* Right glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 -translate-x-[-80px] shrink-0"
          style={{
            top: "-10px",
            width: "302px",
            height: "302px",
            borderRadius: "302px",
            background: "rgba(201, 135, 28, 0.65)",
            mixBlendMode: "plus-lighter",
            filter: "blur(45px)",
            zIndex: 0,
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "200px",
              height: "200px",
              borderRadius: "999px",
              background:
                "radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 60%, rgba(0,0,0,0.95) 80%, rgba(0,0,0,0.85) 100%)",
              opacity: 1,
              filter: "blur(6px)",
              boxShadow:
                "inset 0 0 40px rgba(0,0,0,1), 0 0 30px rgba(0,0,0,0.8)",
            }}
          />
        </div>

        {/* Subheading */}
        <p className="mt-3 text-gray-400 text-sm md:text-base">
          Students can design, develop, and launch intelligent apps with
          real-time tools, smart insights, and zero coding limits — all in one
          platform.
        </p>

        {/* Actions */}
        <div className="mt-6 flex items-center justify-center gap-3">
          <Link
            href="#"
            className="inline-flex items-center px-8 py-3 rounded-full transition-transform duration-300 hover:scale-105"
            style={{
              color: "#FFF",
              fontFamily: "Inter, sans-serif",
              fontSize: "18px",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "135%",
              letterSpacing: "-0.54px",
              borderRadius: "12px",
              border: "1px solid #EF741E",
              background:
                "linear-gradient(90deg, #EF741E 25.9%, rgba(239, 116, 30, 0.00) 100%)",
              boxShadow: "1px 1px 2px 0 rgba(255, 255, 255, 0.60) inset",
            }}
          >
            <WandSparkles className="mr-2 h-5 w-5" />
            Make New App
          </Link>

          <Link
            href="#"
            className="inline-flex items-center px-8 py-3 rounded-full transition-transform duration-300 hover:scale-105"
            style={{
              color: "#FFF",
              fontFamily: "Inter, sans-serif",
              fontSize: "18px",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "135%",
              letterSpacing: "-0.54px",
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

        {/* Prompt box */}
        <form onSubmit={onSubmit} className="mt-8 sm:mt-10 relative">
          <div className="relative max-w-3xl mx-auto">
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Generate a Workout Planner For"
              className="w-full min-h-[140px] rounded-2xl bg-zinc-900/60 border border-orange-500/30 p-5 text-white placeholder:text-zinc-400 shadow-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <button
              type="submit"
              aria-label="Send"
              className="absolute bottom-4 right-4 h-10 w-10 rounded-full bg-orange-600 hover:bg-orange-500 grid place-items-center shadow-lg transition-colors"
            >
              <Send className="h-5 w-5" />
            </button>

            {/* Bottom circular glow behind textarea */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute left-1/2 -translate-x-1/2 shrink-0"
              style={{
                bottom: "70px", // adjust glow distance from textarea
                width: "800px",
                height: "90px",
                borderRadius: "924px",
                background: "rgba(239, 116, 20, 0.50)",
                mixBlendMode: "plus-lighter",
                filter: "blur(90px)",
              }}
            />
          </div>
        </form>
      </div>
      {/* Bottom circular glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 -translate-x-1/2 shrink-0"
        style={{
          bottom: "-1550px", // adjust as needed
          width: "1483px",
          height: "1577px",
          borderRadius: "1577px",
          background: "rgba(239, 116, 30, 0.50)",
          mixBlendMode: "plus-lighter",
          filter: "blur(125px)",
        }}
      />
    </section>
  );
}

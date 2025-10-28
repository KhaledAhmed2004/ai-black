"use client";

import { useState } from "react";
import Link from "next/link";
import { Send } from "lucide-react";

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
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
          <span className="block">Build Smarter</span>
          <span className="block">Create Faster</span>
        </h1>

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
            className="inline-flex items-center px-5 py-2.5 text-sm md:text-base font-medium text-white bg-gradient-to-r from-orange-600 to-orange-500 rounded-full shadow-lg hover:from-orange-500 hover:to-orange-400 transform hover:scale-105 transition-all"
          >
            Make New App
          </Link>
          <Link
            href="#"
            className="inline-flex items-center px-5 py-2.5 text-sm md:text-base font-medium text-white/90 bg-white/10 border border-white/20 rounded-full hover:bg-white/20 transition-all"
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
              className="pointer-events-none absolute left-1/2 -translate-x-1/2 flex-shrink-0"
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
        className="pointer-events-none absolute left-1/2 -translate-x-1/2 flex-shrink-0"
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

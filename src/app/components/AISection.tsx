"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type Feature = {
  title: string;
  description: string;
  iconName:
    | "engineer"
    | "nocode"
    | "debug"
    | "database"
    | "workflows"
    | "hosting"
    | "pricing"
    | "budget";
  span?: number; // md column span (2 or 3)
  rowSpan?: number; // md row span (2 or 3)
  size?: "lg" | "md";
  iconRight?: boolean;
  note?: string;
  showNoteDot?: boolean;
};

function Icon({ name }: { name: Feature["iconName"] }) {
  const common = {
    viewBox: "0 0 24 24",
    className: "h-5 w-5",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  switch (name) {
    case "engineer":
      return (
        <svg {...common}>
          <rect x="3" y="5" width="18" height="12" rx="2" />
          <path d="M8 19h8" />
        </svg>
      );
    case "nocode":
      return (
        <svg {...common}>
          <path d="M4 20l7-7" />
          <path d="M14 7l3-3 3 3-3 3-3-3z" />
        </svg>
      );
    case "debug":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="3" />
          <path d="M7 8l-2-2" />
          <path d="M17 8l2-2" />
          <path d="M7 16l-2 2" />
          <path d="M17 16l2 2" />
          <path d="M12 5v2" />
          <path d="M12 17v2" />
        </svg>
      );
    case "database":
      return (
        <svg {...common}>
          <ellipse cx="12" cy="6" rx="7" ry="3" />
          <path d="M5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6" />
          <path d="M5 12v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6" />
        </svg>
      );
    case "workflows":
      return (
        <svg {...common}>
          <circle cx="7" cy="12" r="3" />
          <circle cx="17" cy="12" r="3" />
          <path d="M10 12h4" />
        </svg>
      );
    case "hosting":
      return (
        <svg {...common}>
          <rect x="4" y="6" width="16" height="4" rx="1" />
          <rect x="4" y="12" width="16" height="4" rx="1" />
          <path d="M7 8h0" />
          <path d="M7 14h0" />
        </svg>
      );
    case "pricing":
      return (
        <svg {...common}>
          <path d="M12 3v18" />
          <path d="M16 7a4 4 0 0 0-4-2 4 4 0 0 0-4 2" />
          <path d="M8 17a4 4 0 0 0 4 2 4 4 0 0 0 4-2" />
        </svg>
      );
    case "budget":
      return (
        <svg {...common}>
          <rect x="4" y="9" width="16" height="9" rx="2" />
          <path d="M8 9V7a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
        </svg>
      );
    default:
      return <svg {...common} />;
  }
}

const features: Feature[] = [
  // Large featured card: spans col 1-2 and row 1-2
  {
    title: "Full Stack AI Engineer",
    description:
      "AI builds your full stack app with a prompt. Build and scale your apps with AI.",
    iconName: "engineer",
    span: 2,
    rowSpan: 2,
    size: "lg",
    note: "AI generating your app...",
    showNoteDot: true,
  },
  // Row 1: small cards for col 3 and col 4
  {
    title: "NoCode Editors",
    description:
      "Simple nocode editing tools to change content, styles and configs of AI apps.",
    iconName: "nocode",
  },
  {
    title: "Easy To Debug",
    description:
      "Powerful debugging tools help you inspect, fix and improve generated apps.",
    iconName: "debug",
  },
  // Row 2: tall card spanning col 3-4
  {
    title: "Integrated Database",
    description:
      "Build apps seamlessly connected to a backend database, not just a UI layer.",
    iconName: "database",
    span: 2,
    size: "lg",
    iconRight: true,
  },
  // Row 3: four small cards across col 1-4
  {
    title: "Automated Workflows",
    description:
      "Automate backend processing and third‑party integrations with minimal setup.",
    iconName: "workflows",
  },
  {
    title: "Managed Hosting",
    description:
      "Hassle‑free hosting on your domain. No DevOps stress—deploy in seconds.",
    iconName: "hosting",
  },
  {
    title: "Usage Based Pricing",
    description:
      "Only pay for what you use—no complicated subscriptions or hidden fees.",
    iconName: "pricing",
  },
  {
    title: "Budget Friendly Services",
    description:
      "Get affordable help from a trusted pool of developers to scale faster.",
    iconName: "budget",
  },
];

export default function AISection() {
  const cardVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="bg-black py-16 md:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-white mb-12 md:mb-16">
          Features
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-3 gap-6 md:gap-8">
          {features.map((f, i) => (
            <motion.div
              key={i}
              className={cn(
                "group bg-[#121212] rounded-2xl border border-orange-500/20",
                "shadow-md hover:shadow-orange-900/25 transition-all",
                f.size === "lg" ? "md:min-h-[220px]" : "md:min-h-[160px]",
                // Tailwind col-span must be literal classes
                f.span === 2 ? "md:col-span-2" : f.span === 3 ? "md:col-span-3" : undefined,
                f.rowSpan === 2 ? "md:row-span-2" : f.rowSpan === 3 ? "md:row-span-3" : undefined
              )}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              variants={cardVariants}
              transition={{ type: "tween", ease: "easeOut", duration: 0.5, delay: i * 0.08 }}
            >
              <div className="p-6 md:p-7">
                {f.iconRight ? (
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-white font-semibold text-base md:text-lg">
                      {f.title}
                    </h3>
                    <div className="h-9 w-9 rounded-md bg-orange-600/10 text-orange-500 grid place-items-center ring-1 ring-orange-500/30 border border-orange-500/30">
                      <Icon name={f.iconName} />
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-9 w-9 rounded-md bg-orange-600/10 text-orange-500 grid place-items-center ring-1 ring-orange-500/30 border border-orange-500/30">
                      <Icon name={f.iconName} />
                    </div>
                    <h3 className="text-white font-semibold text-base md:text-lg">
                      {f.title}
                    </h3>
                  </div>
                )}

                <p className="text-zinc-400 text-sm md:text-[15px] leading-relaxed">
                  {f.description}
                </p>

                {f.note && (
                  <div className="mt-5 flex items-center gap-2 text-[13px] text-orange-400">
                    {f.showNoteDot && (
                      <span className="inline-block h-2 w-2 rounded-full bg-orange-500"></span>
                    )}
                    {f.note}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
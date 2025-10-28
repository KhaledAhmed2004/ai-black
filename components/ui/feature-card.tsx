"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface FeatureCardProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  reversed?: boolean;
  priority?: boolean;
  className?: string;
  width?: number;
  height?: number;
  animateOnScroll?: boolean;
  hoverEffect?: boolean;
  entryDelay?: number;
  textDirection?: "left" | "right" | "auto";
}

function FeatureCard({
  title,
  description,
  imageSrc,
  imageAlt,
  reversed = false,
  priority = false,
  className,
  width = 600,
  height = 360,
  animateOnScroll = true,
  hoverEffect = true,
  entryDelay = 0,
  textDirection = "auto",
}: FeatureCardProps) {
  const containerVariants = {
    hidden: { opacity: 0, y: 18 },
    visible: { opacity: 1, y: 0 },
  };

  const resolvedTextDirection =
    textDirection === "auto" ? (reversed ? "right" : "left") : textDirection;

  const textVariants = {
    hidden: {
      opacity: 0,
      x: resolvedTextDirection === "left" ? -24 : 24,
    },
    visible: { opacity: 1, x: 0 },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.995 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <motion.div
      className={cn(
        "grid md:grid-cols-2 gap-12 md:gap-16 items-center",
        className
      )}
      initial="hidden"
      animate={!animateOnScroll ? "visible" : undefined}
      whileInView={animateOnScroll ? "visible" : undefined}
      viewport={animateOnScroll ? { once: false, amount: 0.15 } : undefined}
      variants={containerVariants}
      transition={{ type: "tween", ease: "easeOut", duration: 0.6, delay: entryDelay }}
    >
      <motion.div
        className={cn("space-y-6", reversed && "md:order-2")}
        variants={textVariants}
        transition={{
          type: "tween",
          ease: "easeOut",
          duration: 0.55,
          delay: entryDelay + 0.05,
        }}
      >
        <h3 className="text-xl md:text-2xl font-semibold">{title}</h3>
        <p className="text-gray-400 text-sm md:text-base leading-relaxed">
          {description}
        </p>
      </motion.div>
      <motion.div
        className={cn(
          "flex justify-center",
          reversed ? "md:justify-start md:order-1" : "md:justify-end"
        )}
        variants={imageVariants}
        whileHover={hoverEffect ? { y: -2, scale: 1.01 } : undefined}
        transition={{ type: "tween", ease: "easeOut", duration: 0.55, delay: entryDelay + 0.1 }}
      >
        <div className="relative w-full max-w-sm md:max-w-md">
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={width}
            height={height}
            className="rounded-2xl shadow-2xl object-contain"
            priority={priority}
          />
        </div>
      </motion.div>
    </motion.div>
  );
}

export { FeatureCard };

"use client";

import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Plan {
  name: string;
  price: number;
  icon: string;
  featured: boolean;
  features: string[];
}

interface PricingCardProps {
  plan: Plan;
}

export default function PricingCard({ plan }: PricingCardProps) {
  return (
    <div
      className={`relative w-full max-w-sm rounded-2xl border transition-all duration-300 hover:scale-105 ${
        plan.featured
          ? "border-amber-600/50 bg-gradient-to-br from-amber-950/40 to-amber-900/20 shadow-2xl shadow-amber-900/20 lg:scale-105"
          : "border-gray-700/50 bg-gray-900/40 hover:border-gray-600/50"
      }`}
    >
      {/* Card Content */}
      <div className="flex flex-col h-full p-6 sm:p-8">
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div
            className={`flex items-center justify-center w-14 h-14 rounded-full ${
              plan.featured ? "bg-white text-black" : "bg-orange-500 text-white"
            }`}
          >
            <span className="text-2xl">{plan.icon}</span>
          </div>
        </div>

        {/* Plan Name */}
        <h3 className="text-xl sm:text-2xl font-semibold text-center mb-2">
          {plan.name}
        </h3>

        {/* Price */}
        <div className="text-center mb-6">
          <span className="text-3xl sm:text-4xl font-bold">${plan.price}</span>
          <span className="text-gray-400 text-sm sm:text-base">/month</span>
        </div>

        {/* Features */}
        <div className="flex-1 space-y-4 mb-8">
          {plan.features.map((feature, index) => (
            <div key={index} className="flex items-start gap-3">
              <Check
                className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                  plan.featured ? "text-white" : "text-orange-500"
                }`}
              />
              <span className="text-sm sm:text-base text-gray-300">
                {feature}
              </span>
            </div>
          ))}
        </div>

        {/* Button */}
        <Button
          className={`w-full py-2.5 sm:py-3 rounded-full font-semibold transition-all duration-300 ${
            plan.featured
              ? "bg-white text-black hover:bg-gray-100"
              : "border border-gray-600 text-white hover:border-gray-500 hover:bg-gray-800/50"
          }`}
          variant={plan.featured ? "default" : "outline"}
        >
          Get started
        </Button>
      </div>
    </div>
  );
}

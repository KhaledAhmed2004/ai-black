import Link from "next/link";
import PricingCard from "./components/pricing-card";
import { FeatureCard } from "@/components/ui/feature-card";
import FAQSection from "./components/FAQSection";
import AISection from "./components/AISection";
import TestimonialCarousel from "./components/TestimonialCarousel";
import HeroAI from "./components/HeroAI";
import VideoSection from "./components/VideoSection";
import CTASection from "./components/CTASection";
import { Layers } from "lucide-react";

export default function Home() {
  const testimonials = [
    {
      rating: 4.9,
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
      name: "Mendela",
      imageSrc: "/images/one.png",
    },
    {
      rating: 4.9,
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
      name: "Mendela",
      imageSrc: "/images/two.png",
    },
    {
      rating: 4.9,
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
      name: "Mendela",
      imageSrc: "/images/three.png",
    },
    {
      rating: 4.9,
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
      name: "Mendela",
      imageSrc: "/images/four.png",
    },
  ];
  const plans = [
    {
      name: "General",
      price: 24.99,
      icon: <Layers className="w-6 h-6" />,
      featured: false,
      features: [
        "Yearly subscriptions",
        "Unlimited Web Create",
        "App Creation Unlimited",
        "Re Function",
      ],
    },
    {
      name: "Premium",
      price: 14.99,
      icon: <Layers className="w-6 h-6" />,
      featured: true,
      features: [
        "Yearly subscriptions",
        "Unlimited Web Create",
        "App Creation Unlimited",
        "Re Function",
      ],
    },
    {
      name: "Extra",
      price: 24.99,
      icon: <Layers className="w-6 h-6" />,
      featured: false,
      features: [
        "Yearly subscriptions",
        "Unlimited Web Create",
        "App Creation Unlimited",
        "Re Function",
      ],
    },
  ];

  return (
    <main>
      {/* AI Prompt Hero */}
      <HeroAI />

      {/* Video Preview Section */}
      <VideoSection />

      <section className="bg-black text-white py-16 md:py-24 lg:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Title */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-16 md:mb-20">
            Build and launch apps effortlessly.
          </h2>

          {/* Feature Cards */}
          <FeatureCard
            title="No coding experience required"
            description="Replit’s AI tools handle the technical complexity, allowing anyone—from students and hobbyists to business professionals—to create powerful applications."
            imageSrc="/images/one.png"
            imageAlt="No coding experience required"
            priority
            className="mb-20 md:mb-28"
            animateOnScroll
            entryDelay={0}
          />

          <FeatureCard
            title="Integrated cloud services"
            description="Deploy in seconds with built-in cloud hosting, storage, authentication systems, and secrets management for API keys—all configured automatically and securely by Replit."
            imageSrc="/images/two.png"
            imageAlt="Integrated cloud services"
            reversed
            className="mb-20 md:mb-28"
            animateOnScroll
            entryDelay={0.12}
          />

          <FeatureCard
            title="Build from your phone"
            description="Create and manage web apps on the go with Replit’s mobile app, available for iOS and Android—the only platform that lets you build full-stack applications from your phone."
            imageSrc="/images/three.png"
            imageAlt="Build from your phone"
            className="mb-20 md:mb-28"
            animateOnScroll
            entryDelay={0.24}
          />

          <FeatureCard
            title="Collaborate in real time"
            description="Work on projects with teammates in a Google Docs-like experience, with multiple people editing and testing simultaneously."
            imageSrc="/images/four.png"
            imageAlt="Real-time collaboration"
            reversed
            animateOnScroll
            entryDelay={0.36}
          />
        </div>
      </section>

      {/* Existing larger AI Features grid below */}
      <AISection />

      <div className="min-h-screen bg-black text-white">
        {/* Header */}
        <div className="flex flex-col items-center justify-center px-4 py-16 sm:py-20 md:py-24">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center text-balance">
            Pricing List
          </h1>
        </div>

        {/* Pricing Cards */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-6 px-4 pb-16 sm:pb-20 md:pb-24">
          {plans.map((plan, index) => (
            <PricingCard key={index} plan={plan} />
          ))}
        </div>
      </div>

      <section className="bg-black py-16 md:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Title */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-12 md:mb-16">
            What Our Students Say
          </h2>

          {/* Testimonial Carousel */}
          <TestimonialCarousel testimonials={testimonials} />
        </div>
      </section>
      <FAQSection />

      {/* Call to Action */}
      <CTASection />
    </main>
  );
}

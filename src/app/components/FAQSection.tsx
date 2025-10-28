// app/components/FAQSection.tsx
"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

/* -------------------------------------------------
   Reusable FAQ Item (accordion)
   ------------------------------------------------- */
type FAQItemProps = {
  question: string;
  answer: string;
};

function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="bg-gray-900 rounded-2xl overflow-hidden transition-all duration-300 hover:bg-gray-850 cursor-pointer border border-gray-800"
      onClick={() => setIsOpen(!isOpen)}
    >
      {/* Question */}
      <div className="flex items-center justify-between p-5 md:p-6">
        <h3 className="text-white text-base md:text-lg font-medium pr-4">
          {question}
        </h3>
        <ChevronDown
          className={`w-5 h-5 text-orange-500 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </div>

      {/* Answer – collapsible */}
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-5 md:px-6 pb-5 md:pb-6">
          <p className="text-gray-400 text-sm md:text-base leading-relaxed">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------
   Main FAQ Section
   ------------------------------------------------- */
export default function FAQSection() {
  const faqs = [
    {
      question: "Bero et velit interdum, ac aliquet odio mattis. ?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Bero et velit interdum, ac aliquet odio mattis. Bero et velit interdum, ac aliquet odio mattis. Bero et velit interdum, ac aliquet odio mattis.",
    },
    {
      question: "Bero et velit interdum, ac aliquet odio mattis. ?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Bero et velit interdum, ac aliquet odio mattis. Bero et velit interdum, ac aliquet odio mattis. Bero et velit interdum, ac aliquet odio mattis.",
    },
    {
      question: "Bero et velit interdum, ac aliquet odio mattis. ?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Bero et velit interdum, ac aliquet odio mattis. Bero et velit interdum, ac aliquet odio mattis. Bero et velit interdum, ac aliquet odio mattis.",
    },
  ];

  return (
    <section className="bg-black py-16 md:py-24 lg:py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-400 text-sm md:text-base mb-12">
          Everything you need to know about Ai
        </p>

        {/* FAQ Items */}
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
}

'use client'

import { useState } from "react";
import { motion } from "motion/react"
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

interface FaqItemProps {
  question: string;
  answer: string;
}

export default function FaqItem({ question, answer }: FaqItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      {/* Question */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center py-4 text-left focus:outline-none"
        aria-expanded={isOpen}
      >
        <span className="text-lg font-medium text-gray-800">{question}</span>
        {isOpen ? (
          <FaChevronUp className="text-gray-500" />
        ) : (
          <FaChevronDown className="text-gray-500" />
        )}
      </button>

      {/* Réponse avec animation */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={isOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <p className="text-gray-600 text-sm py-2">{answer}</p>
      </motion.div>
    </div>
  );
}
'use client';

import React, { useState, useEffect, useRef } from 'react';
import { FiPlus, FiMinus } from 'react-icons/fi';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const faqData = [
  {
    question: "Lorem ipsum dolor sit amet consectetur?",
    answer:
      "Lorem ipsum dolor sit amet consectetur. Vulputate amet aliquet morbi suspendisse convallis. Urna a urna lectus donec felis risus duis pellentesque. Pellentesque ultricies ipsum.",
  },
  {
    question: "Lorem ipsum dolor sit amet consectetur?",
    answer:
      "Lorem ipsum dolor sit amet consectetur. Vulputate amet aliquet morbi suspendisse convallis. Urna a urna lectus donec felis risus duis pellentesque. Pellentesque ultricies ipsum.",
  },
  {
    question: "Lorem ipsum dolor sit amet consectetur?",
    answer:
      "Lorem ipsum dolor sit amet consectetur. Vulputate amet aliquet morbi suspendisse convallis. Urna a urna lectus donec felis risus duis pellentesque. Pellentesque ultricies ipsum.",
  },
  {
    question: "Lorem ipsum dolor sit amet consectetur?",
    answer:
      "Lorem ipsum dolor sit amet consectetur. Vulputate amet aliquet morbi suspendisse convallis. Urna a urna lectus donec felis risus duis pellentesque. Pellentesque ultricies ipsum.",
  },
  {
    question: "Lorem ipsum dolor sit amet consectetur?",
    answer:
      "Lorem ipsum dolor sit amet consectetur. Vulputate amet aliquet morbi suspendisse convallis. Urna a urna lectus donec felis risus duis pellentesque. Pellentesque ultricies ipsum.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const faqRefs = useRef([]);

  useEffect(() => {
    faqRefs.current.forEach((el, index) => {
      if (!el) return;
      gsap.fromTo(
        el,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
          delay: index * 0.1, // stagger effect
        }
      );
    });
  }, []);

  const toggle = (index) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <section className="px-4 sm:px-6 lg:px-20 py-16 bg-white max-w-6xl mx-auto">
      <h2 className="text-2xl sm:text-3xl font-bold mb-10 text-left">
        FREQUENTLY ASKED QUESTIONS (FAQS)
      </h2>
      <div className="space-y-4">
        {faqData.map((item, index) => (
          <div
            key={index}
            ref={(el) => (faqRefs.current[index] = el)}
            className="border border-gray-200 rounded-lg p-4 sm:p-6 overflow-hidden"
          >
            <div
              className="flex items-center justify-between cursor-pointer"
              onClick={() => toggle(index)}
            >
              <h3 className="font-semibold text-gray-900 text-base sm:text-lg">
                {item.question}
              </h3>
              <span className="text-gray-700 text-xl">
                {openIndex === index ? <FiMinus /> : <FiPlus />}
              </span>
            </div>

            {/* Smooth toggle animation for answer */}
            <div
              style={{
                height: openIndex === index ? 'auto' : 0,
                overflow: 'hidden',
                transition: 'height 0.3s ease, opacity 0.3s ease',
                opacity: openIndex === index ? 1 : 0,
                marginTop: openIndex === index ? '12px' : '0px',
              }}
            >
              <p className="text-gray-700 text-sm sm:text-base">
                {item.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;

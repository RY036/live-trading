"use client"; // Required for hooks in Next.js App Router

import { useState } from "react";
import ContactTemplate from "./contactTemplate";

type FAQItem = {
  question: string;
  answer: string;
};

const faqData: FAQItem[] = [
  {
    question: "What is your trading strategy about?",
    answer:
      "Our Algo Atlas Edge trading strategy combines technical analysis with machine learning to identify high-probability trading opportunities. It analyzes market patterns, volume, and trends to generate precise entry and exit points for trades.",
  },
  {
    question: "Do I need trading experience to use your platform?",
    answer:
      "While trading experience can be beneficial, our platform is designed to be user-friendly for both beginners and experienced traders. We provide comprehensive tutorials and support to help you get started.",
  },
  {
    question: "How reliable are your trading signals?",
    answer:
      "Our trading signals are generated using sophisticated algorithms and have been extensively backtested. We maintain a high accuracy rate and provide detailed performance metrics for transparency.",
  },
  {
    question: "What markets do you support?",
    answer:
      "We support a wide range of markets including major forex pairs, cryptocurrencies, commodities, and stock indices. Our platform continuously monitors these markets 24/7 for trading opportunities.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index); // Close if already open
  };

  const handleContactModal = () => {
    setIsContactModalOpen((prev) => !prev);
  }

  return (
    <>
      <section
        className="mt-20 flex max-w-7xl flex-col px-4 max-md:mt-10"
        aria-labelledby="faq-heading"
      >
        <div className="flex max-w-[670px] flex-col">
          <h2
            id="faq-heading"
            className="text-7xl font-light leading-none text-neutral-800 max-md:text-4xl"
          >
            FAQ&apos;s
          </h2>
          <p className="mt-6 text-2xl text-zinc-600">
            Got Questions? We&apos;ve Got Answers!
          </p>
        </div>

        <div className="mt-16 flex w-full flex-col max-md:mt-10">
          {faqData.map((faq, index) => (
            <details
              key={index}
              open={openIndex === index}
              className="flex min-h-[77px] w-full flex-col overflow-hidden border-b border-gray-100 py-5"
            >
              <summary
                onClick={(e) => {
                  e.preventDefault();
                  toggleFAQ(index);
                }}
                className="flex cursor-pointer list-none items-center gap-9"
                role="button"
                aria-expanded={openIndex === index}
              >
                <div className="relative flex h-6 w-6 items-center justify-center overflow-hidden px-1.5 py-3">
                  <div className="absolute h-0.5 w-3.5 bg-neutral-800"></div>
                  <div
                    className={`absolute h-3.5 w-0.5 bg-neutral-800 ${openIndex === index ? "hidden" : ""
                      }`}
                  ></div>
                </div>
                <span className="text-xl font-medium leading-9 text-neutral-800">
                  {faq.question}
                </span>
              </summary>
              {openIndex === index && (
                <div className="mt-5 flex items-start gap-3 pl-16 max-md:pl-5">
                  <div className="w-0.5 self-stretch bg-green-500"></div>
                  <div className="text-lg leading-9 text-neutral-800">
                    {faq.answer}
                  </div>
                </div>
              )}
            </details>
          ))}
        </div>


      </section>
      <div className="mt-10 flex flex-col items-center justify-center  text-center mb-10">
        <p className="text-2xl leading-none text-neutral-800">
          Have More Questions? Feel Free to Reach Out to Us
        </p>
        <button
          onClick={() => handleContactModal()}
          className="mt-8 flex min-h-[48px] items-center justify-center gap-2 rounded-[80px] bg-green-500 px-6 py-3.5 text-base font-medium text-black hover:bg-green-600"
        >
          <span>Contact Us</span>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="my-auto aspect-square self-stretch"
          >
            <path
              d="M4.16666 10H15.8333M15.8333 10L10 4.16669M15.8333 10L10 15.8334"
              stroke="currentColor"
              strokeWidth="1.67"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
      {isContactModalOpen && <ContactTemplate CloseFunc={handleContactModal} />}

    </>
  );
}

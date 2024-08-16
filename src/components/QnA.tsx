import { useState } from "react";
import FadeIn from "../components/FadeIn";
import Container from "./Container";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ: FAQItem[] = [
  {
    question: "How should I prepare for an HR interview?",
    answer:
      "Research the company, review your resume and experience, practice answering common interview questions.",
  },
  {
    question: "How long should an HR interview typically last?",
    answer: "30 minutes to 1 hour, depending on the company and role.",
  },
  {
    question: "30 minutes to 1 hour, depending on the company and role.",
    answer:
      "Yes, prepare questions to ask the HR representative about the company and role.",
  },
  {
    question: "Can I negotiate salary during the HR interview?",
    answer:
      "It's best to wait until the final interview or after a job offer is extended.",
  },
  {
    question: "Can I follow up with the HR representative after the interview?",
    answer:
      "Yes, send a thank-you note or email to express gratitude and interest",
  },
  {
    question: "How do I handle a phone or video interview?",
    answer:
      "Choose a quiet space, dress professionally, and use a headset or earbuds.",
  },
  {
    question: "What should i include in my resume?",
    answer:
      "Here are the essential sections and information to include in your resume:",
  },
];

function QnA() {
  const [isOpen, setIsOpen] = useState<boolean[]>(
    Array(FAQ.length).fill(false)
  );

  const handleToggle = (index: number) => {
    const updatedIsOpen = [...isOpen];
    updatedIsOpen[index] = !updatedIsOpen[index];
    setIsOpen(updatedIsOpen);
  };

  return (
    <Container className="min-h-[100svh] flex justify-center items-center">
      <div className="container mx-auto mt-10">
        <FadeIn>
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">
            Frequently Asked<span className="text-[#0ACDB7]"> Questions</span>
          </h1>
        </FadeIn>
        <FadeIn>
          <div className="grid grid-cols-1 gap-4">
            {FAQ.map((item, index) => (
              <div
                key={index}
                className="rounded-md p-4 cursor-pointer"
                onClick={() => handleToggle(index)}
              >
                <div className="flex justify-between items-center">
                  <h2 className="text-lg font-semibold">{item.question}</h2>
                  <svg
                    className={`w-6 h-6 ${
                      isOpen[index] ? "transform rotate-180" : ""
                    }`}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                {isOpen[index] && (
                  <p className="mt-2 text-gray-700">{item.answer}</p>
                )}
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </Container>
  );
}

export default QnA;

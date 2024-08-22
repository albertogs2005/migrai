"use client";

import { useState } from 'react';
import SectionWrapper from './SectionWrapper'; 

interface FAQ {
  question: string;
  answer: string;
}

const faqData: FAQ[] = [
  { question: "¿Qué es MigrAI?", answer: "MigrAI es una empresa que se especializa en integrar inteligencia artificial en las empresas." },
  { question: "¿Cómo pueden ayudarme?", answer: "Ofrecemos servicios personalizados de consultoría, desarrollo de modelos y automatización de procesos." },
  { question: "¿Qué tipo de empresas pueden beneficiarse?", answer: "Cualquier empresa que quiera optimizar sus operaciones mediante el uso de inteligencia artificial." },
];

export default function FAQSection() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
      <SectionWrapper id="faq" className="bg-[#056078] text-white py-16">
        <h2 className="text-3xl font-bold text-center mb-8">Preguntas Frecuentes</h2>
        <div className="space-y-4 max-w-3xl mx-auto">
          {faqData.map((faq, index) => (
            <div
              key={index}
              onClick={() => toggleFAQ(index)}
              className="p-4 bg-[#47ABC8] rounded-lg cursor-pointer transition-all duration-300 ease-in-out"
            >
              <h3 className="font-bold flex justify-between items-center">
                {faq.question}
                <span className="text-2xl">
                  {activeIndex === index ? '-' : '+'}
                </span>
              </h3>
              {activeIndex === index && (
                <p className="mt-2 text-white transition-opacity duration-500 ease-in-out">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </SectionWrapper>
    );
}

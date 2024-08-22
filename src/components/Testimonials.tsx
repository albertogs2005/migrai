"use client";

import React, { useState, useRef } from "react";
import SectionWrapper from "./SectionWrapper";
import EachTestimonial from "./EachTestimonial";

interface Testimonial {
  image: string;
  brand: string;
  testimonial: string;
}

export default function Testimonials() {
  const testimonials: Testimonial[] = [
    {
      image: "/assets/images/client/client1.webp",
      brand: "Empresa A",
      testimonial: "La mejor decisión que hemos tomado para nuestra empresa.",
    },
    {
      image: "/assets/images/client/client2.webp",
      brand: "Empresa B",
      testimonial: "Una solución innovadora que realmente funciona.",
    },
    {
      image: "/assets/images/client/client3.webp",
      brand: "Empresa C",
      testimonial: "MigrAI ha transformado nuestra forma de trabajar.",
    },
    {
      image: "/assets/images/client/client4.webp",
      brand: "Empresa D",
      testimonial: "Gracias a MigrAI, hemos automatizado procesos clave, lo que nos ha permitido ahorrar tiempo y recursos.",
    },
    {
      image: "/assets/images/client/client5.webp",
      brand: "Empresa E",
      testimonial: "El soporte y la experiencia de MigrAI han sido fundamentales para nuestra transformación digital.",
    },
    {
      image: "/assets/images/client/client6.webp",
      brand: "Empresa F",
      testimonial: "No podríamos estar más satisfechos con los resultados obtenidos tras implementar las soluciones de MigrAI.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = Math.ceil(testimonials.length / 3);
  const touchStartX = useRef(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const touchEndX = e.changedTouches[0].clientX;
    if (touchStartX.current - touchEndX > 50) {
      setSlide(currentIndex + 1);
    } else if (touchStartX.current - touchEndX < -50) {
      setSlide(currentIndex - 1);
    }
  };

  const setSlide = (index: number) => {
    if (index >= 0 && index < totalSlides) {
      setCurrentIndex(index * 3);
    }
  };

  return (
    <SectionWrapper
      id="success-stories"
      className="bg-[#F2F2F2] text-[#161E20] py-16 px-4 min-h-[50vh]" // Ajustado para reducir la altura
    >
      <h2 className="text-3xl font-bold text-center mb-8">Casos de Éxito</h2>
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {testimonials
          .slice(currentIndex, currentIndex + 3)
          .map((testimonial, index) => (
            <EachTestimonial
              key={index}
              image={testimonial.image}
              brand={testimonial.brand}
              testimonial={testimonial.testimonial}
            />
          ))}
      </div>
      <div className="flex justify-center mt-4 space-x-2">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <div
            key={index}
            onClick={() => setSlide(index)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              index === Math.floor(currentIndex / 3)
                ? "bg-[#056078]"
                : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </SectionWrapper>
  );
}

import React from 'react';

interface TestimonialProps {
  image: string;
  brand: string;
  testimonial: string;
}

export default function EachTestimonial({ image, brand, testimonial }: TestimonialProps) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-md h-64 w-full max-w-xs flex flex-col justify-center items-center mx-auto">
      <img 
        src={image} 
        alt={brand} 
        className="w-16 h-16 rounded-full mb-4" 
        loading="lazy" 
        width="64" 
        height="64"
      />
      <p className="font-bold text-center">{brand}</p>
      <p className="mt-2 text-center">
        {testimonial.length > 80 ? `${testimonial.substring(0, 80)}...` : testimonial}
      </p>
    </div>
  );
}

import React from 'react';

interface RectangleProps {
  title: string;
  content: string;
  imgSrc: string;
  imgAlt: string;
  reverse?: boolean;
  className?: string; // Agregando className como una prop opcional
}

export default function Rectangle({
  title,
  content,
  imgSrc,
  imgAlt,
  reverse = false,
  className = '', // Valor por defecto para className
}: RectangleProps) {
  return (
    <div
      className={`flex ${
        reverse ? "flex-row-reverse" : "flex-row"
      } items-center bg-white rounded-lg shadow-md p-6 mb-8 mx-4 sm:mx-8 md:mx-16 lg:mx-24 max-w-7xl mx-auto ${className}`}
    >
      <div className="w-1/2 bg-[var(--color-bg)] p-4 rounded-l-lg">
        <img 
          src={imgSrc} 
          alt={imgAlt} 
          className="rounded-lg max-w-full h-auto"
        />
      </div>
      <div className="w-1/2 px-8 bg-white p-4 rounded-r-lg">
        <h3 className="rectangle-title text-3xl font-bold text-[var(--color-primary)] mb-4">
          {title}
        </h3>
        <p className="text-[var(--color-text)]">{content}</p>
      </div>
    </div>
  );
}
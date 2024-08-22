import React from 'react';

interface SectionWrapperProps {
  id: string;
  className?: string;
  children: React.ReactNode;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({ id, className, children }) => {
  return (
    <section id={id} className={`${className} py-16`}>
      <div className="container mx-auto max-w-7xl">
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;

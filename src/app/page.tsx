import dynamic from 'next/dynamic';
import HeroSection from '@/components/HeroSection';
import Services from '@/components/Services';
import FAQSection from '@/components/FAQSection';

// Carga dinámica del componente Testimonials
const Testimonials = dynamic(() => import('@/components/Testimonials'), {
  ssr: false, // Desactiva la renderización en el servidor para este componente
  loading: () => <p>Loading testimonials...</p>, // Mensaje opcional mientras carga
});

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <Services />
      <Testimonials /> {/* Cargado de forma asincrónica */}
      <FAQSection />
    </>
  );
}

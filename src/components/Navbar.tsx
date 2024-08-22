"use client";

import { useState, useEffect } from "react";
import dynamic from 'next/dynamic';

// Carga dinámica de los componentes NavbarDesktop y NavbarMobile
const NavbarDesktop = dynamic(() => import('./NavbarDesktop'), {
  ssr: false,
});

const NavbarMobile = dynamic(() => import('./NavbarMobile'), {
  ssr: false,
});

export default function Navbar() {
  const [isMobile, setIsMobile] = useState(false);
  const [isHeroSection, setIsHeroSection] = useState(true);

  // Maneja el cambio de tamaño y el scroll para ajustar el estado de navegación
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    const checkScrollPosition = () => setIsHeroSection(window.scrollY < window.innerHeight);

    handleResize(); 
    checkScrollPosition(); 

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", checkScrollPosition);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", checkScrollPosition);
    };
  }, []);

  return isMobile ? (
    <NavbarMobile isHeroSection={isHeroSection} />
  ) : (
    <NavbarDesktop isHeroSection={isHeroSection} />
  );
}

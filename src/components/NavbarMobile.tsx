"use client";

import { useState } from "react";
import Link from "next/link";

interface NavbarMobileProps {
  isHeroSection: boolean;
}

export default function NavbarMobile({ isHeroSection }: NavbarMobileProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-transparent fixed top-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <Link href="#home" className="text-lg text-white">
          <img
            src={isHeroSection ? "/assets/images/page/Recurso 3.svg" : "/assets/images/page/Recurso 4.svg"}
            alt="MigrAI Logo"
            className="h-10"
          />
        </Link>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-white focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            ></path>
          </svg>
        </button>
      </div>
      <div className={`${isMenuOpen ? "block" : "hidden"} bg-transparent text-white`}>
        <Link
          href="#services"
          className="block px-4 py-2"
          onClick={() => setIsMenuOpen(false)}
        >
          SERVICIOS
        </Link>
        <Link
          href="#success-stories"
          className="block px-4 py-2"
          onClick={() => setIsMenuOpen(false)}
        >
          CASOS DE ÉXITO
        </Link>
        <Link
          href="#faq"
          className="block px-4 py-2"
          onClick={() => setIsMenuOpen(false)}
        >
          PREGUNTAS FRECUENTES
        </Link>
        <Link
          href="/contact"
          className="block bg-[#056078] text-white rounded-full px-4 py-2"
          onClick={() => setIsMenuOpen(false)}
        >
          CONTACTO
        </Link>
      </div>
    </nav>
  );
}

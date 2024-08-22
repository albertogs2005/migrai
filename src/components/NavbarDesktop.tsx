"use client";

import { useState, useEffect, useMemo } from "react";
import Link from "next/link";

interface NavbarDesktopProps {
  isHeroSection: boolean;
}

export default function NavbarDesktop({ isHeroSection }: NavbarDesktopProps) {
  const [navbarTextColor, setNavbarTextColor] = useState("text-white");
  const [activeSection, setActiveSection] = useState("#home");

  const sections = ["#home", "#services", "#success-stories", "#faq"];

  useEffect(() => {
    const changeNavbarStyle = () => {
      setNavbarTextColor(window.scrollY < window.innerHeight ? "text-white" : "text-gray-800");
    };

    changeNavbarStyle();
    window.addEventListener("scroll", changeNavbarStyle);

    return () => window.removeEventListener("scroll", changeNavbarStyle);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { threshold: 0.45 }
    );

    sections.forEach((section) => {
      const element = document.querySelector(section);
      if (element) observer.observe(element);
    });

    return () => {
      sections.forEach((section) => {
        const element = document.querySelector(section);
        if (element) observer.unobserve(element);
      });
    };
  }, [sections]);

  const logoSrc = useMemo(() => {
    return isHeroSection ? "/assets/images/page/Recurso 3.svg" : "/assets/images/page/Recurso 4.svg";
  }, [isHeroSection]);

  return (
    <nav className="fixed top-0 w-full z-50 bg-transparent">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <Link href="#home" className={`text-lg ${navbarTextColor}`}>
          <img
            src={logoSrc}
            alt="MigrAI Logo"
            className="h-10"
          />
        </Link>
        <div className="flex space-x-4 items-center">
          {sections.map((section) => (
            <Link
              key={section}
              href={section}
              className={`${
                activeSection === section ? "font-bold" : "text-gray-500"
              } ${navbarTextColor} block px-4 py-2`}
            >
              {section === "#services" ? "SERVICIOS" : section === "#success-stories" ? "CASOS DE ÉXITO" : section === "#faq" ? "PREGUNTAS FRECUENTES" : ""}
            </Link>
          ))}
          <Link href="/contact" className="bg-[#056078] text-white rounded-full px-4 py-2 text-lg">
            CONTACTO
          </Link>
        </div>
      </div>
    </nav>
  );
}

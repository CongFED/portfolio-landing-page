"use client";

import { useState } from "react";
import { Menu, X, Globe } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { translations } from "@/lib/translations";
import Image from "next/image";
import logo from "@/public/logo.png";
interface NavigationProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export default function Navigation({
  activeSection,
  setActiveSection,
}: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  const t = translations[language];

  const navItems = [
    { label: t.nav.home, id: "home" },
    { label: t.nav.about, id: "about" },
    { label: t.nav.projects, id: "projects" },
    { label: t.nav.contact, id: "contact" },
  ];

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    setIsOpen(false);
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 w-full bg-gradient-to-b from-slate-950 to-transparent z-50 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Image
              src={logo}
              alt="Phuoc Ong"
              width={100}
              height={40}
              priority
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 items-center">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-sm font-medium transition-all duration-300 relative group ${
                  activeSection === item.id
                    ? "text-cyan-400"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </button>
            ))}

            <div className="relative cursor-pointer">
              <button
                onClick={() => setIsLanguageMenuOpen(!isLanguageMenuOpen)}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800/50 hover:bg-slate-700/50 text-gray-300 hover:text-cyan-400 transition-all duration-300 border border-slate-700 hover:border-cyan-400"
              >
                <Globe size={18} />
                <span className="text-sm font-medium uppercase">
                  {language}
                </span>
              </button>

              {isLanguageMenuOpen && (
                <div className="absolute top-full right-0 mt-2 bg-slate-800 border border-slate-700 rounded-lg overflow-hidden animate-in fade-in slide-in-from-top-2 duration-300 cursor-pointer">
                  {["en", "vi"].map((lang) => (
                    <button
                      key={lang}
                      onClick={() => {
                        setLanguage(lang as "en" | "vi");
                        setIsLanguageMenuOpen(false);
                      }}
                      className={`block w-full px-4 py-2 text-left text-sm font-medium transition-all duration-300 ${
                        language === lang
                          ? "bg-cyan-500/20 text-cyan-400 border-l-2 border-cyan-400"
                          : "text-gray-300 hover:bg-slate-700 hover:text-white"
                      }`}
                    >
                      {lang === "en" ? "English" : "VietNam"}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <div className="relative">
              <button
                onClick={() => setIsLanguageMenuOpen(!isLanguageMenuOpen)}
                className="p-2 rounded-lg hover:bg-slate-800 text-gray-300 hover:text-cyan-400 transition-colors"
              >
                <Globe size={20} />
              </button>

              {isLanguageMenuOpen && (
                <div className="absolute top-full right-0 mt-2 bg-slate-800 border border-slate-700 rounded-lg overflow-hidden z-50">
                  {["en", "vi"].map((lang) => (
                    <button
                      key={lang}
                      onClick={() => {
                        setLanguage(lang as "en" | "vi");
                        setIsLanguageMenuOpen(false);
                      }}
                      className={`block w-full px-3 py-2 text-xs font-medium transition-all duration-300 whitespace-nowrap ${
                        language === lang
                          ? "bg-cyan-500/20 text-cyan-400"
                          : "text-gray-300 hover:bg-slate-700 hover:text-white"
                      }`}
                    >
                      {lang === "en" ? "EN" : "VI"}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-white hover:text-cyan-400 transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-slate-900/95 backdrop-blur-sm rounded-lg p-4 mb-4 animate-in fade-in slide-in-from-top-2 duration-300">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="block w-full text-left px-4 py-2 text-gray-300 hover:text-cyan-400 hover:bg-slate-800/50 rounded transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}

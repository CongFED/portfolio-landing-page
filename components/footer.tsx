"use client";

import { useLanguage } from "@/lib/language-context";
import { translations } from "@/lib/translations";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { language, setLanguage } = useLanguage();
  const t = translations[language];
  return (
    <footer className="bg-gradient-to-t from-slate-950 to-transparent py-12 px-4 border-t border-slate-800">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent mb-2">
              PHUOCONGDEV
            </h1>
            <p className="text-gray-400 text-sm">Fullstack Developer</p>
          </div>

          <div className="flex gap-8">
            <a
              href="#home"
              className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
            >
              {t.footer.home}
            </a>
            <a
              href="#about"
              className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
            >
              {t.footer.about}
            </a>
            <a
              href="#projects"
              className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
            >
              {t.footer.projects}
            </a>
            <a
              href="#contact"
              className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
            >
              {t.footer.contact}
            </a>
          </div>

          <p className="text-gray-500 text-sm">
            © {currentYear} PHUOCONGDEV. {t.footer.allRights}
          </p>
        </div>
      </div>
    </footer>
  );
}

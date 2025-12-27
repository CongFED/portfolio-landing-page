"use client";

import { useLanguage } from "@/lib/language-context";
import { translations } from "@/lib/translations";
import { useEffect, useState } from "react";

export default function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("about");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);
  const { language, setLanguage } = useLanguage();
  const t = translations[language];
  return (
    <section
      id="about"
      className="py-20 px-4 bg-gradient-to-b from-transparent via-slate-900/50 to-transparent"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
          {" "}
          {t.about.title}
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Text */}
          <div
            className={`transform transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-8"
            }`}
          >
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              {t.about.description1}
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              {t.about.description2}
            </p>

            {/* Skills */}
            {/* <div className="grid grid-cols-2 gap-6">
              <div>
                <h3 className="text-cyan-400 font-semibold mb-3">Frontend</h3>
                <ul className="text-gray-400 space-y-2 text-sm">
                  <li>• React / Next.js</li>
                  <li>• TypeScript</li>
                  <li>• Tailwind CSS</li>
                  <li>• Framer Motion</li>
                </ul>
              </div>
              <div>
                <h3 className="text-cyan-400 font-semibold mb-3">Backend</h3>
                <ul className="text-gray-400 space-y-2 text-sm">
                  <li>• Node.js</li>
                  <li>• MongoDB</li>
                  <li>• PostgreSQL</li>
                  <li>• REST APIs</li>
                </ul>
              </div>
            </div> */}
          </div>

          {/* Right side - Stats */}
          <div
            className={`transform transition-all duration-700 delay-200 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-8"
            }`}
          >
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg p-6 border border-cyan-500/30 hover:border-cyan-400/60 transition-colors duration-300">
                <div className="text-3xl font-bold text-cyan-400 mb-2">50+</div>
                <p className="text-gray-300">{t.about.projectsCompleted}</p>
              </div>
              <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg p-6 border border-cyan-500/30 hover:border-cyan-400/60 transition-colors duration-300">
                <div className="text-3xl font-bold text-cyan-400 mb-2">3+</div>
                <p className="text-gray-300">{t.about.yearsExperience}</p>
              </div>
              <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg p-6 border border-cyan-500/30 hover:border-cyan-400/60 transition-colors duration-300">
                <div className="text-3xl font-bold text-cyan-400 mb-2">
                  100%
                </div>
                <p className="text-gray-300">{t.about.clientSatisfaction}</p>
              </div>
              <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg p-6 border border-cyan-500/30 hover:border-cyan-400/60 transition-colors duration-300">
                <div className="text-3xl font-bold text-cyan-400 mb-2">
                  24/7
                </div>
                <p className="text-gray-300">{t.about.supportReady}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

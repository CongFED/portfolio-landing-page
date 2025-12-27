"use client";

import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

interface HeroProps {
  setActiveSection: (section: string) => void;
}

export default function Hero({ setActiveSection }: HeroProps) {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    const element = document.getElementById("about");
    element?.scrollIntoView({ behavior: "smooth" });
    setActiveSection("about");
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 px-4 relative overflow-hidden"
    >
      {/* Background gradient orbs */}
      <div
        className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"
        style={{ transform: `translateY(${scrollY * 0.5}px)` }}
      />
      <div
        className="absolute bottom-0 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
        style={{ transform: `translateY(${scrollY * 0.3}px)` }}
      />

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center">
          {/* Main heading */}
          <div className="mb-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <h2 className="text-gray-400 text-lg md:text-xl mb-4 font-medium tracking-wide">
              Welcome to my portfolio
            </h2>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent leading-tight">
              PHUOCONGDEV
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 font-light leading-relaxed">
              Fullstack Developer
            </p>
          </div>

          {/* Description */}
          <div className="mb-12 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
            <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              Tôi xây dựng các ứng dụng web hiện đại với trải nghiệm người dùng
              tuyệt vời. Chuyên biệt trong React, Next.js và thiết kế giao diện
              đẹp mắt.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
            <button
              onClick={handleScroll}
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105 cursor-pointer"
            >
              View My Work
            </button>
            <button
              onClick={() => {
                const element = document.getElementById("contact");
                element?.scrollIntoView({ behavior: "smooth" });
                setActiveSection("contact");
              }}
              className="px-8 py-3 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 transition-all duration-300 cursor-pointer"
            >
              Get In Touch
            </button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer"
          onClick={() => {
            const element = document.getElementById("about");
            element?.scrollIntoView({ behavior: "smooth" });
            setActiveSection("about");
          }}
        >
          <ChevronDown className="text-cyan-400" size={32} />
        </div>
      </div>
    </section>
  );
}

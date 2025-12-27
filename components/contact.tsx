"use client";

import type React from "react";

import { useState, useEffect } from "react";
import { Mail, Linkedin, Github, Twitter, Facebook } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import emailjs from "@emailjs/browser";
import { useLanguage } from "@/lib/language-context";
import { translations } from "@/lib/translations";
export default function Contact() {
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

    const element = document.getElementById("contact");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const { ref, style } = useScrollAnimation();
  const [loading, setLoading] = useState(false);
  const { language, setLanguage } = useLanguage();
  const t = translations[language];
  const handleChange =
    (field: string) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormData({ ...formData, [field]: e.target.value });
    };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (loading) return;

    setLoading(true);

    try {
      await emailjs.send(
        "service_287um2d",
        "template_fxf20gf",
        {
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          message: formData.message || "Không có lời nhắn",
          source: "Landing Page",
          time: new Date().toLocaleString("vi-VN"),
        },
        "zjRByL0fWqBu1pstG"
      );

      setSubmitted(true);
      setFormData({
        name: "",
        phone: "",
        email: "",
        message: "",
      });

      setTimeout(() => setSubmitted(false), 4000);
    } catch (error) {
      console.error("Send email error:", error);
      alert("Gửi thất bại, vui lòng thử lại!");
    } finally {
      setLoading(false);
    }
  };
  const socialLinks = [
    { icon: Mail, href: "mailto:npc.it.dev@gmail.com", label: "Email" },
    {
      icon: Linkedin,
      href: "https://l.facebook.com/l.php?u=http%3A%2F%2Flinkedin.com%2Fin%2Fc%C3%B4ng-nguy%E1%BB%85n-ph%C6%B0%E1%BB%9Bc-a926ab259%3Ffbclid%3DIwZXh0bgNhZW0CMTAAYnJpZBExNnJBTmg4S2lPbTloaEZyRHNydGMGYXBwX2lkEDIyMjAzOTE3ODgyMDA4OTIAAR5fetKjpEdfC_5E-IHBZgP7LNT1HJSCHMZ7AKFUlzeJpEbBlbBv6OsrLJCYuQ_aem_K3rwW9SsfD9xU2GtWjwLUA&h=AT0sQOq6sAc0can8o8gXM6IhI7zYRy24kgmaJVbZcTrpksM_pEBQZQ7xVVDR-Nr12675c2TdvbDvCqWraVlWIsFX0nhxKYHbcwFL8ntjpsrMPtQSisOZzWFFzTNh5RsOIFX6FA",
      label: "LinkedIn",
    },
    { icon: Github, href: "https://github.com/CongFED", label: "GitHub" },
    {
      icon: Facebook,
      href: "https://www.facebook.com/fedNPC2704",
      label: "Facebook",
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto relative z-10">
        <div
          className={`text-center mb-16 transform transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t.contact.title}
          </h2>
          <p className="text-gray-400 text-lg">{t.contact.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className={`space-y-6 transform transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-8"
            }`}
          >
            <div>
              <label className="block text-white font-semibold mb-2">
                {" "}
                {t.contact.form.name}
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange("name")}
                className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                placeholder={t.contact.form.namePlaceholder}
                required
              />
            </div>
            <div>
              <label className="block text-white font-semibold mb-2">
                {t.contact.form.phone}
              </label>
              <input
                type=""
                name="phone"
                value={formData.phone}
                onChange={handleChange("phone")}
                className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                placeholder="0869 154 692"
                required
              />
            </div>
            <div>
              <label className="block text-white font-semibold mb-2">
                {t.contact.form.message}
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange("message")}
                rows={5}
                className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 resize-none"
                placeholder={t.contact.form.messagePlaceholder}
                required
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className={`w-full px-8 py-3 rounded-lg font-semibold transition-all cursor-pointer duration-300
    ${
      loading
        ? "bg-gray-500 cursor-not-allowed"
        : "bg-gradient-to-r from-blue-500 to-cyan-500 hover:shadow-lg hover:shadow-cyan-500/50 hover:scale-105"
    }
  `}
            >
              {loading
                ? t.contact.sending
                : submitted
                ? t.contact.sent
                : t.contact.SendAMessage}
            </button>
          </form>

          {/* Contact Info */}
          <div
            className={`transform transition-all duration-700 delay-200 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-8"
            }`}
          >
            <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-lg p-8 border border-cyan-500/30 h-full flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">
                  {t.contact.direct}
                </h3>
                <div className="space-y-6">
                  <div>
                    <p className="text-gray-400 mb-2">
                      {" "}
                      {t.contact.form.email}
                    </p>
                    <a
                      href="mailto:hello@example.com"
                      className="text-cyan-400 hover:text-cyan-300 transition-colors font-semibold"
                    >
                      npc.it.dev@gmail.com
                    </a>
                  </div>
                  <div>
                    <p className="text-gray-400 mb-2">
                      {" "}
                      {t.contact.form.phone}
                    </p>
                    <a
                      href="tel:+84123456789"
                      className="text-cyan-400 hover:text-cyan-300 transition-colors font-semibold"
                    >
                      0869 154 692
                    </a>
                  </div>
                  <div>
                    <p className="text-gray-400 mb-2"> {t.contact.location}</p>
                    <p className="text-cyan-400 font-semibold">
                      61 Trần Văn Dư, phường 13, Tân Bình, HCM
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-8 border-t border-cyan-500/20">
                <p className="text-gray-400 mb-4"> {t.contact.location}</p>
                <div className="flex gap-4">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-lg bg-slate-800 hover:bg-cyan-500/20 border border-slate-700 hover:border-cyan-400 flex items-center justify-center text-gray-400 hover:text-cyan-400 transition-all duration-300 group"
                      >
                        <Icon
                          size={20}
                          className="group-hover:scale-110 transition-transform"
                        />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

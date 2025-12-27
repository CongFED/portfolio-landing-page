"use client"

import { useState, useEffect } from "react"
import ProjectCard from "./project-card"
import { ExternalLink } from "lucide-react"

interface Project {
  id: number
  title: string
  category: string
  description: string
  image: string
  link: string
  technologies: string[]
}

const projects: Project[] = [
  {
    id: 1,
    title: "Real Estate Landing Page",
    category: "Website",
    description: "Landing page hiệu ứng cho dự án bất động sản cao cấp",
    image: "/real-estate-property-landing-page-modern-design.jpg",
    link: "https://landing-page-estate-phuocong.vercel.app/",
    technologies: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
  },
  {
    id: 2,
    title: "E-Commerce Platform",
    category: "Web App",
    description: "Nền tảng thương mại điện tử đầy đủ tính năng",
    image: "/ecommerce-shopping-cart-product-showcase-modern.jpg",
    link: "#",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
  },
  {
    id: 3,
    title: "Task Management App",
    category: "Web App",
    description: "Ứng dụng quản lý công việc với real-time collaboration",
    image: "/task-management-productivity-app-dashboard.jpg",
    link: "#",
    technologies: ["Next.js", "TypeScript", "Supabase", "React Query"],
  },
  {
    id: 4,
    title: "Weather Dashboard",
    category: "Web App",
    description: "Dashboard dự báo thời tiết với API integration",
    image: "/weather-forecast-dashboard-analytics-beautiful.jpg",
    link: "#",
    technologies: ["React", "Chart.js", "API Integration"],
  },
  {
    id: 5,
    title: "Portfolio Website",
    category: "Website",
    description: "Website portfolio cá nhân với hiệu ứng đẹp",
    image: "/portfolio-website-designer-developer-showcase.jpg",
    link: "#",
    technologies: ["Next.js", "Framer Motion", "Tailwind"],
  },
  {
    id: 6,
    title: "SaaS Dashboard",
    category: "Web App",
    description: "Dashboard SaaS quản lý người dùng và dữ liệu",
    image: "/saas-dashboard-admin-panel-analytics-metrics.jpg",
    link: "#",
    technologies: ["React", "TypeScript", "Recharts", "Redux"],
  },
]

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [isVisible, setIsVisible] = useState(false)
  const [filteredProjects, setFilteredProjects] = useState(projects)

  const categories = ["All", "Website", "Web App"]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("projects")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (selectedCategory === "All") {
      setFilteredProjects(projects)
    } else {
      setFilteredProjects(projects.filter((p) => p.category === selectedCategory))
    }
  }, [selectedCategory])

  return (
    <section id="projects" className="py-20 px-4 relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div
          className={`text-center mb-16 transform transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Featured Projects</h2>
          <p className="text-gray-400 text-lg">Các dự án nổi bật được chọn lọc kỹ lưỡng</p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg shadow-cyan-500/50"
                  : "bg-slate-800 text-gray-300 hover:bg-slate-700 border border-slate-700"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} isVisible={isVisible} />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-16">
          <button className="px-8 py-3 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 transition-all duration-300 flex items-center gap-2 mx-auto">
            View All Projects
            <ExternalLink size={18} />
          </button>
        </div>
      </div>
    </section>
  )
}

"use client"

import { useState } from "react"
import { ExternalLink, Github } from "lucide-react"

interface ProjectCardProps {
  project: {
    id: number
    title: string
    category: string
    description: string
    image: string
    link: string
    technologies: string[]
  }
  index: number
  isVisible: boolean
}

export default function ProjectCard({ project, index, isVisible }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className={`group relative h-96 rounded-lg overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 hover:border-cyan-400 transition-all duration-500 transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{
        transitionDelay: isVisible ? `${index * 100}ms` : "0ms",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Image */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          className={`w-full h-full object-cover transition-transform duration-500 ${
            isHovered ? "scale-110" : "scale-100"
          }`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
      </div>

      {/* Laptop Frame Mockup */}
      <div
        className={`absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 ${isHovered ? "opacity-100" : ""}`}
      >
        <div className="relative w-80 h-52 bg-black rounded-lg shadow-2xl border-8 border-gray-800">
          {/* Screen */}
          <img
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            className="w-full h-full object-cover rounded"
          />
          {/* Bezel bottom */}
          <div className="absolute -bottom-6 left-0 right-0 h-4 bg-gray-800 rounded-b-xl" />
        </div>
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col justify-end p-6 z-10">
        <div className={`transform transition-all duration-300 ${isHovered ? "translate-y-0" : "translate-y-4"}`}>
          <span className="text-cyan-400 text-sm font-semibold mb-2 block">{project.category}</span>
          <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
          <p className="text-gray-300 text-sm mb-4">{project.description}</p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="text-xs bg-cyan-500/20 text-cyan-300 px-2 py-1 rounded-full border border-cyan-500/30"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Links */}
          <div
            className={`flex gap-4 transform transition-all duration-300 ${isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}
          >
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white hover:text-cyan-400 transition-colors text-sm font-semibold"
            >
              <ExternalLink size={16} />
              Live Demo
            </a>
            <a
              href="#"
              className="flex items-center gap-2 text-white hover:text-cyan-400 transition-colors text-sm font-semibold"
            >
              <Github size={16} />
              Code
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

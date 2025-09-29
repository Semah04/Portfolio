'use client'

import { useState } from 'react'
import ProjectCard from '@/components/ProjectCard'

interface Project {
  title: string
  description: string
  technologies: string[]
  category: string
  liveUrl: string
  githubUrl: string
  featured?: boolean
  image?: string
}

const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All')

  const categories: string[] = ['All', 'Frontend', 'Full Stack', 'Mobile', 'API']

 const projects: Project[] = [
    {
      title: "Orange FabLabs Management Platform",
      description: "A centralized platform for Orange FabLabs management featuring complete booking system with interactive calendar, request management for products and consumables, events organization, advanced real-time dashboards, secure JWT authentication with role management, and AI chatbot integration for user support.",
      technologies: ["Next.js", "Express.js", "PostgreSQL", "JWT", "AI Chatbot"],
      category: "Full Stack",
      liveUrl: "https://orange-fablabs.vercel.app",
      githubUrl: "https://github.com/naski-semah/orange-fablabs",
      featured: true,
      image: "/images/orange-fablabs.jpg"
    },
    {
      title: "DevOps Pipeline Project",
      description: "Automated CI/CD pipeline with Jenkins and Docker integration. Features GitHub-Jenkins integration using Ngrok, comprehensive testing with JUnit/Mockito, code coverage with JaCoCo, and real-time monitoring with Grafana and Prometheus for performance tracking.",
      technologies: ["Jenkins", "Docker", "Spring Boot", "Grafana", "Prometheus", "JaCoCo"],
      category: "Full Stack",
      liveUrl: "https://devops-pipeline-demo.vercel.app",
      githubUrl: "https://github.com/naski-semah/devops-pipeline",
      featured: true,
      image: "/images/devops.png"
    },
    {
      title: "Intern-It Platform",
      description: "Comprehensive internship management platform connecting students and companies. Features include job posting and discovery, streamlined application management, integrated communication system, and intuitive interface for both students and employers.",
      technologies: ["Angular", "Spring Boot", "PostgreSQL", "REST API"],
      category: "Full Stack",
      liveUrl: "https://intern-it-platform.vercel.app",
      githubUrl: "https://github.com/naski-semah/intern-it",
      image: "/images/Logo_ESPRIT_Ariana.jpg"
    },
    {
      title: "Learn Your Way",
      description: "Innovative application connecting speech therapists with children having language disorders. Features workflow optimization, fluid user interface, appointment scheduling, progress tracking, and interactive exercises for therapy sessions.",
      technologies: ["Angular", "Spring Boot", "PostgreSQL", "TypeScript"],
      category: "Full Stack",
      liveUrl: "https://learn-your-way.vercel.app",
      githubUrl: "https://github.com/naski-semah/learn-your-way",
      image: "/images/way.png"
    },
    {
      title: "Academic Management System",
      description: "Complete educational institution management system with intuitive user interface. Handles student and teacher management, course scheduling, evaluation tracking, and features an optimized relational database for high performance.",
      technologies: ["Java Swing", "MySQL", "JDBC"],
      category: "Full Stack",
      liveUrl: "#",
      githubUrl: "https://github.com/naski-semah/academic-management",
      image: "/images/Logo_ESPRIT_Ariana.jpg"
    },
    {
      title: "Personal Portfolio",
      description: "Modern and responsive portfolio website showcasing projects and skills. Features CSS animations, JavaScript interactivity, SEO optimization, and web accessibility standards. Built with clean code and best practices.",
      technologies: ["HTML5", "CSS3", "JavaScript"],
      category: "Frontend",
      liveUrl: "https://naski-semah.ml",
      githubUrl: "https://github.com/naski-semah/portfolio",
      image: "/images/me.jpg"
    }
  ]

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory)

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      {/* Hero Section */}
      <section className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-300">
              My Projects
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8 transition-colors duration-300">
              A collection of projects that showcase my skills in web development, 
              from simple websites to complex full-stack applications.
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium transition-colors duration-300">
                {projects.length} Projects
              </span>
              <span className="px-4 py-2 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm font-medium transition-colors duration-300">
                {projects.filter(p => p.featured).length} Featured
              </span>
              <span className="px-4 py-2 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm font-medium transition-colors duration-300">
                Multiple Technologies
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 sticky top-16 z-40 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-blue-600 dark:bg-blue-700 text-white shadow-lg'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredProjects.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 dark:text-gray-400 text-lg transition-colors duration-300">No projects found in this category.</p>
            </div>
          ) : (
            <>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map((project, index) => (
                  <ProjectCard
                    key={index}
                    title={project.title}
                    description={project.description}
                    technologies={project.technologies}
                    liveUrl={project.liveUrl}
                    githubUrl={project.githubUrl}
                    featured={project.featured}
                    image={project.image}
                  />
                ))}
              </div>

              {/* Project Stats */}
              <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 transition-colors duration-300">
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2 transition-colors duration-300">
                    {filteredProjects.length}
                  </div>
                  <div className="text-gray-600 dark:text-gray-400 transition-colors duration-300">
                    {selectedCategory === 'All' ? 'Total Projects' : `${selectedCategory} Projects`}
                  </div>
                </div>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 transition-colors duration-300">
                  <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2 transition-colors duration-300">
                    {new Set(projects.flatMap(p => p.technologies)).size}
                  </div>
                  <div className="text-gray-600 dark:text-gray-400 transition-colors duration-300">Technologies Used</div>
                </div>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 transition-colors duration-300">
                  <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2 transition-colors duration-300">
                    {projects.filter(p => p.featured).length}
                  </div>
                  <div className="text-gray-600 dark:text-gray-400 transition-colors duration-300">Featured Projects</div>
                </div>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 transition-colors duration-300">
                  <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2 transition-colors duration-300">
                    {categories.length - 1}
                  </div>
                  <div className="text-gray-600 dark:text-gray-400 transition-colors duration-300">Categories</div>
                </div>
              </div>
            </>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 dark:bg-blue-800 transition-colors duration-300">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Interested in working together?
          </h2>
          <p className="text-xl text-blue-100 dark:text-blue-200 mb-8 transition-colors duration-300">
            I'm always open to discussing new projects and opportunities.
          </p>
          <div className="space-x-4">
            <a 
              href="/contact"
              className="inline-block bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-700 font-medium py-3 px-8 rounded-lg transition-colors duration-200"
            >
              Start a Project
            </a>
            <a 
              href="https://github.com/Semah04"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-transparent border-2 border-white dark:border-blue-200 text-white dark:text-blue-200 hover:bg-white dark:hover:bg-blue-200 hover:text-blue-600 dark:hover:text-blue-800 font-medium py-3 px-8 rounded-lg transition-colors duration-200"
            >
              View GitHub
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Projects
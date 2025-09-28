'use client'

import { useState } from 'react'
import ProjectCard from '@/components/ProjectCard'

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const categories = ['All', 'Frontend', 'Full Stack', 'Mobile', 'API']

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A comprehensive e-commerce solution with user authentication, payment processing, inventory management, and admin dashboard. Features include real-time notifications, order tracking, and responsive design.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "JWT"],
      category: "Full Stack",
      liveUrl: "https://ecommerce-demo.vercel.app",
      githubUrl: "https://github.com/yourusername/ecommerce-platform",
      featured: true,
      image: "/images/ecommerce-project.jpg"
    },
    {
      title: "Task Management Dashboard",
      description: "A collaborative project management tool with drag-and-drop functionality, real-time updates, team collaboration features, and progress tracking.",
      technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Socket.io"],
      category: "Full Stack",
      liveUrl: "https://taskmanager-demo.vercel.app",
      githubUrl: "https://github.com/yourusername/task-manager",
      image: "/images/taskmanager-project.jpg"
    },
    {
      title: "Weather Analytics App",
      description: "A modern weather application with detailed forecasts, interactive maps, historical data analysis, and location-based recommendations.",
      technologies: ["React", "TypeScript", "Chart.js", "OpenWeather API"],
      category: "Frontend",
      liveUrl: "https://weather-app-demo.vercel.app",
      githubUrl: "https://github.com/yourusername/weather-app",
      image: "/images/weather-project.jpg"
    },
    {
      title: "Social Media Dashboard",
      description: "Analytics dashboard for social media management with post scheduling, engagement tracking, and comprehensive reporting features.",
      technologies: ["Vue.js", "Express.js", "MongoDB", "Twitter API", "Facebook API"],
      category: "Full Stack",
      liveUrl: "https://social-dashboard-demo.vercel.app",
      githubUrl: "https://github.com/yourusername/social-dashboard",
      image: "/images/social-project.jpg"
    },
    {
      title: "Portfolio Website",
      description: "A responsive portfolio website built with modern technologies, featuring smooth animations, dark mode, and optimal performance.",
      technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
      category: "Frontend",
      liveUrl: "https://portfolio-demo.vercel.app",
      githubUrl: "https://github.com/yourusername/portfolio",
      featured: true,
      image: "/images/portfolio-project.jpg"
    },
    {
      title: "REST API Service",
      description: "A robust REST API with authentication, rate limiting, comprehensive documentation, and automated testing suite.",
      technologies: ["Node.js", "Express.js", "MongoDB", "JWT", "Swagger"],
      category: "API",
      liveUrl: "https://api-service-demo.herokuapp.com/docs",
      githubUrl: "https://github.com/yourusername/rest-api-service",
      image: "/images/api-project.jpg"
    },
    {
      title: "Real Estate Platform",
      description: "A property listing platform with advanced search filters, virtual tours, mortgage calculator, and agent dashboard.",
      technologies: ["React", "Node.js", "PostgreSQL", "Mapbox", "Cloudinary"],
      category: "Full Stack",
      liveUrl: "https://realestate-demo.vercel.app",
      githubUrl: "https://github.com/yourusername/real-estate-platform",
      image: "/images/realestate-project.jpg"
    },
    {
      title: "Fitness Tracker App",
      description: "A mobile-responsive fitness application with workout tracking, progress analytics, and social features for motivation.",
      technologies: ["React Native", "Firebase", "Chart.js", "Redux"],
      category: "Mobile",
      liveUrl: "https://fitness-tracker-demo.vercel.app",
      githubUrl: "https://github.com/yourusername/fitness-tracker",
      image: "/images/fitness-project.jpg"
    },
    {
      title: "Blog CMS",
      description: "A content management system for bloggers with rich text editor, SEO optimization, and analytics dashboard.",
      technologies: ["Next.js", "Sanity.io", "Tailwind CSS", "Vercel"],
      category: "Full Stack",
      liveUrl: "https://blog-cms-demo.vercel.app",
      githubUrl: "https://github.com/yourusername/blog-cms",
      image: "/images/blog-project.jpg"
    }
  ]

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              My Projects
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-8">
              A collection of projects that showcase my skills in web development, 
              from simple websites to complex full-stack applications.
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                {projects.length} Projects
              </span>
              <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                {projects.filter(p => p.featured).length} Featured
              </span>
              <span className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
                Multiple Technologies
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white border-b border-gray-200 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
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
              <p className="text-gray-500 text-lg">No projects found in this category.</p>
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
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    {filteredProjects.length}
                  </div>
                  <div className="text-gray-600">
                    {selectedCategory === 'All' ? 'Total Projects' : `${selectedCategory} Projects`}
                  </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="text-3xl font-bold text-green-600 mb-2">
                    {new Set(projects.flatMap(p => p.technologies)).size}
                  </div>
                  <div className="text-gray-600">Technologies Used</div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="text-3xl font-bold text-purple-600 mb-2">
                    {projects.filter(p => p.featured).length}
                  </div>
                  <div className="text-gray-600">Featured Projects</div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="text-3xl font-bold text-orange-600 mb-2">
                    {categories.length - 1}
                  </div>
                  <div className="text-gray-600">Categories</div>
                </div>
              </div>
            </>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Interested in working together?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            I'm always open to discussing new projects and opportunities.
          </p>
          <div className="space-x-4">
            <a 
              href="/contact"
              className="inline-block bg-white text-blue-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition-colors duration-200"
            >
              Start a Project
            </a>
            <a 
              href="https://github.com/Semah04"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 font-medium py-3 px-8 rounded-lg transition-colors duration-200"
            >
              View GitHub
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
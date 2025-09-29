import Hero from '@/components/Hero'
import ProjectCard from '@/components/ProjectCard'

interface Project {
  title: string
  description: string
  technologies: string[]
  liveUrl: string
  githubUrl: string
  featured?: boolean
}

const Home: React.FC = () => {
  const featuredProjects: Project[] = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with user authentication, payment processing, and admin dashboard. Built with modern web technologies for optimal performance.",
      technologies: ["React", "TypeScript", "Node.js", "MongoDB"],
      liveUrl: "https://your-project.vercel.app",
      githubUrl: "https://github.com/yourusername/ecommerce",
      featured: true
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag & drop functionality, and team collaboration features.",
      technologies: ["Next.js", "Tailwind CSS", "Prisma", "PostgreSQL"],
      liveUrl: "https://your-task-app.vercel.app",
      githubUrl: "https://github.com/yourusername/task-manager"
    },
    {
      title: "Weather Dashboard",
      description: "A responsive weather dashboard that provides real-time weather data, forecasts, and interactive maps using external APIs.",
      technologies: ["React", "TypeScript", "API Integration", "Chart.js"],
      liveUrl: "https://your-weather-app.vercel.app",
      githubUrl: "https://github.com/yourusername/weather-dashboard"
    }
  ]

  const skills: string[] = [
    "JavaScript", "TypeScript", "React", "Next.js", 
    "Node.js", "Express", "MongoDB", "PostgreSQL",
    "Tailwind CSS", "Git", "Docker", "AWS"
  ]

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <Hero />

      {/* Featured Projects Section */}
      <section className="py-16 bg-white dark:bg-gray-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
              Featured Projects
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto transition-colors duration-300">
              Here are some of my recent projects that showcase my skills and creativity
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                technologies={project.technologies}
                liveUrl={project.liveUrl}
                githubUrl={project.githubUrl}
                featured={project.featured}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <a 
              href="/projects"
              className="inline-block bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-200"
            >
              View All Projects
            </a>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
              Skills & Technologies
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto transition-colors duration-300">
              Technologies I work with to bring ideas to life
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {skills.map((skill, index) => (
              <div 
                key={index}
                className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm text-center hover:shadow-md dark:hover:shadow-xl transition-all duration-200 border border-gray-200 dark:border-gray-700"
              >
                <span className="text-gray-700 dark:text-gray-300 font-medium transition-colors duration-300">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-600 dark:bg-blue-800 transition-colors duration-300">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to work together?
          </h2>
          <p className="text-xl text-blue-100 dark:text-blue-200 mb-8 transition-colors duration-300">
            I'm always open to discussing new opportunities and interesting projects.
          </p>
          <a 
            href="/contact"
            className="inline-block bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-700 font-medium py-3 px-8 rounded-lg transition-colors duration-200"
          >
            Get In Touch
          </a>
        </div>
      </section>
    </div>
  )
}

export default Home
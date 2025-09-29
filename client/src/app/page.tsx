import Hero from '@/components/Hero'
import ProjectCard from '@/components/ProjectCard'

interface Project {
  title: string
  description: string
  technologies: string[]
  liveUrl: string
  githubUrl: string
  featured?: boolean
  image?: string
}

const Home: React.FC = () => {
  const featuredProjects: Project[] = [
    {
      title: "Orange FabLabs Management Platform",
      description: "A centralized platform for Orange FabLabs management featuring complete booking system with interactive calendar, request management for products and consumables, events organization, advanced real-time dashboards, secure JWT authentication with role management, and AI chatbot integration for user support.",
      technologies: ["Next.js", "Express.js", "PostgreSQL", "JWT", "AI Chatbot"],
      liveUrl: "https://orange-fablabs.vercel.app",
      githubUrl: "https://github.com/naski-semah/orange-fablabs",
      featured: true,
      image: "/images/orange-fablabs.jpg"
    },
    {
      title: "DevOps Pipeline Project",
      description: "Automated CI/CD pipeline with Jenkins and Docker integration. Features GitHub-Jenkins integration using Ngrok, comprehensive testing with JUnit/Mockito, code coverage with JaCoCo, and real-time monitoring with Grafana and Prometheus for performance tracking.",
      technologies: ["Jenkins", "Docker", "Spring Boot", "Grafana", "Prometheus", "JaCoCo"],
      liveUrl: "https://devops-pipeline-demo.vercel.app",
      githubUrl: "https://github.com/naski-semah/devops-pipeline",
      featured: true,
      image: "/images/devops.png"
    },
    {
      title: "Intern-It Platform",
      description: "Comprehensive internship management platform connecting students and companies. Features include job posting and discovery, streamlined application management, integrated communication system, and intuitive interface for both students and employers.",
      technologies: ["Angular", "Spring Boot", "PostgreSQL", "REST API"],
      liveUrl: "https://intern-it-platform.vercel.app",
      githubUrl: "https://github.com/naski-semah/intern-it",
      image: "/images/Logo_ESPRIT_Ariana.jpg"
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
                image={project.image}
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
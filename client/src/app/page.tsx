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
      title: "Orange Digital Center - FabLabs Management Platform",
      description: "Designed and developed dynamic, user-friendly frontend using React/Next.js serving 500+ users and reducing equipment booking time by 40%. Engineered RESTful and GraphQL backend APIs using Node.js/Express.js managing 10,000+ monthly transactions. Integrated AI-powered conversational chatbot reducing support tickets by 35%. Implemented JWT-based RBAC supporting 4 user roles with 99.9% authentication reliability.",
      technologies: ["React", "Next.js", "Node.js", "Express.js", "GraphQL", "PostgreSQL", "JWT", "AI Chatbot", "Docker"],
      liveUrl: "https://orange-fablabs.vercel.app",
      githubUrl: "https://github.com/naski-semah/orange-fablabs",
      featured: true,
      image: "/images/orange-fablabs.jpg"
    },
    {
      title: "DevOps CI/CD Pipeline Automation",
      description: "Architected automated CI/CD pipeline processing 50+ builds daily with Jenkins, Docker, and AWS EC2 integration. Configured Kubernetes deployments for containerized applications ensuring scalability and reliability. Implemented comprehensive testing framework with JUnit/Mockito achieving 85% code coverage tracked via JaCoCo. Built real-time performance monitoring dashboards using Grafana and Prometheus, reducing incident response time by 60%.",
      technologies: ["Jenkins", "Docker", "Kubernetes", "AWS", "Grafana", "Prometheus", "JUnit", "Mockito", "JaCoCo"],
      liveUrl: "https://devops-pipeline-demo.vercel.app",
      githubUrl: "https://github.com/naski-semah/devops-pipeline",
      featured: true,
      image: "/images/devops.png"
    },
    {
      title: "Intern-It Platform",
      description: "Architected component-based Angular application with lazy-loading modules, RxJS state management, and responsive design serving 200+ students and 50+ partner companies. Developed Java Spring Boot REST APIs handling authentication, application tracking, and document management with PostgreSQL database interactions. Implemented role-based dashboards with seamless frontend-backend integration.",
      technologies: ["Angular", "Java Spring Boot", "PostgreSQL", "REST API", "RxJS", "JUnit"],
      liveUrl: "https://intern-it-platform.vercel.app",
      githubUrl: "https://github.com/naski-semah/intern-it",
      image: "/images/Logo_ESPRIT_Ariana.jpg"
    }
  ]

  const skills: string[] = [
    "Angular", "React", "Next.js", "TypeScript", "JavaScript",
    "Node.js", "Express.js", "Java Spring Boot", "REST API", "GraphQL",
    "PostgreSQL", "MySQL", "MongoDB", "Oracle",
    "Docker", "Kubernetes", "Jenkins", "AWS", "GitLab CI", "SonarQube"
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

      {/* Certificates Section */}
      <section className="py-16 bg-white dark:bg-gray-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
              Certifications & Achievements
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto transition-colors duration-300">
              Professional certifications and recognition for excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200 dark:border-gray-600 transform hover:-translate-y-1">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-700 dark:to-indigo-700 p-6 text-white">
                <div className="flex items-center gap-2 mb-3">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/>
                    <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-sm font-medium opacity-90">Competition Winner</span>
                </div>
                <h3 className="text-xl font-bold mb-2 leading-tight">
                  2nd Prize Winner - CCCF4 Inter-Class Software Development Competition
                </h3>
                <p className="text-blue-100 text-sm">ESPRIT Engineering School • 2024</p>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4 text-sm text-gray-600 dark:text-gray-300">
                  <div className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                    </svg>
                    <span>2024</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
                    </svg>
                    <span>2nd Place</span>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Recognized for excellence in software development, team collaboration, and technical problem-solving in a competitive environment.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs font-medium rounded-full border border-gray-200 dark:border-gray-600">
                    Software Development
                  </span>
                  <span className="px-3 py-1 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs font-medium rounded-full border border-gray-200 dark:border-gray-600">
                    Team Collaboration
                  </span>
                  <span className="px-3 py-1 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs font-medium rounded-full border border-gray-200 dark:border-gray-600">
                    Problem Solving
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200 dark:border-gray-600 transform hover:-translate-y-1">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-700 dark:to-indigo-700 p-6 text-white">
                <div className="flex items-center gap-2 mb-3">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/>
                    <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-sm font-medium opacity-90">Professional Certificate</span>
                </div>
                <h3 className="text-xl font-bold mb-2 leading-tight">
                  Sustainability, Work Ethics & Gender Equity Certificate
                </h3>
                <p className="text-blue-100 text-sm">Honoris • 2025</p>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4 text-sm text-gray-600 dark:text-gray-300">
                  <div className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                    </svg>
                    <span>2025</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C20.832 18.477 19.246 18 17.5 18c-1.746 0-3.332.477-4.5 1.253"/>
                    </svg>
                    <span>Professional Development</span>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Certified in sustainability practices, professional work ethics, and gender equity principles in the workplace.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs font-medium rounded-full border border-gray-200 dark:border-gray-600">
                    Sustainability
                  </span>
                  <span className="px-3 py-1 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs font-medium rounded-full border border-gray-200 dark:border-gray-600">
                    Work Ethics
                  </span>
                  <span className="px-3 py-1 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs font-medium rounded-full border border-gray-200 dark:border-gray-600">
                    Gender Equity
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <a 
              href="/about"
              className="inline-block text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors duration-200"
            >
              View Full Profile →
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
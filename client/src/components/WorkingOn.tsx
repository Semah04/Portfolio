'use client'

const WorkingOn: React.FC = () => {
  const projects = [
    {
      title: "Portfolio Enhancement",
      description: "Adding new features and improving user experience",
      status: "In Progress",
      tech: ["Next.js", "TypeScript", "Tailwind CSS"]
    },
    {
      title: "Open Source Contributions",
      description: "Contributing to various open-source projects",
      status: "Active",
      tech: ["React", "Node.js"]
    },
    {
      title: "Learning Advanced DevOps",
      description: "Deep diving into Kubernetes and cloud architecture",
      status: "Learning",
      tech: ["Kubernetes", "AWS", "Docker"]
    }
  ]

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
            What I'm Working On
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto transition-colors duration-300">
            Current projects and learning initiatives
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  project.status === "In Progress" 
                    ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                    : project.status === "Active"
                    ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                    : "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200"
                }`}>
                  {project.status}
                </span>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WorkingOn


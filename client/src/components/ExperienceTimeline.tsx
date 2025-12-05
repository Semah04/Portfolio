'use client'

interface Experience {
  title: string
  company: string
  period: string
  description: string
  achievements: string[]
  type: 'work' | 'education'
}

const ExperienceTimeline: React.FC = () => {
  const experiences: Experience[] = [
    {
      title: "Engineering Degree in Computer Science",
      company: "ESPRIT Engineering School",
      period: "Expected 2025",
      description: "Pursuing advanced studies in computer science with focus on software engineering, system architecture, and modern development practices.",
      achievements: [],
      type: 'education'
    },
    {
      title: "Software Engineering Intern",
      company: "Orange Digital Center",
      period: "Feb 2025 - Oct 2025",
      description: "Designed and developed dynamic, user-friendly frontend using React/Next.js with component-based architecture, serving 500+ users and reducing equipment booking time by 40%.",
      achievements: [
        "Integrated AI-powered conversational chatbot reducing support tickets by 35%",
        "Implemented JWT-based RBAC supporting 4 user roles with 99.9% authentication reliability",
        "Orchestrated Docker containerization and CI/CD pipeline deployment"
      ],
      type: 'work'
    },
    {
      title: "Software Development Intern",
      company: "DESIGN ET",
      period: "Jul 2024 - Aug 2024",
      description: "Contributed to digital design projects focusing on user-centered design principles and responsive prototyping.",
      achievements: [
        "Participated in agile development workflows",
        "Applied user-centered design principles"
      ],
      type: 'work'
    },
    {
      title: "Computer Science Degree",
      company: "ISET Charguia",
      period: "2022",
      description: "Foundation in computer science principles, programming fundamentals, and software development methodologies.",
      achievements: [],
      type: 'education'
    }
  ]

  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-blue-200 dark:bg-blue-800 transform md:-translate-x-1/2"></div>

      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <div key={index} className="relative flex items-start">
            {/* Timeline dot */}
            <div className={`absolute left-6 md:left-1/2 w-4 h-4 rounded-full border-4 border-white dark:border-gray-800 transform md:-translate-x-1/2 z-10 ${
              exp.type === 'work' 
                ? 'bg-blue-600 dark:bg-blue-500' 
                : 'bg-green-600 dark:bg-green-500'
            }`}></div>

            {/* Content */}
            <div className={`ml-16 md:ml-0 md:w-1/2 ${
              index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
            }`}>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center justify-between mb-2">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    exp.type === 'work'
                      ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                      : 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                  }`}>
                    {exp.type === 'work' ? 'Work' : 'Education'}
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">{exp.period}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                  {exp.title}
                </h3>
                <p className="text-blue-600 dark:text-blue-400 font-medium mb-3">
                  {exp.company}
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {exp.description}
                </p>
                {exp.achievements.length > 0 && (
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="flex items-start text-sm text-gray-600 dark:text-gray-300">
                        <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ExperienceTimeline


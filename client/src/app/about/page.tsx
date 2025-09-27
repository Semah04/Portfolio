import Image from 'next/image'

export default function About() {
  const skills = [
    {
      category: "Frontend",
      technologies: [
        { name: "React", level: 90 },
        { name: "Next.js", level: 85 },
        { name: "TypeScript", level: 80 },
        { name: "Tailwind CSS", level: 90 },
        { name: "JavaScript", level: 95 }
      ]
    },
    {
      category: "Backend",
      technologies: [
        { name: "Node.js", level: 85 },
        { name: "Express.js", level: 80 },
        { name: "MongoDB", level: 75 },
        { name: "PostgreSQL", level: 70 },
        { name: "REST APIs", level: 85 }
      ]
    },
    {
      category: "Tools & Others",
      technologies: [
        { name: "Git & GitHub", level: 90 },
        { name: "Docker", level: 65 },
        { name: "AWS", level: 60 },
        { name: "Figma", level: 75 },
        { name: "VS Code", level: 95 }
      ]
    }
  ]

  const experiences = [
    {
      title: "Frontend Developer",
      company: "Tech Solutions Inc.",
      period: "2023 - Present",
      description: "Developing modern web applications using React, Next.js, and TypeScript. Collaborated with design team to implement pixel-perfect UI/UX designs.",
      achievements: [
        "Improved website performance by 40%",
        "Led development of 3 major client projects",
        "Mentored 2 junior developers"
      ]
    },
    {
      title: "Full Stack Developer",
      company: "StartUp XYZ",
      period: "2022 - 2023",
      description: "Built and maintained full-stack applications using MERN stack. Responsible for both frontend and backend development.",
      achievements: [
        "Developed MVP that acquired 1000+ users",
        "Implemented CI/CD pipeline",
        "Reduced deployment time by 60%"
      ]
    },
    {
      title: "Junior Developer",
      company: "Digital Agency",
      period: "2021 - 2022",
      description: "Started my professional journey building websites and learning modern web technologies.",
      achievements: [
        "Completed 15+ client projects",
        "Learned React and Node.js",
        "Improved code quality through peer reviews"
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Profile Image */}
            <div className="text-center md:text-left">
              <div className="relative w-64 h-64 mx-auto md:mx-0 mb-8">
                <div className="w-full h-full rounded-full overflow-hidden shadow-xl ring-4 ring-white">
                  <Image
                    src="/images/me.jpg"
                    alt="Profile picture"
                    width={256}
                    height={256}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    priority
                  />
                </div>
                {/* Optional: Add a decorative element */}
                <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* About Content */}
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                About Me
              </h1>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Hi! I'm a passionate full-stack developer with over 3 years of experience 
                creating digital solutions that make a difference. I love turning complex 
                problems into simple, beautiful, and intuitive applications.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, 
                contributing to open-source projects, or sharing my knowledge through 
                technical writing and mentoring.
              </p>
              
              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">50+</div>
                  <div className="text-sm text-gray-600">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">3+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">100+</div>
                  <div className="text-sm text-gray-600">Happy Clients</div>
                </div>
              </div>

              <a 
                href="/contact" 
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-200"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Skills & Expertise
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Here are the technologies and tools I work with regularly
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((skillGroup, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-6 text-gray-900">
                  {skillGroup.category}
                </h3>
                <div className="space-y-4">
                  {skillGroup.technologies.map((tech, techIndex) => (
                    <div key={techIndex}>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-700 font-medium">{tech.name}</span>
                        <span className="text-gray-500">{tech.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-blue-600 h-2 rounded-full transition-all duration-1000"
                          style={{ width: `${tech.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Work Experience
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              My professional journey and key achievements
            </p>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{exp.title}</h3>
                    <p className="text-blue-600 font-medium">{exp.company}</p>
                  </div>
                  <span className="text-gray-500 mt-2 md:mt-0">{exp.period}</span>
                </div>
                
                <p className="text-gray-600 mb-4">{exp.description}</p>
                
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Key Achievements:</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-600">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Personal Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Beyond Coding
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C20.832 18.477 19.246 18 17.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Learning</h3>
              <p className="text-gray-600">Always exploring new technologies and best practices in web development.</p>
            </div>
            
            <div className="p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Mentoring</h3>
              <p className="text-gray-600">Helping junior developers grow and sharing knowledge with the community.</p>
            </div>
            
            <div className="p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Innovation</h3>
              <p className="text-gray-600">Contributing to open-source projects and building tools that solve real problems.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
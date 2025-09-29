'use client'

import Image from 'next/image'
import { useState } from 'react'

interface Skill {
  name: string
  level: number
}

interface SkillGroup {
  category: string
  technologies: Skill[]
}

interface Experience {
  title: string
  company: string
  period: string
  description: string
  achievements: string[]
}

interface Certificate {
  id: number
  title: string
  issuer: string
  date: string
  duration: string
  skills: string[]
  certificateId: string
}

const About: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null)

  const skills: SkillGroup[] = [
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

  const experiences: Experience[] = [
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

  const certificates: Certificate[] = [
    {
      id: 1,
      title: "Devenir développeur / développeuse web front-end",
      issuer: "LinkedIn Learning",
      date: "Jan 01, 2022",
      duration: "49 hours 45 min",
      skills: [
        "Web Development",
        "Web Design",
        "Front-End Development",
        "User Experience (UX)"
      ],
      certificateId: "AViiKrXQwl79aD_LFQhnwbjljCtn"
    },
    {
      id: 2,
      title: "Devenir graphiste",
      issuer: "LinkedIn Learning",
      date: "Dec 31, 2021",
      duration: "43 hours 2 min",
      skills: [
        "Digital Illustration",
        "Typography",
        "Logo Design",
        "Graphics",
        "Illustration",
        "Adobe Illustrator",
        "Layout Design",
        "Adobe Photoshop",
        "Adobe InDesign"
      ],
      certificateId: "ASnzoIXvoyEZYF8j2Ll0R0u5S3xh"
    }
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Profile Image */}
            <div className="text-center md:text-left">
              <div className="relative w-64 h-64 mx-auto md:mx-0 mb-8">
                <div className="w-full h-full rounded-full overflow-hidden shadow-xl ring-4 ring-white dark:ring-gray-700">
                  <Image
                    src="/images/me.jpg"
                    alt="Profile picture"
                    width={256}
                    height={256}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    priority
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-blue-600 dark:bg-blue-700 rounded-full flex items-center justify-center shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* About Content */}
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-300">
                About Me
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed transition-colors duration-300">
                Hi! I'm a passionate full-stack developer with over 3 years of experience 
                creating digital solutions that make a difference. I love turning complex 
                problems into simple, beautiful, and intuitive applications.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed transition-colors duration-300">
                When I'm not coding, you can find me exploring new technologies, 
                contributing to open-source projects, or sharing my knowledge through 
                technical writing and mentoring.
              </p>
              
              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">50+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">3+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">100+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Happy Clients</div>
                </div>
              </div>

              <a 
                href="/contact" 
                className="inline-block bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-200"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
              Skills & Expertise
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto transition-colors duration-300">
              Here are the technologies and tools I work with regularly
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((skillGroup, index) => (
              <div key={index} className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 transition-colors duration-300">
                <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white transition-colors duration-300">
                  {skillGroup.category}
                </h3>
                <div className="space-y-4">
                  {skillGroup.technologies.map((tech, techIndex) => (
                    <div key={techIndex}>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-700 dark:text-gray-300 font-medium transition-colors duration-300">{tech.name}</span>
                        <span className="text-gray-500 dark:text-gray-400 transition-colors duration-300">{tech.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div 
                          className="bg-blue-600 dark:bg-blue-500 h-2 rounded-full transition-all duration-1000"
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
      <section className="py-16 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
              Work Experience
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto transition-colors duration-300">
              My professional journey and key achievements
            </p>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 transition-colors duration-300">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white transition-colors duration-300">{exp.title}</h3>
                    <p className="text-blue-600 dark:text-blue-400 font-medium transition-colors duration-300">{exp.company}</p>
                  </div>
                  <span className="text-gray-500 dark:text-gray-400 mt-2 md:mt-0 transition-colors duration-300">{exp.period}</span>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4 transition-colors duration-300">{exp.description}</p>
                
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white mb-2 transition-colors duration-300">Key Achievements:</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-300 transition-colors duration-300">
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

      {/* Certificates Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
              Certifications
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto transition-colors duration-300">
              Professional certifications and continuous learning achievements
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {certificates.map((cert) => (
              <div
                key={cert.id}
                className="group bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200 dark:border-gray-600 cursor-pointer transform hover:-translate-y-1"
                onClick={() => setSelectedCert(cert)}
              >
                {/* Certificate Header */}
                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-700 dark:to-indigo-700 p-6 text-white">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-3">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/>
                          <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                        </svg>
                        <span className="text-sm font-medium opacity-90">Certificate of Completion</span>
                      </div>
                      <h3 className="text-xl font-bold mb-2 leading-tight">
                        {cert.title}
                      </h3>
                      <p className="text-blue-100 text-sm">{cert.issuer}</p>
                    </div>
                    <div className="w-16 h-16 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center flex-shrink-0 ml-4 shadow-lg">
                      <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Certificate Content */}
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4 text-sm text-gray-600 dark:text-gray-300">
                    <div className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                      </svg>
                      <span>{cert.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                      </svg>
                      <span>{cert.duration}</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Skills Covered:</h4>
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.slice(0, 4).map((skill, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs font-medium rounded-full border border-gray-200 dark:border-gray-600"
                        >
                          {skill}
                        </span>
                      ))}
                      {cert.skills.length > 4 && (
                        <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-xs font-medium rounded-full">
                          +{cert.skills.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-200 dark:border-gray-600">
                    <button className="w-full flex items-center justify-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors">
                      <span>View Details</span>
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Personal Section */}
      <section className="py-16 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8 transition-colors duration-300">
            Beyond Coding
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4 transition-colors duration-300">
                <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C20.832 18.477 19.246 18 17.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white transition-colors duration-300">Learning</h3>
              <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">Always exploring new technologies and best practices in web development.</p>
            </div>
            
            <div className="p-6">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4 transition-colors duration-300">
                <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white transition-colors duration-300">Mentoring</h3>
              <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">Helping junior developers grow and sharing knowledge with the community.</p>
            </div>
            
            <div className="p-6">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4 transition-colors duration-300">
                <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white transition-colors duration-300">Innovation</h3>
              <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">Contributing to open-source projects and building tools that solve real problems.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Certificate Modal */}
      {selectedCert && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
          onClick={() => setSelectedCert(null)}
        >
          <div 
            className="bg-white dark:bg-gray-800 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-700 dark:to-indigo-700 p-6 text-white z-10">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-bold mb-2">{selectedCert.title}</h3>
                  <p className="text-blue-100">{selectedCert.issuer}</p>
                </div>
                <button
                  onClick={() => setSelectedCert(null)}
                  className="text-white hover:bg-white hover:bg-opacity-20 rounded-full p-2 transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
                  </svg>
                </button>
              </div>
            </div>

            <div className="p-6">
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Completion Date</div>
                  <div className="font-semibold text-gray-900 dark:text-white">{selectedCert.date}</div>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Duration</div>
                  <div className="font-semibold text-gray-900 dark:text-white">{selectedCert.duration}</div>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">All Skills Covered</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedCert.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-2 bg-blue-50 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-sm font-medium rounded-lg border border-blue-200 dark:border-blue-700"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Certificate ID</div>
                <div className="font-mono text-sm text-gray-900 dark:text-white break-all">{selectedCert.certificateId}</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default About
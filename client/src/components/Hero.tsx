import Link from 'next/link'
import Image from 'next/image'

const Hero: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 py-20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Profile Photo */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full blur-lg opacity-50 animate-pulse"></div>
              <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl">
                <Image 
                  src="/images/me.jpg" 
                  alt="Naski Semah" 
                  width={160}
                  height={160}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
            NASKI SEMAH
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-blue-600 dark:text-blue-400 mb-6 transition-colors duration-300">
            FULLSTACK DEVELOPER
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-6 transition-colors duration-300">
            Fullstack Developer with strong frontend expertise and 2+ years of experience building scalable, 
            component-based applications using Angular, React, and TypeScript. Proven ability to design responsive 
            user interfaces and integrate with backend services using Node.js and Java Spring Boot.
          </p>
          <p className="text-base md:text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mb-8 transition-colors duration-300">
            Passionate about clean code, system reliability, and delivering features that drive business value.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              href="/projects"
              className="inline-block bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-200 transform hover:scale-105"
            >
              View My Work
            </Link>
            <Link 
              href="/contact"
              className="inline-block bg-transparent border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 hover:bg-blue-600 dark:hover:bg-blue-400 hover:text-white dark:hover:text-gray-900 font-medium py-3 px-8 rounded-lg transition-colors duration-200 transform hover:scale-105"
            >
              Get In Touch
            </Link>
            <a 
              href="/resume.pdf" 
              download
              className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-600 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-200 transform hover:scale-105"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

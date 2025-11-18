import Link from 'next/link'

const Hero: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 py-20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
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
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/projects"
              className="inline-block bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-200"
            >
              View My Work
            </Link>
            <Link 
              href="/contact"
              className="inline-block bg-transparent border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 hover:bg-blue-600 dark:hover:bg-blue-400 hover:text-white dark:hover:text-gray-900 font-medium py-3 px-8 rounded-lg transition-colors duration-200"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

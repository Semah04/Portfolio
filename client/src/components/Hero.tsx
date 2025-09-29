import Link from 'next/link'

const Hero: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 py-20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-300">
            Hi, I'm <span className="text-blue-600 dark:text-blue-400">Naski Semah</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8 transition-colors duration-300">
            A passionate full-stack developer creating amazing web experiences 
            with modern technologies and clean, efficient code.
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

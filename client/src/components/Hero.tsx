import Link from 'next/link'

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
      <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Welcome to My Portfolio
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 animate-fade-in-delay">
            I'm a developer passionate about creating amazing web experiences
          </p>
          <div className="space-x-4 animate-fade-in-delay-2">
            <Link 
              href="/projects"
              className="inline-block bg-white text-blue-600 hover:bg-gray-100 font-medium py-3 px-6 rounded-lg transition-all duration-300 hover:transform hover:scale-105 shadow-lg"
            >
              View My Work
            </Link>
            <Link 
              href="/contact"
              className="inline-block bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 font-medium py-3 px-6 rounded-lg transition-all duration-300 hover:transform hover:scale-105"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
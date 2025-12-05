'use client'

const FunFacts: React.FC = () => {
  const facts = [
    {
      icon: "☕",
      title: "Coffee Enthusiast",
      description: "I run on coffee and code. The perfect combination for late-night debugging sessions."
    },
    {
      icon: "🌍",
      title: "Multilingual",
      description: "Fluent in Arabic, French, and English. Code speaks all languages though!"
    },
    {
      icon: "🎯",
      title: "Problem Solver",
      description: "I enjoy solving complex problems and turning challenges into opportunities."
    },
    {
      icon: "🚀",
      title: "Tech Explorer",
      description: "Always exploring new technologies and frameworks to stay ahead of the curve."
    }
  ]

  return (
    <section className="py-16 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
            Fun Facts About Me
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto transition-colors duration-300">
            A few things that make me who I am beyond coding
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {facts.map((fact, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 text-center"
            >
              <div className="text-5xl mb-4">{fact.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {fact.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                {fact.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FunFacts


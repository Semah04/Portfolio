'use client'

const CurrentlyLearning: React.FC = () => {
  const learningItems = [
    { name: "Kubernetes", icon: "☸️", progress: 75 },
    { name: "AWS Advanced", icon: "☁️", progress: 60 },
    { name: "Microservices", icon: "🔧", progress: 70 },
    { name: "System Design", icon: "🏗️", progress: 65 },
  ]

  return (
    <section className="py-16 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
            Currently Learning
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto transition-colors duration-300">
            Always expanding my knowledge and staying up-to-date with the latest technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {learningItems.map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300"
            >
              <div className="text-4xl mb-4 text-center">{item.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 text-center">
                {item.name}
              </h3>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div
                  className="bg-blue-600 dark:bg-blue-500 h-2 rounded-full transition-all duration-1000"
                  style={{ width: `${item.progress}%` }}
                ></div>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 text-center mt-2">
                {item.progress}% Complete
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CurrentlyLearning


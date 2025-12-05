import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center px-4 transition-colors duration-300">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-blue-600 dark:text-blue-400 mb-4">404</h1>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
          Oops! Page Not Found
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-md mx-auto transition-colors duration-300">
          The page you're looking for seems to have wandered off into the digital void. 
          Don't worry, even the best developers lose track of things sometimes! 😄
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-block bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-200 transform hover:scale-105"
          >
            Go Home
          </Link>
          <Link
            href="/projects"
            className="inline-block bg-transparent border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 hover:bg-blue-600 dark:hover:bg-blue-400 hover:text-white dark:hover:text-gray-900 font-medium py-3 px-8 rounded-lg transition-colors duration-200 transform hover:scale-105"
          >
            View Projects
          </Link>
        </div>
        <div className="mt-12 text-6xl">🤖</div>
        <p className="mt-4 text-gray-500 dark:text-gray-400 text-sm">
          Even robots get lost sometimes...
        </p>
      </div>
    </div>
  )
}


'use client'

import { useEffect, useState } from 'react'

interface GitHubStats {
  followers: number
  following: number
  public_repos: number
  public_gists: number
}

const GitHubStats: React.FC = () => {
  const [stats, setStats] = useState<GitHubStats | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await fetch('https://api.github.com/users/Semah04')
        if (response.ok) {
          const data = await response.json()
          setStats({
            followers: data.followers || 0,
            following: data.following || 0,
            public_repos: data.public_repos || 0,
            public_gists: data.public_gists || 0
          })
        }
      } catch (error) {
        console.error('Failed to fetch GitHub stats:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchStats()
  }, [])

  if (loading) {
    return (
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="bg-gray-200 dark:bg-gray-700 animate-pulse h-20 rounded-lg"></div>
        ))}
      </div>
    )
  }

  if (!stats) return null

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 text-center hover:shadow-md transition-shadow">
          <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">{stats.public_repos}</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">Repositories</div>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 text-center hover:shadow-md transition-shadow">
          <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">{stats.followers}</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">Followers</div>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 text-center hover:shadow-md transition-shadow">
          <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">{stats.following}</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">Following</div>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 text-center hover:shadow-md transition-shadow">
          <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">{stats.public_gists}</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">Gists</div>
        </div>
      </div>

      {/* GitHub Contribution Graph */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 text-center">
          Contribution Activity
        </h3>
        <div className="flex justify-center overflow-x-auto">
          <img
            src="https://github-readme-activity-graph.vercel.app/graph?username=Semah04&theme=react-dark&bg_color=ffffff&color=2563eb&line=2563eb&point=2563eb&area=true&hide_border=true"
            alt="GitHub Activity Graph"
            className="w-full max-w-4xl"
            onError={(e) => {
              // Fallback to alternative graph if first one fails
              const target = e.target as HTMLImageElement
              target.src = `https://github-readme-activity-graph.vercel.app/graph?username=Semah04&theme=github&bg_color=ffffff&color=000000&line=2563eb&point=2563eb&area=true&hide_border=true`
            }}
          />
        </div>
        <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-4">
          My GitHub contribution graph showing coding activity over time
        </p>
      </div>
    </>
  )
}

export default GitHubStats


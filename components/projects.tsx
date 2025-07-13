'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github, Folder, Star, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import projectsData from '@/content/projects.json';

export function Projects() {
  const { projects } = projectsData;
  const [sortBy, setSortBy] = useState<'name' | 'lastUpdated'>('lastUpdated');
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Sort projects based on selected option
  const sortProjects = (projectList: typeof projects) => {
    return [...projectList].sort((a, b) => {
      if (sortBy === 'name') {
        return a.title.localeCompare(b.title);
      } else {
        // Sort by lastUpdated (YYYY-MM format) in descending order (newest first)
        const dateA = a.lastUpdated || '0000-00';
        const dateB = b.lastUpdated || '0000-00';
        return dateB.localeCompare(dateA);
      }
    });
  };

  const featuredProjects = sortProjects(
    projects.filter(project => project.featured)
  );
  const otherProjects = sortProjects(
    projects.filter(project => !project.featured)
  );

  const getCategoryColor = (category: string) => {
    const colors = {
      Security: 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400',
      'Web Scraping':
        'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400',
      'Web Application':
        'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400',
      'Image Gallery':
        'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400',
      'Chat Application':
        'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400',
      Dashboard:
        'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400',
      'Desktop Application':
        'bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-400',
      'Machine Learning':
        'bg-pink-100 text-pink-800 dark:bg-pink-900/30 dark:text-pink-400',
      Visualization:
        'bg-cyan-100 text-cyan-800 dark:bg-cyan-900/30 dark:text-cyan-400',
      'Banking Application':
        'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400',
      'Business Website':
        'bg-violet-100 text-violet-800 dark:bg-violet-900/30 dark:text-violet-400',
      Utility:
        'bg-teal-100 text-teal-800 dark:bg-teal-900/30 dark:text-teal-400',
      'Weather Application':
        'bg-sky-100 text-sky-800 dark:bg-sky-900/30 dark:text-sky-400',
      default:
        'bg-gray-100 text-gray-800 dark:bg-zinc-900/30 dark:text-gray-400',
    };
    return colors[category as keyof typeof colors] || colors.default;
  };

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-dark-800">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-zinc-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A collection of projects I&apos;ve worked on, showcasing different
            technologies and approaches
          </p>
        </motion.div>

        {/* Sort Dropdown */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center space-x-2 px-4 py-2 bg-white dark:bg-dark-900 border border-gray-200 dark:border-dark-700 rounded-lg text-gray-700 dark:text-gray-300 hover:border-primary-300 dark:hover:border-primary-600 transition-colors"
            >
              <span>
                Sort by: {sortBy === 'name' ? 'Name' : 'Last Updated'}
              </span>
              <ChevronDown className="h-4 w-4" />
            </button>
            {dropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-48 bg-white dark:bg-dark-900 border border-gray-200 dark:border-dark-700 rounded-lg shadow-lg z-10">
                <button
                  onClick={() => {
                    setSortBy('lastUpdated');
                    setDropdownOpen(false);
                  }}
                  className="w-full px-4 py-2 text-left hover:bg-gray-50 dark:hover:bg-dark-800 text-gray-700 dark:text-gray-300"
                >
                  Last Updated
                </button>
                <button
                  onClick={() => {
                    setSortBy('name');
                    setDropdownOpen(false);
                  }}
                  className="w-full px-4 py-2 text-left hover:bg-gray-50 dark:hover:bg-dark-800 text-gray-700 dark:text-gray-300"
                >
                  Name
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Featured Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-dark-900 rounded-xl p-6 border border-gray-200 dark:border-dark-700 card-hover group"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-primary-100 dark:bg-primary-900/30 rounded-lg">
                    <Folder className="h-5 w-5 text-primary-600 dark:text-primary-400" />
                  </div>
                  <Star className="h-5 w-5 text-yellow-500 fill-current" />
                </div>
                <div className="flex items-center space-x-2">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                  {project.appLink && (
                    <a
                      href={project.appLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                    >
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  )}
                </div>
              </div>

              <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-2">
                {project.title}
              </h3>

              <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="flex items-center justify-between">
                <span
                  className={`px-2 py-1 text-xs font-medium rounded-full ${getCategoryColor(project.category)}`}
                >
                  {project.category}
                </span>
                {project.lastUpdated && (
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    Updated {project.lastUpdated}
                  </span>
                )}
              </div>

              <div className="flex flex-wrap gap-2 mt-4">
                {project.technologies.map(tech => (
                  <span
                    key={tech}
                    className="px-2 py-1 text-xs font-medium rounded bg-gray-100 dark:bg-dark-800 text-gray-700 dark:text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h3 className="text-2xl font-semibold text-zinc-900 dark:text-white text-center mb-8">
            Other Projects
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {otherProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-dark-900 rounded-lg p-4 border border-gray-200 dark:border-dark-700 hover:border-primary-300 dark:hover:border-primary-600 transition-all duration-200"
              >
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-semibold text-zinc-900 dark:text-white">
                    {project.title}
                  </h4>
                  <div className="flex items-center space-x-2">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1 rounded text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                    >
                      <Github className="h-4 w-4" />
                    </a>
                    {project.appLink && (
                      <a
                        href={project.appLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1 rounded text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                  {project.description}
                </p>

                <div className="flex items-center justify-between mb-3">
                  <span
                    className={`px-2 py-1 text-xs font-medium rounded-full ${getCategoryColor(project.category)}`}
                  >
                    {project.category}
                  </span>
                  {project.lastUpdated && (
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      {project.lastUpdated}
                    </span>
                  )}
                </div>

                <div className="flex flex-wrap gap-1">
                  {project.technologies.slice(0, 3).map(tech => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs rounded bg-gray-100 dark:bg-dark-800 text-gray-600 dark:text-gray-400"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 text-xs rounded bg-gray-100 dark:bg-dark-800 text-gray-600 dark:text-gray-400">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Want to see more of my work?
          </p>
          <a
            href="https://github.com/mwpereira"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-6 py-3 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded-lg font-medium transition-all duration-200 transform hover:scale-105"
          >
            <Github className="h-5 w-5" />
            <span>View on GitHub</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

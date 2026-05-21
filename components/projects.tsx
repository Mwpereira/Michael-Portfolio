'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Folder, Star, ChevronDown } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { useState } from 'react';
import projectsData from '@/content/projects.json';

export function Projects() {
  const { projects } = projectsData;
  const [sortBy, setSortBy] = useState<'name' | 'lastUpdated'>('lastUpdated');
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const sortProjects = (projectList: typeof projects) => {
    return [...projectList].sort((a, b) => {
      if (sortBy === 'name') {
        return a.title.localeCompare(b.title);
      } else {
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
    const colors: Record<string, string> = {
      Security:
        'bg-red-500/[0.08] text-red-700 dark:bg-red-500/[0.12] dark:text-red-300',
      'Web Scraping':
        'bg-orange-500/[0.08] text-orange-700 dark:bg-orange-500/[0.12] dark:text-orange-300',
      'Web Application':
        'bg-blue-500/[0.08] text-blue-700 dark:bg-blue-500/[0.12] dark:text-blue-300',
      'Image Gallery':
        'bg-purple-500/[0.08] text-purple-700 dark:bg-purple-500/[0.12] dark:text-purple-300',
      'Chat Application':
        'bg-primary-500/[0.08] text-primary-700 dark:bg-primary-500/[0.12] dark:text-primary-300',
      Dashboard:
        'bg-yellow-500/[0.08] text-yellow-700 dark:bg-yellow-500/[0.12] dark:text-yellow-300',
      'Desktop Application':
        'bg-indigo-500/[0.08] text-indigo-700 dark:bg-indigo-500/[0.12] dark:text-indigo-300',
      'Machine Learning':
        'bg-pink-500/[0.08] text-pink-700 dark:bg-pink-500/[0.12] dark:text-pink-300',
      Visualization:
        'bg-cyan-500/[0.08] text-cyan-700 dark:bg-cyan-500/[0.12] dark:text-cyan-300',
      'Banking Application':
        'bg-emerald-500/[0.08] text-emerald-700 dark:bg-emerald-500/[0.12] dark:text-emerald-300',
      'Business Website':
        'bg-violet-500/[0.08] text-violet-700 dark:bg-violet-500/[0.12] dark:text-violet-300',
      Utility:
        'bg-teal-500/[0.08] text-teal-700 dark:bg-teal-500/[0.12] dark:text-teal-300',
      'Weather Application':
        'bg-sky-500/[0.08] text-sky-700 dark:bg-sky-500/[0.12] dark:text-sky-300',
    };
    return (
      colors[category] ||
      'bg-neutral-500/[0.08] text-neutral-700 dark:bg-neutral-500/[0.12] dark:text-neutral-300'
    );
  };

  return (
    <section id="projects" className="py-20">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-neutral-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-neutral-500 dark:text-neutral-400 max-w-3xl mx-auto">
            A collection of projects I&apos;ve worked on, showcasing different
            technologies and approaches
          </p>
        </motion.div>

        {/* Sort Dropdown */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center space-x-2 px-4 py-2.5 glass-card rounded-xl text-neutral-600 dark:text-neutral-300 hover:bg-black/[0.02] dark:hover:bg-white/[0.03] transition-colors text-sm font-medium"
            >
              <span>
                Sort by: {sortBy === 'name' ? 'Name' : 'Last Updated'}
              </span>
              <ChevronDown className="h-4 w-4" />
            </button>
            {dropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-48 rounded-xl shadow-lg z-10 overflow-hidden bg-white dark:bg-[#1a1a1a] border border-black/[0.06] dark:border-white/[0.08]">
                <button
                  onClick={() => {
                    setSortBy('lastUpdated');
                    setDropdownOpen(false);
                  }}
                  className="w-full px-4 py-2.5 text-left hover:bg-black/[0.03] dark:hover:bg-white/[0.05] text-neutral-600 dark:text-neutral-300 text-sm transition-colors"
                >
                  Last Updated
                </button>
                <button
                  onClick={() => {
                    setSortBy('name');
                    setDropdownOpen(false);
                  }}
                  className="w-full px-4 py-2.5 text-left hover:bg-black/[0.03] dark:hover:bg-white/[0.05] text-neutral-600 dark:text-neutral-300 text-sm transition-colors"
                >
                  Name
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Featured Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-6 card-hover group"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-primary-500/[0.08] dark:bg-primary-500/[0.12] rounded-xl">
                    <Folder className="h-5 w-5 text-primary-600 dark:text-primary-400" />
                  </div>
                  <Star className="h-4 w-4 text-amber-400 fill-current" />
                </div>
                <div className="flex items-center space-x-1">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200 transition-colors"
                  >
                    <FaGithub className="h-4 w-4" />
                  </a>
                  {project.appLink && (
                    <a
                      href={project.appLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200 transition-colors"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </div>

              <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-2">
                {project.title}
              </h3>

              <p className="text-neutral-500 dark:text-neutral-400 mb-4 leading-relaxed text-sm">
                {project.description}
              </p>

              <div className="flex items-center justify-between">
                <span
                  className={`px-2.5 py-1 text-xs font-medium rounded-full ${getCategoryColor(project.category)}`}
                >
                  {project.category}
                </span>
                {project.lastUpdated && (
                  <span className="text-xs text-neutral-400">
                    Updated {project.lastUpdated}
                  </span>
                )}
              </div>

              <div className="flex flex-wrap gap-1.5 mt-4">
                {project.technologies.map(tech => (
                  <span
                    key={tech}
                    className="px-2 py-1 text-xs font-medium rounded-lg bg-black/[0.03] dark:bg-white/[0.05] text-neutral-600 dark:text-neutral-300"
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
          <h3 className="text-2xl font-semibold text-neutral-900 dark:text-white text-center mb-8">
            Other Projects
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {otherProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="glass-card p-4 hover:bg-black/[0.01] dark:hover:bg-white/[0.02] transition-all duration-200"
              >
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-semibold text-neutral-900 dark:text-white text-sm">
                    {project.title}
                  </h4>
                  <div className="flex items-center space-x-1">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1 rounded text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200 transition-colors"
                    >
                      <FaGithub className="h-3.5 w-3.5" />
                    </a>
                    {project.appLink && (
                      <a
                        href={project.appLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1 rounded text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200 transition-colors"
                      >
                        <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-neutral-500 dark:text-neutral-400 text-xs mb-3 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex items-center justify-between mb-3">
                  <span
                    className={`px-2 py-0.5 text-xs font-medium rounded-full ${getCategoryColor(project.category)}`}
                  >
                    {project.category}
                  </span>
                  {project.lastUpdated && (
                    <span className="text-xs text-neutral-400">
                      {project.lastUpdated}
                    </span>
                  )}
                </div>

                <div className="flex flex-wrap gap-1">
                  {project.technologies.slice(0, 3).map(tech => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 text-xs rounded-md bg-black/[0.03] dark:bg-white/[0.05] text-neutral-500 dark:text-neutral-400"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-0.5 text-xs rounded-md bg-black/[0.03] dark:bg-white/[0.05] text-neutral-500 dark:text-neutral-400">
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
          <p className="text-neutral-500 dark:text-neutral-400 mb-6">
            Want to see more of my work?
          </p>
          <a
            href="https://github.com/mwpereira"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-6 py-3 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 rounded-xl font-medium transition-all duration-200 transform hover:scale-[1.02]"
          >
            <FaGithub className="h-5 w-5" />
            <span>View on GitHub</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

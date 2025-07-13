'use client';

import { motion } from 'framer-motion';
import { MapPin, Calendar, Building, ExternalLink } from 'lucide-react';
import experienceData from '@/content/experience.json';

export function Experience() {
  const { experiences } = experienceData;

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Full-time':
        return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400';
      case 'Co-op':
        return 'bg-teal-100 text-teal-800 dark:bg-teal-900/30 dark:text-teal-400';
      case 'Internship':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400';
      case 'Contract':
      case 'Contract Part-time':
        return 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400';
      case 'Freelance':
        return 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-zinc-900/30 dark:text-gray-400';
    }
  };

  return (
    <section id="experience" className="py-20 bg-white dark:bg-dark-900">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-zinc-900 dark:text-white mb-4">
            Work Experience
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            My professional journey in software development
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary-200 dark:bg-primary-800 hidden md:block" />

          <div className="space-y-12">
            {experiences.map((experience, index) => {
              const isChainedIBM =
                experience.company === 'IBM' &&
                experiences[index + 1]?.company === 'IBM' &&
                experience.type === 'Full-time' &&
                (experiences[index + 1]?.type === 'Full-time' ||
                  experiences[index + 1]?.type === 'Software Developer');

              return (
                <motion.div
                  key={experience.id}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-6 top-8 w-4 h-4 bg-primary-500 rounded-full border-4 border-white dark:border-dark-900 hidden md:block" />

                  {isChainedIBM && (
                    <div className="absolute left-8 top-12 bottom-[-3rem] w-0.5 bg-primary-500 hidden md:block" />
                  )}

                  <div className="md:ml-20 bg-gray-50 dark:bg-dark-800 rounded-xl p-6 border border-gray-200 dark:border-dark-700 card-hover">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-start space-x-3 mb-2">
                          <h3 className="text-xl font-semibold text-zinc-900 dark:text-white flex-1 min-w-0">
                            {experience.position}
                          </h3>
                          <span
                            className={`px-2 py-1 text-xs font-medium rounded-full flex-shrink-0 whitespace-nowrap ${getTypeColor(experience.type)}`}
                          >
                            {experience.type}
                          </span>
                        </div>

                        <div className="flex items-center space-x-2 text-primary-600 dark:text-primary-400 mb-2">
                          <Building className="h-4 w-4" />
                          <span className="font-medium">
                            {experience.company}
                          </span>
                        </div>

                        <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 text-sm text-gray-500 dark:text-gray-400">
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-4 w-4" />
                            <span>{experience.duration}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <MapPin className="h-4 w-4" />
                            <span>{experience.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3 mb-6">
                      {experience.description.map((item, itemIndex) => (
                        <div
                          key={itemIndex}
                          className="flex items-start space-x-3"
                        >
                          <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
                          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                            {item}
                          </p>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map(tech => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs font-medium rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-300 border border-primary-200 dark:border-primary-800"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Want to know more about my professional experience?
          </p>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-medium transition-all duration-200 transform hover:scale-105"
          >
            <ExternalLink className="h-5 w-5" />
            <span>View Full Resume</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

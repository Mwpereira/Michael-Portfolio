'use client';

import { motion } from 'framer-motion';
import { MapPin, Calendar, Building, ExternalLink } from 'lucide-react';
import experienceData from '@/content/experience.json';

export function Experience() {
  const { experiences } = experienceData;

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Full-time':
        return 'bg-primary-500/[0.08] text-primary-700 dark:bg-primary-500/[0.12] dark:text-primary-300';
      case 'Co-op':
        return 'bg-teal-500/[0.08] text-teal-700 dark:bg-teal-500/[0.12] dark:text-teal-300';
      case 'Internship':
        return 'bg-blue-500/[0.08] text-blue-700 dark:bg-blue-500/[0.12] dark:text-blue-300';
      case 'Contract':
      case 'Contract Part-time':
        return 'bg-purple-500/[0.08] text-purple-700 dark:bg-purple-500/[0.12] dark:text-purple-300';
      case 'Freelance':
        return 'bg-amber-500/[0.08] text-amber-700 dark:bg-amber-500/[0.12] dark:text-amber-300';
      default:
        return 'bg-neutral-500/[0.08] text-neutral-700 dark:bg-neutral-500/[0.12] dark:text-neutral-300';
    }
  };

  return (
    <section id="experience" className="py-20">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-neutral-900 dark:text-white mb-4">
            Work Experience
          </h2>
          <p className="text-xl text-neutral-500 dark:text-neutral-400 max-w-3xl mx-auto">
            My professional journey in software development
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-primary-500/20 dark:bg-primary-500/10 hidden md:block" />

          <div className="space-y-8">
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
                  <div className="absolute left-[26px] top-8 w-3 h-3 bg-primary-500 rounded-full border-[3px] border-[#fafafa] dark:border-[#0d0d0d] hidden md:block" />

                  {isChainedIBM && (
                    <div className="absolute left-8 top-12 bottom-[-2rem] w-px bg-primary-500/40 hidden md:block" />
                  )}

                  <div className="md:ml-20 glass-card p-6 card-hover">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-start space-x-3 mb-2">
                          <h3 className="text-xl font-semibold text-neutral-900 dark:text-white flex-1 min-w-0">
                            {experience.position}
                          </h3>
                          <span
                            className={`px-2.5 py-1 text-xs font-medium rounded-full flex-shrink-0 whitespace-nowrap ${getTypeColor(experience.type)}`}
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

                        <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 text-sm text-neutral-500 dark:text-neutral-400">
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

                    <div className="space-y-2.5 mb-5">
                      {experience.description.map((item, itemIndex) => (
                        <div
                          key={itemIndex}
                          className="flex items-start space-x-3"
                        >
                          <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
                          <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed text-sm">
                            {item}
                          </p>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map(tech => (
                        <span key={tech} className="tech-badge">
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
          <p className="text-neutral-500 dark:text-neutral-400 mb-6">
            Want to know more about my professional experience?
          </p>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-xl font-medium transition-all duration-200 transform hover:scale-[1.02] shadow-lg shadow-primary-600/20"
          >
            <ExternalLink className="h-5 w-5" />
            <span>View Full Resume</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

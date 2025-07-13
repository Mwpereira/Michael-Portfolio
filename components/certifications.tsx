'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Award,
  Calendar,
  Building,
  ExternalLink,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';
import certificationsData from '@/content/certifications.json';

const INITIAL_DISPLAY_COUNT = 6;

export function Certifications() {
  const [showAll, setShowAll] = useState(false);
  const certifications = certificationsData.certifications;

  const displayedCertifications = showAll
    ? certifications
    : certifications.slice(0, INITIAL_DISPLAY_COUNT);

  const getCategoryColor = (category: string) => {
    const colors = {
      AWS: 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400',
      Angular: 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400',
      DevOps:
        'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400',
      JavaScript:
        'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400',
      React: 'bg-cyan-100 text-cyan-800 dark:bg-cyan-900/30 dark:text-cyan-400',
      'Vue.js':
        'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400',
      TypeScript:
        'bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-400',
      'C#': 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400',
      CSS: 'bg-pink-100 text-pink-800 dark:bg-pink-900/30 dark:text-pink-400',
      Java: 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400',
      Database:
        'bg-teal-100 text-teal-800 dark:bg-teal-900/30 dark:text-teal-400',
      'Full Stack':
        'bg-slate-100 text-slate-800 dark:bg-slate-900/30 dark:text-slate-400',
      'UX Design':
        'bg-rose-100 text-rose-800 dark:bg-rose-900/30 dark:text-rose-400',
      'Web Development':
        'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400',
      JAMStack:
        'bg-violet-100 text-violet-800 dark:bg-violet-900/30 dark:text-violet-400',
      'Research Ethics':
        'bg-stone-100 text-stone-800 dark:bg-stone-900/30 dark:text-stone-400',
    };
    return (
      colors[category as keyof typeof colors] ||
      'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400'
    );
  };

  return (
    <section id="certifications" className="py-20 bg-gray-50 dark:bg-dark-800">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-zinc-900 dark:text-white mb-4">
            Certifications
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Professional certifications and completed courses that demonstrate
            my commitment to continuous learning and skill development
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedCertifications.map((certification, index) => (
            <motion.div
              key={certification.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-dark-900 rounded-xl p-6 border border-gray-200 dark:border-dark-700 hover:shadow-lg dark:hover:shadow-xl transition-all duration-300 group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-lg">
                  <Award className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                </div>
                <span
                  className={`px-3 py-1 text-xs font-medium rounded-full ${getCategoryColor(certification.category)}`}
                >
                  {certification.category}
                </span>
              </div>

              <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                {certification.title}
              </h3>

              <div className="space-y-2 mb-4">
                <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                  <Building className="h-4 w-4 mr-2 flex-shrink-0" />
                  <span className="font-medium">{certification.issuer}</span>
                </div>
                <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                  <Calendar className="h-4 w-4 mr-2 flex-shrink-0" />
                  <span>{certification.issueDate}</span>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-200 dark:border-dark-700">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    ID: {certification.credentialId}
                  </span>
                  {certification.link && (
                    <a
                      href={certification.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1 rounded hover:bg-gray-100 dark:hover:bg-dark-800 transition-colors"
                      aria-label="View certificate"
                    >
                      <ExternalLink className="h-4 w-4 text-gray-400 dark:text-gray-500 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {certifications.length > INITIAL_DISPLAY_COUNT && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center px-8 py-3 bg-primary-600 hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600 text-white rounded-lg font-medium transition-colors duration-200 space-x-2"
            >
              <span>
                {showAll
                  ? 'Show Less'
                  : `Show ${certifications.length - INITIAL_DISPLAY_COUNT} More`}
              </span>
              {showAll ? (
                <ChevronUp className="h-5 w-5" />
              ) : (
                <ChevronDown className="h-5 w-5" />
              )}
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}

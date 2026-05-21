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
    const colors: Record<string, string> = {
      AWS: 'bg-orange-500/[0.08] text-orange-700 dark:bg-orange-500/[0.12] dark:text-orange-300',
      Angular:
        'bg-red-500/[0.08] text-red-700 dark:bg-red-500/[0.12] dark:text-red-300',
      DevOps:
        'bg-blue-500/[0.08] text-blue-700 dark:bg-blue-500/[0.12] dark:text-blue-300',
      JavaScript:
        'bg-yellow-500/[0.08] text-yellow-700 dark:bg-yellow-500/[0.12] dark:text-yellow-300',
      React:
        'bg-cyan-500/[0.08] text-cyan-700 dark:bg-cyan-500/[0.12] dark:text-cyan-300',
      'Vue.js':
        'bg-green-500/[0.08] text-green-700 dark:bg-green-500/[0.12] dark:text-green-300',
      TypeScript:
        'bg-indigo-500/[0.08] text-indigo-700 dark:bg-indigo-500/[0.12] dark:text-indigo-300',
      'C#': 'bg-purple-500/[0.08] text-purple-700 dark:bg-purple-500/[0.12] dark:text-purple-300',
      CSS: 'bg-pink-500/[0.08] text-pink-700 dark:bg-pink-500/[0.12] dark:text-pink-300',
      Java: 'bg-amber-500/[0.08] text-amber-700 dark:bg-amber-500/[0.12] dark:text-amber-300',
      Database:
        'bg-teal-500/[0.08] text-teal-700 dark:bg-teal-500/[0.12] dark:text-teal-300',
      'Full Stack':
        'bg-slate-500/[0.08] text-slate-700 dark:bg-slate-500/[0.12] dark:text-slate-300',
      'UX Design':
        'bg-rose-500/[0.08] text-rose-700 dark:bg-rose-500/[0.12] dark:text-rose-300',
      'Web Development':
        'bg-emerald-500/[0.08] text-emerald-700 dark:bg-emerald-500/[0.12] dark:text-emerald-300',
      JAMStack:
        'bg-violet-500/[0.08] text-violet-700 dark:bg-violet-500/[0.12] dark:text-violet-300',
      'Research Ethics':
        'bg-stone-500/[0.08] text-stone-700 dark:bg-stone-500/[0.12] dark:text-stone-300',
    };
    return (
      colors[category] ||
      'bg-neutral-500/[0.08] text-neutral-700 dark:bg-neutral-500/[0.12] dark:text-neutral-300'
    );
  };

  return (
    <section id="certifications" className="py-20">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-neutral-900 dark:text-white mb-4">
            Certifications
          </h2>
          <p className="text-xl text-neutral-500 dark:text-neutral-400 max-w-3xl mx-auto">
            Professional certifications and completed courses that demonstrate
            my commitment to continuous learning and skill development
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {displayedCertifications.map((certification, index) => (
            <motion.div
              key={certification.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-6 card-hover group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-2.5 bg-primary-500/[0.08] dark:bg-primary-500/[0.12] rounded-xl">
                  <Award className="h-5 w-5 text-primary-600 dark:text-primary-400" />
                </div>
                <span
                  className={`px-2.5 py-1 text-xs font-medium rounded-full ${getCategoryColor(certification.category)}`}
                >
                  {certification.category}
                </span>
              </div>

              <h3 className="text-base font-semibold text-neutral-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors leading-tight">
                {certification.title}
              </h3>

              <div className="space-y-1.5 mb-4">
                <div className="flex items-center text-sm text-neutral-500 dark:text-neutral-400">
                  <Building className="h-3.5 w-3.5 mr-2 flex-shrink-0" />
                  <span className="font-medium">{certification.issuer}</span>
                </div>
                <div className="flex items-center text-sm text-neutral-500 dark:text-neutral-400">
                  <Calendar className="h-3.5 w-3.5 mr-2 flex-shrink-0" />
                  <span>{certification.issueDate}</span>
                </div>
              </div>

              {certification.link && (
                <div className="pt-3 border-t border-black/[0.04] dark:border-white/[0.06]">
                  <div className="flex justify-end">
                    <a
                      href={certification.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-3 py-1 text-xs font-medium text-neutral-500 dark:text-neutral-400 hover:text-primary-600 dark:hover:text-primary-400 rounded-lg transition-colors duration-200"
                      aria-label="View certificate"
                    >
                      <ExternalLink className="h-3 w-3 mr-1" />
                      View Certificate
                    </a>
                  </div>
                </div>
              )}
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
              className="inline-flex items-center px-8 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-xl font-medium transition-all duration-200 space-x-2 shadow-lg shadow-primary-600/20"
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

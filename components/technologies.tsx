'use client';

import { motion } from 'framer-motion';
import * as SimpleIcons from 'react-icons/si';
import { Brain, Code, Database, Sparkles, Zap, Bot } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import technologiesData from '@/content/technologies.json';

export function Technologies() {
  const { categories } = technologiesData;
  const [imageErrors, setImageErrors] = useState<Set<string>>(new Set());

  const handleImageError = (techName: string) => {
    setImageErrors(prev => new Set(prev).add(techName));
  };

  const getIcon = (iconName: string, techName: string) => {
    const IconComponent = SimpleIcons[iconName as keyof typeof SimpleIcons];

    if (IconComponent) {
      return IconComponent;
    }

    switch (techName.toLowerCase()) {
      case 'langflow':
        return Bot;
      case 'anthropic':
      case 'claude':
        return Brain;
      case 'lm studio':
        return Code;
      case 'msty':
        return Sparkles;
      default:
        return SimpleIcons.SiReact;
    }
  };

  const getCustomColor = (techName: string, originalColor: string) => {
    switch (techName.toLowerCase()) {
      case 'langflow':
        return '#632CA6';
      case 'anthropic':
      case 'claude':
        return '#D4731F';
      case 'lm studio':
        return '#FF6B6B';
      case 'msty':
        return '#0072C6';
      default:
        return originalColor;
    }
  };

  return (
    <section id="technologies" className="py-20">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-neutral-900 dark:text-white mb-4">
            Technologies & Tools
          </h2>
          <p className="text-xl text-neutral-500 dark:text-neutral-400 max-w-3xl mx-auto">
            My preferred technologies and tools for building modern, scalable
            applications
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(categories).map(
            ([categoryName, techs], categoryIndex) => (
              <motion.div
                key={categoryName}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
                className="glass-card p-6 card-hover"
              >
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-5 capitalize">
                  {categoryName === 'aiTools' ? 'AI Tools' : categoryName}
                </h3>
                <div className="space-y-2.5">
                  {techs.map((tech, techIndex) => {
                    const IconComponent = getIcon(tech.icon, tech.name);
                    const iconColor = getCustomColor(tech.name, tech.color);
                    const hasLogo =
                      (tech as any).logo && !imageErrors.has(tech.name);

                    return (
                      <motion.div
                        key={tech.name}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.4,
                          delay: categoryIndex * 0.1 + techIndex * 0.05,
                        }}
                        viewport={{ once: true }}
                        className="flex items-center space-x-3 p-2.5 rounded-xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.03] dark:border-white/[0.04] hover:border-primary-500/20 dark:hover:border-primary-500/20 transition-all duration-200 group"
                      >
                        <div className="p-2 rounded-lg bg-white dark:bg-white/[0.05] shadow-sm group-hover:shadow-md transition-shadow duration-200">
                          {hasLogo ? (
                            <Image
                              src={`/${(tech as any).logo}`}
                              alt={`${tech.name} logo`}
                              width={20}
                              height={20}
                              className="w-5 h-5 object-contain"
                              unoptimized
                              onError={() => handleImageError(tech.name)}
                            />
                          ) : (
                            <IconComponent
                              className="w-5 h-5 transition-colors duration-200"
                              style={{ color: iconColor }}
                            />
                          )}
                        </div>
                        <span className="font-medium text-neutral-800 dark:text-neutral-200 text-sm">
                          {tech.name}
                        </span>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            )
          )}
        </div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-semibold text-neutral-900 dark:text-white mb-8">
            Additional Skills & Methodologies
          </h3>
          <div className="flex flex-wrap justify-center gap-2.5">
            {[
              'REST APIs',
              'GraphQL',
              'Microservices',
              'CI/CD',
              'Test-Driven Development',
              'Agile/Scrum',
              'DevOps',
              'Cloud Architecture',
              'Database Design',
              'API Design',
              'Mobile Development',
              'E2E Testing',
              'Performance Optimization',
              'Security Best Practices',
            ].map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="tech-badge"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

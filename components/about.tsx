'use client';

import { motion } from 'framer-motion';
import { Code, Coffee, Globe, Heart } from 'lucide-react';
import Image from 'next/image';
import personalData from '@/content/personal.json';
import educationData from '@/content/education.json';

export function About() {
  const interests = [
    {
      icon: Code,
      title: 'Clean Code',
      description: 'Passionate about writing maintainable and efficient code',
    },
    {
      icon: Globe,
      title: 'Web Technologies',
      description: 'Always exploring the latest web development trends',
    },
    {
      icon: Coffee,
      title: 'Problem Solving',
      description: 'Love tackling complex challenges with creative solutions',
    },
    {
      icon: Heart,
      title: 'User Experience',
      description: 'Focused on creating intuitive and delightful experiences',
    },
  ];

  return (
    <section id="about" className="py-20">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-neutral-900 dark:text-white">
                About Me
              </h2>
              <div className="w-20 h-1 bg-primary-500 rounded-full" />
            </div>

            <div className="space-y-4 text-neutral-600 dark:text-neutral-400 leading-relaxed">
              {personalData.about.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-lg">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Professional Image - Mobile */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex justify-center lg:hidden"
            >
              <div className="relative w-64 h-64 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/michael-pereira.jpg"
                  alt="Michael Pereira"
                  fill
                  className="object-cover"
                  priority
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
              </div>
            </motion.div>

            {/* Education */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="glass-card p-6"
            >
              <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-4">
                Education
              </h3>
              {educationData.education.map(edu => (
                <div key={edu.id} className="space-y-3">
                  <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-2">
                    <h4 className="font-medium text-neutral-900 dark:text-white text-base leading-tight">
                      {edu.degree}
                    </h4>
                    <span className="text-sm text-neutral-500 dark:text-neutral-400 whitespace-nowrap">
                      {edu.duration}
                    </span>
                  </div>
                  <p className="text-primary-600 dark:text-primary-400 font-medium leading-tight">
                    {edu.institution}
                  </p>
                  <p className="text-neutral-600 dark:text-neutral-400 leading-tight">
                    {edu.location}
                  </p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Image and Interests */}
          <div className="space-y-8">
            {/* Professional Image - Desktop */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="hidden lg:flex justify-center"
            >
              <div className="relative w-80 h-80 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/michael-pereira.jpg"
                  alt="Michael Pereira"
                  fill
                  className="object-cover"
                  priority
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
              </div>
            </motion.div>

            {/* Interests Grid */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {interests.map((interest, index) => (
                <motion.div
                  key={interest.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass-card p-5 card-hover"
                >
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="p-2.5 bg-primary-500/[0.08] dark:bg-primary-500/[0.12] rounded-xl">
                      <interest.icon className="h-5 w-5 text-primary-600 dark:text-primary-400" />
                    </div>
                    <h4 className="font-semibold text-neutral-900 dark:text-white text-sm leading-tight">
                      {interest.title}
                    </h4>
                  </div>
                  <p className="text-neutral-500 dark:text-neutral-400 text-sm leading-relaxed">
                    {interest.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

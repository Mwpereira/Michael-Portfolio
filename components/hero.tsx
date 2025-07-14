'use client';

import { motion } from 'framer-motion';
import {
  ArrowDown,
  Download,
  Github,
  Link,
  Linkedin,
  Mail,
  MapPin,
} from 'lucide-react';
import personalData from '@/content/personal.json';

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-3/4 left-1/2 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-2000" />
      </div>

      <div className="section-container">
        <div className="text-center space-y-8">
          {/* Greeting */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-2"
          >
            <p className="text-primary-600 dark:text-primary-400 font-medium text-lg">
              Welcome, my name is
            </p>
            <h1 className="text-5xl md:text-7xl font-bold">
              <span className="gradient-text">{personalData.name}</span>
            </h1>
          </motion.div>

          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-zinc-800 dark:text-gray-200">
              {personalData.title}
            </h2>
            <div className="flex items-center justify-center space-x-2 text-gray-600 dark:text-gray-400">
              <MapPin className="h-5 w-5" />
              <span className="text-lg">{personalData.location}</span>
            </div>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed"
          >
            {personalData.intro}
          </motion.p>

          {/* Current Role */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="inline-flex items-center px-6 py-3 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-300 border border-primary-200 dark:border-primary-800"
          >
            <span className="text-lg font-medium">
              Currently: {personalData.currentRole}
            </span>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a
              href="#contact"
              className="group px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-primary-500/25"
            >
              Get In Touch
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-8 py-4 bg-white dark:bg-dark-800 text-zinc-800 dark:text-gray-200 border border-gray-300 dark:border-dark-600 rounded-lg font-semibold hover:bg-gray-50 dark:hover:bg-dark-700 transition-all duration-200 transform hover:scale-105 flex items-center space-x-2"
            >
              <Link className="h-5 w-5" />
              <span>View Resume</span>
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="flex justify-center space-x-6"
          >
            {[
              {
                icon: Github,
                href: personalData.social.github,
                label: 'GitHub',
              },
              {
                icon: Linkedin,
                href: personalData.social.linkedin,
                label: 'LinkedIn',
              },
              {
                icon: Mail,
                href: `mailto:${personalData.email}`,
                label: 'Email',
              },
            ].map(social => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white dark:bg-dark-800 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 border border-gray-200 dark:border-dark-700 hover:border-primary-300 dark:hover:border-primary-600 transition-all duration-200 transform hover:scale-110 shadow-md hover:shadow-lg"
                aria-label={social.label}
              >
                <social.icon className="h-6 w-6" />
              </a>
            ))}
          </motion.div>

          {/* Scroll Indicator - Below social links on mobile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="flex md:hidden justify-center pt-4"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex flex-col items-center space-y-2 text-gray-400 dark:text-gray-600"
            >
              <span className="text-sm">Scroll down</span>
              <ArrowDown className="h-5 w-5" />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator - Desktop only, positioned at bottom */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center space-y-2 text-gray-400 dark:text-gray-600"
        >
          <span className="text-sm">Scroll down</span>
          <ArrowDown className="h-5 w-5" />
        </motion.div>
      </motion.div>
    </section>
  );
}

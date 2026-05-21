'use client';

import { motion } from 'framer-motion';
import { ArrowDown, Download, Link, Mail, MapPin } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import personalData from '@/content/personal.json';

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Background Elements - subtle liquid orbs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-primary-500/[0.06] dark:bg-primary-500/[0.04] rounded-full blur-[80px] animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-primary-400/[0.04] dark:bg-primary-400/[0.03] rounded-full blur-[100px] animate-pulse delay-1000" />
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
            <h2 className="text-3xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-100">
              {personalData.title}
            </h2>
            <div className="flex items-center justify-center space-x-2 text-neutral-500 dark:text-neutral-400">
              <MapPin className="h-5 w-5" />
              <span className="text-lg">{personalData.location}</span>
            </div>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl md:text-2xl text-neutral-500 dark:text-neutral-400 max-w-4xl mx-auto leading-relaxed"
          >
            {personalData.intro}
          </motion.p>

          {/* Current Role */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="inline-flex items-center px-6 py-3 rounded-full glass-card"
          >
            <span className="text-lg font-medium text-neutral-700 dark:text-neutral-200">
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
              className="group px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-xl font-semibold transition-all duration-200 transform hover:scale-[1.02] shadow-lg shadow-primary-600/20 hover:shadow-primary-600/30"
            >
              Get In Touch
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-8 py-4 glass-card text-neutral-700 dark:text-neutral-200 rounded-xl font-semibold hover:bg-black/[0.02] dark:hover:bg-white/[0.04] transition-all duration-200 transform hover:scale-[1.02] flex items-center space-x-2"
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
            className="flex justify-center space-x-4"
          >
            {[
              {
                icon: FaGithub,
                href: personalData.social.github,
                label: 'GitHub',
              },
              {
                icon: FaLinkedin,
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
                className="p-3 rounded-xl glass-card text-neutral-500 dark:text-neutral-400 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-200 transform hover:scale-110"
                aria-label={social.label}
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="flex md:hidden justify-center pt-4"
          />
        </div>
      </div>
    </section>
  );
}

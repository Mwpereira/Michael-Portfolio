'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react';
import personalData from '@/content/personal.json';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: personalData.social.github, label: 'GitHub' },
    { icon: Linkedin, href: personalData.social.linkedin, label: 'LinkedIn' },
    { icon: Mail, href: `mailto:${personalData.email}`, label: 'Email' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-zinc-900 dark:bg-slate-950 text-white">
      <div className="section-container">
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* About */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="text-2xl font-bold gradient-text">
                {personalData.name}
              </h3>
              <div className="flex space-x-4">
                {socialLinks.map(link => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-zinc-800 dark:bg-zinc-900 text-gray-400 hover:text-white hover:bg-primary-600 transition-all duration-200"
                    aria-label={link.label}
                  >
                    <link.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h4 className="text-lg font-semibold">Quick Links</h4>
              <ul className="space-y-2">
                {[
                  { name: 'About', href: '#about' },
                  { name: 'Experience', href: '#experience' },
                  { name: 'Projects', href: '#projects' },
                  { name: 'Contact', href: '#contact' },
                ].map(link => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h4 className="text-lg font-semibold">Get In Touch</h4>
              <div className="space-y-2">
                <p className="text-gray-400">{personalData.location}</p>
                <a
                  href={`mailto:${personalData.email}`}
                  className="text-gray-400 hover:text-white transition-colors duration-200 block"
                >
                  {personalData.email}
                </a>
                <p className="text-gray-400">{personalData.currentRole}</p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-zinc-800 dark:border-gray-700 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex items-center space-x-2 text-gray-400"
            >
              <span>
                © {currentYear} {personalData.name}.
              </span>
            </motion.div>

            <motion.button
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              onClick={scrollToTop}
              className="mt-4 md:mt-0 p-2 rounded-lg bg-zinc-800 dark:bg-zinc-900 text-gray-400 hover:text-white hover:bg-primary-600 transition-all duration-200"
              aria-label="Scroll to top"
            >
              <ArrowUp className="h-5 w-5" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
}

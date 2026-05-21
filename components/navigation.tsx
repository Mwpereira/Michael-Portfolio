'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { ThemeToggle } from './theme-toggle';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Publications', href: '#publications' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/mwpereira', label: 'GitHub' },
    {
      icon: FaLinkedin,
      href: 'https://www.linkedin.com/in/michael-pereira-07/',
      label: 'LinkedIn',
    },
    { icon: Mail, href: 'mailto:mwpereira07@gmail.com', label: 'Email' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'glass-nav shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="section-container">
        <div className="relative flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="flex-shrink-0"
          >
            <a href="/" className="flex items-center space-x-2">
              <Image
                src="/logo.png"
                alt="Michael Pereira Logo"
                width={32}
                height={32}
                className="rounded-md"
                unoptimized
              />
            </a>
          </motion.div>

          {/* Desktop Navigation - Absolutely Centered */}
          <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2">
            <div className="flex items-center space-x-8">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * (index + 2) }}
                  className="text-neutral-600 dark:text-neutral-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200 font-medium text-sm"
                >
                  {item.name}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-3 flex-shrink-0">
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 * (index + 6) }}
                className="p-2 rounded-xl text-neutral-500 dark:text-neutral-400 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-black/[0.03] dark:hover:bg-white/[0.05] transition-all duration-200"
                aria-label={link.label}
              >
                <link.icon className="h-[18px] w-[18px]" />
              </motion.a>
            ))}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9 }}
            >
              <ThemeToggle />
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl text-neutral-600 dark:text-neutral-400 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-black/[0.03] dark:hover:bg-white/[0.05] transition-all duration-200"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden glass-card mt-2 mb-4"
            >
              <div className="py-4 space-y-1">
                {navItems.map(item => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="block px-4 py-2.5 text-neutral-700 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200 font-medium text-sm rounded-lg hover:bg-black/[0.02] dark:hover:bg-white/[0.03]"
                  >
                    {item.name}
                  </a>
                ))}
                <div className="flex items-center justify-center space-x-4 pt-4 mt-2 border-t border-black/[0.04] dark:border-white/[0.06]">
                  {socialLinks.map(link => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-xl text-neutral-500 dark:text-neutral-400 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-black/[0.03] dark:hover:bg-white/[0.05] transition-all duration-200"
                      aria-label={link.label}
                    >
                      <link.icon className="h-5 w-5" />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}

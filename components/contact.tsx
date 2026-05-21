'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import personalData from '@/content/personal.json';
import { useState } from 'react';

export function Contact() {
  const [formState, setFormState] = useState<
    'idle' | 'submitting' | 'success' | 'error'
  >('idle');

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormState('submitting');

    const formData = new FormData(event.currentTarget);

    try {
      const response = await fetch('/__forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData as any).toString(),
      });

      if (response.ok) {
        setFormState('success');
        (event.target as HTMLFormElement).reset();
        setTimeout(() => setFormState('idle'), 5000);
      } else {
        setFormState('error');
        setTimeout(() => setFormState('idle'), 5000);
      }
    } catch (error) {
      setFormState('error');
      setTimeout(() => setFormState('idle'), 5000);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: personalData.email,
      href: `mailto:${personalData.email}`,
    },
    {
      icon: MapPin,
      title: 'Location',
      value: personalData.location,
      href: '#',
    },
  ];

  const socialLinks = [
    {
      icon: FaGithub,
      label: 'GitHub',
      href: personalData.social.github,
    },
    {
      icon: FaLinkedin,
      label: 'LinkedIn',
      href: personalData.social.linkedin,
    },
  ];

  return (
    <section id="contact" className="py-20">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-neutral-900 dark:text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-neutral-500 dark:text-neutral-400 max-w-3xl mx-auto">
            I&apos;m always open to discussing new opportunities, interesting
            projects, or just having a chat about technology
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-semibold text-neutral-900 dark:text-white mb-6">
                Let&apos;s Connect
              </h3>
              <p className="text-neutral-500 dark:text-neutral-400 leading-relaxed mb-8">
                Whether you&apos;re looking to hire, collaborate, or just want
                to say hello, I&apos;d love to hear from you. Feel free to reach
                out through any of the channels below.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-5">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-4"
                >
                  <div className="p-2.5 bg-primary-500/[0.08] dark:bg-primary-500/[0.12] rounded-xl">
                    <info.icon className="h-5 w-5 text-primary-600 dark:text-primary-400" />
                  </div>
                  <div>
                    <h4 className="font-medium text-neutral-900 dark:text-white text-sm">
                      {info.title}
                    </h4>
                    {info.href !== '#' ? (
                      <a
                        href={info.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-neutral-500 dark:text-neutral-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors text-sm"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <span className="text-neutral-500 dark:text-neutral-400 text-sm">
                        {info.value}
                      </span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div className="pt-8 border-t border-black/[0.04] dark:border-white/[0.06]">
              <h4 className="font-semibold text-neutral-900 dark:text-white mb-4 text-sm">
                Follow Me
              </h4>
              <div className="flex space-x-3">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="p-2.5 rounded-xl glass-card text-neutral-500 dark:text-neutral-400 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-200"
                    aria-label={link.label}
                  >
                    <link.icon className="h-5 w-5" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="glass-card p-8"
          >
            <h3 className="text-2xl font-semibold text-neutral-900 dark:text-white mb-6">
              Send a Message
            </h3>

            <form
              name="contact"
              onSubmit={handleFormSubmit}
              className="space-y-5"
            >
              <input type="hidden" name="form-name" value="contact" />

              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-neutral-600 dark:text-neutral-300 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-black/[0.06] dark:border-white/[0.08] bg-white/50 dark:bg-white/[0.03] text-neutral-900 dark:text-white focus:ring-2 focus:ring-primary-500/30 focus:border-primary-500/50 transition-all backdrop-blur-sm placeholder:text-neutral-400"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-neutral-600 dark:text-neutral-300 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-black/[0.06] dark:border-white/[0.08] bg-white/50 dark:bg-white/[0.03] text-neutral-900 dark:text-white focus:ring-2 focus:ring-primary-500/30 focus:border-primary-500/50 transition-all backdrop-blur-sm placeholder:text-neutral-400"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-neutral-600 dark:text-neutral-300 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  className="w-full px-4 py-3 rounded-xl border border-black/[0.06] dark:border-white/[0.08] bg-white/50 dark:bg-white/[0.03] text-neutral-900 dark:text-white focus:ring-2 focus:ring-primary-500/30 focus:border-primary-500/50 transition-all backdrop-blur-sm resize-none placeholder:text-neutral-400"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                disabled={formState === 'submitting'}
                className="w-full px-6 py-3.5 bg-primary-600 hover:bg-primary-700 text-white rounded-xl font-medium transition-all duration-200 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-primary-600/20"
              >
                <Send className="h-4 w-4" />
                <span>
                  {formState === 'submitting' ? 'Sending...' : 'Send Message'}
                </span>
              </button>
            </form>

            {/* Form Status Messages */}
            {formState === 'success' && (
              <div className="mt-4 p-4 bg-primary-500/[0.08] border border-primary-500/20 rounded-xl">
                <p className="text-primary-700 dark:text-primary-300 text-sm">
                  Thank you for your message! I&apos;ll get back to you soon.
                </p>
              </div>
            )}

            {formState === 'error' && (
              <div className="mt-4 p-4 bg-red-500/[0.08] border border-red-500/20 rounded-xl">
                <p className="text-red-700 dark:text-red-300 text-sm">
                  There was an error sending your message. Please try again or
                  contact me directly.
                </p>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

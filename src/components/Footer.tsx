import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Terminal } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black relative py-12 mt-20">
      <div className="absolute inset-0 cyber-grid opacity-5" />
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-3 gap-12 items-start">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Terminal className="w-6 h-6 text-purple-400" />
              <span className="text-white font-mono text-xl">BLACK.FLAG</span>
            </div>
            <p className="text-purple-200/70 text-sm">
              Empowering businesses with intelligent automation solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-white font-mono text-lg">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2">
              {['Home', 'Services', 'Vision'].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-purple-200/70 hover:text-white text-sm transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-white font-mono text-lg">Connect</h3>
            <div className="flex space-x-4">
              <motion.a
                href="mailto:discover@blackflagagents.com"
                whileHover={{ scale: 1.1 }}
                className="text-purple-400 hover:text-purple-300 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-6 h-6" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/gratas-gedraitis-a27102349?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="text-purple-400 hover:text-purple-300 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </motion.a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-purple-900/30">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-purple-200/70 text-sm">
              © {new Date().getFullYear()} Black Flag Agents. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
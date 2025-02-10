import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Database, Workflow, Brain, Zap, Code, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Bot,
    title: 'Automate Repetitive Tasks',
    description: 'Free up time for strategic growth and decision-making'
  },
  {
    icon: Brain,
    title: 'Increase Accuracy',
    description: 'Reduce errors with intelligent automation'
  },
  {
    icon: Workflow,
    title: 'Enhance Customer Experience',
    description: 'Offer faster, personalized responses 24/7'
  },
  {
    icon: Database,
    title: 'Scale Operations',
    description: 'Grow your business without increasing overhead'
  },
  {
    icon: Zap,
    title: 'Boost Efficiency',
    description: 'Streamline operations with smart process automation'
  },
  {
    icon: Code,
    title: 'Custom Solutions',
    description: 'Tailored AI solutions for your unique needs'
  }
];

const WhatWeDoSection = () => {
  return (
    <section className="min-h-screen bg-black relative py-20 overflow-hidden">
      {/* Background Grid Effect */}
      <div className="absolute inset-0 cyber-grid opacity-10" />
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Services Grid */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="relative group"
              >
                <div className="bg-black/50 backdrop-blur-lg border border-purple-900/30 p-6 rounded-lg h-full">
                  <div className="relative z-10">
                    <service.icon className="w-8 h-8 text-purple-400 mb-4 group-hover:text-purple-300 transition-colors" />
                    <h3 className="text-white font-mono text-lg mb-2">{service.title}</h3>
                    <p className="text-purple-200/70 text-sm">{service.description}</p>
                  </div>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-purple-800/20 rounded-lg"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:pl-12"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-4xl md:text-5xl font-mono font-bold text-white">
                Your Business, Transformed by AI
              </h2>
              <p className="text-purple-200/70 text-lg leading-relaxed">
                Experience the power of intelligent automation that adapts to your needs,
                learns from your processes, and helps you achieve unprecedented growth.
              </p>
              <div className="h-1 w-20 bg-gradient-to-r from-purple-600 to-purple-900" />
              <p className="text-xl text-purple-300 font-mono">
                Transform the way you work with AI-powered solutions.
              </p>

              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative inline-block mt-8 px-8 py-4 bg-black text-white font-mono overflow-hidden group"
              >
                <span className="relative z-10 flex items-center space-x-2">
                  <span>See How AI Can Work for You</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <motion.div
                  className="absolute inset-0 border border-purple-500"
                  animate={{
                    boxShadow: [
                      "0 0 0px rgba(168, 85, 247, 0.4)",
                      "0 0 20px rgba(168, 85, 247, 0.4)",
                      "0 0 0px rgba(168, 85, 247, 0.4)",
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;
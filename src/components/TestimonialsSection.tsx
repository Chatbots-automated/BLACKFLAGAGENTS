import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CTO, TechCorp",
    content: "Black Flag Agents transformed our customer service with their AI solutions. Response times dropped by 80%.",
    metric: "80% Faster Response"
  },
  {
    name: "Michael Rodriguez",
    role: "Operations Director, InnovateCo",
    content: "The workflow automation system they built saved us countless hours and improved accuracy significantly.",
    metric: "95% Accuracy Rate"
  },
  {
    name: "Emma Thompson",
    role: "CEO, DataDrive",
    content: "Their AI integration was seamless and the results were immediate. Our productivity doubled within months.",
    metric: "2x Productivity"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="min-h-screen bg-black relative py-20">
      <div className="absolute inset-0 cyber-grid opacity-10" />
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-mono font-bold text-white mb-4">
            Success Stories
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-gray-500 to-gray-700 mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="relative group"
            >
              <div className="bg-black/50 backdrop-blur-lg border border-gray-800 p-8 rounded-lg h-full">
                <Quote className="w-8 h-8 text-gray-500 mb-4" />
                <p className="text-gray-300 mb-6">{testimonial.content}</p>
                <div className="mt-auto">
                  <p className="text-white font-mono font-bold">{testimonial.name}</p>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                  <div className="mt-4 pt-4 border-t border-gray-800">
                    <p className="text-xl font-mono text-gray-300">{testimonial.metric}</p>
                  </div>
                </div>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-gray-800/20 to-gray-900/20 rounded-lg"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
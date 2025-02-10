import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Zap, TrendingUp, Timer, ArrowRight } from 'lucide-react';

const ResultsSection = () => {
  const metrics = [
    { value: '80%', label: 'Time Saved', icon: Timer },
    { value: '95%', label: 'Accuracy Rate', icon: Brain },
    { value: '3x', label: 'Faster Growth', icon: TrendingUp },
    { value: '60%', label: 'Cost Reduction', icon: Zap }
  ];

  const valueProps = [
    'Dramatically reduce time spent on repetitive tasks',
    'Achieve new levels of efficiency with automation',
    'Deliver consistent, high-quality results',
    'Scale operations without proportional cost increase'
  ];

  return (
    <section className="min-h-screen bg-black relative py-20 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 cyber-grid opacity-10" />
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-purple-900/10 via-purple-800/5 to-transparent"
          animate={{
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.h2
            className="text-4xl md:text-6xl font-mono font-bold text-white mb-6 relative inline-block"
            animate={{
              textShadow: [
                "0 0 8px rgba(168, 85, 247, 0.4)",
                "0 0 16px rgba(168, 85, 247, 0.2)",
                "0 0 8px rgba(168, 85, 247, 0.4)",
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          >
            Save Time. Boost Productivity. Multiply Your Growth.
          </motion.h2>
          <p className="text-purple-300 text-xl md:text-2xl font-mono">
            Transform your business with intelligent automation
          </p>
        </motion.div>

        {/* Metrics Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
        >
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-black/50 backdrop-blur-lg border border-purple-900/30 p-6 rounded-lg text-center group hover:border-purple-500/50 transition-colors"
            >
              <metric.icon className="w-8 h-8 text-purple-400 mx-auto mb-4" />
              <motion.h3
                className="text-3xl md:text-4xl font-bold text-white mb-2"
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                {metric.value}
              </motion.h3>
              <p className="text-purple-200/70">{metric.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Value Proposition */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-3xl md:text-4xl font-mono font-bold text-white mb-8">
              Unlock Your Business Potential
            </h3>
            <div className="space-y-4">
              {valueProps.map((prop, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-3"
                >
                  <Brain className="w-5 h-5 text-purple-400 flex-shrink-0" />
                  <span className="text-purple-200">{prop}</span>
                </motion.div>
              ))}
            </div>

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

          {/* Interactive Graph */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative h-[400px] rounded-lg overflow-hidden"
          >
            <div className="absolute inset-0 bg-black/50 backdrop-blur-lg border border-purple-900/30 rounded-lg">
              <svg className="w-full h-full" viewBox="0 0 400 400">
                {/* Growth Line */}
                <motion.path
                  d="M 50 350 Q 100 100 200 250 T 350 50"
                  stroke="url(#purple-gradient)"
                  strokeWidth="3"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{ duration: 2 }}
                  viewport={{ once: true }}
                />
                {/* Data Points */}
                {[
                  { x: 50, y: 350 },
                  { x: 150, y: 200 },
                  { x: 250, y: 150 },
                  { x: 350, y: 50 }
                ].map((point, index) => (
                  <motion.circle
                    key={index}
                    cx={point.x}
                    cy={point.y}
                    r="6"
                    fill="url(#purple-gradient)"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: index * 0.2 }}
                    viewport={{ once: true }}
                  />
                ))}
                <defs>
                  <linearGradient id="purple-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#7e22ce" />
                    <stop offset="50%" stopColor="#a855f7" />
                    <stop offset="100%" stopColor="#7e22ce" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
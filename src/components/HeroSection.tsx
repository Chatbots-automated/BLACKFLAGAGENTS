import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Terminal, ArrowRight, Bot, Zap, Brain } from 'lucide-react';

const HeroSection = () => {
  const [text, setText] = useState('');
  const fullText = 'AUTOMATE. ACCELERATE. SUCCEED.';
  const [isComplete, setIsComplete] = useState(false);
  const [hoveredIcon, setHoveredIcon] = useState<number | null>(null);
  const { scrollY } = useScroll();
  
  const y = useTransform(scrollY, [0, 300], [0, -50]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  
  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        setIsComplete(true);
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  const features = [
    { icon: Bot, title: "INTELLIGENT", description: "AI-Powered Solutions" },
    { icon: Zap, title: "EFFICIENT", description: "Time-Saving Automation" },
    { icon: Brain, title: "ADAPTIVE", description: "Smart Learning Systems" }
  ];

  return (
    <motion.div 
      style={{ y, opacity }}
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 py-20 sm:py-0"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/5 to-black/20 pointer-events-none" />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="space-y-12 relative z-10 w-full max-w-4xl mx-auto"
      >
        {/* Floating Icons */}
        <div className="flex justify-center gap-4 sm:gap-16 mb-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="relative"
              onHoverStart={() => setHoveredIcon(index)}
              onHoverEnd={() => setHoveredIcon(null)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <motion.div
                className="relative z-10 p-3 sm:p-4 bg-black/50 backdrop-blur-lg border border-purple-500/30 rounded-lg"
                animate={{
                  y: [0, -10, 0],
                  rotateZ: hoveredIcon === index ? [0, -5, 5, 0] : 0,
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.3,
                }}
              >
                <feature.icon 
                  size={24}
                  className={`text-purple-400 transition-colors duration-300 sm:w-8 sm:h-8 ${
                    hoveredIcon === index ? 'text-purple-300' : ''
                  }`}
                />
                <motion.div
                  className="absolute inset-0 bg-purple-500/10 rounded-lg blur-xl"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0.3, 0.5],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.3,
                  }}
                />
              </motion.div>
              
              <AnimatePresence>
                {hoveredIcon === index && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 whitespace-nowrap"
                  >
                    <div className="flex flex-col items-center space-y-1">
                      <span className="text-purple-300 font-mono text-xs sm:text-sm">{feature.title}</span>
                      <span className="text-gray-400 font-mono text-xs hidden sm:block">{feature.description}</span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <div className="space-y-6">
          <motion.div 
            className="relative inline-block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <h1 className="text-white font-mono text-4xl sm:text-6xl md:text-7xl tracking-wider leading-tight">
              <motion.span 
                className="relative inline-block"
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
                {text}
                <motion.span
                  initial={{ opacity: 1 }}
                  animate={{ opacity: isComplete ? 0 : 1 }}
                  transition={{ duration: 0.5, repeat: -1, repeatType: "reverse" }}
                  className="absolute -right-4 top-0 text-purple-500"
                >
                  _
                </motion.span>
              </motion.span>
            </h1>
            
            <motion.div
              className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 via-transparent to-purple-500/20 blur-lg"
              animate={{
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
            />
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isComplete ? 1 : 0, y: isComplete ? 0 : 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-purple-300 font-mono text-lg sm:text-xl md:text-2xl tracking-wide"
          >
            Revolutionize your workflows with AI automation
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isComplete ? 1 : 0, y: isComplete ? 0 : 20 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-gray-400 font-mono text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed px-4"
          >
            Save time, boost efficiency, and grow faster with intelligent automation solutions.
          </motion.p>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
          <motion.a
            href="#contact"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isComplete ? 1 : 0, y: isComplete ? 0 : 20 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative inline-block px-8 sm:px-12 py-3 sm:py-4 bg-black text-white font-mono text-base sm:text-lg tracking-wider overflow-hidden group"
          >
            <span className="relative z-10 flex items-center justify-center space-x-2">
              <Terminal className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>Start Your AI Journey</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
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

          <motion.a
            href="#services"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isComplete ? 1 : 0, y: isComplete ? 0 : 20 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative inline-block px-8 sm:px-12 py-3 sm:py-4 text-white font-mono text-base sm:text-lg tracking-wider overflow-hidden group"
          >
            <span className="relative z-10 flex items-center justify-center space-x-2">
              <span>Discover How It Works</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </span>
            <motion.div
              className="absolute inset-0 border border-purple-500/50"
              animate={{
                boxShadow: [
                  "0 0 0px rgba(168, 85, 247, 0.2)",
                  "0 0 20px rgba(168, 85, 247, 0.2)",
                  "0 0 0px rgba(168, 85, 247, 0.2)",
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            />
          </motion.a>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default HeroSection;
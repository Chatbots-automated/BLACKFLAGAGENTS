import React, { useEffect, useState } from 'react';
import { Menu, X, Flag, Terminal } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import NavParticles from './NavParticles';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLogoHovered, setIsLogoHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Height of the navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed w-full z-50 px-4 sm:px-8 py-4 transition-all duration-300 ${
          isScrolled ? 'bg-black/90 backdrop-blur-lg border-b border-purple-900/30' : 'bg-transparent'
        }`}
      >
        <NavParticles />
        <div className="max-w-7xl mx-auto flex justify-between items-center relative z-10">
          <motion.div 
            className="flex items-center space-x-3 group cursor-pointer"
            whileHover={{ scale: 1.02 }}
            onHoverStart={() => setIsLogoHovered(true)}
            onHoverEnd={() => setIsLogoHovered(false)}
            onClick={(e) => handleNavClick(e as any, 'home')}
          >
            <div className="relative w-10 sm:w-12 h-10 sm:h-12 flex items-center justify-center">
              <motion.div
                className="absolute inset-0 bg-purple-500/20 rounded-lg blur-xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              />
              <motion.div 
                className="relative"
                animate={{
                  rotate: isLogoHovered ? 360 : 0,
                }}
                transition={{ duration: 0.5 }}
              >
                <Flag className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </motion.div>
            </div>
            
            <motion.div 
              className="flex flex-col"
              animate={{
                x: isLogoHovered ? 5 : 0,
              }}
              transition={{ duration: 0.3 }}
            >
              <span className="text-white font-mono text-base sm:text-lg tracking-wider font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-400">BLACK.FLAG</span>
              <span className="text-purple-400 font-mono text-xs tracking-wider">AI AUTOMATION</span>
            </motion.div>
          </motion.div>
          
          <div className="hidden md:flex space-x-8 items-center">
            {[
              { text: 'HOME', id: 'home' },
              { text: 'SERVICES', id: 'services' },
              { text: 'VISION', id: 'vision' }
            ].map((item, index) => (
              <motion.a
                key={item.text}
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(e, item.id)}
                className="text-purple-200 hover:text-white transition-colors font-mono text-sm relative group overflow-hidden"
                whileHover={{ scale: 1.05, y: -2 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <span className="relative z-10 group-hover:text-glow">{item.text}</span>
                <motion.div
                  className="absolute bottom-0 left-0 w-full h-[1px]"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-full h-full bg-gradient-to-r from-purple-500 via-purple-400 to-purple-500" />
                </motion.div>
                <motion.div
                  className="absolute inset-0 bg-purple-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </motion.a>
            ))}
            
            <motion.a
              href="#contact"
              onClick={(e) => handleNavClick(e, 'contact')}
              className="text-white font-mono text-sm relative overflow-hidden group px-4 sm:px-6 py-2"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <span className="relative z-10 flex items-center space-x-2">
                <Terminal className="w-4 h-4" />
                <span>INITIALIZE</span>
              </span>
              <motion.div
                className="absolute inset-0 border border-purple-600"
                animate={{
                  boxShadow: [
                    '0 0 0px rgba(147, 51, 234, 0.4)',
                    '0 0 20px rgba(147, 51, 234, 0.4)',
                    '0 0 0px rgba(147, 51, 234, 0.4)',
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-700 via-purple-600 to-purple-700"
                initial={{ x: '-100%' }}
                whileHover={{ x: '0%' }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          </div>

          <motion.button 
            className="md:hidden text-white relative"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <motion.div
              animate={{
                rotate: isMobileMenuOpen ? 90 : 0,
              }}
              transition={{ duration: 0.3 }}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.div>
            <motion.div
              className="absolute inset-0 bg-purple-500/20 rounded-full blur-lg"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween' }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-lg md:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full space-y-8">
              {[
                { text: 'HOME', id: 'home' },
                { text: 'SERVICES', id: 'services' },
                { text: 'VISION', id: 'vision' },
                { text: 'INITIALIZE', id: 'contact' }
              ].map((item, index) => (
                <motion.a
                  key={item.text}
                  href={`#${item.id}`}
                  onClick={(e) => handleNavClick(e, item.id)}
                  className="text-purple-200 hover:text-white transition-colors font-mono text-xl relative group"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.1, x: 10 }}
                >
                  <span>{item.text}</span>
                  <motion.div
                    className="absolute -bottom-2 left-0 w-full h-[1px] bg-gradient-to-r from-purple-500 via-purple-400 to-purple-500"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX, HiHome, HiUser, HiCog, HiMail } from 'react-icons/hi';
import { useLanguage } from '../context/LanguageContext';

const Navbar: React.FC = () => {
  const { isSpanish, toggleLanguage, t, isTransitioning } = useLanguage();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsDrawerOpen(false); // Close drawer after navigation
  };

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const navigationItems = [
    { id: 'inicio', label: t('home'), icon: HiHome },
    { id: 'sobre-mi', label: t('about'), icon: HiUser },
    { id: 'especialidad', label: t('services'), icon: HiCog },
    { id: 'contacto', label: t('contact'), icon: HiMail }
  ];

  return (
    <>
      {/* Mobile/Desktop Navbar */}
      <nav className="fixed top-0 left-0 right-0 bg-black/20 backdrop-blur-lg border-b border-gray-800/50 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center">
          {/* Logo/Brand - Only on mobile */}
          <motion.div 
            className="flex items-center space-x-2 lg:hidden"
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-yellow-400 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">AJ</span>
            </div>
            <span className="text-white font-semibold text-lg hidden sm:block">Alan Jhosel</span>
          </motion.div>
          
          {/* Desktop Navigation - Centered */}
          <div className="hidden lg:flex flex-1 justify-center">
            <div className="flex space-x-8">
              {navigationItems.map((item) => (
                <button 
                  key={item.id}
                  className={`text-gray-300 hover:text-red-400 text-sm font-medium uppercase tracking-wider transition-colors duration-300 cursor-pointer ${isTransitioning ? 'language-transition' : ''}`}
                  onClick={() => scrollToSection(item.id)}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Right side - Language & Contact Button */}
          <div className="flex items-center space-x-3 ml-auto lg:ml-0">
            {/* Language Toggle */}
            <motion.button 
              className="w-12 h-8 rounded-full bg-transparent backdrop-blur-sm border-2 border-gray-600/50 hover:border-red-500 flex items-center justify-center text-sm font-semibold transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-red-500/25 language-button-transition text-neutral-300"
              onClick={toggleLanguage}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {isSpanish ? 'EN' : 'ES'}
            </motion.button>
            
            {/* Contact Button - Hidden on small screens */}
            <motion.button 
              className={`hidden md:block shimmer bg-transparent border-2 border-red-600/50 hover:bg-red-600/20 text-white font-semibold py-2 px-6 rounded-full uppercase tracking-wider text-sm transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-red-500/25 ${isTransitioning ? 'language-transition' : ''}`}
              onClick={() => scrollToSection('contacto')}
              whileHover={{ y: -2, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t('contactMe')}
            </motion.button>

            {/* Mobile Menu Button */}
            <motion.button
              className="lg:hidden w-10 h-10 rounded-lg bg-gray-900/50 backdrop-blur-sm border border-gray-700 flex items-center justify-center text-white hover:border-red-500 transition-colors"
              onClick={toggleDrawer}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isDrawerOpen ? <HiX className="w-5 h-5" /> : <HiMenu className="w-5 h-5" />}
            </motion.button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isDrawerOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsDrawerOpen(false)}
            />
            
            {/* Drawer */}
            <motion.div
              className="fixed top-0 right-0 h-full w-80 bg-gray-900/95 backdrop-blur-xl border-l border-gray-800 z-50 lg:hidden"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
            >
              <div className="p-6">
                {/* Drawer Header */}
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-yellow-400 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-lg">AJ</span>
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">Alan Jhosel</h3>
                      <p className="text-gray-400 text-sm">Frontend Developer</p>
                    </div>
                  </div>
                  <motion.button
                    onClick={() => setIsDrawerOpen(false)}
                    className="w-8 h-8 rounded-lg bg-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <HiX className="w-4 h-4" />
                  </motion.button>
                </div>

                {/* Navigation Items */}
                <nav className="space-y-2">
                  {navigationItems.map((item, index) => (
                    <motion.button
                      key={item.id}
                      className={`w-full flex items-center space-x-4 px-4 py-3 rounded-lg text-left text-gray-300 hover:text-white hover:bg-gray-800/50 transition-all duration-300 group cursor-pointer ${isTransitioning ? 'language-transition' : ''}`}
                      onClick={() => scrollToSection(item.id)}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ x: 8, backgroundColor: "rgba(55, 65, 81, 0.5)" }}
                    >
                      <item.icon className="w-5 h-5 text-red-400 group-hover:text-red-300 transition-colors" />
                      <span className="font-medium">{item.label}</span>
                    </motion.button>
                  ))}
                </nav>

                {/* Drawer Footer */}
                <div className="mt-8 pt-6 border-t border-gray-800">
                  <motion.button 
                    className={`w-full shimmer bg-gradient-to-r from-red-600 to-yellow-400 text-white font-semibold py-3 px-6 rounded-lg uppercase tracking-wider text-sm transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-red-500/25 ${isTransitioning ? 'language-transition' : ''}`}
                    onClick={() => scrollToSection('contacto')}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {t('contactMe')}
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;

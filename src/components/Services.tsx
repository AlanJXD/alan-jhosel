import React from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation, slideInUp, staggerContainer, staggerItem } from '../hooks/useScrollAnimation';
import { useLanguage } from '../context/LanguageContext';

const Services: React.FC = () => {
  const { t, isTransitioning } = useLanguage();
  const { ref, isInView } = useScrollAnimation();
  
  const scrollToContact = () => {
    const element = document.getElementById('contacto');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <section id="especialidad" className="py-24 bg-black/80 backdrop-blur-sm text-white px-4 relative" ref={ref}>
      {/* Efectos de luz locales para Services */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-80 h-80 bg-red-600/7 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-88 h-88 bg-yellow-400/5 rounded-full blur-2xl"></div>
        <div className="absolute top-0 right-1/3 w-60 h-60 bg-red-500/6 rounded-full blur-xl"></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2 
          className={`text-4xl md:text-5xl font-light text-center mb-16 bg-gradient-to-r from-red-600 to-yellow-400 bg-clip-text text-transparent leading-normal ${isTransitioning ? 'language-transition' : ''}`}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={slideInUp}
          transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {t('servicesTitle')}
        </motion.h2>
        
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          transition={{ duration: 0.1, ease: "easeOut" }}
        >
          <motion.div 
            className="group bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-800 hover:border-red-500/50 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:shadow-red-900/30"
            variants={staggerItem}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            whileHover={{ 
              scale: 1.03,
              rotateY: 2,
              rotateX: 2,
              z: 50,
              transition: { duration: 0.3, ease: "easeOut" }
            }}
          >
            <motion.div 
              className="w-20 h-20 mb-6 bg-gradient-to-br from-red-600 to-yellow-400 rounded-2xl flex items-center justify-center"
              whileHover={{ 
                rotate: 5,
                scale: 1.1,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
            >
              <div className="grid grid-cols-2 gap-1">
                <div className="w-3 h-3 bg-white/30 rounded-sm"></div>
                <div className="w-2 h-2 bg-white/30 rounded-sm"></div>
                <div className="w-2 h-3 bg-white/30 rounded-sm"></div>
                <div className="w-2 h-2 bg-white/30 rounded-sm"></div>
              </div>
            </motion.div>
            
            <h3 className={`text-xl font-semibold mb-4 text-white group-hover:text-red-400 transition-colors ${isTransitioning ? 'language-transition' : ''}`}>
              {t('frontendDev')}
            </h3>
            
            <p className={`text-gray-300 mb-6 leading-relaxed ${isTransitioning ? 'language-transition' : ''}`}>
              {t('frontendDesc')}
            </p>
            
            <motion.div 
              className="space-y-3 mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <motion.div 
                className="flex items-center text-sm text-gray-400"
                whileHover={{ x: 4, transition: { duration: 0.2 } }}
              >
                <motion.div 
                  className="w-1.5 h-1.5 bg-red-500 rounded-full mr-2"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                ></motion.div>
                <span className={isTransitioning ? 'language-transition' : ''}>{t('reactVueDev')}</span>
              </motion.div>
              <motion.div 
                className="flex items-center text-sm text-gray-400"
                whileHover={{ x: 4, transition: { duration: 0.2 } }}
              >
                <motion.div 
                  className="w-1.5 h-1.5 bg-red-500 rounded-full mr-2"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                ></motion.div>
                <span className={isTransitioning ? 'language-transition' : ''}>{t('responsiveDesign')}</span>
              </motion.div>
              <motion.div 
                className="flex items-center text-sm text-gray-400"
                whileHover={{ x: 4, transition: { duration: 0.2 } }}
              >
                <motion.div 
                  className="w-1.5 h-1.5 bg-red-500 rounded-full mr-2"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
                ></motion.div>
                <span className={isTransitioning ? 'language-transition' : ''}>{t('performanceOpt')}</span>
              </motion.div>
            </motion.div>
            
            <motion.button 
              className={`shimmer-red bg-transparent border border-red-500/50 hover:bg-red-500/10 text-red-400 hover:text-red-300 py-2 px-4 rounded-lg text-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-red-500/25 ${isTransitioning ? 'language-transition' : ''}`}
              onClick={scrollToContact}
              whileHover={{ 
                scale: 1.05,
                y: -2,
                transition: { duration: 0.2, ease: "easeOut" }
              }}
              whileTap={{ scale: 0.98 }}
            >
              {t('seeMore')}
            </motion.button>
          </motion.div>

          <motion.div 
            className="group bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-800 hover:border-yellow-500/50 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:shadow-yellow-900/30"
            variants={staggerItem}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            whileHover={{ 
              scale: 1.03,
              rotateY: 2,
              rotateX: 2,
              z: 50,
              transition: { duration: 0.3, ease: "easeOut" }
            }}
          >
            <motion.div 
              className="w-20 h-20 mb-6 bg-gradient-to-br from-yellow-400 to-red-600 rounded-2xl flex items-center justify-center"
              whileHover={{ 
                rotate: 5,
                scale: 1.1,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
            >
              <div className="grid grid-cols-3 gap-1">
                <div className="w-2 h-4 bg-white/30 rounded-sm"></div>
                <div className="w-2 h-3 bg-white/30 rounded-sm"></div>
                <div className="w-2 h-5 bg-white/30 rounded-sm"></div>
                <div className="w-2 h-2 bg-white/30 rounded-sm"></div>
                <div className="w-2 h-4 bg-white/30 rounded-sm"></div>
                <div className="w-2 h-3 bg-white/30 rounded-sm"></div>
              </div>
            </motion.div>
            
            <h3 className={`text-xl font-semibold mb-4 text-white group-hover:text-yellow-400 transition-colors ${isTransitioning ? 'language-transition' : ''}`}>
              {t('webApps')}
            </h3>
            
            <p className={`text-gray-300 mb-6 leading-relaxed ${isTransitioning ? 'language-transition' : ''}`}>
              {t('webAppsDesc')}
            </p>
            
            <motion.div 
              className="space-y-3 mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <motion.div 
                className="flex items-center text-sm text-gray-400"
                whileHover={{ x: 4, transition: { duration: 0.2 } }}
              >
                <motion.div 
                  className="w-1.5 h-1.5 bg-yellow-500 rounded-full mr-2"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                ></motion.div>
                <span className={isTransitioning ? 'language-transition' : ''}>{t('spaApps')}</span>
              </motion.div>
              <motion.div 
                className="flex items-center text-sm text-gray-400"
                whileHover={{ x: 4, transition: { duration: 0.2 } }}
              >
                <motion.div 
                  className="w-1.5 h-1.5 bg-yellow-500 rounded-full mr-2"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                ></motion.div>
                <span className={isTransitioning ? 'language-transition' : ''}>{t('apiIntegration')}</span>
              </motion.div>
              <motion.div 
                className="flex items-center text-sm text-gray-400"
                whileHover={{ x: 4, transition: { duration: 0.2 } }}
              >
                <motion.div 
                  className="w-1.5 h-1.5 bg-yellow-500 rounded-full mr-2"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
                ></motion.div>
                <span className={isTransitioning ? 'language-transition' : ''}>{t('stateManagement')}</span>
              </motion.div>
            </motion.div>
            
            <motion.button 
              className={`shimmer-yellow bg-transparent border border-yellow-500/50 hover:bg-yellow-500/10 text-yellow-400 hover:text-yellow-300 py-2 px-4 rounded-lg text-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-yellow-500/25 ${isTransitioning ? 'language-transition' : ''}`}
              onClick={scrollToContact}
              whileHover={{ 
                scale: 1.05,
                y: -2,
                transition: { duration: 0.2, ease: "easeOut" }
              }}
              whileTap={{ scale: 0.98 }}
            >
              {t('seeMore')}
            </motion.button>
          </motion.div>

          <motion.div 
            className="group bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-800 hover:border-green-500/50 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:shadow-green-900/30"
            variants={staggerItem}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            whileHover={{ 
              scale: 1.03,
              rotateY: 2,
              rotateX: 2,
              z: 50,
              transition: { duration: 0.3, ease: "easeOut" }
            }}
          >
            <motion.div 
              className="w-20 h-20 mb-6 bg-gradient-to-br from-green-500 to-yellow-400 rounded-2xl flex items-center justify-center"
              whileHover={{ 
                rotate: 5,
                scale: 1.1,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
            >
              <div className="relative">
                <div className="w-5 h-5 border-2 border-white/30 rounded-full"></div>
                <div className="absolute top-1 left-1 w-3 h-3 bg-white/30 rounded-full"></div>
              </div>
            </motion.div>
            
            <h3 className={`text-xl font-semibold mb-4 text-white group-hover:text-green-400 transition-colors ${isTransitioning ? 'language-transition' : ''}`}>
              {t('webOptimization')}
            </h3>
            
            <p className={`text-gray-300 mb-6 leading-relaxed ${isTransitioning ? 'language-transition' : ''}`}>
              {t('webOptimizationDesc')}
            </p>
            
            <motion.div 
              className="space-y-3 mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <motion.div 
                className="flex items-center text-sm text-gray-400"
                whileHover={{ x: 4, transition: { duration: 0.2 } }}
              >
                <motion.div 
                  className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                ></motion.div>
                <span className={isTransitioning ? 'language-transition' : ''}>{t('speedOptimization')}</span>
              </motion.div>
              <motion.div 
                className="flex items-center text-sm text-gray-400"
                whileHover={{ x: 4, transition: { duration: 0.2 } }}
              >
                <motion.div 
                  className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                ></motion.div>
                <span className={isTransitioning ? 'language-transition' : ''}>{t('technicalSEO')}</span>
              </motion.div>
              <motion.div 
                className="flex items-center text-sm text-gray-400"
                whileHover={{ x: 4, transition: { duration: 0.2 } }}
              >
                <motion.div 
                  className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
                ></motion.div>
                <span className={isTransitioning ? 'language-transition' : ''}>{t('performanceAnalysis')}</span>
              </motion.div>
            </motion.div>
            
            <motion.button 
              className={`shimmer-green bg-transparent border border-green-500/50 hover:bg-green-500/10 text-green-400 hover:text-green-300 py-2 px-4 rounded-lg text-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-green-500/25 ${isTransitioning ? 'language-transition' : ''}`}
              onClick={scrollToContact}
              whileHover={{ 
                scale: 1.05,
                y: -2,
                transition: { duration: 0.2, ease: "easeOut" }
              }}
              whileTap={{ scale: 0.98 }}
            >
              {t('seeMore')}
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;

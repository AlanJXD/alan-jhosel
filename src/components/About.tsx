import React from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation, slideInLeft, slideInRight, staggerContainer, floatUp, fadeInUp } from '../hooks/useScrollAnimation';
import { useLanguage } from '../context/LanguageContext';

const About: React.FC = () => {
  const { t, isTransitioning } = useLanguage();
  const { ref, isInView } = useScrollAnimation();
  
  return (
    <section id="sobre-mi" className="py-24 bg-gray-900/80 backdrop-blur-sm text-white px-4 relative" ref={ref}>
      {/* Efectos de luz locales para About */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-72 h-72 bg-yellow-400/6 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-red-600/8 rounded-full blur-2xl"></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2 
          className={`text-4xl md:text-5xl font-light text-center mb-16 bg-gradient-to-r from-red-600 to-yellow-400 bg-clip-text text-transparent leading-normal ${isTransitioning ? 'language-transition' : ''}`}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInUp}
          transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {t('aboutTitle')}
        </motion.h2>
        
        <motion.div 
          className="grid lg:grid-cols-3 gap-16 items-center justify-center"
          style={{ justifyItems: 'center' }}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          transition={{ duration: 0.1, ease: "easeOut" }}
        >
          <motion.div 
            className="lg:col-span-2 space-y-8" 
            variants={slideInLeft}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <motion.p 
              className={`text-gray-300 text-lg leading-relaxed ${isTransitioning ? 'language-transition' : ''}`}
              variants={floatUp}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              {t('aboutDescription1')}
            </motion.p>
            
            <motion.p 
              className={`text-gray-300 text-lg leading-relaxed ${isTransitioning ? 'language-transition' : ''}`}
              variants={floatUp}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.1 }}
            >
              {t('aboutDescription2')}
            </motion.p>

            {/* Stack Tecnológico */}
            <motion.div 
              className="space-y-8" 
              variants={floatUp}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.2 }}
            >
              <motion.h3 
                className={`text-2xl font-semibold text-white ${isTransitioning ? 'language-transition' : ''}`}
                variants={floatUp}
                transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                {t('techStack')}
              </motion.h3>
              
              <motion.div 
                className="space-y-6" 
                variants={fadeInUp}
                transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                {/* Frontend */}
                <motion.div 
                  className="space-y-3" 
                  variants={fadeInUp}
                  transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  <h4 className={`text-lg font-medium text-red-400 mb-3 ${isTransitioning ? 'language-transition' : ''}`}>
                    {t('frontendStack')}
                  </h4>
                  <motion.div 
                    className="flex flex-wrap gap-3"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.8, staggerChildren: 0.1 }}
                  >
                    {['React', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS', 'Bootstrap', 'jQuery'].map((tech, index) => (
                      <motion.span
                        key={tech}
                        className={`${tech === 'Tailwind CSS' ? 'bg-gradient-to-r from-red-600/20 to-yellow-400/20 text-white border-red-500/50 hover:border-red-400' : 'bg-gradient-to-r from-gray-800/80 to-gray-700/80 text-gray-200 border-gray-600/50 hover:border-red-500/50'} backdrop-blur-sm px-4 py-2 rounded-lg text-sm border hover:-translate-y-1 transition-all duration-300 shadow-lg cursor-pointer`}
                        initial={{ opacity: 0, scale: 0.8, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ 
                          duration: 0.5, 
                          ease: [0.25, 0.46, 0.45, 0.94],
                          delay: index * 0.1 
                        }}
                        whileHover={{ 
                          scale: 1.05,
                          y: -2,
                          transition: { duration: 0.2 }
                        }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </motion.div>
                </motion.div>

                {/* Backend */}
                <motion.div 
                  className="space-y-3" 
                  variants={fadeInUp}
                  transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.1 }}
                >
                  <h4 className={`text-lg font-medium text-blue-400 mb-3 ${isTransitioning ? 'language-transition' : ''}`}>
                    {t('backendStack')}
                  </h4>
                  <motion.div 
                    className="flex flex-wrap gap-3"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.8, staggerChildren: 0.1 }}
                  >
                    {['Node.js', 'Express.js', 'PHP', 'Python'].map((tech, index) => (
                      <motion.span
                        key={tech}
                        className="bg-gradient-to-r from-gray-800/80 to-gray-700/80 backdrop-blur-sm text-gray-200 px-4 py-2 rounded-lg text-sm border border-gray-600/50 hover:border-blue-500/50 hover:-translate-y-1 transition-all duration-300 shadow-lg cursor-pointer"
                        initial={{ opacity: 0, scale: 0.8, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ 
                          duration: 0.5, 
                          ease: [0.25, 0.46, 0.45, 0.94],
                          delay: index * 0.1 + 0.4
                        }}
                        whileHover={{ 
                          scale: 1.05,
                          y: -2,
                          transition: { duration: 0.2 }
                        }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </motion.div>
                </motion.div>

                {/* Databases */}
                <motion.div 
                  className="space-y-3" 
                  variants={fadeInUp}
                  transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.2 }}
                >
                  <h4 className={`text-lg font-medium text-purple-400 mb-3 ${isTransitioning ? 'language-transition' : ''}`}>
                    {t('databases')}
                  </h4>
                  <motion.div 
                    className="flex flex-wrap gap-3"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8, staggerChildren: 0.1 }}
                  >
                    {['PostgreSQL', 'MySQL', 'SQLite'].map((tech, index) => (
                      <motion.span
                        key={tech}
                        className="bg-gradient-to-r from-gray-800/80 to-gray-700/80 backdrop-blur-sm text-gray-200 px-4 py-2 rounded-lg text-sm border border-gray-600/50 hover:border-purple-500/50 hover:-translate-y-1 transition-all duration-300 shadow-lg cursor-pointer"
                        initial={{ opacity: 0, scale: 0.8, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ 
                          duration: 0.5, 
                          ease: [0.25, 0.46, 0.45, 0.94],
                          delay: index * 0.1 + 0.5
                        }}
                        whileHover={{ 
                          scale: 1.05,
                          y: -2,
                          transition: { duration: 0.2 }
                        }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </motion.div>
                </motion.div>

                {/* Cloud & Mobile */}
                <motion.div 
                  className="space-y-3" 
                  variants={fadeInUp}
                  transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.3 }}
                >
                  <h4 className={`text-lg font-medium text-green-400 mb-3 ${isTransitioning ? 'language-transition' : ''}`}>
                    {t('cloudMobile')}
                  </h4>
                  <motion.div 
                    className="flex flex-wrap gap-3"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.8, staggerChildren: 0.1 }}
                  >
                    {['AWS', 'React Native'].map((tech, index) => (
                      <motion.span
                        key={tech}
                        className="bg-gradient-to-r from-gray-800/80 to-gray-700/80 backdrop-blur-sm text-gray-200 px-4 py-2 rounded-lg text-sm border border-gray-600/50 hover:border-green-500/50 hover:-translate-y-1 transition-all duration-300 shadow-lg cursor-pointer"
                        initial={{ opacity: 0, scale: 0.8, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ 
                          duration: 0.5, 
                          ease: [0.25, 0.46, 0.45, 0.94],
                          delay: index * 0.1 + 0.6
                        }}
                        whileHover={{ 
                          scale: 1.05,
                          y: -2,
                          transition: { duration: 0.2 }
                        }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="flex justify-center" 
            variants={slideInRight}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <motion.div 
              className="relative"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <div className="w-72 h-96 md:w-80 md:h-[28rem] lg:w-96 lg:h-[32rem] rounded-2xl overflow-hidden">
                <img 
                  src="/img.png" 
                  alt="Alan Jhosel" 
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

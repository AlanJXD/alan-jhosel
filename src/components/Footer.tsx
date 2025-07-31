import { motion } from 'framer-motion';
import { useScrollAnimation, fadeInUp, staggerContainer, staggerItem } from '../hooks/useScrollAnimation';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
  const { t, isTransitioning } = useLanguage();
  const { ref, isInView } = useScrollAnimation();
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-black border-t-2 border-red-600/30 py-16 px-4 text-white relative z-20 clear-both mt-0" ref={ref}>
      {/* Efectos de luz locales para Footer */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/3 w-56 h-56 bg-red-600/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-0 right-1/3 w-48 h-48 bg-yellow-400/8 rounded-full blur-xl"></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div 
          className="grid md:grid-cols-4 gap-8 mb-8 text-center md:text-left"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.div className="space-y-4" variants={staggerItem}>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-red-600 to-yellow-400 bg-clip-text text-transparent">
              Alan Jhosel
            </h3>
            <p className={`text-gray-300 leading-relaxed ${isTransitioning ? 'language-transition' : ''}`}>
              {t('footerDescription')}
            </p>
            <div className="flex space-x-4">
              <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
              <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
          </motion.div>
          
          <motion.div className="space-y-4" variants={staggerItem}>
            <h4 className={`text-lg font-semibold text-white ${isTransitioning ? 'language-transition' : ''}`}>
              {t('navigation')}
            </h4>
            <div className="space-y-2">
              <button 
                onClick={() => scrollToSection('inicio')}
                className={`block text-gray-300 hover:text-red-400 transition-colors cursor-pointer ${isTransitioning ? 'language-transition' : ''}`}
              >
                {t('home')}
              </button>
              <button 
                onClick={() => scrollToSection('sobre-mi')}
                className={`block text-gray-300 hover:text-red-400 transition-colors cursor-pointer ${isTransitioning ? 'language-transition' : ''}`}
              >
                {t('about')}
              </button>
              <button 
                onClick={() => scrollToSection('especialidad')}
                className={`block text-gray-300 hover:text-red-400 transition-colors cursor-pointer ${isTransitioning ? 'language-transition' : ''}`}
              >
                {t('services')}
              </button>
              <button 
                onClick={() => scrollToSection('contacto')}
                className={`block text-gray-300 hover:text-red-400 transition-colors cursor-pointer ${isTransitioning ? 'language-transition' : ''}`}
              >
                {t('contact')}
              </button>
            </div>
          </motion.div>
          
          <motion.div className="space-y-4" variants={staggerItem}>
            <h4 className={`text-lg font-semibold text-white ${isTransitioning ? 'language-transition' : ''}`}>
              {t('servicesFooter')}
            </h4>
            <div className="space-y-2">
              <span className={`block text-gray-300 ${isTransitioning ? 'language-transition' : ''}`}>
                {t('frontendService')}
              </span>
              <span className={`block text-gray-300 ${isTransitioning ? 'language-transition' : ''}`}>
                {t('webAppsService')}
              </span>
              <span className={`block text-gray-300 ${isTransitioning ? 'language-transition' : ''}`}>
                {t('optimizationService')}
              </span>
              <span className={`block text-gray-300 ${isTransitioning ? 'language-transition' : ''}`}>
                {t('consulting')}
              </span>
            </div>
          </motion.div>
          
          <motion.div className="space-y-4" variants={staggerItem}>
            <h4 className={`text-lg font-semibold text-white ${isTransitioning ? 'language-transition' : ''}`}>
              {t('contact')}
            </h4>
            <div className="space-y-2">
              <p className="text-gray-300">alan_jhosel@hotmail.com</p>
              <p className="text-gray-300">(+52) 311 110 6698</p>
              <p className={`text-gray-300 ${isTransitioning ? 'language-transition' : ''}`}>{t('locationName')}</p>
            </div>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="border-t border-gray-800 pt-8"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInUp}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
        >
          <div className="text-center">
            <p className={`text-gray-400 ${isTransitioning ? 'language-transition' : ''}`}>
              © {new Date().getFullYear()} Alan Jhosel.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;

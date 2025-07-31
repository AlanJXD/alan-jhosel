import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi';
import { useScrollAnimation, slideInUp, slideInLeft, slideInRight, staggerContainer, floatUp } from '../hooks/useScrollAnimation';
import { useLanguage } from '../context/LanguageContext';

const Contact: React.FC = () => {
  const { t, isTransitioning } = useLanguage();
  const { ref, isInView } = useScrollAnimation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Reset status when user starts typing
    if (submitStatus !== 'idle') {
      setSubmitStatus('idle');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validación básica
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setSubmitStatus('error');
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Crear el mensaje para WhatsApp
      const whatsappMessage = `Hola! Soy ${formData.name}%0A%0AEmail: ${formData.email}%0A%0AMensaje: ${formData.message}`;
      const whatsappURL = `https://wa.me/573111106698?text=${whatsappMessage}`;
      
      // También crear mailto como alternativa
      const mailtoURL = `mailto:alan_jhosel@hotmail.com?subject=Contacto desde Portfolio - ${formData.name}&body=Nombre: ${formData.name}%0AEmail: ${formData.email}%0A%0AMensaje: ${formData.message}`;
      
      // Simular un pequeño delay para mostrar el estado de carga
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Abrir WhatsApp
      window.open(whatsappURL, '_blank');
      
      // También dar opción de email como backup
      setTimeout(() => {
        if (confirm('¿También quieres abrir tu cliente de email como respaldo?')) {
          window.location.href = mailtoURL;
        }
      }, 500);
      
      setSubmitStatus('success');
      
      // Limpiar formulario después de 2 segundos
      setTimeout(() => {
        setFormData({ name: '', email: '', message: '' });
        setSubmitStatus('idle');
      }, 2000);
      
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contacto" className="pb-12 pt-16 md:pt-24 md:pb-12 bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-sm text-white px-4 relative" ref={ref}>
      {/* Efectos de luz locales para Contact */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-yellow-400/8 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-red-600/6 rounded-full blur-2xl"></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div 
          className="text-center mb-12 md:mb-16"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={slideInUp}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className={`text-3xl md:text-4xl lg:text-5xl font-light mb-4 md:mb-6 bg-gradient-to-r from-red-600 to-yellow-400 bg-clip-text text-transparent leading-normal ${isTransitioning ? 'language-transition' : ''}`}>
            {t('contactTitle')}
          </h2>
          <p className={`text-gray-300 text-base md:text-lg max-w-2xl mx-auto ${isTransitioning ? 'language-transition' : ''}`}>
            {t('contactDescription')}
          </p>
        </motion.div>

        <motion.div 
          className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          transition={{ duration: 0.8, ease: "easeOut", staggerChildren: 0.2 }}
        >
          {/* Información de contacto */}
          <motion.div className="space-y-6 md:space-y-8" variants={slideInLeft}>
            <motion.div 
              className="bg-gray-900/50 backdrop-blur-sm p-4 md:p-6 rounded-2xl border border-gray-800 hover:border-red-500/50 transition-all duration-300"
              variants={floatUp}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="flex items-center space-x-3 md:space-x-4">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-red-600 to-yellow-400 rounded-xl flex items-center justify-center">
                  <HiMail className="w-5 h-5 md:w-6 md:h-6 text-white" />
                </div>
                <div>
                  <h3 className={`text-base md:text-lg font-semibold mb-1 ${isTransitioning ? 'language-transition' : ''}`}>{t('email')}</h3>
                  <p className="text-gray-300 text-sm md:text-base">alan_jhosel@hotmail.com</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="bg-gray-900/50 backdrop-blur-sm p-4 md:p-6 rounded-2xl border border-gray-800 hover:border-yellow-500/50 transition-all duration-300"
              variants={floatUp}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="flex items-center space-x-3 md:space-x-4">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-yellow-400 to-red-600 rounded-xl flex items-center justify-center">
                  <HiPhone className="w-5 h-5 md:w-6 md:h-6 text-white" />
                </div>
                <div>
                  <h3 className={`text-base md:text-lg font-semibold mb-1 ${isTransitioning ? 'language-transition' : ''}`}>{t('phone')}</h3>
                  <p className="text-gray-300 text-sm md:text-base">311 110 6698</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="bg-gray-900/50 backdrop-blur-sm p-4 md:p-6 rounded-2xl border border-gray-800 hover:border-green-500/50 transition-all duration-300"
              variants={floatUp}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="flex items-center space-x-3 md:space-x-4">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-green-500 to-yellow-400 rounded-xl flex items-center justify-center">
                  <HiLocationMarker className="w-5 h-5 md:w-6 md:h-6 text-white" />
                </div>
                <div>
                  <h3 className={`text-base md:text-lg font-semibold mb-1 ${isTransitioning ? 'language-transition' : ''}`}>{t('location')}</h3>
                  <p className="text-gray-300 text-sm md:text-base">{t('locationName')}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Formulario de contacto */}
          <motion.div 
            className="bg-gray-900/50 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-gray-800"
            variants={slideInRight}
          >
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              <motion.div variants={floatUp}>
                <label className={`block text-sm font-medium mb-2 text-gray-300 ${isTransitioning ? 'language-transition' : ''}`}>
                  {t('name')}
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder={t('namePlaceholder')}
                  className="w-full bg-black/50 border border-gray-700 rounded-lg px-3 md:px-4 py-2 md:py-3 text-white placeholder-gray-400 focus:outline-none focus:border-red-500 transition-colors text-sm md:text-base"
                  required
                />
              </motion.div>

              <motion.div variants={floatUp}>
                <label className={`block text-sm font-medium mb-2 text-gray-300 ${isTransitioning ? 'language-transition' : ''}`}>
                  {t('email')}
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder={t('emailPlaceholder')}
                  className="w-full bg-black/50 border border-gray-700 rounded-lg px-3 md:px-4 py-2 md:py-3 text-white placeholder-gray-400 focus:outline-none focus:border-red-500 transition-colors text-sm md:text-base"
                  required
                />
              </motion.div>

              <motion.div variants={floatUp}>
                <label className={`block text-sm font-medium mb-2 text-gray-300 ${isTransitioning ? 'language-transition' : ''}`}>
                  {t('message')}
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder={t('messagePlaceholder')}
                  rows={4}
                  className="w-full bg-black/50 border border-gray-700 rounded-lg px-3 md:px-4 py-2 md:py-3 text-white placeholder-gray-400 focus:outline-none focus:border-red-500 transition-colors resize-none text-sm md:text-base"
                  required
                />
              </motion.div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className={`w-full font-semibold py-3 md:py-4 px-6 md:px-8 rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl text-sm md:text-base ${
                  submitStatus === 'success' 
                    ? 'bg-gradient-to-r from-green-600 to-green-400 hover:shadow-green-500/25' 
                    : submitStatus === 'error'
                    ? 'bg-gradient-to-r from-red-600 to-red-400 hover:shadow-red-500/25'
                    : 'shimmer-red bg-gradient-to-r from-red-600 to-yellow-400 hover:shadow-red-500/25'
                } text-white ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''} ${isTransitioning ? 'language-transition' : ''}`}
                variants={floatUp}
                whileHover={!isSubmitting ? { scale: 1.05, y: -2 } : {}}
                whileTap={!isSubmitting ? { scale: 0.98 } : {}}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <motion.div
                      className="w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    />
                    {t('sending')}
                  </span>
                ) : submitStatus === 'success' ? (
                  <span className="flex items-center justify-center">
                    <motion.svg
                      className="w-5 h-5 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </motion.svg>
                    {t('sent')}
                  </span>
                ) : submitStatus === 'error' ? (
                  <span className="flex items-center justify-center">
                    <motion.svg
                      className="w-5 h-5 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </motion.svg>
                    {t('error')}
                  </span>
                ) : (
                  t('sendMessage')
                )}
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

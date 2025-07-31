import React from 'react';
import { HiCode } from 'react-icons/hi';
import { useLanguage } from '../context/LanguageContext';

const Hero = () => {
  const { t, isTransitioning } = useLanguage();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="min-h-screen bg-transparent text-white pt-20 px-4 flex items-center relative">
      {/* Efectos de luz locales para Hero */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-yellow-400/8 rounded-full blur-2xl"></div>
      </div>
      
      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-12">
          <div className="space-y-8">
            <div className={isTransitioning ? 'language-transition' : ''}>
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-light mb-2 text-gray-300">
                Alan Jhosel
              </h1>
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-light leading-tight">
                {t('developer')}
                <br />
                <span className="bg-gradient-to-r from-red-600 to-yellow-400 bg-clip-text text-transparent font-bold">
                  {t('software')}
                </span>
              </h2>
            </div>
            
            <div className={`flex gap-12 ${isTransitioning ? 'language-transition' : ''}`}>
              <div className="text-center">
                <div className="text-3xl md:text-4xl lg:text-4xl font-bold text-white">{t('frontendHero')}</div>
                <div className="text-xs md:text-sm text-gray-400 uppercase tracking-wider">{t('specialty')}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl lg:text-4xl font-bold text-white">{t('fullstack')}</div>
                <div className="text-xs md:text-sm text-gray-400 uppercase tracking-wider">{t('capability')}</div>
              </div>
            </div>

            <p className={`text-gray-300 text-lg md:text-xl leading-relaxed max-w-lg ${isTransitioning ? 'language-transition' : ''}`}>
              {t('heroDescription').split('\n').map((line: string, index: number) => (
                <React.Fragment key={index}>
                  {line}
                  {index < t('heroDescription').split('\n').length - 1 && <br />}
                </React.Fragment>
              ))}
            </p>

            <button 
              onClick={() => scrollToSection('sobre-mi')}
              className={`shimmer-white bg-transparent border-2 border-white/50 hover:bg-white/10 text-white font-semibold py-4 px-8 md:py-4 md:px-10 rounded-full uppercase tracking-wider text-sm md:text-base transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl hover:shadow-white/25 cursor-pointer ${isTransitioning ? 'language-transition' : ''}`}
            >
              {t('start')}
            </button>
          </div>

          <div className="flex justify-center items-center">
            <div className="relative w-80 h-80">
              <div className="animate-float w-full h-full rounded-full bg-gradient-to-br from-red-600 to-yellow-400 relative overflow-hidden shadow-2xl shadow-red-500/30 flex items-center justify-center">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="relative z-10">
                  <HiCode className="w-20 h-20 text-white" />
                </div>
              </div>
              
              <div className="absolute -z-10 w-full h-full rounded-full bg-gradient-to-br from-red-600/30 to-yellow-400/30 blur-xl transform scale-110"></div>
            </div>
          </div>
        </div>

        {/* Removed floating border/gradient line below the button */}
      </div>
    </section>
  );
};

export default Hero;

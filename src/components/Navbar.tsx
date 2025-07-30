import React from 'react';
import { useTheme } from '../context/ThemeContext';

const Navbar: React.FC = () => {
  const { isDarkTheme, toggleTheme } = useTheme();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-black/95 backdrop-blur-xl border-b border-gray-800 z-50 shadow-lg shadow-red-900/10">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex-1">
          {/* Espacio vacío para centrar el menú */}
        </div>
        
        <div className="flex space-x-8">
          <button 
            className="text-gray-300 hover:text-red-400 text-sm font-medium uppercase tracking-wider transition-colors duration-300"
            onClick={() => scrollToSection('inicio')}
          >
            Inicio
          </button>
          <button 
            className="text-gray-300 hover:text-red-400 text-sm font-medium uppercase tracking-wider transition-colors duration-300"
            onClick={() => scrollToSection('sobre-mi')}
          >
            Sobre Mí
          </button>
          <button 
            className="text-gray-300 hover:text-red-400 text-sm font-medium uppercase tracking-wider transition-colors duration-300"
            onClick={() => scrollToSection('especialidad')}
          >
            Especialidad
          </button>
          <button 
            className="text-gray-300 hover:text-red-400 text-sm font-medium uppercase tracking-wider transition-colors duration-300"
            onClick={() => scrollToSection('contacto')}
          >
            Contacto
          </button>
        </div>

        <div className="flex items-center space-x-4 flex-1 justify-end">
          <button 
            className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border-2 border-gray-700 hover:border-red-500 flex items-center justify-center text-lg transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-red-500/25"
            onClick={toggleTheme}
          >
            {isDarkTheme ? '☀️' : '🌙'}
          </button>
          <button className="shimmer bg-gradient-to-r from-red-600 to-yellow-400 hover:from-red-500 hover:to-yellow-300 text-white font-semibold py-2 px-6 rounded-full uppercase tracking-wider text-sm transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-red-500/25">
            Contáctame →
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import React from 'react';

const About: React.FC = () => {
  return (
    <section id="sobre-mi" className="py-24 bg-gray-900 text-white px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-light text-center mb-16 bg-gradient-to-r from-red-600 to-yellow-400 bg-clip-text text-transparent">
          Sobre Mí
        </h2>
        
        <div className="grid lg:grid-cols-3 gap-16 items-center">
          <div className="lg:col-span-2 space-y-8">
            <p className="text-gray-300 text-lg leading-relaxed">
              Soy un desarrollador de software apasionado por crear experiencias digitales 
              excepcionales. Mi especialidad es el desarrollo frontend con React, TypeScript 
              y las últimas herramientas de desarrollo web.
            </p>
            
            <p className="text-gray-300 text-lg leading-relaxed">
              También tengo experiencia en desarrollo backend, lo que me permite crear 
              aplicaciones fullstack completas. Siempre busco las mejores prácticas y 
              mantenerme actualizado con las últimas tendencias del desarrollo.
            </p>

            <div className="grid gap-6">
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-white">React & TypeScript</span>
                  <span className="text-sm text-gray-400">90%</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-2">
                  <div className="bg-gradient-to-r from-red-600 to-yellow-400 h-2 rounded-full transition-all duration-1000" style={{width: '90%'}}></div>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-white">Node.js & APIs</span>
                  <span className="text-sm text-gray-400">85%</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-2">
                  <div className="bg-gradient-to-r from-red-600 to-yellow-400 h-2 rounded-full transition-all duration-1000" style={{width: '85%'}}></div>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-white">CSS & Design</span>
                  <span className="text-sm text-gray-400">95%</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-2">
                  <div className="bg-gradient-to-r from-red-600 to-yellow-400 h-2 rounded-full transition-all duration-1000" style={{width: '95%'}}></div>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-white">JavaScript</span>
                  <span className="text-sm text-gray-400">88%</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-2">
                  <div className="bg-gradient-to-r from-red-600 to-yellow-400 h-2 rounded-full transition-all duration-1000" style={{width: '88%'}}></div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center">
            <div className="w-64 h-80 bg-gray-800 rounded-2xl border-2 border-dashed border-gray-600 flex items-center justify-center text-gray-400 text-lg hover:border-red-500 transition-colors duration-300">
              Tu Foto
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

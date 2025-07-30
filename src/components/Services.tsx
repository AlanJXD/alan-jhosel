import React from 'react';

const Services: React.FC = () => {
  return (
    <section id="especialidad" className="py-24 bg-black text-white px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-light text-center mb-16 bg-gradient-to-r from-red-600 to-yellow-400 bg-clip-text text-transparent">
          Mis Especialidades
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="group bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-800 hover:border-red-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-red-900/20">
            <div className="w-20 h-20 mb-6 bg-gradient-to-br from-red-600 to-yellow-400 rounded-2xl flex items-center justify-center">
              <div className="grid grid-cols-2 gap-1">
                <div className="w-3 h-3 bg-white/30 rounded-sm"></div>
                <div className="w-2 h-2 bg-white/30 rounded-sm"></div>
                <div className="w-2 h-3 bg-white/30 rounded-sm"></div>
                <div className="w-2 h-2 bg-white/30 rounded-sm"></div>
              </div>
            </div>
            
            <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-red-400 transition-colors">
              Desarrollo Frontend
            </h3>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Desarrollo de interfaces modernas y responsivas. 
              Experiencia en React, Vue y tecnologías actuales.
              Optimización de rendimiento y mejores prácticas.
            </p>
            
            <ul className="space-y-2 mb-8 text-gray-400">
              <li className="flex items-center">
                <span className="text-green-400 mr-2">✓</span>
                Desarrollo con React/Vue
              </li>
              <li className="flex items-center">
                <span className="text-green-400 mr-2">✓</span>
                Diseño Responsive
              </li>
              <li className="flex items-center">
                <span className="text-green-400 mr-2">✓</span>
                Optimización de rendimiento
              </li>
            </ul>
            
            <button className="border-2 border-red-600 text-red-400 hover:bg-red-600 hover:text-white py-3 px-6 rounded-full font-semibold uppercase tracking-wider text-sm transition-all duration-300">
              Ver Más →
            </button>
          </div>

          <div className="group bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-800 hover:border-red-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-red-900/20">
            <div className="w-20 h-20 mb-6 bg-gradient-to-br from-red-600 to-yellow-400 rounded-2xl flex items-center justify-center">
              <div className="w-8 h-10 bg-white/20 rounded border border-white/30 relative">
                <div className="w-full h-full bg-white/30 rounded-sm m-1"></div>
              </div>
            </div>
            
            <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-red-400 transition-colors">
              Aplicaciones Web
            </h3>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Creación de aplicaciones web completas con 
              funcionalidades avanzadas. Integración con APIs 
              y bases de datos modernas.
            </p>
            
            <ul className="space-y-2 mb-8 text-gray-400">
              <li className="flex items-center">
                <span className="text-green-400 mr-2">✓</span>
                SPA (Single Page Applications)
              </li>
              <li className="flex items-center">
                <span className="text-green-400 mr-2">✓</span>
                Integración con APIs
              </li>
              <li className="flex items-center">
                <span className="text-green-400 mr-2">✓</span>
                Gestión de estado
              </li>
            </ul>
            
            <button className="border-2 border-red-600 text-red-400 hover:bg-red-600 hover:text-white py-3 px-6 rounded-full font-semibold uppercase tracking-wider text-sm transition-all duration-300">
              Ver Más →
            </button>
          </div>

          <div className="group bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-800 hover:border-red-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-red-900/20 md:col-span-2 lg:col-span-1">
            <div className="w-20 h-20 mb-6 bg-gradient-to-br from-red-600 to-yellow-400 rounded-2xl flex items-center justify-center">
              <div className="flex flex-col space-y-1">
                <div className="w-5 h-1 bg-white/30 rounded"></div>
                <div className="w-4 h-1 bg-white/30 rounded"></div>
                <div className="w-6 h-1 bg-white/30 rounded"></div>
              </div>
            </div>
            
            <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-red-400 transition-colors">
              Optimización Web
            </h3>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Mejora del rendimiento y optimización SEO. 
              Análisis de métricas web y implementación 
              de mejores prácticas.
            </p>
            
            <ul className="space-y-2 mb-8 text-gray-400">
              <li className="flex items-center">
                <span className="text-green-400 mr-2">✓</span>
                Optimización de velocidad
              </li>
              <li className="flex items-center">
                <span className="text-green-400 mr-2">✓</span>
                SEO técnico
              </li>
              <li className="flex items-center">
                <span className="text-green-400 mr-2">✓</span>
                Análisis de rendimiento
              </li>
            </ul>
            
            <button className="border-2 border-red-600 text-red-400 hover:bg-red-600 hover:text-white py-3 px-6 rounded-full font-semibold uppercase tracking-wider text-sm transition-all duration-300">
              Ver Más →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

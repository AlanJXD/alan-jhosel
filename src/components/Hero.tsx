import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="inicio" className="min-h-screen bg-black text-white pt-20 px-4 flex items-center relative light-effects">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-12">
          <div className="space-y-8">
            <div>
              <h1 className="text-2xl md:text-3xl font-light mb-2 text-gray-300">
                Alan Jhosel
              </h1>
              <h2 className="text-4xl md:text-6xl font-light leading-tight">
                Desarrollador de
                <br />
                <span className="bg-gradient-to-r from-red-600 to-yellow-400 bg-clip-text text-transparent font-bold">
                  Software
                </span>
              </h2>
            </div>
            
            <div className="flex gap-12">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white">Frontend</div>
                <div className="text-xs text-gray-400 uppercase tracking-wider">ESPECIALIDAD</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white">Fullstack</div>
                <div className="text-xs text-gray-400 uppercase tracking-wider">CAPACIDAD</div>
              </div>
            </div>

            <p className="text-gray-300 text-lg leading-relaxed max-w-lg">
              Especializado en desarrollo frontend con React y tecnologías modernas.
              <br />
              También manejo backend para proyectos fullstack completos.
            </p>

            <button className="shimmer bg-gradient-to-r from-red-600 to-yellow-400 hover:from-red-500 hover:to-yellow-300 text-white font-semibold py-4 px-8 rounded-full uppercase tracking-wider transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-red-500/25">
              Comenzar
            </button>
          </div>

          <div className="flex justify-center items-center">
            <div className="relative w-80 h-80">
              <div className="animate-float w-full h-full rounded-full bg-gradient-to-br from-red-600 to-yellow-400 relative overflow-hidden shadow-2xl shadow-red-500/30">
                <div className="absolute inset-0">
                  {/* Elementos flotantes dentro del círculo */}
                  <div className="absolute w-6 h-6 bg-gradient-to-r from-red-400 to-yellow-300 rounded-full top-[15%] left-[25%] animate-element-float opacity-80" style={{animationDelay: '0s'}}></div>
                  <div className="absolute w-5 h-5 bg-gradient-to-r from-yellow-400 to-red-400 rounded-full top-[35%] right-[20%] animate-element-float opacity-70" style={{animationDelay: '1s'}}></div>
                  <div className="absolute w-7 h-7 bg-gradient-to-r from-red-500 to-yellow-400 rounded-full bottom-[25%] left-[15%] animate-element-float opacity-90" style={{animationDelay: '2s'}}></div>
                  <div className="absolute w-5 h-5 bg-gradient-to-r from-yellow-300 to-red-500 rounded-full top-[55%] left-[40%] animate-element-float opacity-75" style={{animationDelay: '0.5s'}}></div>
                  <div className="absolute w-6 h-6 bg-gradient-to-r from-red-600 to-yellow-300 rounded-full bottom-[35%] right-[25%] animate-element-float opacity-85" style={{animationDelay: '1.5s'}}></div>
                  <div className="absolute w-4 h-4 bg-gradient-to-r from-yellow-400 to-red-400 rounded-full top-[25%] right-[35%] animate-element-float opacity-80" style={{animationDelay: '2.5s'}}></div>
                  <div className="absolute w-6 h-6 bg-gradient-to-r from-red-500 to-yellow-400 rounded-full bottom-[15%] left-[45%] animate-element-float opacity-75" style={{animationDelay: '3s'}}></div>
                  <div className="absolute w-4 h-4 bg-gradient-to-r from-yellow-300 to-red-500 rounded-full top-[70%] right-[40%] animate-element-float opacity-90" style={{animationDelay: '3.5s'}}></div>
                </div>
                
                {/* Resplandor exterior */}
                <div className="absolute -inset-8 bg-gradient-to-r from-red-600/20 to-yellow-400/20 rounded-full animate-pulse-glow blur-xl"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <span className="bg-gray-800/50 backdrop-blur-sm text-gray-300 px-4 py-2 rounded-full text-sm border border-gray-700 hover:-translate-y-1 transition-transform duration-300">React</span>
          <span className="bg-gradient-to-r from-red-600 to-yellow-400 text-white px-4 py-2 rounded-full text-sm font-medium hover:-translate-y-1 transition-transform duration-300">Frontend</span>
          <span className="bg-gray-800/50 backdrop-blur-sm text-gray-300 px-4 py-2 rounded-full text-sm border border-gray-700 hover:-translate-y-1 transition-transform duration-300">TypeScript</span>
          <span className="bg-gray-800/50 backdrop-blur-sm text-gray-300 px-4 py-2 rounded-full text-sm border border-gray-700 hover:-translate-y-1 transition-transform duration-300">Node.js</span>
          <span className="bg-gray-800/50 backdrop-blur-sm text-gray-300 px-4 py-2 rounded-full text-sm border border-gray-700 hover:-translate-y-1 transition-transform duration-300">JavaScript</span>
          <span className="bg-gray-800/50 backdrop-blur-sm text-gray-300 px-4 py-2 rounded-full text-sm border border-gray-700 hover:-translate-y-1 transition-transform duration-300">Responsive</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;

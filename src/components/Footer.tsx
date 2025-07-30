const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-800 py-12 px-4 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold bg-gradient-to-r from-red-600 to-yellow-400 bg-clip-text text-transparent">
              Portfolio
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Desarrollador de software especializado en crear 
              experiencias web modernas y funcionales.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold text-white">Navegación</h4>
            <ul className="space-y-2">
              <li><a href="#inicio" className="text-gray-400 hover:text-red-400 transition-colors">Inicio</a></li>
              <li><a href="#sobre-mi" className="text-gray-400 hover:text-red-400 transition-colors">Sobre Mí</a></li>
              <li><a href="#especialidad" className="text-gray-400 hover:text-red-400 transition-colors">Especialidad</a></li>
              <li><a href="#contacto" className="text-gray-400 hover:text-red-400 transition-colors">Contacto</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold text-white">Servicios</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Desarrollo Frontend</li>
              <li>Aplicaciones Web</li>
              <li>Optimización Web</li>
              <li>Consultoría</li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold text-white">Contacto</h4>
            <ul className="space-y-2 text-gray-400">
              <li>alan.jhosel@ejemplo.com</li>
              <li>+52 123 456 7890</li>
              <li>Ciudad de México</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-500 text-sm">
            &copy; 2025 Alan Jhosel. Todos los derechos reservados.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-red-400 transition-colors" aria-label="GitHub">
              GitHub
            </a>
            <a href="#" className="text-gray-400 hover:text-red-400 transition-colors" aria-label="LinkedIn">
              LinkedIn
            </a>
            <a href="#" className="text-gray-400 hover:text-red-400 transition-colors" aria-label="Twitter">
              Twitter
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

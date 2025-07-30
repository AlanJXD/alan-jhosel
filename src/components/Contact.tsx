import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar el formulario
    console.log('Form submitted:', formData);
    alert('¡Mensaje enviado! Te contactaré pronto.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contacto" className="py-24 bg-gray-900 text-white px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <h3 className="text-3xl font-semibold text-white">¡Trabajemos juntos!</h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              ¿Tienes un proyecto en mente? Me encantaría escuchar tus ideas 
              y ayudarte a llevarlas a la realidad.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-red-600 to-yellow-400 rounded-full flex items-center justify-center text-xl">
                  📧
                </div>
                <div>
                  <div className="font-semibold text-white">Email</div>
                  <div className="text-gray-300">alan.jhosel@ejemplo.com</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-red-600 to-yellow-400 rounded-full flex items-center justify-center text-xl">
                  📱
                </div>
                <div>
                  <div className="font-semibold text-white">Teléfono</div>
                  <div className="text-gray-300">+52 123 456 7890</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-red-600 to-yellow-400 rounded-full flex items-center justify-center text-xl">
                  📍
                </div>
                <div>
                  <div className="font-semibold text-white">Ubicación</div>
                  <div className="text-gray-300">Ciudad de México, México</div>
                </div>
              </div>
            </div>
            
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-red-400 py-2 px-4 border border-gray-600 hover:border-red-500 rounded-2xl transition-all duration-300">
                GitHub
              </a>
              <a href="#" className="text-gray-300 hover:text-red-400 py-2 px-4 border border-gray-600 hover:border-red-500 rounded-2xl transition-all duration-300">
                LinkedIn
              </a>
              <a href="#" className="text-gray-300 hover:text-red-400 py-2 px-4 border border-gray-600 hover:border-red-500 rounded-2xl transition-all duration-300">
                Twitter
              </a>
            </div>
          </div>
          
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <label htmlFor="name" className="block font-semibold text-white">Nombre</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                placeholder="Tu nombre"
                className="w-full p-4 border-2 border-gray-700 rounded-xl bg-gray-800 text-white focus:outline-none focus:border-red-500 transition-colors duration-300"
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="email" className="block font-semibold text-white">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                placeholder="tu@email.com"
                className="w-full p-4 border-2 border-gray-700 rounded-xl bg-gray-800 text-white focus:outline-none focus:border-red-500 transition-colors duration-300"
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="message" className="block font-semibold text-white">Mensaje</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                placeholder="Cuéntame sobre tu proyecto..."
                rows={5}
                className="w-full p-4 border-2 border-gray-700 rounded-xl bg-gray-800 text-white focus:outline-none focus:border-red-500 transition-colors duration-300 resize-none"
              ></textarea>
            </div>
            
            <button type="submit" className="shimmer w-full bg-gradient-to-r from-red-600 to-yellow-400 hover:from-red-500 hover:to-yellow-300 text-white font-semibold py-4 px-8 rounded-full uppercase tracking-wider transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-red-500/25">
              Enviar Mensaje →
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

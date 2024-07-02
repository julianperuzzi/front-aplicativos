import React from 'react';
import favicon from '../assets/favicon.png';

const Footer = ({ darkMode }) => {
  return (
    <footer className={` ${darkMode ? 'bg-gray-800' : 'bg-gray-200'} `}>

      <div className={`max-w-7xl mx-auto flex items-center justify-between ${darkMode ? 'text-gray-200' : 'text-gray-800'} `} >
        <div className="flex items-center space-x-4">
          <img className="h-8 w-8" src={favicon} alt="Favicon" />
          <div>
            <p className="text-sm font-medium py-2">Julian Peruzzi | DNI 39955389</p>
            <p className="text-xs mb-4">Página de login para la cursada de la materia Desarrollo de Aplicativos</p>
            <p className="text-xs mb-4">Universidad Católica de Cuyo</p>
          </div>
        </div>
        <div>
          {/* Aquí podrías añadir enlaces a redes sociales si los tienes */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from 'react';
import favicon from '../assets/Universidad_Catolica_de_Cuyo_LOGO_PORTADA11.png';

const Footer = ({ darkMode }) => {
  return (
    <footer className={` ${darkMode ? 'bg-gray-800' : 'bg-gray-200'} `}>

      <div className={`max-w-7xl mx-auto flex items-center justify-between ${darkMode ? 'text-gray-200' : 'text-gray-800'} `} >
        <div className="flex items-center  space-x-4">
          <img className="h-16 w-16 mr-4" src={favicon} alt="Favicon" />
          <div>
            <p className="text-sm font-medium py-2">Julian Peruzzi | DNI 39955389</p>
            <p className="text-sm mb-2">Página de Login - materia Desarrollo de Aplicativos 2024</p>
            <p className="text-sm mb-3">Universidad Católica de Cuyo - San Juan Argentina </p>
          </div>
          <div className='px-24 hidden md:block'>
            <p className="text-sm font-medium ">Contacto</p>
            <p className="text-sm py-2">Email: julian.peruzzi@uc.cuyo.ar</p>
            <p className="text-sm ">Teléfono: 0291 154 7632</p>
          </div>
          <div className='px-24 hidden md:block'>
            <p className="text-sm font-medium">Redes Sociales</p>
            <p href="" target="_blank" rel="noopener noreferrer" className="text-sm py-2">LinkedIn</p>
            <p href="" target="_blank" rel="noopener noreferrer" className="text-sm ">Instagram</p>
          </div>
        </div>
        <div>
         
        </div>
      </div>
    </footer>
  );
};

export default Footer;

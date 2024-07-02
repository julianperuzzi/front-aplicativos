import React from 'react';
import favicon from '../assets/favicon.png';

const Navbar = ({ darkMode, toggleDarkMode }) => {
  return (
    <nav className={` ${darkMode ? 'bg-gray-800' : 'bg-gray-200'}`}>
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className={`flex items-center justify-between h-16 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
          <div className="flex items-center">
            <img className="h-8 w-8" src={favicon} alt="Favicon" />
            <h1 className="ml-2 font-bold">Desarrollo de Aplicativos</h1>
          </div>
          <div className="hidden sm:block">
            <div className="flex space-x-4">
              <a href="#" className={`hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium ${darkMode ? 'text-white' : 'text-gray-800'}`}>Tablero</a>
              <a href="#" className={`hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium ${darkMode ? 'text-white' : 'text-gray-800'}`}>Equipos</a>
              <a href="#" className={`hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium ${darkMode ? 'text-white' : 'text-gray-800'}`}>Proyectos</a>
              <a href="#" className={`hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium ${darkMode ? 'text-white' : 'text-gray-800'}`}>Calendario</a>
            </div>
          </div>
          <div className="flex items-center">
            <button
              onClick={toggleDarkMode}
              className={`hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium ${darkMode ? 'bg-gray-700 text-white' : 'bg-gray-600 text-gray-300'}`}
            >
              {darkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

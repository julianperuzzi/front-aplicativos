import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Login from './components/Login';
import backgroundImage from './assets/background.jpg'; // Asegúrate de tener la imagen de fondo
import Footer from './components/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div >
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <div
        className="h-[80svh] flex items-center justify-center"
        style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover' }}
      >
        <Login darkMode={darkMode} />
      </div>
      <Footer darkMode={darkMode}/>
    </div>
  );
}

export default App;

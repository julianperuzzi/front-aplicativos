import React, { useState } from 'react';

const Login = ({ darkMode }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');
    setSuccess(false);

    try {
      const response = await fetch('http://localhost:4000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const result = await response.json();

      if (!response.ok) {
        setError(result.message);
      } else {
        setSuccess(true);
        setError('');
      }
    } catch (error) {
      setError('Error de red. Por favor, inténtalo de nuevo más tarde.');
    }
  };

  return (
    <div className={`p-8 rounded-xl shadow-xl w-full max-w-md border-2 border-gray-600 hover:scale-105 transition duration-700 ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
      <h2 className={`text-2xl font-bold mb-6 text-center ${darkMode ? 'text-gray-300' : 'text-gray-800'}`}>Login de Usuario</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="username" className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            Username
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className={`mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${darkMode ? 'bg-gray-700 text-white' : ''}`}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={`mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${darkMode ? 'bg-gray-700 text-white' : ''}`}
          />
        </div>
        {error && <div className="mb-4 text-red-600 text-sm">{error}</div>}
        {success && <div className="mb-4 text-green-600 text-sm">Ingreso exitoso</div>}
        <button
          type="submit"
          className={`w-full py-2 px-4 my-2 rounded-md shadow-sm text-sm font-medium text-white hover:scale-105 transition duration-100  ${darkMode ? 'bg-indigo-700 hover:bg-gray-600 focus:ring-gray-500 focus:ring-2 focus:ring-offset-2' : 'bg-indigo-600 hover:bg-indigo-700 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'}`}
        >
          Login
        </button>
      </form>
      <div className="mt-4 text-center">
        <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
          Si no tienes usuario, <a href="#" className="text-blue-500 underline">regístrate</a>
        </p>
      </div>
    </div>
  );
};

export default Login;

import React, { useState, useEffect } from 'react';
import Navbar from './Navbar.jsx';
import Body from './Body.jsx';
import './index.css';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode') === 'true';
    return savedMode;
  });

  useEffect(() => {
    document.body.classList.toggle('dark-mode', darkMode);
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  return (
    <div>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Body darkMode={darkMode} />
    </div>
  );
}

export default App;

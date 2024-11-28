import "./index.css";
import logoNavGreen from './images/logoGreen.svg';
import React, { useState, useEffect } from "react";
import Body from "./Body.jsx";


function Navbar() {
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem("darkMode");
    return savedMode === "true";
  });
  useEffect(() => {
      document.body.classList.toggle("dark-mode", darkMode);
      localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);
    return (
      <div className="NavbarWeb">
        <img src={logoNavGreen} alt="logo navbar" />
        <ul className="NavbarText">
            <li><a href="#section1">Sobre mi</a></li>
            <li><a href="#section3">Skills</a></li>
            <li><a href="#section4">Experiencia</a></li>
            <li><a href="#section5">Proyectos</a></li>
            <li><a href="#section6">Contacto</a></li>
            <li>
              <label className="switch">
                <input 
                checked={darkMode}
                onChange={() => setDarkMode(!darkMode)} 
                type="checkbox" />
                <span className="slider"></span>
              </label>
            </li>
        </ul>
      </div>
    )
  }
  
  export default Navbar
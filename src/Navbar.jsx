import "./index.css";
import logoNavGreen from './images/logoGreen.svg';
import logoNavWhite from './images/logoWhite.svg';

function Navbar({ darkMode, setDarkMode }) {
    return (
      <div className="NavbarWeb">
        <img src={darkMode ? logoNavWhite : logoNavGreen} alt="logo navbar" />
        <ul className="NavbarText">
            <li><a href="#section1">Sobre mi</a></li>
            <li><a href="#section3">Skills</a></li>
            <li><a href="#section4">Experiencia</a></li>
            <li><a href="#section5">Proyectos</a></li>
            <li><a href="#section1">Contacto</a></li>
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
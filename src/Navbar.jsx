import "./index.css";
import logoNavGreen from './images/logoGreen.svg';

function Navbar() {
    return (
      <div className="NavbarWeb">
        <img src={logoNavGreen} alt="logo navbar" />
        <ul className="NavbarText">
            <li><a href="">Sobre mi</a></li>
            <li><a href="">Experiencia</a></li>
            <li><a href="">Proyectos</a></li>
            <li><a href="">Skills</a></li>
            <li><a href="">Contacto</a></li>
            <li>
            <label class="switch">
              <input type="checkbox" />
              <span class="slider"></span>
            </label>
            </li>
        </ul>
      </div>
    )
  }
  
  export default Navbar
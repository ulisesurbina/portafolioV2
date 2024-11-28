import Tiktok from './Tiktok.jsx'
import ElementEffect from './ElementEffect.jsx'
import Openfinance from './Openfinance.jsx'
// import App from './App.jsx'
import './index.css'
import darkMode from './Navbar.jsx'

import imgPerfil from "./images/imgPerfilBG.webp"
import imgPerfilCircle from "./images/imgCirclePerfil.webp"
import phone from "./images/phone.svg"
import phone_gray from "./images/phone_gray.svg"
import email from "./images/email.svg"
import email_gray from "./images/email_gray.svg"
import age_gray from "./images/age_gray.svg"
import location_gray from "./images/location_gray.svg"


function Body() {
    return (
      <div id="section1" className="BodyWeb">
        <section className="ContainerBanner">
          <div className="ContainerBanner__info">
            <h1>Soy Ulises Urbina</h1>
            <p>
              <span className="JobText">D</span>
              <span className="JobText">e</span>
              <span className="JobText">s</span>
              <span className="JobText">a</span>
              <span className="JobText">r</span>
              <span className="JobText">r</span>
              <span className="JobText">o</span>
              <span className="JobText">l</span>
              <span className="JobText">l</span>
              <span className="JobText">a</span>
              <span className="JobText">d</span>
              <span className="JobText">o</span>
              <span className="JobText">r</span>
              <span className="JobText"> </span>
              <span className="JobText">W</span>
              <span className="JobText">e</span>
              <span className="JobText">b</span>
              <span className="JobText"> </span>
              <span className="JobText">F</span>
              <span className="JobText">r</span>
              <span className="JobText">o</span>
              <span className="JobText">n</span>
              <span className="JobText">t</span>
              <span className="JobText">e</span>
              <span className="JobText">n</span>
              <span className="JobText">d</span>
            </p>
            <h2>Descubre cómo mi trabajo puede llevar tu empresa o proyecto al siguiente nivel</h2>
            <div className="ContainerBanner__info__data">
              <span><img src={phone_gray} alt="phone" /><a href="https://api.whatsapp.com/send?phone=5554369655&amp;text=Hola.%20Quisiera%20saber%20m%C3%A1s%20sobre%20ti..." target="_blank">(+52) 55 5436 9655</a></span>
              <span><img src={email_gray} alt="email" /><a href="mailto:ulisesurbinam@gmail.com">ulisesurbinam@gmail.com</a></span>
            </div>
            <button><a href="#section5">Conoce más sobre mi trabajo</a></button>
          </div>
          <img className="ContainerBanner__img" src={imgPerfil} alt="img user" />
        </section>

        <section className="InfoDetalleUser">
            <div className="InfoDetalleUser__section">
                <div className="InfoDetalleUser__section__imgInfo">
                    <img src={imgPerfilCircle} alt="imgPerfil2" />
                    <div className="InfoDetalleUser__section__imgInfo__data">
                        <h2>Radico en EDOMEX, México</h2>
                        <h3>Desarrollador Web Frontend</h3>
                        <button className="Download_CV"><a href="./Curriculum_Ulises.pdf" download="Curriculum_Ulises.pdf">Descarga mi CV</a></button>
                    </div>
                </div>
                <div className="InfoDetalleUser__section__skills">
                    <div className="InfoDetalleUser__section__skills__grid">
                      <span>
                        <img src={phone_gray} alt="phone" />
                        <a href="https://api.whatsapp.com/send?phone=5554369655&amp;text=Hola.%20Quisiera%20saber%20m%C3%A1s%20sobre%20ti..." target="_blank">(+52) 55 5436 9655</a>
                      </span>
                      <span>
                        <img src={email_gray} alt="email" />
                        <a href="mailto:ulisesurbinam@gmail.com">ulisesurbinam@gmail.com</a>
                      </span>
                      <span>
                        <img src={age_gray} alt="age" />
                        <p>30 años</p>
                      </span>
                      <span>
                        <img src={location_gray} alt="location" />
                        <p>La Paz, EDOMEX</p>
                      </span>
                    </div>
                    <div className="InfoDetalleUser__section__skills__experience">
                        <h2 className="flipX">+2</h2>
                        <p>Tengo experiencia de 2 años y medio en desarrollo web Frontend, encargado del desarrollo, mantenimiento y actualización de páginas web colaborando con equipos de trabajo.</p>
                    </div>
                    <div className="InfoDetalleUser__section__skills__test">
                        <h3>Testimonio</h3>
                    </div>
                </div>
            </div>
        </section>

        <section id="section3" className="SectionSkills">
          <h2>Skills</h2>
          <div className="ContainerSwiper">
            <div className="ItemSlide">
                <div className="Flip-card-inner">
                    <div className="Flip-card-front">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 128 128"><path fill="#1572B6" d="M18.814 114.123L8.76 1.352h110.48l-10.064 112.754l-45.243 12.543z"/><path fill="#33A9DC" d="m64.001 117.062l36.559-10.136l8.601-96.354h-45.16z"/><path fill="#fff" d="M64.001 51.429h18.302l1.264-14.163H64.001V23.435h34.682l-.332 3.711l-3.4 38.114h-30.95z"/><path fill="#EBEBEB" d="m64.083 87.349l-.061.018l-15.403-4.159l-.985-11.031H33.752l1.937 21.717l28.331 7.863l.063-.018z"/><path fill="#fff" d="m81.127 64.675l-1.666 18.522l-15.426 4.164v14.39l28.354-7.858l.208-2.337l2.406-26.881z"/><path fill="#EBEBEB" d="M64.048 23.435v13.831H30.64l-.277-3.108l-.63-7.012l-.331-3.711zm-.047 27.996v13.831H48.792l-.277-3.108l-.631-7.012l-.33-3.711z"/></svg>
                    </div>
                    <div className="Flip-card-back">
                        <p className="title">CSS</p>
                    </div>
                </div>
            </div>
            <div className="ItemSlide">
                <div className="Flip-card-inner">
                    <div className="Flip-card-front">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256"><g fill="none"><rect width="256" height="256" fill="#E14E1D" rx="60"/><path fill="#fff" d="m48 38l8.61 96.593h110.71l-3.715 41.43l-35.646 9.638l-35.579-9.624l-2.379-26.602H57.94l4.585 51.281l65.427 18.172l65.51-18.172l8.783-98.061H85.824l-2.923-32.71h122.238L208 38z"/><path fill="#EBEBEB" d="M128 38H48l8.61 96.593H128v-31.938H85.824l-2.923-32.71H128zm0 147.647l-.041.014l-35.579-9.624l-2.379-26.602H57.94l4.585 51.281l65.427 18.172l.049-.014z"/></g></svg>
                    </div>
                    <div className="Flip-card-back">
                        <p className="title">HTML</p>
                    </div>
                </div>
            </div>
            <div className="ItemSlide">
                <div className="Flip-card-inner">
                    <div className="Flip-card-front">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 128 128"><path fill="#F0DB4F" d="M1.408 1.408h125.184v125.185H1.408z"/><path fill="#323330" d="M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981c-3.832-1.761-8.104-3.022-9.377-5.926c-.452-1.69-.512-2.642-.226-3.665c.821-3.32 4.784-4.355 7.925-3.403c2.023.678 3.938 2.237 5.093 4.724c5.402-3.498 5.391-3.475 9.163-5.879c-1.381-2.141-2.118-3.129-3.022-4.045c-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235c-5.926 6.724-4.236 18.492 2.975 23.335c7.104 5.332 17.54 6.545 18.873 11.531c1.297 6.104-4.486 8.08-10.234 7.378c-4.236-.881-6.592-3.034-9.139-6.949c-4.688 2.713-4.688 2.713-9.508 5.485c1.143 2.499 2.344 3.63 4.26 5.795c9.068 9.198 31.76 8.746 35.83-5.176c.165-.478 1.261-3.666.38-8.581M69.462 58.943H57.753l-.048 30.272c0 6.438.333 12.34-.714 14.149c-1.713 3.558-6.152 3.117-8.175 2.427c-2.059-1.012-3.106-2.451-4.319-4.485c-.333-.584-.583-1.036-.667-1.071l-9.52 5.83c1.583 3.249 3.915 6.069 6.902 7.901c4.462 2.678 10.459 3.499 16.731 2.059c4.082-1.189 7.604-3.652 9.448-7.401c2.666-4.915 2.094-10.864 2.07-17.444c.06-10.735.001-21.468.001-32.237"/></svg>
                    </div>
                    <div className="Flip-card-back">
                        <p className="title">JAVASCRIPT</p>
                    </div>
                </div>
            </div>
            <div className="ItemSlide">
                <div className="Flip-card-inner">
                    <div className="Flip-card-front">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 128 128"><path fill="#F34F29" d="M124.737 58.378L69.621 3.264c-3.172-3.174-8.32-3.174-11.497 0L46.68 14.71l14.518 14.518c3.375-1.139 7.243-.375 9.932 2.314c2.703 2.706 3.461 6.607 2.294 9.993l13.992 13.993c3.385-1.167 7.292-.413 9.994 2.295c3.78 3.777 3.78 9.9 0 13.679a9.673 9.673 0 0 1-13.683 0a9.68 9.68 0 0 1-2.105-10.521L68.574 47.933l-.002 34.341a9.7 9.7 0 0 1 2.559 1.828c3.778 3.777 3.778 9.898 0 13.683c-3.779 3.777-9.904 3.777-13.679 0c-3.778-3.784-3.778-9.905 0-13.683a9.7 9.7 0 0 1 3.167-2.11V47.333a9.6 9.6 0 0 1-3.167-2.111c-2.862-2.86-3.551-7.06-2.083-10.576L41.056 20.333L3.264 58.123a8.133 8.133 0 0 0 0 11.5l55.117 55.114c3.174 3.174 8.32 3.174 11.499 0l54.858-54.858a8.135 8.135 0 0 0-.001-11.501"/></svg>
                    </div>
                    <div className="Flip-card-back">
                        <p className="title">GIT</p>
                    </div>
                </div>
            </div>
            <div className="ItemSlide">
                <div className="Flip-card-inner">
                    <div className="Flip-card-front">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 .297c-6.63 0-12 5.373-12 12c0 5.303 3.438 9.8 8.205 11.385c.6.113.82-.258.82-.577c0-.285-.01-1.04-.015-2.04c-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729c1.205.084 1.838 1.236 1.838 1.236c1.07 1.835 2.809 1.305 3.495.998c.108-.776.417-1.305.76-1.605c-2.665-.3-5.466-1.332-5.466-5.93c0-1.31.465-2.38 1.235-3.22c-.135-.303-.54-1.523.105-3.176c0 0 1.005-.322 3.3 1.23c.96-.267 1.98-.399 3-.405c1.02.006 2.04.138 3 .405c2.28-1.552 3.285-1.23 3.285-1.23c.645 1.653.24 2.873.12 3.176c.765.84 1.23 1.91 1.23 3.22c0 4.61-2.805 5.625-5.475 5.92c.42.36.81 1.096.81 2.22c0 1.606-.015 2.896-.015 3.286c0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
                    </div>
                    <div className="Flip-card-back">
                        <p className="title">GITHUB</p>
                    </div>
                </div>
            </div>
            <div className="ItemSlide">
                <div className="Flip-card-inner">
                    <div className="Flip-card-front">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 128 128"><path fill="#014847" d="M80.46 82.605h-8.777l-.734-.733V61.326c0-3.656-1.436-6.489-5.844-6.588c-2.269-.06-4.864 0-7.638.11l-.416.425v26.589l-.733.733H47.54l-.733-.733V46.764l.733-.733h19.753c7.677 0 13.899 6.22 13.899 13.898v21.943z"/><path fill="#05bdba" d="M58.942 119.902v-26.33l.733-.734h8.797l.733.733v26.331l-.733.733h-8.796zm0-84.838V8.734L59.675 8h8.797l.733.733v26.331l-.733.733h-8.796zm68.335 34.385H92.169l-.733-.733V59.92l.733-.733h35.108l.733.733v8.797zm-91.436 0H.733L0 68.716V59.92l.733-.733h35.108l.733.733v8.797zm-8.49-35.633v-1.209l6.034-6.033h1.208l9.223 9.223v6.39l-.852.852h-6.39zm7.242 68.235h-1.208l-6.033-6.033v-1.209l9.223-9.222h6.39l.851.851v6.39z"/></svg>
                    </div>
                    <div className="Flip-card-back">
                        <p className="title">NETLIFY</p>
                    </div>
                </div>
            </div>
            <div className="ItemSlide">
                <div className="Flip-card-inner">
                    <div className="Flip-card-front">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 128 128"><path fill="#0acf83" d="M45.5 129c11.9 0 21.5-9.6 21.5-21.5V86H45.5C33.6 86 24 95.6 24 107.5S33.6 129 45.5 129m0 0"/><path fill="#a259ff" d="M24 64.5C24 52.6 33.6 43 45.5 43H67v43H45.5C33.6 86 24 76.4 24 64.5m0 0"/><path fill="#f24e1e" d="M24 21.5C24 9.6 33.6 0 45.5 0H67v43H45.5C33.6 43 24 33.4 24 21.5m0 0"/><path fill="#ff7262" d="M67 0h21.5C100.4 0 110 9.6 110 21.5S100.4 43 88.5 43H67zm0 0"/><path fill="#1abcfe" d="M110 64.5c0 11.9-9.6 21.5-21.5 21.5S67 76.4 67 64.5S76.6 43 88.5 43S110 52.6 110 64.5m0 0"/></svg>
                    </div>
                    <div className="Flip-card-back">
                        <p className="title">FIGMA</p>
                    </div>
                </div>
            </div>
            <div className="ItemSlide">
                <div className="Flip-card-inner">
                    <div className="Flip-card-front">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 128 128"><defs><linearGradient id="IconifyId1936f55ee0319567a10" x1="9" x2="9" y1="16.97" y2="1.03" gradientTransform="scale(7.11111)" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#0078d4"/><stop offset=".16" stopColor="#1380da"/><stop offset=".53" stopColor="#3c91e5"/><stop offset=".82" stopColor="#559cec"/><stop offset="1" stopColor="#5ea0ef"/></linearGradient></defs><path fill="url(#IconifyId1936f55ee0319567a10)" d="M120.89 28.445v69.262l-28.445 23.324l-44.09-16.07v15.93L23.395 88.25l72.746 5.688V31.574ZM96.64 31.93L55.82 7.11v16.285L18.348 34.418L7.109 48.852v32.785l16.075 7.11V46.718Zm0 0"/></svg>
                    </div>
                    <div className="Flip-card-back">
                        <p className="title">AZURE <br /> DEVOPS</p>
                    </div>
                </div>
            </div>
            <div className="ItemSlide">
                <div className="Flip-card-inner">
                    <div className="Flip-card-front">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16"><g fill="none" stroke="#91d7e3" strokeLinecap="round" strokeLinejoin="round"><path d="M8 10.8c4.14 0 7.5-1.25 7.5-2.8S12.14 5.2 8 5.2S.5 6.45.5 8s3.36 2.8 7.5 2.8"/><path d="M5.52 9.4c2.07 3.5 4.86 5.72 6.23 4.95c1.37-.78.8-4.24-1.27-7.75C8.41 3.1 5.62.88 4.25 1.65c-1.37.78-.8 4.24 1.27 7.75"/><path d="M5.52 6.6c-2.07 3.5-2.64 6.97-1.27 7.75c1.37.77 4.16-1.45 6.23-4.95s2.64-6.97 1.27-7.75C10.38.88 7.59 3.1 5.52 6.6"/><path d="M8.5 8a.5.5 0 0 1-.5.5a.5.5 0 0 1-.5-.5a.5.5 0 0 1 .5-.5a.5.5 0 0 1 .5.5"/></g></svg>
                    </div>
                    <div className="Flip-card-back">
                        <p className="title">REACT JS</p>
                    </div>
                </div>
            </div>
            <div className="ItemSlide">
                <div className="Flip-card-inner">
                    <div className="Flip-card-front">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1.16em" height="1em" viewBox="0 0 256 221"><path fill="#41B883" d="M204.8 0H256L128 220.8L0 0h97.92L128 51.2L157.44 0z"/><path fill="#41B883" d="m0 0l128 220.8L256 0h-51.2L128 132.48L50.56 0z"/><path fill="#35495E" d="M50.56 0L128 133.12L204.8 0h-47.36L128 51.2L97.92 0z"/></svg>
                    </div>
                    <div className="Flip-card-back">
                        <p className="title">VUE</p>
                    </div>
                </div>
            </div>
            <div className="ItemSlide">
                <div className="Flip-card-inner">
                    <div className="Flip-card-front">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 128 128"><defs><linearGradient id="IconifyId1936f55ee0319567a0" x1="76.079" x2="523.48" y1="10.798" y2="365.95" gradientTransform="translate(1.11 14.613)scale(.24566)" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#9013fe"/><stop offset="1" stopColor="#6610f2"/></linearGradient><linearGradient id="IconifyId1936f55ee0319567a1" x1="193.51" x2="293.51" y1="109.74" y2="278.87" gradientTransform="translate(0 52)" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#fff"/><stop offset="1" stopColor="#f1e5fc"/></linearGradient><filter id="IconifyId1936f55ee0319567a2" width="197" height="249" x="161.9" y="135.46" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse"><feFlood floodOpacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="4"/><feGaussianBlur stdDeviation="8"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/><feBlend in2="BackgroundImageFix" result="effect1_dropShadow"/><feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape"/></filter></defs><path fill="url(#IconifyId1936f55ee0319567a0)" d="M14.985 27.712c-.237-6.815 5.072-13.099 12.249-13.099h73.54c7.177 0 12.486 6.284 12.249 13.099c-.228 6.546.068 15.026 2.202 21.94c2.141 6.936 5.751 11.319 11.664 11.883v6.387c-5.913.564-9.523 4.947-11.664 11.883c-2.134 6.914-2.43 15.394-2.202 21.94c.237 6.815-5.072 13.098-12.249 13.098h-73.54c-7.177 0-12.486-6.284-12.249-13.098c.228-6.546-.068-15.026-2.203-21.94c-2.14-6.935-5.76-11.319-11.673-11.883v-6.387c5.913-.563 9.533-4.947 11.673-11.883c2.135-6.914 2.43-15.394 2.203-21.94"/><path fill="url(#IconifyId1936f55ee0319567a1)" d="M267.1 364.46c47.297 0 75.798-23.158 75.798-61.355c0-28.873-20.336-49.776-50.532-53.085v-1.203c22.185-3.609 39.594-24.211 39.594-47.219c0-32.783-25.882-54.138-65.322-54.138h-88.74v217zm-54.692-189.48h45.911c24.958 0 39.131 11.128 39.131 31.279c0 21.505-16.484 33.535-46.372 33.535h-38.67zm0 161.96v-71.431h45.602c32.661 0 49.608 12.03 49.608 35.49c0 23.459-16.484 35.941-47.605 35.941z" filter="url(#IconifyId1936f55ee0319567a2)" transform="translate(1.494 2.203)scale(.24566)"/></svg>
                    </div>
                    <div className="Flip-card-back">
                        <p className="title">BOOTSTRAP</p>
                    </div>
                </div>
            </div>
            <div className="ItemSlide">
                <div className="Flip-card-inner">
                    <div className="Flip-card-front">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1.25em" height="1em" viewBox="0 0 640 512"><path fill="currentColor" d="M316.3 452c-2.1 0-4.2-.6-6.1-1.6L291 439c-2.9-1.6-1.5-2.2-.5-2.5c3.8-1.3 4.6-1.6 8.7-4c.4-.2 1-.1 1.4.1l14.8 8.8c.5.3 1.3.3 1.8 0L375 408c.5-.3.9-.9.9-1.6v-66.7c0-.7-.3-1.3-.9-1.6l-57.8-33.3c-.5-.3-1.2-.3-1.8 0l-57.8 33.3c-.6.3-.9 1-.9 1.6v66.7c0 .6.4 1.2.9 1.5l15.8 9.1c8.6 4.3 13.9-.8 13.9-5.8v-65.9c0-.9.7-1.7 1.7-1.7h7.3c.9 0 1.7.7 1.7 1.7v65.9c0 11.5-6.2 18-17.1 18c-3.3 0-6 0-13.3-3.6l-15.2-8.7c-3.7-2.2-6.1-6.2-6.1-10.5v-66.7c0-4.3 2.3-8.4 6.1-10.5l57.8-33.4c3.7-2.1 8.5-2.1 12.1 0l57.8 33.4c3.7 2.2 6.1 6.2 6.1 10.5v66.7c0 4.3-2.3 8.4-6.1 10.5l-57.8 33.4c-1.7 1.1-3.8 1.7-6 1.7m46.7-65.8c0-12.5-8.4-15.8-26.2-18.2c-18-2.4-19.8-3.6-19.8-7.8c0-3.5 1.5-8.1 14.8-8.1c11.9 0 16.3 2.6 18.1 10.6c.2.8.8 1.3 1.6 1.3h7.5c.5 0 .9-.2 1.2-.5c.3-.4.5-.8.4-1.3c-1.2-13.8-10.3-20.2-28.8-20.2c-16.5 0-26.3 7-26.3 18.6c0 12.7 9.8 16.1 25.6 17.7c18.9 1.9 20.4 4.6 20.4 8.3c0 6.5-5.2 9.2-17.4 9.2c-15.3 0-18.7-3.8-19.8-11.4c-.1-.8-.8-1.4-1.7-1.4h-7.5c-.9 0-1.7.7-1.7 1.7c0 9.7 5.3 21.3 30.6 21.3c18.5 0 29-7.2 29-19.8m54.5-50.1c0 6.1-5 11.1-11.1 11.1s-11.1-5-11.1-11.1c0-6.3 5.2-11.1 11.1-11.1c6-.1 11.1 4.8 11.1 11.1m-1.8 0c0-5.2-4.2-9.3-9.4-9.3c-5.1 0-9.3 4.1-9.3 9.3s4.2 9.4 9.3 9.4c5.2-.1 9.4-4.3 9.4-9.4m-4.5 6.2h-2.6c-.1-.6-.5-3.8-.5-3.9c-.2-.7-.4-1.1-1.3-1.1h-2.2v5h-2.4v-12.5h4.3c1.5 0 4.4 0 4.4 3.3c0 2.3-1.5 2.8-2.4 3.1c1.7.1 1.8 1.2 2.1 2.8c.1 1 .3 2.7.6 3.3m-2.8-8.8c0-1.7-1.2-1.7-1.8-1.7h-2v3.5h1.9c1.6 0 1.9-1.1 1.9-1.8M137.3 191c0-2.7-1.4-5.1-3.7-6.4l-61.3-35.3c-1-.6-2.2-.9-3.4-1h-.6c-1.2 0-2.3.4-3.4 1L3.7 184.6C1.4 185.9 0 188.4 0 191l.1 95c0 1.3.7 2.5 1.8 3.2s2.5.7 3.7 0L42 268.3c2.3-1.4 3.7-3.8 3.7-6.4v-44.4c0-2.6 1.4-5.1 3.7-6.4l15.5-8.9c1.2-.7 2.4-1 3.7-1s2.6.3 3.7 1l15.5 8.9c2.3 1.3 3.7 3.8 3.7 6.4v44.4c0 2.6 1.4 5.1 3.7 6.4l36.4 20.9c1.1.7 2.6.7 3.7 0c1.1-.6 1.8-1.9 1.8-3.2zM472.5 87.3v176.4c0 2.6-1.4 5.1-3.7 6.4l-61.3 35.4c-2.3 1.3-5.1 1.3-7.4 0l-61.3-35.4c-2.3-1.3-3.7-3.8-3.7-6.4v-70.8c0-2.6 1.4-5.1 3.7-6.4l61.3-35.4c2.3-1.3 5.1-1.3 7.4 0l15.3 8.8c1.7 1 3.9-.3 3.9-2.2v-94c0-2.8 3-4.6 5.5-3.2l36.5 20.4c2.3 1.2 3.8 3.7 3.8 6.4m-46 128.9c0-.7-.4-1.3-.9-1.6l-21-12.2c-.6-.3-1.3-.3-1.9 0l-21 12.2c-.6.3-.9.9-.9 1.6v24.3c0 .7.4 1.3.9 1.6l21 12.1c.6.3 1.3.3 1.8 0l21-12.1c.6-.3.9-.9.9-1.6v-24.3zm209.8-.7c2.3-1.3 3.7-3.8 3.7-6.4V192c0-2.6-1.4-5.1-3.7-6.4l-60.9-35.4c-2.3-1.3-5.1-1.3-7.4 0l-61.3 35.4c-2.3 1.3-3.7 3.8-3.7 6.4v70.8c0 2.7 1.4 5.1 3.7 6.4l60.9 34.7c2.2 1.3 5 1.3 7.3 0l36.8-20.5c2.5-1.4 2.5-5 0-6.4L550 241.6c-1.2-.7-1.9-1.9-1.9-3.2v-22.2c0-1.3.7-2.5 1.9-3.2l19.2-11.1c1.1-.7 2.6-.7 3.7 0l19.2 11.1c1.1.7 1.9 1.9 1.9 3.2v17.4c0 2.8 3.1 4.6 5.6 3.2zM559 219c-.4.3-.7.7-.7 1.2v13.6c0 .5.3 1 .7 1.2l11.8 6.8c.4.3 1 .3 1.4 0L584 235c.4-.3.7-.7.7-1.2v-13.6c0-.5-.3-1-.7-1.2l-11.8-6.8c-.4-.3-1-.3-1.4 0zm-254.2 43.5v-70.4c0-2.6-1.6-5.1-3.9-6.4l-61.1-35.2c-2.1-1.2-5-1.4-7.4 0l-61.1 35.2c-2.3 1.3-3.9 3.7-3.9 6.4v70.4c0 2.8 1.9 5.2 4 6.4l61.2 35.2c2.4 1.4 5.2 1.3 7.4 0l61-35.2c1.8-1 3.1-2.7 3.6-4.7c.1-.5.2-1.1.2-1.7m-74.3-124.9l-.8.5h1.1zm76.2 130.2l-.4-.7v.9z"/></svg>
                    </div>
                    <div className="Flip-card-back">
                        <p className="title">NODE</p>
                    </div>
                </div>
            </div>
            <div className="ItemSlide">
                <div className="Flip-card-inner">
                    <div className="Flip-card-front">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 32 32"><path fill="currentColor" d="M24 21V9h-2v14h8v-2zM18 9h-4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h1v2a2 2 0 0 0 2 2h2v-2h-2v-2h1a2 2 0 0 0 2-2V11a2 2 0 0 0-2-2m-4 12V11h4v10zm-6 2H2v-2h6v-4H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h6v2H4v4h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2"/></svg>
                    </div>
                    <div className="Flip-card-back">
                        <p className="title">SQL</p>
                    </div>
                </div>
            </div>
            <div className="ItemSlide">
                <div className="Flip-card-inner">
                    <div className="Flip-card-front">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M20.228 5.464s.605.648 1.45.648c.666 0 1.151-.403 1.151-.955c0-.677-.619-.989-1.368-.989h-.441l-.264-.595l1.17-1.387c.25-.298.462-.485.462-.485s-.188.01-.567.01h-1.905V.713h3.902v.73L22.253 3.25c.883.125 1.747.754 1.747 1.862c0 1.09-.825 2.098-2.25 2.098c-1.359 0-2.112-.855-2.112-.855l.59-.892zm-7.611 1.348l5.154 9.176l2.543-4.535l-4.866-8.662H9.785L7.438 6.97L5.092 2.79H0l7.41 13.197l.028-.048l.03.048l5.149-9.176zM.053 22.208h.753c0 .22.192.431.533.431c.317 0 .528-.158.528-.37c0-.181-.14-.263-.38-.316l-.431-.11c-.73-.192-.917-.58-.917-.994c0-.504.5-.964 1.205-.964c.576 0 1.228.293 1.219 1.012H1.8c0-.22-.202-.36-.432-.36c-.25 0-.423.144-.423.346c0 .168.159.264.346.307l.518.14c.73.186.86.642.86.94c0 .657-.658 1.017-1.316 1.017c-.638 0-1.286-.388-1.3-1.08zm3.282-.624c0-1.027.826-1.7 1.762-1.7c.561 0 1.017.25 1.315.625l-.567.45a.96.96 0 0 0-.734-.326c-.561 0-.965.404-.965.95c0 .543.404.956.965.956a.96.96 0 0 0 .734-.327l.567.451a1.65 1.65 0 0 1-1.315.624c-.936 0-1.762-.676-1.762-1.703m6.954-.197V23.2h-.806v-1.756c0-.519-.312-.797-.672-.797c-.37 0-.825.216-.825.845v1.713h-.807v-5h.811v2.25c.159-.394.682-.576 1.003-.576c.835.005 1.296.566 1.296 1.507zm.845.197c0-1.027.796-1.7 1.718-1.7s1.727.673 1.727 1.7s-.806 1.703-1.727 1.703c-.922 0-1.718-.676-1.718-1.703m2.634 0c0-.557-.417-.95-.916-.95s-.907.393-.907.95c0 .566.408.955.907.955s.916-.39.916-.955m1.498 0c0-1.027.796-1.7 1.718-1.7s1.727.673 1.727 1.7s-.806 1.703-1.727 1.703c-.917 0-1.718-.676-1.718-1.703m2.634 0c0-.557-.417-.95-.916-.95s-.907.393-.907.95c0 .566.408.955.907.955c.504 0 .916-.39.916-.955m1.704 1.622v-5h.806v5zm1.685-.998h.753c0 .22.192.431.533.431c.316 0 .528-.158.528-.37c0-.181-.14-.263-.38-.316l-.431-.11c-.73-.192-.917-.58-.917-.994c0-.504.499-.964 1.205-.964c.575 0 1.228.293 1.219 1.012h-.768c0-.22-.202-.36-.432-.36c-.25 0-.423.144-.423.346c0 .168.159.264.346.307l.518.14c.73.186.86.642.86.94c0 .657-.658 1.017-1.316 1.017c-.638 0-1.281-.388-1.295-1.08z"></path></svg>
                    </div>
                    <div className="Flip-card-back">
                        <p className="title">W3SCHOOL</p>
                    </div>
                </div>
            </div>
            <div className="ItemSlide">
                <div className="Flip-card-inner">
                    <div className="Flip-card-front">
                   <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 128 128"><path fill="#41e0ff" d="M41.135 3.815c-2.65 0-5.017.593-7.037 1.762c-1.943 1.124-3.575 2.8-4.853 4.98c-1.197 2.043-2.079 4.529-2.623 7.389c-1.046 5.513-.82 12.414.657 19.954c.186.949.391 1.91.612 2.865a90 90 0 0 0-3.41 1.105c-7.118 2.482-13.07 5.725-17.213 9.379c-2.148 1.892-3.81 3.893-4.947 5.945c-1.208 2.183-1.82 4.421-1.82 6.654c0 4.476 2.479 9.012 7.17 13.126c4.416 3.875 10.662 7.259 18.057 9.788q1.033.35 2.089.677a88 88 0 0 0-.678 3.222c-1.406 7.406-1.57 14.182-.478 19.596c.568 2.805 1.469 5.246 2.68 7.256c1.286 2.136 2.92 3.786 4.854 4.901c2.038 1.175 4.436 1.771 7.129 1.771c3.665 0 7.764-1.087 12.18-3.23c4.331-2.102 8.752-5.112 13.139-8.946a70 70 0 0 0 2.068-1.882h1.04v-.002h31.485q6.889 0 11.883-2.01c3.337-1.338 6.052-3.145 8.189-5.412s3.695-4.974 4.694-8.117c1-3.117 1.498-6.493 1.498-10.1c.002-6.289-1.138-11.493-3.395-15.668q-3.357-6.174-9.88-8.01a.17.17 0 0 1-.106-.171a.18.18 0 0 1 .081-.16c3.238-1.8 5.726-4.363 7.47-7.633q2.635-4.947 2.635-11.906c0-7.654-1.937-13.348-5.793-17.135s-8.989-5.67-15.38-5.67h-34.46a84 84 0 0 0-1.63-1.491c-4.556-4.042-9.098-7.213-13.505-9.417c-4.518-2.263-8.691-3.41-12.402-3.41m.038 8.992c2.295 0 5.266.901 8.588 2.607c3.601 1.85 7.506 4.602 11.293 7.964q.352.313.72.65c-3.33 3.683-6.613 7.775-9.768 12.181c-5.376.525-10.544 1.31-15.383 2.334a81 81 0 0 1-.49-2.298l-.014-.078c-1.153-5.895-1.434-11.28-.813-15.567c.538-3.685 1.74-6.319 3.305-7.225c.65-.377 1.512-.567 2.562-.567zM68.48 29.82v68.336l-4.052-5.002l-2.647-3.268c-1.336-1.65-3.476-4.702-6.028-8.594a153 153 0 0 1-4.207-6.781l-.077-.132c-1.223-2.109-2.13-3.807-2.86-5.171a207 207 0 0 1-2.68-5.192l.158-.309l.01-.017c.955-1.947 1.96-3.901 2.994-5.81l.01-.016l1.097-2.13l1.62-2.685l.011-.018c.605-1.03 1.233-2.07 1.866-3.09l1.116-1.842c1.485-2.458 2.678-4.251 4.561-6.85c1.015-1.397 1.977-2.625 3.501-4.53l.004-.004l.075-.095l.03-.038c.618-.789 1.243-1.566 1.856-2.311l.02-.025l.012-.015a440 440 0 0 1 3.61-4.411m12.65 1.344h20.26c3.398 0 5.998.955 7.797 2.838c1.799 1.882 2.697 5.156 2.697 9.798c0 4.129-.999 7.276-2.999 9.494s-4.498 3.302-7.497 3.302h-20.26c-.074 0-.135-.079-.135-.175l.001-25.082c0-.097.06-.175.136-.175M45.47 46.096a167 167 0 0 0-4.197 7.276a121 121 0 0 1-2.208-6.136a124 124 0 0 1 6.405-1.14m-15.16 3.351c1.523 4.723 3.43 9.608 5.67 14.54c-2.273 5.014-4.206 9.977-5.75 14.77a64 64 0 0 1-1.591-.52c-6.148-2.1-11.267-4.813-14.806-7.843c-2.708-2.319-4.324-4.765-4.324-6.543c0-1.826 1.616-4.178 4.436-6.458c3.283-2.654 7.954-5.08 13.5-7.012c.942-.327 1.901-.64 2.864-.934zm50.82 18.747h21.952c3.799 0 6.718 1.187 8.836 3.662c2.12 2.474 3.16 5.957 3.16 10.522c0 4.641-1.06 8.252-3.158 10.779c-2.08 2.552-5.038 3.82-8.837 3.82H81.13c-.075 0-.136-.079-.136-.176V68.37c0-.096.06-.174.136-.174zM41.28 74.59a166 166 0 0 0 4.328 7.467a117 117 0 0 1-6.62-1.105a123 123 0 0 1 2.292-6.362m-4.73 15.052c4.775.977 10.002 1.714 15.562 2.191c3.186 4.437 6.496 8.557 9.85 12.261q-.621.573-1.247 1.121c-4.856 4.246-9.733 7.314-14.1 8.876l-.091.032c-1.958.691-3.706 1.041-5.193 1.041c-1.096 0-1.982-.19-2.632-.564c-1.582-.913-2.813-3.49-3.378-7.07c-.66-4.172-.429-9.427.667-15.197c.171-.895.358-1.796.563-2.69z"/></svg>
                    </div>
                    <div className="Flip-card-back">
                        <p className="title">REACT <br /> BOOTSTRAP</p>
                    </div>
                </div>
            </div>
          </div>
        </section>

        <section id="section4" className="Container__experiencia">
          <h2>Experiencia</h2>
          <div className="Container__experiencia__grid">
            <div className="Container__experiencia__grid__info">
              <div>
                <h3>Finvero, CDMX</h3>
                <p>Marzo 2023 - Actualidad</p>
              </div>
              <div>
                <h3>Academlo, CDMX</h3>
                <p>Febrero 2022 - Diciembre 2022</p>
              </div>
            </div>
            <div className="timeline">
              <div className="circle dark"></div>
              <div className="line"></div>
              <div className="circle orange"></div>
            </div>
            <div className="Container__experiencia__grid__info">
              <div>
                <h3>Desarrollador Web Frontend</h3>
                <p>Actualmente desarrollo y mantengo páginas web responsive en React, HTML, CSS y JavaScript.</p>
              </div>
              <div>
                <h3>Bootcamp de programación</h3>
                <p>Me capacité con ayuda de Academlo para aprender Desarrollo Web Full Stack, desarrollando proyectos propios.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="section5" className="Container__experiencia">
            <h2>Proyectos</h2>
                <ElementEffect />
                {/* <App /> */}
                <Tiktok />
                <Openfinance />
        </section>
      </div>
    );
  }
  
  export default Body
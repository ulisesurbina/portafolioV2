import "./index.css";
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
      <div className="BodyWeb">
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
              <span><img src={phone} alt="phone" /><a href="https://api.whatsapp.com/send?phone=5554369655&amp;text=Hola.%20Quisiera%20saber%20m%C3%A1s%20sobre%20ti..." target="_blank">(+52) 55 5436 9655</a></span>
              <span><img src={email} alt="email" /><a href="mailto:ulisesurbinam@gmail.com">ulisesurbinam@gmail.com</a></span>
            </div>
            <button><a href="">Conoce más sobre mi trabajo</a></button>
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

        <section className="SectionSkills">
          <div className="ContainerSwiper">
            <div class="ItemSlide">
                <div class="Flip-card-inner">
                    <div class="Flip-card-front">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 128 128"><path fill="#1572B6" d="M18.814 114.123L8.76 1.352h110.48l-10.064 112.754l-45.243 12.543z"/><path fill="#33A9DC" d="m64.001 117.062l36.559-10.136l8.601-96.354h-45.16z"/><path fill="#fff" d="M64.001 51.429h18.302l1.264-14.163H64.001V23.435h34.682l-.332 3.711l-3.4 38.114h-30.95z"/><path fill="#EBEBEB" d="m64.083 87.349l-.061.018l-15.403-4.159l-.985-11.031H33.752l1.937 21.717l28.331 7.863l.063-.018z"/><path fill="#fff" d="m81.127 64.675l-1.666 18.522l-15.426 4.164v14.39l28.354-7.858l.208-2.337l2.406-26.881z"/><path fill="#EBEBEB" d="M64.048 23.435v13.831H30.64l-.277-3.108l-.63-7.012l-.331-3.711zm-.047 27.996v13.831H48.792l-.277-3.108l-.631-7.012l-.33-3.711z"/></svg>
                    </div>
                    <div class="Flip-card-back">
                        <p class="title">CSS</p>
                    </div>
                </div>
            </div>
            <div class="ItemSlide">
                <div class="Flip-card-inner">
                    <div class="Flip-card-front">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256"><g fill="none"><rect width="256" height="256" fill="#E14E1D" rx="60"/><path fill="#fff" d="m48 38l8.61 96.593h110.71l-3.715 41.43l-35.646 9.638l-35.579-9.624l-2.379-26.602H57.94l4.585 51.281l65.427 18.172l65.51-18.172l8.783-98.061H85.824l-2.923-32.71h122.238L208 38z"/><path fill="#EBEBEB" d="M128 38H48l8.61 96.593H128v-31.938H85.824l-2.923-32.71H128zm0 147.647l-.041.014l-35.579-9.624l-2.379-26.602H57.94l4.585 51.281l65.427 18.172l.049-.014z"/></g></svg>
                    </div>
                    <div class="Flip-card-back">
                        <p class="title">HTML</p>
                    </div>
                </div>
            </div>
            <div class="ItemSlide">
                <div class="Flip-card-inner">
                    <div class="Flip-card-front">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 128 128"><path fill="#F0DB4F" d="M1.408 1.408h125.184v125.185H1.408z"/><path fill="#323330" d="M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981c-3.832-1.761-8.104-3.022-9.377-5.926c-.452-1.69-.512-2.642-.226-3.665c.821-3.32 4.784-4.355 7.925-3.403c2.023.678 3.938 2.237 5.093 4.724c5.402-3.498 5.391-3.475 9.163-5.879c-1.381-2.141-2.118-3.129-3.022-4.045c-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235c-5.926 6.724-4.236 18.492 2.975 23.335c7.104 5.332 17.54 6.545 18.873 11.531c1.297 6.104-4.486 8.08-10.234 7.378c-4.236-.881-6.592-3.034-9.139-6.949c-4.688 2.713-4.688 2.713-9.508 5.485c1.143 2.499 2.344 3.63 4.26 5.795c9.068 9.198 31.76 8.746 35.83-5.176c.165-.478 1.261-3.666.38-8.581M69.462 58.943H57.753l-.048 30.272c0 6.438.333 12.34-.714 14.149c-1.713 3.558-6.152 3.117-8.175 2.427c-2.059-1.012-3.106-2.451-4.319-4.485c-.333-.584-.583-1.036-.667-1.071l-9.52 5.83c1.583 3.249 3.915 6.069 6.902 7.901c4.462 2.678 10.459 3.499 16.731 2.059c4.082-1.189 7.604-3.652 9.448-7.401c2.666-4.915 2.094-10.864 2.07-17.444c.06-10.735.001-21.468.001-32.237"/></svg>
                    </div>
                    <div class="Flip-card-back">
                        <p class="title">JAVASCRIPT</p>
                    </div>
                </div>
            </div>
            <div class="ItemSlide">
                <div class="Flip-card-inner">
                    <div class="Flip-card-front">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 128 128"><path fill="#F34F29" d="M124.737 58.378L69.621 3.264c-3.172-3.174-8.32-3.174-11.497 0L46.68 14.71l14.518 14.518c3.375-1.139 7.243-.375 9.932 2.314c2.703 2.706 3.461 6.607 2.294 9.993l13.992 13.993c3.385-1.167 7.292-.413 9.994 2.295c3.78 3.777 3.78 9.9 0 13.679a9.673 9.673 0 0 1-13.683 0a9.68 9.68 0 0 1-2.105-10.521L68.574 47.933l-.002 34.341a9.7 9.7 0 0 1 2.559 1.828c3.778 3.777 3.778 9.898 0 13.683c-3.779 3.777-9.904 3.777-13.679 0c-3.778-3.784-3.778-9.905 0-13.683a9.7 9.7 0 0 1 3.167-2.11V47.333a9.6 9.6 0 0 1-3.167-2.111c-2.862-2.86-3.551-7.06-2.083-10.576L41.056 20.333L3.264 58.123a8.133 8.133 0 0 0 0 11.5l55.117 55.114c3.174 3.174 8.32 3.174 11.499 0l54.858-54.858a8.135 8.135 0 0 0-.001-11.501"/></svg>
                    </div>
                    <div class="Flip-card-back">
                        <p class="title">GIT</p>
                    </div>
                </div>
            </div>
            <div class="ItemSlide">
                <div class="Flip-card-inner">
                    <div class="Flip-card-front">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48"><g fillRule="evenodd" clipRule="evenodd"><path d="M24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4ZM0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24Z"/><path d="M19.1833 45.4716C18.9898 45.2219 18.9898 42.9973 19.1833 38.798C17.1114 38.8696 15.8024 38.7258 15.2563 38.3667C14.437 37.828 13.6169 36.1667 12.8891 34.9959C12.1614 33.8251 10.5463 33.64 9.89405 33.3783C9.24182 33.1165 9.07809 32.0496 11.6913 32.8565C14.3044 33.6634 14.4319 35.8607 15.2563 36.3745C16.0806 36.8883 18.0515 36.6635 18.9448 36.2519C19.8382 35.8403 19.7724 34.3078 19.9317 33.7007C20.1331 33.134 19.4233 33.0083 19.4077 33.0037C18.5355 33.0037 13.9539 32.0073 12.6955 27.5706C11.437 23.134 13.0581 20.2341 13.9229 18.9875C14.4995 18.1564 14.4485 16.3852 13.7699 13.6737C16.2335 13.3589 18.1347 14.1343 19.4734 16.0001C19.4747 16.0108 21.2285 14.9572 24.0003 14.9572C26.772 14.9572 27.7553 15.8154 28.5142 16.0001C29.2731 16.1848 29.88 12.7341 34.5668 13.6737C33.5883 15.5969 32.7689 18.0001 33.3943 18.9875C34.0198 19.9749 36.4745 23.1147 34.9666 27.5706C33.9614 30.5413 31.9853 32.3523 29.0384 33.0037C28.7005 33.1115 28.5315 33.2855 28.5315 33.5255C28.5315 33.8856 28.9884 33.9249 29.6465 35.6117C30.0853 36.7362 30.117 39.948 29.7416 45.247C28.7906 45.4891 28.0508 45.6516 27.5221 45.7347C26.5847 45.882 25.5669 45.9646 24.5669 45.9965C23.5669 46.0284 23.2196 46.0248 21.837 45.8961C20.9154 45.8103 20.0308 45.6688 19.1833 45.4716Z"/></g></svg>
                    </div>
                    <div class="Flip-card-back">
                        <p class="title">GITHUB</p>
                    </div>
                </div>
            </div>
            <div class="ItemSlide">
                <div class="Flip-card-inner">
                    <div class="Flip-card-front">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 128 128"><path fill="#014847" d="M80.46 82.605h-8.777l-.734-.733V61.326c0-3.656-1.436-6.489-5.844-6.588c-2.269-.06-4.864 0-7.638.11l-.416.425v26.589l-.733.733H47.54l-.733-.733V46.764l.733-.733h19.753c7.677 0 13.899 6.22 13.899 13.898v21.943z"/><path fill="#05bdba" d="M58.942 119.902v-26.33l.733-.734h8.797l.733.733v26.331l-.733.733h-8.796zm0-84.838V8.734L59.675 8h8.797l.733.733v26.331l-.733.733h-8.796zm68.335 34.385H92.169l-.733-.733V59.92l.733-.733h35.108l.733.733v8.797zm-91.436 0H.733L0 68.716V59.92l.733-.733h35.108l.733.733v8.797zm-8.49-35.633v-1.209l6.034-6.033h1.208l9.223 9.223v6.39l-.852.852h-6.39zm7.242 68.235h-1.208l-6.033-6.033v-1.209l9.223-9.222h6.39l.851.851v6.39z"/></svg>
                    </div>
                    <div class="Flip-card-back">
                        <p class="title">NETLIFY</p>
                    </div>
                </div>
            </div>
            <div class="ItemSlide">
                <div class="Flip-card-inner">
                    <div class="Flip-card-front">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 128 128"><path fill="#0acf83" d="M45.5 129c11.9 0 21.5-9.6 21.5-21.5V86H45.5C33.6 86 24 95.6 24 107.5S33.6 129 45.5 129m0 0"/><path fill="#a259ff" d="M24 64.5C24 52.6 33.6 43 45.5 43H67v43H45.5C33.6 86 24 76.4 24 64.5m0 0"/><path fill="#f24e1e" d="M24 21.5C24 9.6 33.6 0 45.5 0H67v43H45.5C33.6 43 24 33.4 24 21.5m0 0"/><path fill="#ff7262" d="M67 0h21.5C100.4 0 110 9.6 110 21.5S100.4 43 88.5 43H67zm0 0"/><path fill="#1abcfe" d="M110 64.5c0 11.9-9.6 21.5-21.5 21.5S67 76.4 67 64.5S76.6 43 88.5 43S110 52.6 110 64.5m0 0"/></svg>
                    </div>
                    <div class="Flip-card-back">
                        <p class="title">FIGMA</p>
                    </div>
                </div>
            </div>
            <div class="ItemSlide">
                <div class="Flip-card-inner">
                    <div class="Flip-card-front">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 128 128"><defs><linearGradient id="IconifyId1936f55ee0319567a10" x1="9" x2="9" y1="16.97" y2="1.03" gradientTransform="scale(7.11111)" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#0078d4"/><stop offset=".16" stopColor="#1380da"/><stop offset=".53" stopColor="#3c91e5"/><stop offset=".82" stopColor="#559cec"/><stop offset="1" stopColor="#5ea0ef"/></linearGradient></defs><path fill="url(#IconifyId1936f55ee0319567a10)" d="M120.89 28.445v69.262l-28.445 23.324l-44.09-16.07v15.93L23.395 88.25l72.746 5.688V31.574ZM96.64 31.93L55.82 7.11v16.285L18.348 34.418L7.109 48.852v32.785l16.075 7.11V46.718Zm0 0"/></svg>
                    </div>
                    <div class="Flip-card-back">
                        <p class="title">AZURE DEVOPS</p>
                    </div>
                </div>
            </div>
            <div class="ItemSlide">
                <div class="Flip-card-inner">
                    <div class="Flip-card-front">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16"><g fill="none" stroke="#91d7e3" strokeLinecap="round" strokeLinejoin="round"><path d="M8 10.8c4.14 0 7.5-1.25 7.5-2.8S12.14 5.2 8 5.2S.5 6.45.5 8s3.36 2.8 7.5 2.8"/><path d="M5.52 9.4c2.07 3.5 4.86 5.72 6.23 4.95c1.37-.78.8-4.24-1.27-7.75C8.41 3.1 5.62.88 4.25 1.65c-1.37.78-.8 4.24 1.27 7.75"/><path d="M5.52 6.6c-2.07 3.5-2.64 6.97-1.27 7.75c1.37.77 4.16-1.45 6.23-4.95s2.64-6.97 1.27-7.75C10.38.88 7.59 3.1 5.52 6.6"/><path d="M8.5 8a.5.5 0 0 1-.5.5a.5.5 0 0 1-.5-.5a.5.5 0 0 1 .5-.5a.5.5 0 0 1 .5.5"/></g></svg>
                    </div>
                    <div class="Flip-card-back">
                        <p class="title">REACT JS</p>
                    </div>
                </div>
            </div>
            <div class="ItemSlide">
                <div class="Flip-card-inner">
                    <div class="Flip-card-front">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1.16em" height="1em" viewBox="0 0 256 221"><path fill="#41B883" d="M204.8 0H256L128 220.8L0 0h97.92L128 51.2L157.44 0z"/><path fill="#41B883" d="m0 0l128 220.8L256 0h-51.2L128 132.48L50.56 0z"/><path fill="#35495E" d="M50.56 0L128 133.12L204.8 0h-47.36L128 51.2L97.92 0z"/></svg>
                    </div>
                    <div class="Flip-card-back">
                        <p class="title">VUE</p>
                    </div>
                </div>
            </div>
            <div class="ItemSlide">
                <div class="Flip-card-inner">
                    <div class="Flip-card-front">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M20.228 5.464s.605.648 1.45.648c.666 0 1.151-.403 1.151-.955c0-.677-.619-.989-1.368-.989h-.441l-.264-.595l1.17-1.387c.25-.298.462-.485.462-.485s-.188.01-.567.01h-1.905V.713h3.902v.73L22.253 3.25c.883.125 1.747.754 1.747 1.862c0 1.09-.825 2.098-2.25 2.098c-1.359 0-2.112-.855-2.112-.855l.59-.892zm-7.611 1.348l5.154 9.176l2.543-4.535l-4.866-8.662H9.785L7.438 6.97L5.092 2.79H0l7.41 13.197l.028-.048l.03.048l5.149-9.176zM.053 22.208h.753c0 .22.192.431.533.431c.317 0 .528-.158.528-.37c0-.181-.14-.263-.38-.316l-.431-.11c-.73-.192-.917-.58-.917-.994c0-.504.5-.964 1.205-.964c.576 0 1.228.293 1.219 1.012H1.8c0-.22-.202-.36-.432-.36c-.25 0-.423.144-.423.346c0 .168.159.264.346.307l.518.14c.73.186.86.642.86.94c0 .657-.658 1.017-1.316 1.017c-.638 0-1.286-.388-1.3-1.08zm3.282-.624c0-1.027.826-1.7 1.762-1.7c.561 0 1.017.25 1.315.625l-.567.45a.96.96 0 0 0-.734-.326c-.561 0-.965.404-.965.95c0 .543.404.956.965.956a.96.96 0 0 0 .734-.327l.567.451a1.65 1.65 0 0 1-1.315.624c-.936 0-1.762-.676-1.762-1.703m6.954-.197V23.2h-.806v-1.756c0-.519-.312-.797-.672-.797c-.37 0-.825.216-.825.845v1.713h-.807v-5h.811v2.25c.159-.394.682-.576 1.003-.576c.835.005 1.296.566 1.296 1.507zm.845.197c0-1.027.796-1.7 1.718-1.7s1.727.673 1.727 1.7s-.806 1.703-1.727 1.703c-.922 0-1.718-.676-1.718-1.703m2.634 0c0-.557-.417-.95-.916-.95s-.907.393-.907.95c0 .566.408.955.907.955s.916-.39.916-.955m1.498 0c0-1.027.796-1.7 1.718-1.7s1.727.673 1.727 1.7s-.806 1.703-1.727 1.703c-.917 0-1.718-.676-1.718-1.703m2.634 0c0-.557-.417-.95-.916-.95s-.907.393-.907.95c0 .566.408.955.907.955c.504 0 .916-.39.916-.955m1.704 1.622v-5h.806v5zm1.685-.998h.753c0 .22.192.431.533.431c.316 0 .528-.158.528-.37c0-.181-.14-.263-.38-.316l-.431-.11c-.73-.192-.917-.58-.917-.994c0-.504.499-.964 1.205-.964c.575 0 1.228.293 1.219 1.012h-.768c0-.22-.202-.36-.432-.36c-.25 0-.423.144-.423.346c0 .168.159.264.346.307l.518.14c.73.186.86.642.86.94c0 .657-.658 1.017-1.316 1.017c-.638 0-1.281-.388-1.295-1.08z"/></svg>
                    </div>
                    <div class="Flip-card-back">
                        <p class="title">W3SCHOOLS</p>
                    </div>
                </div>
            </div>
            <div class="ItemSlide">
                <div class="Flip-card-inner">
                    <div class="Flip-card-front">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 128 128"><defs><linearGradient id="IconifyId1936f55ee0319567a0" x1="76.079" x2="523.48" y1="10.798" y2="365.95" gradientTransform="translate(1.11 14.613)scale(.24566)" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#9013fe"/><stop offset="1" stopColor="#6610f2"/></linearGradient><linearGradient id="IconifyId1936f55ee0319567a1" x1="193.51" x2="293.51" y1="109.74" y2="278.87" gradientTransform="translate(0 52)" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#fff"/><stop offset="1" stopColor="#f1e5fc"/></linearGradient><filter id="IconifyId1936f55ee0319567a2" width="197" height="249" x="161.9" y="135.46" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse"><feFlood floodOpacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="4"/><feGaussianBlur stdDeviation="8"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/><feBlend in2="BackgroundImageFix" result="effect1_dropShadow"/><feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape"/></filter></defs><path fill="url(#IconifyId1936f55ee0319567a0)" d="M14.985 27.712c-.237-6.815 5.072-13.099 12.249-13.099h73.54c7.177 0 12.486 6.284 12.249 13.099c-.228 6.546.068 15.026 2.202 21.94c2.141 6.936 5.751 11.319 11.664 11.883v6.387c-5.913.564-9.523 4.947-11.664 11.883c-2.134 6.914-2.43 15.394-2.202 21.94c.237 6.815-5.072 13.098-12.249 13.098h-73.54c-7.177 0-12.486-6.284-12.249-13.098c.228-6.546-.068-15.026-2.203-21.94c-2.14-6.935-5.76-11.319-11.673-11.883v-6.387c5.913-.563 9.533-4.947 11.673-11.883c2.135-6.914 2.43-15.394 2.203-21.94"/><path fill="url(#IconifyId1936f55ee0319567a1)" d="M267.1 364.46c47.297 0 75.798-23.158 75.798-61.355c0-28.873-20.336-49.776-50.532-53.085v-1.203c22.185-3.609 39.594-24.211 39.594-47.219c0-32.783-25.882-54.138-65.322-54.138h-88.74v217zm-54.692-189.48h45.911c24.958 0 39.131 11.128 39.131 31.279c0 21.505-16.484 33.535-46.372 33.535h-38.67zm0 161.96v-71.431h45.602c32.661 0 49.608 12.03 49.608 35.49c0 23.459-16.484 35.941-47.605 35.941z" filter="url(#IconifyId1936f55ee0319567a2)" transform="translate(1.494 2.203)scale(.24566)"/></svg>
                    </div>
                    <div class="Flip-card-back">
                        <p class="title">BOOTSTRAP</p>
                    </div>
                </div>
            </div>
            <div class="ItemSlide">
                <div class="Flip-card-inner">
                    <div class="Flip-card-front">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1.25em" height="1em" viewBox="0 0 640 512"><path fill="currentColor" d="M316.3 452c-2.1 0-4.2-.6-6.1-1.6L291 439c-2.9-1.6-1.5-2.2-.5-2.5c3.8-1.3 4.6-1.6 8.7-4c.4-.2 1-.1 1.4.1l14.8 8.8c.5.3 1.3.3 1.8 0L375 408c.5-.3.9-.9.9-1.6v-66.7c0-.7-.3-1.3-.9-1.6l-57.8-33.3c-.5-.3-1.2-.3-1.8 0l-57.8 33.3c-.6.3-.9 1-.9 1.6v66.7c0 .6.4 1.2.9 1.5l15.8 9.1c8.6 4.3 13.9-.8 13.9-5.8v-65.9c0-.9.7-1.7 1.7-1.7h7.3c.9 0 1.7.7 1.7 1.7v65.9c0 11.5-6.2 18-17.1 18c-3.3 0-6 0-13.3-3.6l-15.2-8.7c-3.7-2.2-6.1-6.2-6.1-10.5v-66.7c0-4.3 2.3-8.4 6.1-10.5l57.8-33.4c3.7-2.1 8.5-2.1 12.1 0l57.8 33.4c3.7 2.2 6.1 6.2 6.1 10.5v66.7c0 4.3-2.3 8.4-6.1 10.5l-57.8 33.4c-1.7 1.1-3.8 1.7-6 1.7m46.7-65.8c0-12.5-8.4-15.8-26.2-18.2c-18-2.4-19.8-3.6-19.8-7.8c0-3.5 1.5-8.1 14.8-8.1c11.9 0 16.3 2.6 18.1 10.6c.2.8.8 1.3 1.6 1.3h7.5c.5 0 .9-.2 1.2-.5c.3-.4.5-.8.4-1.3c-1.2-13.8-10.3-20.2-28.8-20.2c-16.5 0-26.3 7-26.3 18.6c0 12.7 9.8 16.1 25.6 17.7c18.9 1.9 20.4 4.6 20.4 8.3c0 6.5-5.2 9.2-17.4 9.2c-15.3 0-18.7-3.8-19.8-11.4c-.1-.8-.8-1.4-1.7-1.4h-7.5c-.9 0-1.7.7-1.7 1.7c0 9.7 5.3 21.3 30.6 21.3c18.5 0 29-7.2 29-19.8m54.5-50.1c0 6.1-5 11.1-11.1 11.1s-11.1-5-11.1-11.1c0-6.3 5.2-11.1 11.1-11.1c6-.1 11.1 4.8 11.1 11.1m-1.8 0c0-5.2-4.2-9.3-9.4-9.3c-5.1 0-9.3 4.1-9.3 9.3s4.2 9.4 9.3 9.4c5.2-.1 9.4-4.3 9.4-9.4m-4.5 6.2h-2.6c-.1-.6-.5-3.8-.5-3.9c-.2-.7-.4-1.1-1.3-1.1h-2.2v5h-2.4v-12.5h4.3c1.5 0 4.4 0 4.4 3.3c0 2.3-1.5 2.8-2.4 3.1c1.7.1 1.8 1.2 2.1 2.8c.1 1 .3 2.7.6 3.3m-2.8-8.8c0-1.7-1.2-1.7-1.8-1.7h-2v3.5h1.9c1.6 0 1.9-1.1 1.9-1.8M137.3 191c0-2.7-1.4-5.1-3.7-6.4l-61.3-35.3c-1-.6-2.2-.9-3.4-1h-.6c-1.2 0-2.3.4-3.4 1L3.7 184.6C1.4 185.9 0 188.4 0 191l.1 95c0 1.3.7 2.5 1.8 3.2s2.5.7 3.7 0L42 268.3c2.3-1.4 3.7-3.8 3.7-6.4v-44.4c0-2.6 1.4-5.1 3.7-6.4l15.5-8.9c1.2-.7 2.4-1 3.7-1s2.6.3 3.7 1l15.5 8.9c2.3 1.3 3.7 3.8 3.7 6.4v44.4c0 2.6 1.4 5.1 3.7 6.4l36.4 20.9c1.1.7 2.6.7 3.7 0c1.1-.6 1.8-1.9 1.8-3.2zM472.5 87.3v176.4c0 2.6-1.4 5.1-3.7 6.4l-61.3 35.4c-2.3 1.3-5.1 1.3-7.4 0l-61.3-35.4c-2.3-1.3-3.7-3.8-3.7-6.4v-70.8c0-2.6 1.4-5.1 3.7-6.4l61.3-35.4c2.3-1.3 5.1-1.3 7.4 0l15.3 8.8c1.7 1 3.9-.3 3.9-2.2v-94c0-2.8 3-4.6 5.5-3.2l36.5 20.4c2.3 1.2 3.8 3.7 3.8 6.4m-46 128.9c0-.7-.4-1.3-.9-1.6l-21-12.2c-.6-.3-1.3-.3-1.9 0l-21 12.2c-.6.3-.9.9-.9 1.6v24.3c0 .7.4 1.3.9 1.6l21 12.1c.6.3 1.3.3 1.8 0l21-12.1c.6-.3.9-.9.9-1.6v-24.3zm209.8-.7c2.3-1.3 3.7-3.8 3.7-6.4V192c0-2.6-1.4-5.1-3.7-6.4l-60.9-35.4c-2.3-1.3-5.1-1.3-7.4 0l-61.3 35.4c-2.3 1.3-3.7 3.8-3.7 6.4v70.8c0 2.7 1.4 5.1 3.7 6.4l60.9 34.7c2.2 1.3 5 1.3 7.3 0l36.8-20.5c2.5-1.4 2.5-5 0-6.4L550 241.6c-1.2-.7-1.9-1.9-1.9-3.2v-22.2c0-1.3.7-2.5 1.9-3.2l19.2-11.1c1.1-.7 2.6-.7 3.7 0l19.2 11.1c1.1.7 1.9 1.9 1.9 3.2v17.4c0 2.8 3.1 4.6 5.6 3.2zM559 219c-.4.3-.7.7-.7 1.2v13.6c0 .5.3 1 .7 1.2l11.8 6.8c.4.3 1 .3 1.4 0L584 235c.4-.3.7-.7.7-1.2v-13.6c0-.5-.3-1-.7-1.2l-11.8-6.8c-.4-.3-1-.3-1.4 0zm-254.2 43.5v-70.4c0-2.6-1.6-5.1-3.9-6.4l-61.1-35.2c-2.1-1.2-5-1.4-7.4 0l-61.1 35.2c-2.3 1.3-3.9 3.7-3.9 6.4v70.4c0 2.8 1.9 5.2 4 6.4l61.2 35.2c2.4 1.4 5.2 1.3 7.4 0l61-35.2c1.8-1 3.1-2.7 3.6-4.7c.1-.5.2-1.1.2-1.7m-74.3-124.9l-.8.5h1.1zm76.2 130.2l-.4-.7v.9z"/></svg>
                    </div>
                    <div class="Flip-card-back">
                        <p class="title">NODE</p>
                    </div>
                </div>
            </div>
            <div class="ItemSlide">
                <div class="Flip-card-inner">
                    <div class="Flip-card-front">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 32 32"><path fill="currentColor" d="M24 21V9h-2v14h8v-2zM18 9h-4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h1v2a2 2 0 0 0 2 2h2v-2h-2v-2h1a2 2 0 0 0 2-2V11a2 2 0 0 0-2-2m-4 12V11h4v10zm-6 2H2v-2h6v-4H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h6v2H4v4h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2"/></svg>
                    </div>
                    <div class="Flip-card-back">
                        <p class="title">SQL</p>
                    </div>
                </div>
            </div>
            <div class="ItemSlide">
                <div class="Flip-card-inner">
                    <div class="Flip-card-front">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 128 128"><path fill="#1572B6" d="M18.814 114.123L8.76 1.352h110.48l-10.064 112.754l-45.243 12.543z"/><path fill="#33A9DC" d="m64.001 117.062l36.559-10.136l8.601-96.354h-45.16z"/><path fill="#fff" d="M64.001 51.429h18.302l1.264-14.163H64.001V23.435h34.682l-.332 3.711l-3.4 38.114h-30.95z"/><path fill="#EBEBEB" d="m64.083 87.349l-.061.018l-15.403-4.159l-.985-11.031H33.752l1.937 21.717l28.331 7.863l.063-.018z"/><path fill="#fff" d="m81.127 64.675l-1.666 18.522l-15.426 4.164v14.39l28.354-7.858l.208-2.337l2.406-26.881z"/><path fill="#EBEBEB" d="M64.048 23.435v13.831H30.64l-.277-3.108l-.63-7.012l-.331-3.711zm-.047 27.996v13.831H48.792l-.277-3.108l-.631-7.012l-.33-3.711z"/></svg>
                    </div>
                    <div class="Flip-card-back">
                        <p class="title">CSS</p>
                    </div>
                </div>
            </div>
            <div class="ItemSlide">
                <div class="Flip-card-inner">
                    <div class="Flip-card-front">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256"><g fill="none"><rect width="256" height="256" fill="#E14E1D" rx="60"/><path fill="#fff" d="m48 38l8.61 96.593h110.71l-3.715 41.43l-35.646 9.638l-35.579-9.624l-2.379-26.602H57.94l4.585 51.281l65.427 18.172l65.51-18.172l8.783-98.061H85.824l-2.923-32.71h122.238L208 38z"/><path fill="#EBEBEB" d="M128 38H48l8.61 96.593H128v-31.938H85.824l-2.923-32.71H128zm0 147.647l-.041.014l-35.579-9.624l-2.379-26.602H57.94l4.585 51.281l65.427 18.172l.049-.014z"/></g></svg>
                    </div>
                    <div class="Flip-card-back">
                        <p class="title">HTML</p>
                    </div>
                </div>
            </div>
            <div class="ItemSlide">
                <div class="Flip-card-inner">
                    <div class="Flip-card-front">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 128 128"><path fill="#F0DB4F" d="M1.408 1.408h125.184v125.185H1.408z"/><path fill="#323330" d="M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981c-3.832-1.761-8.104-3.022-9.377-5.926c-.452-1.69-.512-2.642-.226-3.665c.821-3.32 4.784-4.355 7.925-3.403c2.023.678 3.938 2.237 5.093 4.724c5.402-3.498 5.391-3.475 9.163-5.879c-1.381-2.141-2.118-3.129-3.022-4.045c-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235c-5.926 6.724-4.236 18.492 2.975 23.335c7.104 5.332 17.54 6.545 18.873 11.531c1.297 6.104-4.486 8.08-10.234 7.378c-4.236-.881-6.592-3.034-9.139-6.949c-4.688 2.713-4.688 2.713-9.508 5.485c1.143 2.499 2.344 3.63 4.26 5.795c9.068 9.198 31.76 8.746 35.83-5.176c.165-.478 1.261-3.666.38-8.581M69.462 58.943H57.753l-.048 30.272c0 6.438.333 12.34-.714 14.149c-1.713 3.558-6.152 3.117-8.175 2.427c-2.059-1.012-3.106-2.451-4.319-4.485c-.333-.584-.583-1.036-.667-1.071l-9.52 5.83c1.583 3.249 3.915 6.069 6.902 7.901c4.462 2.678 10.459 3.499 16.731 2.059c4.082-1.189 7.604-3.652 9.448-7.401c2.666-4.915 2.094-10.864 2.07-17.444c.06-10.735.001-21.468.001-32.237"/></svg>
                    </div>
                    <div class="Flip-card-back">
                        <p class="title">JAVASCRIPT</p>
                    </div>
                </div>
            </div>
            <div class="ItemSlide">
                <div class="Flip-card-inner">
                    <div class="Flip-card-front">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 128 128"><path fill="#F34F29" d="M124.737 58.378L69.621 3.264c-3.172-3.174-8.32-3.174-11.497 0L46.68 14.71l14.518 14.518c3.375-1.139 7.243-.375 9.932 2.314c2.703 2.706 3.461 6.607 2.294 9.993l13.992 13.993c3.385-1.167 7.292-.413 9.994 2.295c3.78 3.777 3.78 9.9 0 13.679a9.673 9.673 0 0 1-13.683 0a9.68 9.68 0 0 1-2.105-10.521L68.574 47.933l-.002 34.341a9.7 9.7 0 0 1 2.559 1.828c3.778 3.777 3.778 9.898 0 13.683c-3.779 3.777-9.904 3.777-13.679 0c-3.778-3.784-3.778-9.905 0-13.683a9.7 9.7 0 0 1 3.167-2.11V47.333a9.6 9.6 0 0 1-3.167-2.111c-2.862-2.86-3.551-7.06-2.083-10.576L41.056 20.333L3.264 58.123a8.133 8.133 0 0 0 0 11.5l55.117 55.114c3.174 3.174 8.32 3.174 11.499 0l54.858-54.858a8.135 8.135 0 0 0-.001-11.501"/></svg>
                    </div>
                    <div class="Flip-card-back">
                        <p class="title">GIT</p>
                    </div>
                </div>
            </div>
            <div class="ItemSlide">
                <div class="Flip-card-inner">
                    <div class="Flip-card-front">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48"><g fillRule="evenodd" clipRule="evenodd"><path d="M24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4ZM0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24Z"/><path d="M19.1833 45.4716C18.9898 45.2219 18.9898 42.9973 19.1833 38.798C17.1114 38.8696 15.8024 38.7258 15.2563 38.3667C14.437 37.828 13.6169 36.1667 12.8891 34.9959C12.1614 33.8251 10.5463 33.64 9.89405 33.3783C9.24182 33.1165 9.07809 32.0496 11.6913 32.8565C14.3044 33.6634 14.4319 35.8607 15.2563 36.3745C16.0806 36.8883 18.0515 36.6635 18.9448 36.2519C19.8382 35.8403 19.7724 34.3078 19.9317 33.7007C20.1331 33.134 19.4233 33.0083 19.4077 33.0037C18.5355 33.0037 13.9539 32.0073 12.6955 27.5706C11.437 23.134 13.0581 20.2341 13.9229 18.9875C14.4995 18.1564 14.4485 16.3852 13.7699 13.6737C16.2335 13.3589 18.1347 14.1343 19.4734 16.0001C19.4747 16.0108 21.2285 14.9572 24.0003 14.9572C26.772 14.9572 27.7553 15.8154 28.5142 16.0001C29.2731 16.1848 29.88 12.7341 34.5668 13.6737C33.5883 15.5969 32.7689 18.0001 33.3943 18.9875C34.0198 19.9749 36.4745 23.1147 34.9666 27.5706C33.9614 30.5413 31.9853 32.3523 29.0384 33.0037C28.7005 33.1115 28.5315 33.2855 28.5315 33.5255C28.5315 33.8856 28.9884 33.9249 29.6465 35.6117C30.0853 36.7362 30.117 39.948 29.7416 45.247C28.7906 45.4891 28.0508 45.6516 27.5221 45.7347C26.5847 45.882 25.5669 45.9646 24.5669 45.9965C23.5669 46.0284 23.2196 46.0248 21.837 45.8961C20.9154 45.8103 20.0308 45.6688 19.1833 45.4716Z"/></g></svg>
                    </div>
                    <div class="Flip-card-back">
                        <p class="title">GITHUB</p>
                    </div>
                </div>
            </div>
            <div class="ItemSlide">
                <div class="Flip-card-inner">
                    <div class="Flip-card-front">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 128 128"><path fill="#014847" d="M80.46 82.605h-8.777l-.734-.733V61.326c0-3.656-1.436-6.489-5.844-6.588c-2.269-.06-4.864 0-7.638.11l-.416.425v26.589l-.733.733H47.54l-.733-.733V46.764l.733-.733h19.753c7.677 0 13.899 6.22 13.899 13.898v21.943z"/><path fill="#05bdba" d="M58.942 119.902v-26.33l.733-.734h8.797l.733.733v26.331l-.733.733h-8.796zm0-84.838V8.734L59.675 8h8.797l.733.733v26.331l-.733.733h-8.796zm68.335 34.385H92.169l-.733-.733V59.92l.733-.733h35.108l.733.733v8.797zm-91.436 0H.733L0 68.716V59.92l.733-.733h35.108l.733.733v8.797zm-8.49-35.633v-1.209l6.034-6.033h1.208l9.223 9.223v6.39l-.852.852h-6.39zm7.242 68.235h-1.208l-6.033-6.033v-1.209l9.223-9.222h6.39l.851.851v6.39z"/></svg>
                    </div>
                    <div class="Flip-card-back">
                        <p class="title">NETLIFY</p>
                    </div>
                </div>
            </div>
            <div class="ItemSlide">
                <div class="Flip-card-inner">
                    <div class="Flip-card-front">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 128 128"><path fill="#0acf83" d="M45.5 129c11.9 0 21.5-9.6 21.5-21.5V86H45.5C33.6 86 24 95.6 24 107.5S33.6 129 45.5 129m0 0"/><path fill="#a259ff" d="M24 64.5C24 52.6 33.6 43 45.5 43H67v43H45.5C33.6 86 24 76.4 24 64.5m0 0"/><path fill="#f24e1e" d="M24 21.5C24 9.6 33.6 0 45.5 0H67v43H45.5C33.6 43 24 33.4 24 21.5m0 0"/><path fill="#ff7262" d="M67 0h21.5C100.4 0 110 9.6 110 21.5S100.4 43 88.5 43H67zm0 0"/><path fill="#1abcfe" d="M110 64.5c0 11.9-9.6 21.5-21.5 21.5S67 76.4 67 64.5S76.6 43 88.5 43S110 52.6 110 64.5m0 0"/></svg>
                    </div>
                    <div class="Flip-card-back">
                        <p>FIGMA</p>
                    </div>
                </div>
            </div>
          </div>
        </section>

        <section className="Container__experiencia">
          <h2>Mi experiencia</h2>
          <div className="Container__experiencia__grid">
            <div className="Container__experiencia__grid__info">
              <div>
                <h3>Academlo, CDMX</h3>
                <p>Febrero 2022 - Diciembre 2022</p>
              </div>
              <div>
                <h3>Finvero, CDMX</h3>
                <p>Marzo 2023 - Actualidad</p>
              </div>
            </div>
            <div class="timeline">
              <div class="circle orange"></div>
              <div class="line"></div>
              <div class="circle dark"></div>
            </div>
            <div className="Container__experiencia__grid__info">
              <div>
                <h3>Bootcamp de programación</h3>
                <p>Me capacité con ayuda de Academlo para aprender Desarrollo Web Full Stack, desarrollando proyectos propios.</p>
              </div>
              <div>
                <h3>Desarrollador Web Frontend</h3>
                <p>Actualmente desarrollo y mantengo páginas web responsive en React, HTML, CSS y JavaScript.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="Container__experiencia">
          <h2>Mis proyectos</h2>
        </section>
      </div>
    );
  }
  
  export default Body
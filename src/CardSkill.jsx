import { useState } from "react";
import './index.css'

export function CardSkill({ nameSkill, nameImage, initialIsLearning }) {
  const imagenSRC = `https://unavatar.io/github/${nameImage}`
  const [isLearning, setIsLearning] = useState(initialIsLearning);

  const textTest = isLearning ? "aprendido" : "por aprender"
  const colorText = isLearning ? "button_isLearning isLearning" : "button_isLearning"

  const handleClick = () => {
    setIsLearning(!isLearning)
  }
    return (
        <article>
          <header>
            <img src={imagenSRC} alt="img perfil" />
            <h3>{nameSkill}</h3>
            {/* <h5>Test</h5> */}
          </header>
          <aside>
            <button onClick={handleClick} className={colorText}>
              <span className="learningText">{textTest}</span>
              <span className="hoverEnproceso">en proceso</span>
              </button>
          </aside>
      </article>
    )
}
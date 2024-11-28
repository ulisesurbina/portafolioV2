import './TikTak.css'
import { CardSkill } from './CardSkill.jsx'

const skills = [
  {
    id: "1",
    isLearning: true,
    nameSkill: "JavaScript",
    nameImage: "JavaScript"
  },
  {
    id: "2",
    isLearning: true,
    nameSkill: "HTML",
    nameImage: "HTML5"
  },
  {
    id: "3",
    isLearning: false,
    nameSkill: "CSS",
    nameImage: "CSS"
  }
]

function App() {
  // const javaTest = { isLearning: true, nameSkill: "JavaScript", nameImage: "JavaScript"}
  return (
    <div>
      {
      skills.map(skill => {
        const { isLearning, nameSkill, nameImage, id } = skill
        return (
          <CardSkill key={id} initialIsLearning={isLearning} nameSkill={nameSkill} nameImage={nameImage} />
        )
      })
    }
    </div>
  )
}

export default App

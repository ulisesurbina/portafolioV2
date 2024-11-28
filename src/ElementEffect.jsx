import { useEffect, useState } from 'react';
import './index.css';

const FollowMouse = () => {
    const [position, setPosition] = useState({ x:10, y:10 })
    const [enabled, setEnabled] = useState(false)

    useEffect(() => {
        console.log("efecto", {enabled});
        const handleMove = (event) => {
            const container = document.querySelector(".containerPointer");
            if (container && container.contains(event.target)) {
                const { clientX, clientY } = event;
                const rect = container.getBoundingClientRect();
                setPosition({
                    x: clientX - rect.left,
                    y: clientY - rect.top,
                });
            }
         }
         if(enabled) {
             window.addEventListener('pointermove', handleMove)
         }
         // limpia el efecto desde cero
         // getEventListeners(window) en consola para revisar cuantas veces se realizan los eventos
         // se ejecuta cuando se desmonta el componente y cuando cambian las dependencias
         return () => { //cleanup method
             window.removeEventListener('pointermove', handleMove)
         }
     }, [enabled])

    // useEffect(() => {
    //     document.body.classList.toggle('no-cursor', enabled)
    //     return () => {
    //         document.body.classList.remove('no-cursor')
    //     }
    // }, [enabled])

    return (
        <div className="containerPointer">
            <div className="containerPointer__cursor" style={{ transform: `translate(${position.x}px, ${position.y}px)`, }} />
            <button className='shadow__btn' onClick={() => setEnabled(!enabled)}>
                {enabled ? "Desactivar" : "Activar"} seguir el puntero
            </button>
        </div>
    )
}
function ElementEffect () {
    // const [mounted, setMounted] = useState(true)
  return (
        <div style={{widt: "100%", background: "rgb(147 184 193)", height: "50vh", display: "flex", alignItems: "center", margin: "5% 0"}}>
            <FollowMouse />
            {/* { mounted && <FollowMouse />}
            <button onClick={() => setMounted(!mounted)}>{mounted ? "Desmontar" : "Montar"} Toggle mounted</button> */}
        </div>
  )
}

export default ElementEffect

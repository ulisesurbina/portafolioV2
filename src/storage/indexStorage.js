export const saveGameStorage = ({ board, turn }) => {
    // guardar partida
    window.localStorage.setItem('board', JSON.stringify(board))
    window.localStorage.setItem('turn', turn)
}

export const resetGameStorage = () => {
    // resetear localStorage
    window.localStorage.removeItem("board")
    window.localStorage.removeItem("turn")
}
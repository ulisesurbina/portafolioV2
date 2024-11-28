import { WINNER_COMBOS } from './constantesTiktak.js'

export const checkWinner = (boardCheck) => {
    // revisar las combinaciones ganadoras
    for (const combo of WINNER_COMBOS) {
      const [a, b, c] = combo
      if (
        boardCheck[a] &&
        boardCheck[a] === boardCheck[b] &&
        boardCheck[a] === boardCheck[c]
      ) {
        return boardCheck[a]
      }
    }
    return null
}

export const checkEndGame = (newBoard) => {
    // revisar si hay un empate si no hay espacios vacios
    return newBoard.every((square) => square !== null)
}
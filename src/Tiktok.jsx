import { useState, useEffect } from "react";
import confetti from "canvas-confetti";
import { Square } from "./components/Square.jsx";
import { TURNS } from "./constantesTiktak.js";
import { WinnerModal } from "./components/WinnerModal.jsx";
import { checkWinner, checkEndGame } from "./board.js";
import { saveGameStorage, resetGameStorage } from "./storage/indexStorage.js";
import "./Tiktak.css";

function Tiktok() {
  const [board, setBoard] = useState(() => {
    const boardFromStorage = window.localStorage.getItem("board");
    if (boardFromStorage) return JSON.parse(boardFromStorage);
    return Array(9).fill(null);
  });
  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem("turn");
    return turnFromStorage ?? TURNS.X;
  });
  // null es que no hay ganador, false es que hay un empate
  const [winner, setWinner] = useState(null);

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setTurn(TURNS.X);
    setWinner(null);

    resetGameStorage();
  };

  const updateBoard = (index) => {
    // no se actualice la posición si ya tiene algo
    if (board[index] || winner) return;
    // actualizar el tablero
    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);
    // cambiar el turno
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn);

    saveGameStorage({
      board: newBoard,
      turn: newTurn,
    });

    // revisar si hay ganador
    const newWinner = checkWinner(newBoard);
    if (newWinner) {
      confetti();
      setWinner(newWinner);
    } else if (checkEndGame(newBoard)) {
      setWinner(false); //empate
    }
  };
  return (
    <main className="containerGame">
      <h2>Juego 3 en línea</h2>
      <button onClick={resetGame}>Resetear el juego</button>
      <section className="board">
        {board.map((square, index) => {
          return (
            <Square key={index} index={index} updateBoard={updateBoard}>
              {square}
            </Square>
          );
        })}
      </section>
      <section className="PlayersSelected">
        <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
      </section>

      <WinnerModal resetGame={resetGame} winner={winner} />
    </main>
  );
}

export default Tiktok;

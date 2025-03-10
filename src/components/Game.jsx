import React, { useState, useEffect } from "react";

const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [status, setStatus] = useState("Next player: X");
  const [gameOver, setGameOver] = useState(false);

  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8], // rows
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8], // columns
    [0, 4, 8],
    [2, 4, 6], // diagonals
  ];

  useEffect(() => {
    checkWinner(board);
  }, [board]);

  const handleClick = (index) => {
    if (gameOver || board[index]) return;

    const newBoard = [...board];
    newBoard[index] = isXNext ? "X" : "O";
    setBoard(newBoard);
    setIsXNext(!isXNext);
  };

  const checkWinner = (squares) => {
    // Check for winner
    for (let i = 0; i < winningCombinations.length; i++) {
      const [a, b, c] = winningCombinations[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        setStatus(`Winner: ${squares[a]}`);
        setGameOver(true);
        return;
      }
    }

    // Check for draw
    if (squares.every((square) => square !== null)) {
      setStatus("Game ended in a draw!");
      setGameOver(true);
      return;
    }

    // Update next player
    setStatus(`Next player: ${isXNext ? "X" : "O"}`);
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
    setStatus("Next player: X");
    setGameOver(false);
  };

  const renderSquare = (index) => {
    return (
      <button
        className={`w-20 h-20 text-4xl font-bold border-2 border-gray-400 flex items-center justify-center ${
          board[index] === "X"
            ? "text-red-500"
            : board[index] === "O"
            ? "text-blue-500"
            : ""
        }`}
        onClick={() => handleClick(index)}
      >
        {board[index]}
      </button>
    );
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-4 text-center">Tic Tac Toe</h1>
        <div className="h-8 mb-4 text-center font-semibold">{status}</div>
        <div className="grid grid-cols-3 gap-2 mb-4">
          {Array(9)
            .fill(null)
            .map((_, index) => (
              <div key={index}>{renderSquare(index)}</div>
            ))}
        </div>
        <button
          className="w-full py-2 bg-green-500 text-white font-semibold rounded hover:bg-green-600 transition-colors"
          onClick={resetGame}
        >
          Restart Game
        </button>
      </div>
    </div>
  );
};

export default Game;

import React, { useState, useEffect } from 'react';
import './App.css';
import BoardComponent from './components/BoardComponent';
import { Board } from './models/Board';
import { Player } from './models/Player';
import { Colors } from './models/Colors';
import LostFigures from './components/LostFigures';
import Timer from './components/Timer';

function App() {
  const [board, setBoard] = useState(new Board())
  const [whitePlayer, setWhitePlayer] = useState(new Player(Colors.WHITE));
  const [blackPlayer, setBlackPlayer] = useState(new Player(Colors.BLACK));
  const [currentPlayer, setCurrentPlayer] = useState<Player | null>(null);

  useEffect(() => {
    restart();
  }, [])

  function restart(): void {
    const newBoard = new Board();
    newBoard.initCells();
    newBoard.addFigures();
    setBoard(newBoard);
    setCurrentPlayer(whitePlayer);
  }

  function swapPlayer(): void {
    setCurrentPlayer(currentPlayer?.color === Colors.WHITE ? blackPlayer : whitePlayer);
  }

  return (
    <div className="app">
      <Timer restart={restart} currentPlayer={currentPlayer}/>
      <BoardComponent 
        board = {board}
        setBoard = {setBoard}
        currentPlayer = {currentPlayer}
        swapPlayer = {swapPlayer}
      />
      <div>
        <LostFigures color='black' title="Черные фигуры" figures={board.lostBlackFigures}/>
        <LostFigures color='white' title="Белые фигуры" figures={board.lostWhiteFigures}/>
      </div>
    </div>
  );
}

export default App;


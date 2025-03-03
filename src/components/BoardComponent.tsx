import React, { useState, useEffect } from 'react';
import { Board } from '../models/Board.ts';
import CellComponent from './CellComponent.tsx';
import { Cell } from '../models/Cell.ts';
import { Player } from '../models/Player.ts';

interface BoardProps {
    board: Board;
    setBoard: (board: Board) => void
    currentPlayer: Player | null
    swapPlayer: () => void
}

const BoardComponent: React.FC<BoardProps> = ({board, setBoard, currentPlayer, swapPlayer}) => {
    const [selectedCell, setSelectedCell] = useState<Cell | null>(null);

    useEffect(() => {
        highlightCells();
    }, [selectedCell])

    function click(cell: Cell) {
        if (selectedCell && selectedCell !== cell && selectedCell.figure?.canMove(cell)) {
            selectedCell.moveFigure(cell);
            swapPlayer();
            setSelectedCell(null); 
        } else {
            if (cell.figure?.color === currentPlayer?.color) {
                setSelectedCell(cell)
            }
        }
    }
    
    function highlightCells() {
        board.highlightCells(selectedCell);
        updateBoard();
    }

    function updateBoard() {
        const newBoard = board.getCopyBoard();
        setBoard(newBoard);
    }

    return (
        <>
        <div className='sequence'>
            {currentPlayer?.color === "white" && <h3>Ход белых</h3>}
            {currentPlayer?.color === "black" && <h3>Ход черных</h3>}
        </div>
        <div className='board'>
            {board.cells.map((row, index) => {
                return (
                    <div key={index}>
                        {row.map(cell => 
                            <CellComponent 
                                click = {click}
                                cell={cell} 
                                key={cell.id}
                                selected = {cell.x === selectedCell?.x && cell.y === selectedCell?.y}
                            />
                        )}
                    </div>
                )  
            })}
        </div> 
    </>
        
    )
}

export default BoardComponent

 

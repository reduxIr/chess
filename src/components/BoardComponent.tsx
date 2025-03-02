import React, { useState, useEffect } from 'react';
import { Board } from '../models/Board.ts';
import CellComponent from './CellComponent.tsx';
import { Cell } from '../models/Cell.ts';

interface BoardProps {
    board: Board;
    setBoard: (board: Board) => void
}

const BoardComponent: React.FC<BoardProps> = ({board, setBoard}) => {
    const [selectedCell, setSelectedCell] = useState<Cell | null>(null);

    useEffect(() => {
        highlightCells();
    }, [selectedCell])

    function click(cell: Cell) {
        if (selectedCell && selectedCell !== cell && selectedCell.figure?.canMove(cell)) {
            selectedCell.moveFigure(cell);
            setSelectedCell(null); 
        } else {
            setSelectedCell(cell);
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
    )
}

export default BoardComponent

 

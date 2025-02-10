import React from 'react';
import { Board } from '../models/Board.ts';
import CellComponent from './CellComponent.tsx';

interface BoardProps {
    board: Board;
    setBoard: (board: Board) => void
}

const BoardComponent: React.FC<BoardProps> = ({board, setBoard}) => {
    return (
        <div className='board'>
            {board.cells.map((row, index) => {
                <div key={index}>
                    {row.map(cell => {
                        <CellComponent/>
                    })}
                </div>
            })}
        </div>
    )
}

export default BoardComponent

// ошибка в том, что boardComponent не видит cells из класса Board 

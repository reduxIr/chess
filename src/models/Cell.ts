import { Colors } from "./Colors.ts";
import { Figure } from "./figures/Figure.ts";
import { Board } from "./Board.ts";

export class Cell {
    readonly x: number;
    readonly y: number;
    readonly color: Colors;
    figure: Figure | null;
    board: Board;
    availible: boolean; // can it move or not
    id: number;         // for react key's

    constructor(board: Board, x: number, y: number, color: Colors, figure: Figure | null) {
        this.board = board;
        this.x = x;
        this.y = y;
        this.color = color;
        this.figure = figure
        this.availible = false;
        this.id = Math.random();
    }
}
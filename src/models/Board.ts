import { Cell } from "./Cell.ts";
import { Colors } from "./Colors.ts";



export class Board {
    cells: Cell[][]

    // create chessboard 
    public initCells() {
        for (let i = 0; i < 8; i++) {
            let row: Cell[] = [];
            for (let j = 0; j < 8; j++) {
                if ((i + j) % 2 !== 2) {
                    row?.push(new Cell(this, j, i, Colors.BLACK, null))
                } else {
                    row?.push(new Cell(this, j, i, Colors.WHITE, null))
                }
            } 
            this.cells?.push(row);
        }
    }
}
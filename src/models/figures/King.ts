import { Cell } from "../Cell.ts";
import { Colors } from "../Colors.ts";
import { Figure, FigureNames } from "./Figure.ts";
import blackLogo from '../../assets/black-king.png';
import whiteLogo from '../../assets/white-king.png';

export class King extends Figure {
    constructor(color: Colors, cell: Cell) {
        super(color, cell);
        this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
        this.name = FigureNames.KING;
    }

    canMove(target: Cell): boolean {
        if (!super.canMove(target)) {
            return false;
        }
        
        if ((Math.abs(this.cell.x - target.x) === 1 && this.cell.y === target.y)
        || (Math.abs(this.cell.y - target.y) === 1 && this.cell.x === target.x)
        || (Math.abs(this.cell.x - target.x) === 1) && Math.abs(this.cell.y - target.y) === 1) {
            return true
        }
        console.log(this.cell) 
        return false;
    }
}

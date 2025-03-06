import React from 'react';
import { Figure } from '../models/figures/Figure';
import {Board}  from "../models/Board";
interface LostFigureProps {
    color: string;
    title:  string;
    figures: Figure[];
}

const LostFigures: React.FC<LostFigureProps> = ({color ,title, figures}) => {
    return (
        <div className='lost'>
            <h3 className='lostString'>{title}</h3>
            {figures.map(figure => {
                return (
                    <div key={figure.id}>
                         {figure.logo && <img src={figure.logo}/>}
                    </div>
                )
                
            })}
        </div>
    )
} 

export default LostFigures;
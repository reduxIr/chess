import React from 'react';
import { Figure } from '../models/figures/Figure';

interface LostFigureProps {
    title:  string
    figures: Figure[]
}

const LostFigures: React.FC<LostFigureProps> = ({title, figures}) => {
    return (
        <div className="lost">
            <h3>{title}</h3>
            {figures.map(figure => {
                return (
                    <div key={figure.id}>
                        {figure.name} {figure.logo && <img src={figure.logo}/>}
                    </div>
                )
                
            })}
        </div>
    )
} 

export default LostFigures;
import React, {useState, useRef, useEffect} from 'react';
import { Player } from '../models/Player';
import { Colors } from '../models/Colors';

interface TimerProps {
    currentPlayer: Player | null;
    restart: () => void;
}

const Timer: React.FC<TimerProps> = ({currentPlayer, restart}) => { 
    const [blackTime, setBlackTime] = useState(300)     // сделай потом так, чтобы пользователь сам указывал время для обоих игроков
    const [whiteTime, setWhiteTime] = useState(300)
    const timer = useRef<null | ReturnType<typeof setInterval>>(null)

    useEffect(() => {
        startTimer()
    }, [currentPlayer])

    const startTimer = () => {
        if (timer.current) {
            clearInterval(timer.current)
        }
        const callback = currentPlayer?.color === Colors.WHITE ? decrementWhiteTimer : decrementBlackTimer;
        timer.current = setInterval(callback, 1000);
    }

    const decrementBlackTimer = () => {
        setBlackTime(prev => prev - 1);
    }
    const decrementWhiteTimer = () => {
        setWhiteTime(prev => prev - 1);
    }

    const handleRestart = () => {
        setWhiteTime(300);
        setBlackTime(300);
        restart()
    }

    return (
        <div>
            <div>
                <button id="reset" onClick={handleRestart}>Restart game</button>
            </div>
            <div className='timer'>
                <h2>Время черных: {blackTime}</h2>
                <h2>Время белых: {whiteTime}</h2>
            </div>
        </div> 
    )
}

export default Timer;


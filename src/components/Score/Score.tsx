import React from "react"

import './Score.css'

interface ScoreProps {
    movesDone: number;
    movesRemain: number;
}

export const Score: React.FC<ScoreProps> = (props: ScoreProps) => {
    const { movesDone, movesRemain } = props

    return (
        <div className="score-container">
            <div className="score">
                <div>
                    <span>Сделано ходов: </span>
                    <span className="color-accent">{movesDone}</span>
                </div>
                <div>
                    <span>Осталось ходов: </span>
                    <span className="color-accent">{movesRemain}</span>
                </div>
            </div>
        </div>
    )
}
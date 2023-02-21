import React from "react"

import './Score.css'

interface ScoreProps {
    moves: number;
    bestScore: number;
}

export const Score: React.FC<ScoreProps> = (props: ScoreProps) => {
    const { moves, bestScore } = props

    const handleOnClick = () => {
        window.location.reload()
    }

    return (
        <div className="score-container">
            <div className="score">
                <div>
                    <span>Moves: {moves}</span>
                </div>
                {localStorage.getItem('bestScore') && (
                    <div>
                        <span>Best Score: {bestScore}</span>
                    </div>
                )}
            </div>
            <div>
                <button onClick={handleOnClick}>Restart</button>
            </div>
        </div>
    )
}
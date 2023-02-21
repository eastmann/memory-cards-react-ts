import React, { useState } from 'react'

import { Score } from '../Score/Score'
import { Board } from '../Board/Board'

import './App.css'

const cardIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, ]
cardIds.sort(() => Math.random() - 0.5)

export const App = () => {
    const [moves] = useState<number>(0)
    const [bestScore] = useState<number>(
        parseInt(localStorage.getItem('bestScore') || '0')
    )

    return (
        <div className="app-container">
            <Score
                moves={moves}
                bestScore={bestScore}
            />
            <Board cardIds={cardIds}/>
        </div>
    )
}

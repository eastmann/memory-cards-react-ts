import React, { useState, useEffect, useRef } from 'react';

import { Card } from '../Card/Card'

import './Board.css'

interface BoardProps {
    cardIds: number[];
}

export const Board: React.FC<BoardProps> = (props: BoardProps) => {
    const { cardIds } = props;

    const [openCards, setOpenCards] = useState<number[]>([]);
    const [clearedCards, setClearedCards] = useState<number[]>([]);
    const [shouldDisableAllCards, setShouldDisableAllCards] = useState<boolean>(false);

    const disable = () => {
        setShouldDisableAllCards(true)
    }

    const enable = () => {
        setShouldDisableAllCards(false)
    }

    const evaluate = () => {
        const [first, second] = openCards
        enable()

        if((first % 6 + 1) === (second % 6 + 1)) {
            setClearedCards((prev) => [...prev, first, second])
            setOpenCards([])
            return
        }

    }

    const handleCardClick = (id: number) => {
        if (openCards.length === 1) {
            setOpenCards((prev) => [...prev, id]);
            disable()
        } else {
            setOpenCards([id])
        }
    }

    const checkIsFlipped = (id: number) => {
        return clearedCards.includes(id) || openCards.includes(id);
    }

    const checkIsInactive = (id: number) => {
        return clearedCards.includes(id)
    }

    return (
        <div className="board">
            {cardIds.map(id =>
                <Card
                    key={id}
                    id={id}
                    image={`./images/${id % 6 + 1}.png`}
                    isDisabled={shouldDisableAllCards}
                    isInactive={checkIsInactive(id)}
                    isFlipped={checkIsFlipped(id)}
                    onClick={handleCardClick}
                />
            )}
        </div>
    )
}
import React, { useState, useEffect, useRef } from 'react';

import { Card } from '../Card/Card'

import './Board.css'

import logo_1 from '../../images/1.svg'
import logo_2 from '../../images/2.svg'
import logo_3 from '../../images/3.svg'
import logo_4 from '../../images/4.svg'
import logo_5 from '../../images/5.svg'
import logo_6 from '../../images/6.svg'
import logo_7 from '../../images/7.svg'
import logo_8 from '../../images/8.svg'

const logos = [
    logo_1,
    logo_2,
    logo_3,
    logo_4,
    logo_5,
    logo_6,
    logo_7,
    logo_8,
]

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

        if ((first % 8 + 1) === (second % 8 + 1)) {
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
                    image={logos[id % 8 + 1]}
                    isDisabled={shouldDisableAllCards}
                    isInactive={checkIsInactive(id)}
                    isFlipped={checkIsFlipped(id)}
                    onClick={handleCardClick}
                />
            )}
        </div>
    )
}
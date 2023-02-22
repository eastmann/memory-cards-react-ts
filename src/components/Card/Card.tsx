import React from 'react';
import classNames from 'classnames'

import './Card.css'

interface CardProps {
    image: string;
    id: number;
    isInactive: boolean;
    isFlipped: boolean;
    isDisabled: boolean;
    onClick: (id: number) => void;
}

export const Card: React.FC<CardProps> = (props: CardProps) => {
    const { image, id, isInactive, isFlipped, isDisabled, onClick } = props

    const handleClick = () => {
        !isFlipped && !isDisabled && onClick(id)
    }

    return (
        <div className={classNames('card', {
            'is-flipped': isFlipped,
            'is-disabled': isDisabled,
        })}
        onClick={handleClick}
        >
            <div className="card-face">
                <span>K/C</span>
            </div>
            <div className="card-face card-back-face">
                <img src={image} alt="Card Face" />
            </div>
        </div>
    )
}
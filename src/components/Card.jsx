import React from 'react';
import './Card.css';

export default function Card(props) {
    return (
            <div className="card" onClick={props.onFlip}>
                <div className={`card-front ${props.isFlipped ? 'flipped' : ''}`}>
                    <h3>{props.card.question}</h3>
                </div>
                <div className={`card-back ${props.isFlipped ? 'flipped' : ''}`}>
                    {props.card.answer}
                </div>
            </div>
    )
}
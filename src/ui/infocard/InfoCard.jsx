import React from 'react';
import "./InfoCard.css"

function InfoCard({icon, title, description}) {
    return (
        <div className="info-card">
            <div className="info-card__icon">
                <img src={icon} alt={title}/>
            </div>
            <h3 className="info-card__title">{title}</h3>
            <p className="info-card__description">{description}</p>
        </div>
    );
}

export default InfoCard;
import React from 'react';

function ImagePopup({ onClose, card }) {
    return (
        <div className={`popup popup-image ${card && 'popup_opened'}`}>
            <div className="popup__image-container">
                <div className="popup__content">
                    <img src={card ? card.link : ''} alt={card && card.name} className="popup__image" />
                    <p className="popup__place-name">{card && card.name}</p>
                </div>
                <button type="button" aria-label="Закрыть попап"
                    className="popup__close popup__close_image" onClick={onClose}></button>
            </div>
        </div>
    );
}

export default ImagePopup;
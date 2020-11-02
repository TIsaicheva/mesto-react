function PopupWithForm (props) {
    return(
        <div className={`popup popup-${props.name} ${props.isOpen && 'popup_opened'}`}>
            <div className="popup__container">
                <button type="button" aria-label="Закрыть попап"
                    className="popup__close" onClick={props.onClose}></button>
                <h2 className="popup__title">{props.title}</h2>
                <form className="popup__form" name={`${props.name}Form`} noValidate>
                    {props.children}                 
                    <button type="submit" className="popup__submit">Сохранить</button>
                </form>
            </div>
        </div>
    );
}

export default PopupWithForm;
import React from 'react';
import PopupWithForm from './PopupWithForm';

function AddPlacePopup(props) {
    const placeNameRef = React.useRef();
    const placeUrlRef = React.useRef();

    function handleSubmit(e) {
        e.preventDefault();

        props.onAddPlace({
            link: placeUrlRef.current.value,
            name: placeNameRef.current.value
        });
    }

    return (
        <PopupWithForm
            name='add'
            title='Новое место'
            buttonName='Сохранить'
            isOpen={props.isOpen}
            onClose={props.onClose}
            onSubmit={handleSubmit}
            children={
                <>
                    <input
                        className="popup__input popup__input_placeName"
                        id="placeName"
                        type="text"
                        placeholder="Название"
                        name="name"
                        minLength="1"
                        maxLength="30"
                        required
                        ref={placeNameRef} />
                    <span className="popup__form-error" id="placeName-error"></span>
                    <input
                        className="popup__input popup__input_placeImageUrl"
                        id="placeImageUrl"
                        type="url"
                        placeholder="Ссылка на картинку"
                        name="link"
                        required
                        ref={placeUrlRef} />
                    <span className="popup__form-error"
                        id="placeImageUrl-error"></span>
                </>
            }
        />
    );
}

export default AddPlacePopup;
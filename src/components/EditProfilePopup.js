import React from 'react';
import PopupWithForm from './PopupWithForm';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function EditProfilePopup(props) {
    const currentUser = React.useContext(CurrentUserContext);
    const [name, setName] = React.useState();
    const [description, setDescription] = React.useState();

    function handleNameChange(e) {
        setName(e.target.value);
    }

    function handleDescriptionChange(e) {
        setDescription(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();

        props.onUpdateUser({
            name,
            about: description
        });
    }

    /* установка значений в форму по умолчанию */
    React.useEffect(() => {
        setName(currentUser.name);
        setDescription(currentUser.about);
    }, [currentUser]);

    return (
        <PopupWithForm
            name='edit'
            title='Редактировать профиль'
            buttonName='Сохранить'
            isOpen={props.isOpen}
            onClose={props.onClose}
            onSubmit={handleSubmit}
            children={
                <>
                    <input
                        className="popup__input popup__input_userName"
                        id="userName"
                        type="text"
                        placeholder="Имя"
                        name="userName"
                        minLength="2"
                        maxLength="40"
                        required
                        value={name || ''}
                        onChange={handleNameChange} />
                    <span className="popup__form-error" id="userName-error"></span>
                    <input
                        className="popup__input popup__input_userDescription"
                        id="userDescription"
                        type="text"
                        placeholder="О себе"
                        name="userDescription"
                        minLength="2"
                        maxLength="200"
                        required
                        value={description || ''}
                        onChange={handleDescriptionChange}
                    />
                    <span className="popup__form-error"
                        id="userDescription-error"></span>
                </>
            }
        />
    );
}

export default EditProfilePopup;
import React from 'react';
import PopupWithForm from './PopupWithForm';

function EditAvatarPopup(props) {
    const urlRef = React.useRef();

    function handleSubmit(e) {
        e.preventDefault();

        props.onUpdateAvatar({
            avatar: urlRef.current.value
        });
    }
    return (
        <PopupWithForm
            name='edit-avatar'
            title='Обновить аватар'
            buttonName='Сохранить'
            isOpen={props.isOpen}
            onClose={props.onClose}
            onSubmit={handleSubmit}
            children={
                <>
                    <input
                        className="popup__input popup__input_avatarUrl"
                        id="avatarUrl"
                        type="url"
                        placeholder="Ссылка на аватар"
                        name="url"
                        required
                        ref={urlRef} />
                    <span className="popup__form-error"
                        id="avatarUrl-error"></span>
                </>
            }
        />
    );
}

export default EditAvatarPopup;
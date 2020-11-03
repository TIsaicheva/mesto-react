import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
    const [isImagePopupOpen, setIsImagePopupOpen] = React.useState(false);
    const [selectedCard, setSelectedCard] = React.useState(null);

    function handleEditAvatarClick() {
        setIsEditAvatarPopupOpen(true);
    }

    function handleEditProfileClick() {
        setIsEditProfilePopupOpen(true);
    }

    function handleAddPlaceClick() {
        setIsAddPlacePopupOpen(true);
    }

    function handleCardClick(card) {
        setIsImagePopupOpen(true);
        setSelectedCard(card);
    }

    function closeAllPopups() {
        setIsEditAvatarPopupOpen(false);
        setIsEditProfilePopupOpen(false);
        setIsAddPlacePopupOpen(false);
        setIsImagePopupOpen(false);
        setSelectedCard(null);
    }

    return (
        <>
            <Header />
            <Main
                onEditProfile={handleEditProfileClick}
                onAddPlace={handleAddPlaceClick}
                onEditAvatar={handleEditAvatarClick}
                onCardClick={handleCardClick}
            />
            <Footer />
            <PopupWithForm
                name='edit'
                title='Редактировать профиль'
                buttonName='Сохранить'
                isOpen={isEditProfilePopupOpen}
                onClose={closeAllPopups}
                children={
                    <>
                        <input className="popup__input popup__input_userName"
                            id="userName" type="text"
                            placeholder="Имя" name="userName" minLength="2"
                            maxLength="40" required />
                        <span className="popup__form-error" id="userName-error"></span>
                        <input className="popup__input popup__input_userDescription"
                            id="userDescription" type="text"
                            placeholder="О себе" name="userDescription"
                            minLength="2" maxLength="200" required />
                        <span className="popup__form-error"
                            id="userDescription-error"></span>
                    </>
                }
            />
            <PopupWithForm
                name='add'
                title='Новое место'
                buttonName='Сохранить'
                isOpen={isAddPlacePopupOpen}
                onClose={closeAllPopups}
                children={
                    <>
                        <input className="popup__input popup__input_placeName"
                            id="placeName" type="text"
                            placeholder="Название" name="name" minLength="1"
                            maxLength="30" required />
                        <span className="popup__form-error" id="placeName-error"></span>
                        <input className="popup__input popup__input_placeImageUrl"
                            id="placeImageUrl" type="url"
                            placeholder="Ссылка на картинку" name="link" required />
                        <span className="popup__form-error"
                            id="placeImageUrl-error"></span>
                    </>
                }
            />
            <PopupWithForm
                name='edit-avatar'
                title='Обновить аватар'
                buttonName='Сохранить'
                isOpen={isEditAvatarPopupOpen}
                onClose={closeAllPopups}
                children={
                    <>
                        <input className="popup__input popup__input_avatarUrl"
                            id="avatarUrl" type="url"
                            placeholder="Ссылка на аватар" name="url" required />
                        <span className="popup__form-error"
                            id="avatarUrl-error"></span>
                    </>
                }
            />
            <ImagePopup
                onClose={closeAllPopups}
                card={selectedCard}
                isOpen={isImagePopupOpen}
            />
        </>
    );
}

export default App;

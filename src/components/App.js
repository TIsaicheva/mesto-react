import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';
import ImagePopup from './ImagePopup';
import api from '../utils/api';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function App() {
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
    const [isImagePopupOpen, setIsImagePopupOpen] = React.useState(false);
    const [selectedCard, setSelectedCard] = React.useState(null);
    const [currentUser, setCurrentUser] = React.useState({});
    const [cards, setCards] = React.useState([]);   

    React.useEffect(() => {
        Promise.all([
            api.getUserInfo(),
            api.getInitialCards()
        ])
            .then((responses) => {
                const [userInfo, initialCards] = responses;
                setCurrentUser(userInfo);
                setCards(initialCards);
            })
            .catch((err) => console.log(err));
    }, []);

    function handleCardLike(card) {
        const isLiked = card.likes.some(i => i._id === currentUser._id);

        api.changeLikeCardStatus(card._id, isLiked)
            .then((newCard) => {
                const newCards = cards.map(c => c._id === card._id ? newCard : c);
                setCards(newCards);
            })
            .catch((err) => console.log(err));
    }

    function handleCardDelete(card_id) {
        api.deleteCard(card_id)
            .then(() => {
                const newCards = cards.filter(i => i._id !== card_id);
                setCards(newCards);
            })
            .catch((err) => console.log(err));
    }

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

    function handleUpdateUser(userInfo) {
        api.editUserInfo(userInfo)
            .then((newUserInfo) => setCurrentUser(newUserInfo))
            .catch((err) => console.log(err));

        closeAllPopups();
    }

    function handleUpdateAvatar(userAvatar) {
        api.changeAvatar(userAvatar)
            .then((newUserInfo) => setCurrentUser(newUserInfo))
            .catch((err) => console.log(err));

        closeAllPopups();
    }

    function handleAddPlaceSubmit(cardInfo) {
        api.addCard(cardInfo)
            .then((newCard) => setCards([newCard, ...cards]))
            .catch((err) => console.log(err));

        closeAllPopups();
    }

    return (
        <CurrentUserContext.Provider value={currentUser}>
            <Header />
            <Main
                onEditProfile={handleEditProfileClick}
                onAddPlace={handleAddPlaceClick}
                onEditAvatar={handleEditAvatarClick}
                onCardClick={handleCardClick}
                cards={cards}
                onCardLike={handleCardLike}
                onCardDelete={handleCardDelete}
            />
            <Footer />
            <EditProfilePopup
                isOpen={isEditProfilePopupOpen}
                onClose={closeAllPopups}
                onUpdateUser={handleUpdateUser} />
            <EditAvatarPopup
                isOpen={isEditAvatarPopupOpen}
                onClose={closeAllPopups}
                onUpdateAvatar={handleUpdateAvatar} />
            <AddPlacePopup
                isOpen={isAddPlacePopupOpen}
                onClose={closeAllPopups}
                onAddPlace={handleAddPlaceSubmit} />
            <ImagePopup
                onClose={closeAllPopups}
                card={selectedCard}
                isOpen={isImagePopupOpen}
            />
        </CurrentUserContext.Provider>
    );
}

export default App;

// import logo from './logo.svg';
// import './App.css';
import Header from './Header';

function App() {
  return (
    <div className="root">
        <Header />
        <section className="profile">
            <div className="profile__data">
                <div className="profile__avatar"></div>
                <div className="profile__info">
                    <h1 className="profile__info-title">Жак-Ив Кусто</h1>
                    <button className="profile__info-edit-button form-button"
                        type="button"></button>
                    <p className="profile__info-subtitle">Исследователь океана</p>
                </div>
            </div>
            <button className="profile__add-button form-button" type="button"></button>
        </section>
        <section className="gallery">
            <ul className="gallery__items">
            </ul>
        </section>
        <footer className="footer">
            <p className="footer__copyright">© 2020 Mesto Russia</p>
        </footer>
        <div className="popup popup-edit">
            <div className="popup__container">
                <button type="button" aria-label="Закрыть попап"
                    className="popup__close"></button>
                <h2 className="popup__title">Редактировать профиль</h2>
                <form className="popup__form" name="profileForm" novalidate>
                    <input className="popup__input popup__input_userName"
                        id="userName" type="text"
                        placeholder="Имя" name="userName" minlength="2"
                        maxlength="40" required />
                    <span className="popup__form-error" id="userName-error"></span>
                    <input className="popup__input popup__input_userDescription"
                        id="userDescription" type="text"
                        placeholder="О себе" name="userDescription"
                        minlength="2" maxlength="200" required />
                    <span className="popup__form-error"
                        id="userDescription-error"></span>
                    <button type="submit" className="popup__submit">Сохранить</button>
                </form>
            </div>
        </div>
        <div className="popup popup-add">
            <div className="popup__container">
                <button type="button" aria-label="Закрыть попап"
                    className="popup__close"></button>
                <h2 className="popup__title">Новое место</h2>
                <form className="popup__form" name="editForm" novalidate>
                    <input className="popup__input popup__input_placeName"
                        id="placeName" type="text"
                        placeholder="Название" name="name" minlength="1"
                        maxlength="30" required />
                    <span className="popup__form-error" id="placeName-error"></span>
                    <input className="popup__input popup__input_placeImageUrl"
                        id="placeImageUrl" type="url"
                        placeholder="Ссылка на картинку" name="link" required />
                    <span className="popup__form-error"
                        id="placeImageUrl-error"></span>
                    <button type="submit" className="popup__submit">Сохранить</button>
                </form>
            </div>
        </div>

        <div className="popup popup-image">
            <div className="popup__image-container">
                <div className="popup__content">
                    <img src="images/photo.jpg" alt="Фото" className="popup__image" />
                    <p className="popup__place-name">Домбай</p>
                </div>
                <button type="button" aria-label="Закрыть попап"
                    className="popup__close popup__close_image"></button>
            </div>
        </div>

        <div className="popup popup-confirm">
            <div className="popup__container">
                <button type="button" aria-label="Закрыть попап"
                    className="popup__close"></button>
                <form className="popup__form" name="confirmForm" novalidate>
                    <h2 className="popup__confirm-request">Вы уверены?</h2>
                    <button type="submit" className="popup__submit">Да</button>
                </form>
            </div>
        </div>

        <div className="popup popup-edit-avatar">
            <div className="popup__container">
                <button type="button" aria-label="Закрыть попап"
                    className="popup__close"></button>
                <h2 className="popup__title">Обновить аватар</h2>
                <form className="popup__form" name="editAvatarForm" novalidate>
                    <input className="popup__input popup__input_avatarUrl"
                        id="avatarUrl" type="url"
                        placeholder="Ссылка на аватар" name="url" required />
                    <span className="popup__form-error"
                        id="avatarUrl-error"></span>
                    <button type="submit" className="popup__submit">Сохранить</button>
                </form>
            </div>
        </div>

        <template className="itemTemplate">
            <li className="item">
                <button className="item__delete item__delete_none"></button>
                <img src="#" alt="Фото" className="item__image" />
                <div className="item__wrapper">
                    <p className="item__text"></p>
                    <div className="item__likes">
                        <button className="item__like-icon" type="button"></button>
                        <p className="item__like-counter">0</p>
                    </div>
                </div>
            </li>
        </template>
    </div>
  );
}

export default App;

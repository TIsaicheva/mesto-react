function Main() {
    function handleEditAvatarClick() {
        const popup = document.querySelector('.popup-edit-avatar');
        popup.classList.add('popup_opened');
    }

    function handleEditProfileClick() {
        const popup = document.querySelector('.popup-edit');
        popup.classList.add('popup_opened');
    }

    function handleAddPlaceClick() {
        const popup = document.querySelector('.popup-add');
        popup.classList.add('popup_opened');
    }

    return (
        <>
            <section className="profile">
                <div className="profile__data">
                    <div className="profile__avatar" onClick={handleEditAvatarClick}></div>
                    <div className="profile__info">
                        <h1 className="profile__info-title">Жак-Ив Кусто</h1>
                        <button className="profile__info-edit-button form-button"
                            type="button" onClick={handleEditProfileClick}></button>
                        <p className="profile__info-subtitle">Исследователь океана</p>
                    </div>
                </div>
                <button className="profile__add-button form-button" type="button" onClick={handleAddPlaceClick}></button>
            </section>
            <section className="gallery">
                <ul className="gallery__items">
                </ul>
            </section>
        </>
    );
}

export default Main;
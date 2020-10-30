function Main() {
    return (
        <>
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
        </>
    );
}

export default Main;
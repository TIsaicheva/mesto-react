import React from 'react';
import api from '../utils/api.js';
import Card from './Card';

function Main(props) {
    const [userName, setUserName] = React.useState('');
    const [userDescription, setUserDescription] = React.useState('');
    const [userAvatar, setUserAvatar] = React.useState('');
    const [cards, setCards] = React.useState([]);

    React.useEffect(() => {
        Promise.all([            
            api.getUserInfo(),
            api.getInitialCards()
        ])
            .then((values) => {
                const [userInfo, initialCards] = values;
                setUserName(userInfo.name);
                setUserDescription(userInfo.about);
                setUserAvatar(userInfo.avatar);
                setCards(initialCards.map(item =>
                    ({
                        id: item._id,
                        name: item.name,
                        link: item.link,
                        likes: item.likes.length
                    })
                ));
            })
            .catch((err) => console.log(err));
    }, []);

    return (
        <>
            <section className="profile">
                <div className="profile__data">
                    <div className="profile__avatar"
                        onClick={props.onEditAvatar}
                        style={{ backgroundImage: `url(${userAvatar})` }}
                    ></div>
                    <div className="profile__info">
                        <h1 className="profile__info-title">{userName}</h1>
                        <button className="profile__info-edit-button form-button"
                            type="button" onClick={props.onEditProfile}></button>
                        <p className="profile__info-subtitle">{userDescription}</p>
                    </div>
                </div>
                <button className="profile__add-button form-button" type="button" onClick={props.onAddPlace}></button>
            </section>
            <section className="gallery">
                <ul className="gallery__items">
                    {
                        cards.map((card) => <Card key={card.id} card={card} onCardClick={props.onCardClick} />)
                    }
                </ul>
            </section>
        </>
    );
}

export default Main;
function Card(props) {
    function handleClick() {
        props.onCardClick(props.card);
    }

    return (
        <li className="item">
            <button className="item__delete"></button>
            <img src={props.card.link}
                alt={props.card.name}
                className="item__image"
                onClick={handleClick}
            />
            <div className="item__wrapper">
                <p className="item__text">{props.card.name}</p>
                <div className="item__likes">
                    <button className="item__like-icon" type="button"></button>
                    <p className="item__like-counter">{props.card.likes}</p>
                </div>
            </div>
        </li>
    );
}

export default Card;
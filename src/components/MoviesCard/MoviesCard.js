import './MoviesCard.css';

const MoviesCard = ({ card }) => {

    return (
        <li className="movie__element">
            <img src={card.link} alt={`Обложка к фильму ${card.name}`} className="movie__image" />
            {card.saved ? (
                <button type="submit" className="movie__button movie__button_type_saved" ></button>
            ) : (
                <button type="submit" className="movie__button movie__button_type_save" >Сохранить</button>
            )}
            <div className="movie__caption">
                <h2 className="movie__title">{card.name}</h2>
                <p className="movie__duration">1ч 17м</p>
            </div>
        </li>
    );
}

export default MoviesCard;
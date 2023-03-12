import './MoviesCard.css';
import { MOVIES_URL } from '../../utils/Constants'

const MoviesCard = ({ card }) => {

    return (
        <li className="movie__element">
            <img src={MOVIES_URL + card.image.url} alt={`Обложка к фильму ${card.nameRU}`} className="movie__image" />
            {card.saved ? (
                <button type="submit" className="movie__button movie__button_type_saved" ></button>
            ) : (
                <button type="submit" className="movie__button movie__button_type_save" >Сохранить</button>
            )}
            <div className="movie__caption">
                <h2 className="movie__title">{card.nameRU}</h2>
                <p className="movie__duration">{parseInt(card.duration / 60)}ч {card.duration - 60 * parseInt(card.duration / 60)}м</p>
            </div>
        </li>
    );
}

export default MoviesCard;
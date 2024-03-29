import './MoviesCard.css';
import { useLocation } from 'react-router-dom';

const MoviesCard = ({ card, onCardSave, onCardDelete, onCardUnsave }) => {

    const location = useLocation().pathname;

    const handleSaveButtonClick = () => {
        onCardSave(card);
    }

    const handleSavedButtonClick = () => {
        onCardUnsave(card);
    }

    const handleDeleteButtonClick = () => {
        onCardDelete(card);
    }

    // Если фильм в Movies - кнопка Сохранить и галочка сохраненного фильма
    // Если фильм в SavedMovies - кнопка удаления фильма
    return (
        <li className="movie__element">
            <a href={card.trailerLink} target="_blank" className="movie__link" rel="noreferrer">
                <img src={card.image} alt={`Обложка к фильму ${card.nameRU}`} className="movie__image" />
            </a>

            {location === '/movies' ? (
                <>
                    {
                        card.saved ? (
                            <button type="submit" className="movie__button movie__button_type_saved" onClick={handleSavedButtonClick}></button>
                        ) : (
                            <button type="submit" className="movie__button movie__button_type_save" onClick={handleSaveButtonClick}>Сохранить</button>
                        )
                    }
                </>
            ) : (
                <button type="submit" className="movie__button movie__button_type_delete" onClick={handleDeleteButtonClick}></button>
            )}
            <div className="movie__caption">
                <h2 className="movie__title">{card.nameRU}</h2>
                <p className="movie__duration">{parseInt(card.duration / 60)}ч {card.duration - 60 * parseInt(card.duration / 60)}м</p>
            </div>
        </li>
    );
}

export default MoviesCard;
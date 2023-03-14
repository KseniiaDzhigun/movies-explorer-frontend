import './MoviesCard.css';
import { useContext, useState, useEffect } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

const MoviesCard = ({ card, onCardSave }) => {

    const currentUser = useContext(CurrentUserContext);

    const [isSaved, setIsSaved] = useState(false);

    const handleSaveButtonClick = () => {
        onCardSave(card);
    }

    useEffect(() => {
        if (card.saved) {
            const isSaved = card.saved.some(id => id === currentUser._id);
            setIsSaved(isSaved);
        }
    }, [card.saved, currentUser._id]);


    return (
        <li className="movie__element">
            <img src={card.image} alt={`Обложка к фильму ${card.nameRU}`} className="movie__image" />
            {isSaved ? (
                <button type="submit" className="movie__button movie__button_type_saved" ></button>
            ) : (
                <button type="submit" className="movie__button movie__button_type_save" onClick={handleSaveButtonClick}>Сохранить</button>
            )}
            <div className="movie__caption">
                <h2 className="movie__title">{card.nameRU}</h2>
                <p className="movie__duration">{parseInt(card.duration / 60)}ч {card.duration - 60 * parseInt(card.duration / 60)}м</p>
            </div>
        </li>
    );
}

export default MoviesCard;
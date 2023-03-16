import './MoviesCard.css';
import { useContext, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

const MoviesCard = ({ card, onCardSave, onCardDelete }) => {

    const currentUser = useContext(CurrentUserContext);
    const location = useLocation().pathname;

    // const [isSaved, setIsSaved] = useState(false);

    // useEffect(() => {
    //     if (card.saved) {
    //         const isSaved = card.saved.some(id => id === currentUser._id);
    //         setIsSaved(isSaved);
    //     }
    // }, [card.saved, currentUser._id]);

    const handleSaveButtonClick = () => {
        onCardSave(card);
    }

    const handleSavedButtonClick = () => {
        onCardDelete(card);
    }


    return (
        <li className="movie__element">
            <img src={card.image} alt={`Обложка к фильму ${card.nameRU}`} className="movie__image" />
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
            ) : ''}
            <div className="movie__caption">
                <h2 className="movie__title">{card.nameRU}</h2>
                <p className="movie__duration">{parseInt(card.duration / 60)}ч {card.duration - 60 * parseInt(card.duration / 60)}м</p>
            </div>
        </li>
    );
}

export default MoviesCard;
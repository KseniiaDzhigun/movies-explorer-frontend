import './MoviesCardList.css';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useWindowSize } from '../../utils/Hooks';
import {
    LARGE_WINDOW_SIZE,
    MEDIUM_WINDOW_SIZE,
    SMALL_WINDOW_SIZE,
    MOVIES_LARGE_WINDOW,
    MOVIES_MEDIUM_WINDOW,
    MOVIES_SMALL_WINDOW,
    ADDED_MOVIES_LARGE_WINDOW,
    ADDED_MOVIES_MEDIUM_WINDOW,
    ADDED_MOVIES_SMALL_WINDOW,
  } from '../../utils/Constants';
import MoviesCard from '../MoviesCard/MoviesCard';

const MoviesCardList = ({ movies, errorsMessage, onCardSave, onCardUnsave, onCardDelete }) => {

    const size = useWindowSize();
    const location = useLocation().pathname;

    const [moviesNumber, setMoviesNumber] = useState(0);
    const [addedMoviesNumber, setAddedMoviesNumber] = useState(0);

    // Список видимых фильмов
    const [moviesList, setMoviesList] = useState(movies);

    const getMoviesNumber = () => {
        if (size.width >= LARGE_WINDOW_SIZE) {
            setMoviesNumber(MOVIES_LARGE_WINDOW);
            setAddedMoviesNumber(ADDED_MOVIES_LARGE_WINDOW);
        } else if (size.width >= MEDIUM_WINDOW_SIZE) {
            setMoviesNumber(MOVIES_MEDIUM_WINDOW);
            setAddedMoviesNumber(ADDED_MOVIES_MEDIUM_WINDOW);
        } else if (size.width >= SMALL_WINDOW_SIZE) {
            setMoviesNumber(MOVIES_SMALL_WINDOW);
            setAddedMoviesNumber(ADDED_MOVIES_SMALL_WINDOW);
        }
    }

    // При изменении размера меняем количество видимых карточек
    // При каждом новом поиске количество карточек возвращается к исходному значению
    useEffect(() => {
        getMoviesNumber();
    }, [size, movies]);

    // При изменении количества и каждом новом поиске обновляем список фильмов
    useEffect(() => {
        setMoviesList(movies.slice(0, moviesNumber));
    }, [movies, moviesNumber]);

    // Увеличиваем количество видимых карточек при нажатии кнопки Ещё
    const handleAddMovies = () => {
        setMoviesNumber(moviesNumber + addedMoviesNumber);
    }


    return (
        <section className="cards">
            {location === '/movies' ?
                (
                    <>
                        {
                            errorsMessage ? (
                                <p className="cards__error">{errorsMessage}</p>
                            ) : (
                                <ul className="cards__elements">
                                    {moviesList.map((card) => (
                                        <MoviesCard
                                            card={card}
                                            key={card.movieId}
                                            onCardSave={onCardSave}
                                            onCardUnsave={onCardUnsave}
                                        />))}
                                </ul>
                            )
                        }
                        <button
                            type="button"
                            className={(movies.length <= moviesNumber) ? "cards__button-more cards__button-more_hidden" : "cards__button-more"}
                            onClick={handleAddMovies}>
                            Ещё
                        </button>
                    </>
                ) : (
                    <>
                        {
                            errorsMessage ? (
                                <p className="cards__error" > {errorsMessage}</p>
                            ) : (
                                <ul className="cards__elements">
                                    {moviesList.map((card) => (
                                        <MoviesCard
                                            card={card}
                                            key={card._id}
                                            onCardSave={onCardSave}
                                            onCardDelete={onCardDelete}
                                        />))}
                                </ul>
                            )
                        }
                    </>
                )
            }
        </section >
    );
}

export default MoviesCardList;
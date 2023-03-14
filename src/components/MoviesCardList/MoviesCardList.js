import './MoviesCardList.css';
import { useState, useEffect } from 'react';
import { useWindowSize } from '../../utils/Hooks';
import MoviesCard from '../MoviesCard/MoviesCard';

const MoviesCardList = ({ movies, errorsMessage, onCardSave, isSaved }) => {

    const size = useWindowSize();

    const [moviesNumber, setMoviesNumber] = useState(0);
    const [addedMoviesNumber, setAddedMoviesNumber] = useState(0);
    const [moviesList, setMoviesList] = useState(movies);

    const getMoviesNumber = () => {
        if (size.width >= 1296) {
            setMoviesNumber(12);
            setAddedMoviesNumber(3);
        } else if (size.width >= 497) {
            setMoviesNumber(8);
            setAddedMoviesNumber(2);
        } else if (size.width >= 320) {
            setMoviesNumber(5);
            setAddedMoviesNumber(2);
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


    const handleAddMovies = () => {
        setMoviesNumber(moviesNumber + addedMoviesNumber);
    }


    return (
        <section className="cards">
            {
                errorsMessage ? (
                    <p className="cards__error">{errorsMessage}</p>
                ) : (
                    <ul className="cards__elements">
                        {moviesList.map((card) => (<MoviesCard card={card} key={card.id} onCardSave={onCardSave}
                        />))}
                    </ul>
                )
            }
            <button type="button" className={(movies.length <= moviesNumber) ? "cards__button-more cards__button-more_hidden" : "cards__button-more"} onClick={handleAddMovies}>Ещё</button>
        </section>
    );
}

export default MoviesCardList;
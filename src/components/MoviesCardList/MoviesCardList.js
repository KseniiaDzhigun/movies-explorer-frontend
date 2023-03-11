import './MoviesCardList.css';
import { useState, useEffect } from 'react';
import { useWindowSize } from '../../utils/Hooks';
import MoviesCard from '../MoviesCard/MoviesCard';

const MoviesCardList = ({ movies }) => {

    const size = useWindowSize();

    const [moviesNumber, setMoviesNumber] = useState(0);
    const [addedMoviesNumber, setAddedMoviesNumber] = useState(0);

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

    useEffect(() => {
        getMoviesNumber();
    }, [size]);

    let moviesList = movies.slice(0, moviesNumber);

    // const [moviesList, setMoviesList] = useState(visibleMoviesList);

    // const handleAddMovies = () => {
    //     let visibleMoviesList = movies.slice(0, (moviesNumber + addedMoviesNumber));
    //     setMoviesList(visibleMoviesList);
    // }

    // onClick={ handleAddMovies }

    return (
        <section className="cards">
            <ul className="cards__elements">
                {moviesList.map((card) => (<MoviesCard card={card} key={card.id} />))}
            </ul>
            <button type="button" className="cards__button-more">Ещё</button>
        </section>
    );
}

export default MoviesCardList;
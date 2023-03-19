import './SavedMovies.css';
import { useState, useEffect } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import { useLocation } from 'react-router-dom';
import SearchForm from '../SearchForm/SearchForm'
import MoviesCardList from '../MoviesCardList/MoviesCardList';

const SavedMovies = ({ loggedIn, savedMovies, foundMovies, moviesErrorMessage, onCardDelete, onSearch, onCheck }) => {

    const location = useLocation();

    const [movies, setMovies] = useState(savedMovies);

    useEffect(() => {
        if (foundMovies !== null) setMovies(foundMovies)
    }, [foundMovies])

    useEffect(() => {
        setMovies(savedMovies)
      }, [location, savedMovies])

    return (
        <>
            <Header loggedIn={loggedIn} />
            <main className="movies__content">
                <SearchForm onSearch={onSearch} onCheck={onCheck} />
                <MoviesCardList
                    movies={movies}
                    errorsMessage={moviesErrorMessage}
                    onCardDelete={onCardDelete}
                />
            </main>
            <Footer />
        </>
    );
}

export default SavedMovies;
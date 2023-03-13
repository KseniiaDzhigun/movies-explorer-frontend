import './Movies.css';
import { useState } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import { filterArray } from '../../utils/Helpers';
import {
    NOT_FOUND_MESSAGE
} from '../../utils/Constants';

const Movies = ({ loggedIn, movies, moviesErrorMessage }) => {

    const [cards, setCards] = useState([]);
    const [isChecked, setIsChecked] = useState(false);
    const [errorsMessage, setErrorsMessage] = useState('');
    const [loading, setLoading] = useState(false);

    const handleCheck = (active) => {
        setIsChecked(active);
    }

    const handleSearch = (movieReq) => {
        try {
            setLoading(true);
            setErrorsMessage('');
            const filteredMovies = filterArray(movies, movieReq, isChecked);
            console.log(filteredMovies);
            if (movies && (filteredMovies.length === 0)) {
                setErrorsMessage(NOT_FOUND_MESSAGE);
            }
            localStorage.setItem('movieRequest', movieReq);
            localStorage.setItem('checkBox', isChecked);
            localStorage.setItem('filteredMovies', JSON.stringify(filteredMovies));
            setCards(filteredMovies);
        } catch (err) {
            setErrorsMessage(moviesErrorMessage);
        } finally {
            setLoading(false);
        }
    }

    return (
        <>
            <Header loggedIn={loggedIn} />
            <main className="movies__content">
                <SearchForm onSearch={handleSearch} onCheck={handleCheck} />
                <Preloader loading={loading} />
                <MoviesCardList movies={cards} errorsMessage={errorsMessage} />
            </main>
            <Footer />
        </>
    );
}

export default Movies;
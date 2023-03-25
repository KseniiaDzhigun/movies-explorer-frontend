import './SavedMovies.css';
import { useState } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm'
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import { SHORT_DURATION } from '../../utils/Constants';

const SavedMovies = ({ loggedIn, movies, moviesErrorMessage, onCardDelete, onSearch, disabled }) => {

    const [isChecked, setIsChecked] = useState(false);

    // Меняем состояние стейта в зависимости от состояния чекбокса в компоненте FilterCheckBox
    const handleCheck = (checkboxStatus) => {
        if (checkboxStatus) {
            setIsChecked(true);
        } else {
            setIsChecked(false);
        }
    }

    return (
        <>
            <Header loggedIn={loggedIn} />
            <main className="movies__content">
                <SearchForm onSearch={onSearch} onCheck={handleCheck} disabled={disabled} />
                <MoviesCardList
                    movies={isChecked ? movies.filter((movie) => movie.duration <= SHORT_DURATION) : movies}
                    errorsMessage={moviesErrorMessage}
                    onCardDelete={onCardDelete}
                />
            </main>
            <Footer />
        </>
    );
}

export default SavedMovies;
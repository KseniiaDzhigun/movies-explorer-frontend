import './Movies.css';
import { useState } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import { SHORT_DURATION } from '../../utils/Constants';

const Movies = ({
    loggedIn,
    onSearch,
    loading,
    moviesErrorMessage,
    onCardSave,
    onCardUnsave,
    movies,
    disabled,
}) => {

    // При загрузке компонента получаем данные состояния чекбокса и текст запроса из LocalStorage
    const savedCheckStatus = JSON.parse(localStorage.getItem('checkBox'));
    const savedRequest = localStorage.getItem('movieKeyword');

    const [isChecked, setIsChecked] = useState(savedCheckStatus ? savedCheckStatus : false);

     // Меняем состояние стейта в зависимости от состояния чекбокса в компоненте FilterCheckBox
     // Сохраняем состояние стейта в LocalStorage
    const handleCheck = (checkboxStatus) => {
        if (checkboxStatus) {
            setIsChecked(true);
            localStorage.setItem('checkBox', true);
        } else {
            setIsChecked(false);
            localStorage.setItem('checkBox', false);
        }
    }

    return (
        <>
            <Header loggedIn={loggedIn} />
            <main className="movies__content">
                <SearchForm
                    onSearch={onSearch}
                    onCheck={handleCheck}
                    savedCheckStatus={savedCheckStatus}
                    savedRequest={savedRequest}
                    disabled={disabled}
                />
                <Preloader loading={loading} />
                <MoviesCardList
                // Фильтрация фильмов по продолжительности
                    movies={isChecked ? movies.filter((movie) => movie.duration <= SHORT_DURATION) : movies}
                    errorsMessage={moviesErrorMessage}
                    onCardSave={onCardSave}
                    onCardUnsave={onCardUnsave}
                />
            </main>
            <Footer />
        </>
    );
}

export default Movies;
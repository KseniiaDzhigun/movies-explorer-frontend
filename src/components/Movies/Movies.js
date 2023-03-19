import './Movies.css';
import { useState } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

const Movies = ({
    loggedIn,
    onSearch,
    onCheck,
    loading,
    moviesErrorMessage,
    onCardSave,
    onCardUnsave,
    movies,
}) => {

    const savedCheckStatus = JSON.parse(localStorage.getItem('checkBox'));
    const savedRequest = localStorage.getItem('movieKeyword');

    return (
        <>
            <Header loggedIn={loggedIn} />
            <main className="movies__content">
                <SearchForm onSearch={onSearch} onCheck={onCheck} savedCheckStatus={savedCheckStatus} savedRequest={savedRequest}/>
                <Preloader loading={loading} />
                <MoviesCardList
                    movies={movies}
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
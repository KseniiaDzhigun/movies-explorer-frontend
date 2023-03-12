import './Movies.css';
import { useState } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import { filterArray } from '../../utils/Helpers'; 

const Movies = ({ loggedIn, movies, loading }) => {

    const [cards, setCards] = useState([]);
    const [isChecked, setIsChecked] = useState(false);

    const handleCheck = (active) => {
        setIsChecked(active);
    }

    const handleSearch = (movieReq) => {
        const filteredMovies = filterArray(movies, movieReq, isChecked);
        console.log(filteredMovies);
        setCards(filteredMovies);
    }

    return (
        <>
            <Header loggedIn={loggedIn} />
            <main className="movies__content">
                <SearchForm onSearch={handleSearch} onCheck={handleCheck}/>
                <Preloader loading={loading} />
                <MoviesCardList movies={cards} />
            </main>
            <Footer />
        </>
    );
}

export default Movies;
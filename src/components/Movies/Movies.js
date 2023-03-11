import './Movies.css';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

const Movies = ({ loggedIn, movies, loading }) => {

    return (
        <>
            <Header loggedIn={loggedIn} />
            <main className="movies__content">
                <SearchForm />
                <Preloader loading={loading} />
                <MoviesCardList movies={movies} />
            </main>
            <Footer />
        </>
    );
}

export default Movies;
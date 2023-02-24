import './SavedMovies.css';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm'
import MoviesCardList from '../MoviesCardList/MoviesCardList';

const SavedMovies = ({ loggedIn, movies }) => {

    return (
        <>
        <Header loggedIn={loggedIn}/>
        <main className="movies__content">
            <SearchForm />
            <MoviesCardList movies={movies}/>
        </main>
        <Footer />
    </>
    );
}

export default SavedMovies;
import './Movies.css';
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
    movies,
    moviesErrorMessage,
    onCardSave,
    onCardDelete,
}) => {

    return (
        <>
            <Header loggedIn={loggedIn} />
            <main className="movies__content">
                <SearchForm onSearch={onSearch} onCheck={onCheck} />
                <Preloader loading={loading} />
                <MoviesCardList
                    movies={movies}
                    errorsMessage={moviesErrorMessage}
                    onCardSave={onCardSave}
                    onCardDelete={onCardDelete}
                />
            </main>
            <Footer />
        </>
    );
}

export default Movies;
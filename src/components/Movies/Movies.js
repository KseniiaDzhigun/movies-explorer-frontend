import './Movies.css';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm'

const Movies = ({ loggedIn }) => {

    return (
        <>
        <Header loggedIn={loggedIn}/>
        <main className="movies__content">
            <SearchForm />
        </main>
        <Footer />
    </>
    );
}

export default Movies;
import './Movies.css';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Movies = ({ loggedIn }) => {

    return (
        <main className="content">
            <Header loggedIn={loggedIn}/>
            <Footer />
        </main>
    );
}

export default Movies;
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

const MoviesCardList = ({ movies }) => {

    return (
        <section className="cards">
            <ul className="cards__elements">
            {movies.map((card) => (<MoviesCard card={card} key={card._id}/> ))}
            </ul>
            <button type="button" className="cards__button-more">Ещё</button>
        </section>
    );
}

export default MoviesCardList;
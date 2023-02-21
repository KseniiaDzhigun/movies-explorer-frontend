import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

const MoviesCardList = ({ movies }) => {

    return (
        <section className="cards">
            <ul className="cards__elements">
            {movies.map((card) => (<MoviesCard card={card} /> ))}
            {/* <MoviesCard name="33 слова о дизайне" link="https://i.postimg.cc/9FyJ64jz/film1.jpg" saved=""/> */}
            </ul>
            <button type="button" className="cards__button-more">Ещё</button>
        </section>
    );
}

export default MoviesCardList;
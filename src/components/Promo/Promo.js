import './Promo.css';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';

const Promo = ({ loggedIn }) => {

    return (
        <section className="promo">
            <Header loggedIn={loggedIn} />
            <h1 className="promo__title">
                Учебный проект студента факультета Веб&#8209;разработки.
            </h1>
            <p className="promo__text">
                Листайте ниже, чтобы узнать больше про этот проект и его создателя.
            </p>
            <Link to="/movies" className="promo__link" >
                Узнать больше
            </Link>
            <div class="rotation promo__logo"></div>
        </section>
    );
}

export default Promo;
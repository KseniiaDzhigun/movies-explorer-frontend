import './Promo.css';
import AnchorLink from "react-anchor-link-smooth-scroll";

const Promo = () => {

    return (
        <section className="promo">
            <div className="promo__content">
                <div className="promo__info">
                    <h1 className="promo__title">
                        Учебный проект студента факультета Веб&#8209;разработки.
                    </h1>
                    <p className="promo__text">
                        Листайте ниже, чтобы узнать больше про этот проект и его создателя.
                    </p>
                    <AnchorLink href="#about" className="promo__link">
                        Узнать больше
                    </AnchorLink>
                </div>
                <div class="rotation promo__logo"></div>
            </div>
        </section>
    );
}

export default Promo;
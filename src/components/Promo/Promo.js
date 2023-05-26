import './Promo.css';
import AnchorLink from "react-anchor-link-smooth-scroll";

const Promo = () => {

    return (
        <section className="promo">
            <div className="promo__content">
                <div className="promo__info">
                    <h1 className="promo__title">
                        Diploma project at the faculty of Web Development in Yandex Praktikum.
                    </h1>
                    <p className="promo__text">
                        Scroll down to find out more about this project and its creator.
                    </p>
                    <AnchorLink href="#about" className="promo__link">
                        Learn more
                    </AnchorLink>
                </div>
                <div className="rotation promo__logo"></div>
            </div>
        </section>
    );
}

export default Promo;
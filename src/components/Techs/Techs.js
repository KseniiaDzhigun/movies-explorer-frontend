import './Techs.css';
import SectionTitle from '../SectionTitle/SectionTitle';

const Techs = () => {

    return (
        <section className="techs">
            <SectionTitle text="Технологии" />
            <h3 className="techs__subtitle">
                7 технологий
            </h3>
            <p className="techs__text techs__text_description">
                На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.
            </p>
            <ul className="techs__list">
                <li className="techs__text techs__text_item">
                    HTML
                </li>
                <li className="techs__text techs__text_item">
                    CSS
                </li>
                <li className="techs__text techs__text_item">
                    JS
                </li>
                <li className="techs__text techs__text_item">
                    React
                </li>
                <li className="techs__text techs__text_item">
                    Git
                </li>
                <li className="techs__text techs__text_item">
                    Express.js
                </li>
                <li className="techs__text techs__text_item">
                    mongoDB
                </li>
            </ul>
        </section>
    );
}

export default Techs;
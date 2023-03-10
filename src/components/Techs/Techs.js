import './Techs.css';

const Techs = () => {

    return (
        <section className="techs">
            <h2 className="techs__title">
                Технологии
            </h2>
            <h3 className="techs__subtitle">
                7 технологий
            </h3>
            <p className="techs__text techs__text_type_description">
                На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.
            </p>
            <ul className="techs__list">
                <li className="techs__text techs__text_type_item">
                    HTML
                </li>
                <li className="techs__text techs__text_type_item">
                    CSS
                </li>
                <li className="techs__text techs__text_type_item">
                    JS
                </li>
                <li className="techs__text techs__text_type_item">
                    React
                </li>
                <li className="techs__text techs__text_type_item">
                    Git
                </li>
                <li className="techs__text techs__text_type_item">
                    Express.js
                </li>
                <li className="techs__text techs__text_type_item">
                    mongoDB
                </li>
            </ul>
        </section>
    );
}

export default Techs;
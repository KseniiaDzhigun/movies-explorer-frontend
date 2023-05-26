import './Techs.css';

const Techs = () => {

    return (
        <section className="techs">
            <h2 className="techs__title">
                Technologies
            </h2>
            <h3 className="techs__subtitle">
                7 Technologies
            </h3>
            <p className="techs__text techs__text_type_description">
                During the web development course, I learned the technologies that I applied in diploma project.
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
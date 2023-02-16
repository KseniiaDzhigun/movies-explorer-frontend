import './AboutProject.css';
import SectionTitle from '../SectionTitle/SectionTitle';

const AboutProject = () => {

    return (
        <section className="project">
            <SectionTitle text="О проекте" />
            <ul className="project__table">
                <li className="project__cell">
                    <h3 className="project__subtitle">
                        Дипломный проект включал 5 этапов
                    </h3>
                    <p className="project__text project__text_description">
                        Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.
                    </p>
                </li>
                <li>
                    <h3 className="project__subtitle">
                        На выполнение диплома ушло 5 недель
                    </h3>
                    <p className="project__text project__text_description">
                        У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.
                    </p>
                </li>
            </ul>
            <ul className="project__scale">
                <li className="project__text project__text_stage project__text_first-stage">
                        1 неделя
                </li>
                <li className="project__text project__text_stage project__text_second-stage">
                        4 недели
                </li>
                <li className="project__text project__text_type">
                        Back-end
                </li>
                <li className="project__text project__text_type">
                        Front-end
                </li>
            </ul>


        </section>
    );
}

export default AboutProject;
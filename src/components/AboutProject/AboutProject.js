import './AboutProject.css';

const AboutProject = () => {

    return (
        <section id="about" className="project">
            <h2 className="project__title">
                About project
            </h2>
            <ul className="project__table">
                <li className="project__cell">
                    <h3 className="project__subtitle">
                        The diploma project included 5 stages
                    </h3>
                    <p className="project__text project__text_type_description">
                        Drawing up the plan, backend, layout, adding functionality and final touches.
                    </p>
                </li>
                <li>
                    <h3 className="project__subtitle">
                        The diploma project took five weeks to complete
                    </h3>
                    <p className="project__text project__text_type_description">
                        Each stage had soft and hard deadlines that had to be met in order to successfully complete the diploma.
                    </p>
                </li>
            </ul>
            <ul className="project__scale">
                <li className="project__text project__text_type_stage project__text_type_first-stage">
                    1 week
                </li>
                <li className="project__text project__text_type_stage project__text_type_second-stage">
                    4 weeks
                </li>
                <li className="project__text project__text_type_phase">
                    Backend
                </li>
                <li className="project__text project__text_type_phase">
                    Frontend
                </li>
            </ul>
        </section>
    );
}

export default AboutProject;
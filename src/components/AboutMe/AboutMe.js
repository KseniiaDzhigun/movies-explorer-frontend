import './AboutMe.css';
import avatar from '../../images/me-avatar-kseniia.jpg';

const AboutMe = () => {

    return (
        <section className="me">
            <h2 className="me__title">
                Student
            </h2>
            <div className="me__info">
                <div className="me__text">
                    <h3 className="me__name">
                        Kseniia Dzhigun
                    </h3>
                    <p className="me__job-age">
                        Software Engineer React
                    </p>
                    <p className="me__detailed">
                        Software Engineer with a strong foundation in engineering, project management and experience with the energy sector. 
                        During the web development course, I learned to develop and build static and responsive websites as well as full stack applications using JS-based technologies. 
                        Continuously mastering to write clean, performant, and bug free code.
                    </p>
                    <a href="https://github.com/KseniiaDzhigun" target="_blank" className="me__link" rel="noreferrer">Github</a>
                </div>
                <img src={avatar} alt="" className="me__avatar" />
            </div>
        </section>
    );
}

export default AboutMe;
import './AboutMe.css';
import avatar from '../../images/me-avatar.jpg';

const AboutMe = () => {

    return (
        <section className="me">
            <h2 className="me__title">
                Студент
            </h2>
            <div className="me__info">
                <div className="me__text">
                    <h3 className="me__name">
                        Виталий
                    </h3>
                    <p className="me__job-age">
                        Фронтенд-разработчик, 30 лет
                    </p>
                    <p className="me__detailed">
                        Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить.
                        С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.
                    </p>
                    <a href="https://github.com/KseniiaDzhigun" target="_blank" class="me__link" rel="noreferrer">Github</a>
                </div>
                <img src={avatar} alt="" className="me__avatar" />
            </div>
        </section>
    );
}

export default AboutMe;
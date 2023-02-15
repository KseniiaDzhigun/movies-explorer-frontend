import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <p className="footer__project-name">Учебный проект Яндекс.Практикум х BeatFilm.</p>
            <div className="footer__info">
                <p className="footer__copyright">&copy; {new Date().getFullYear()}</p>
                <nav class="footer__menu">
                    <ul class="footer__links">
                        <li>
                            <a href="https://practicum.yandex.ru/" target="_blank" class="footer__link" rel="noreferrer">Яндекс.Практикум</a>
                        </li>
                        <li>
                            <a href="https://github.com/KseniiaDzhigun" target="_blank" class="footer__link" rel="noreferrer">Github</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </footer>
    );
}

export default Footer;
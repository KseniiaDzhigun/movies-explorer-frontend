import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <p className="footer__project-name">Training Project Yandex Practicum х BeatFilm.</p>
            <div className="footer__info">
                <p className="footer__copyright">&copy; {new Date().getFullYear()}</p>
                <nav className="footer__menu">
                    <ul className="footer__links">
                        <li>
                            <a href="https://practicum.yandex.ru/" target="_blank" className="footer__link" rel="noreferrer">Yandex Practicum</a>
                        </li>
                        <li>
                            <a href="https://github.com/KseniiaDzhigun" target="_blank" className="footer__link" rel="noreferrer">Github</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </footer>
    );
}

export default Footer;
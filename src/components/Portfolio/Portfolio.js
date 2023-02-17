import './Portfolio.css';

const Portfolio = () => {
    return (
        <portfolio className="portfolio">
            <h3 className="portfolio__title">
                Портфолио
            </h3>
            <nav class="portfolio__menu">
                <ul class="portfolio__links">
                    <li className="portfolio__project">
                        <a href="https://github.com/KseniiaDzhigun/how-to-learn" target="_blank" class="portfolio__link" rel="noreferrer">
                            Статичный сайт
                            <span className="portfolio__icon">↗</span>
                        </a>
                    </li>
                    <li className="portfolio__project">
                        <a href="https://github.com/KseniiaDzhigun/russian-travel" target="_blank" class="portfolio__link" rel="noreferrer">
                            Адаптивный сайт
                            <span className="portfolio__icon">↗</span>
                        </a>
                    </li>
                    <li className="portfolio__project">
                        <a href="https://github.com/KseniiaDzhigun/react-mesto-api-full" target="_blank" class="portfolio__link" rel="noreferrer">
                            Одностраничное приложение
                            <span className="portfolio__icon">↗</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </portfolio>
    );
}

export default Portfolio;
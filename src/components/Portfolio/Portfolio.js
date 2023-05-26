import './Portfolio.css';

const Portfolio = () => {
    return (
        <section className="portfolio">
            <h3 className="portfolio__title">
                Portfolio
            </h3>
            <nav className="portfolio__menu">
                <ul className="portfolio__links">
                    <li className="portfolio__project">
                        <a href="https://github.com/KseniiaDzhigun/how-to-learn" target="_blank" className="portfolio__link" rel="noreferrer">
                            Static website
                            <span className="portfolio__icon">↗</span>
                        </a>
                    </li>
                    <li className="portfolio__project">
                        <a href="https://github.com/KseniiaDzhigun/russian-travel" target="_blank" className="portfolio__link" rel="noreferrer">
                            Responsive website
                            <span className="portfolio__icon">↗</span>
                        </a>
                    </li>
                    <li className="portfolio__project">
                        <a href="https://github.com/KseniiaDzhigun/react-mesto-api-full" target="_blank" className="portfolio__link" rel="noreferrer">
                            Single-page application
                            <span className="portfolio__icon">↗</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </section>
    );
}

export default Portfolio;
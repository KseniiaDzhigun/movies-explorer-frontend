import './PageNotFound.css';
import { useNavigate } from 'react-router-dom';

const PageNotFound = () => {

    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
    };

    return (
        <main className="page__content">
            <h1 className="page__title">404</h1>
            <h2 className="page__subtitle">Страница не найдена</h2>
            <button onClick={goBack} className="page__button">Назад</button>
        </main>
    )
}

export default PageNotFound;


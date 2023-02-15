import './Navigation.css';
import { Link, NavLink } from 'react-router-dom';
import icon from '../../images/account-icon.svg';

const Navigation = ({ loggedIn }) => {
    return (
        <>
            {
                loggedIn ? (
                    <nav className="nav" >
                        <ul className="nav__links nav__links_movie">
                            <li>
                                <NavLink
                                    to="/movies"
                                    className={({ isActive }) =>
                                        isActive ? "nav__link nav__link_active nav__link_movie" : "nav__link nav__link_movie"
                                    }
                                >
                                    Фильмы
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/saved-movies"
                                    className={({ isActive }) =>
                                        isActive ? "nav__link nav__link_active nav__link_movie" : "nav__link nav__link_movie"
                                    }
                                >
                                    Сохранённые фильмы
                                </NavLink>
                            </li>
                        </ul>
                        <Link to="/movies" className="nav__link nav__link_account" >
                            <img
                                src={icon}
                                alt="Иконка аккаунта пользователя"
                                className="nav__icon"
                            />
                            Аккаунт
                        </Link>
                    </nav>
                ) : (
                    <nav className="nav">
                        <ul className="nav__links nav__links_sign">
                            <li>
                                <Link to="/signup" className="nav__link nav__link_main" >Регистрация</Link>
                            </li>
                            <li>
                                <Link to="/signin" className="nav__link nav__link_main nav__link_signin" >Войти</Link>
                            </li>
                        </ul>
                    </nav>
                )
            }
        </>

    );
}

export default Navigation;
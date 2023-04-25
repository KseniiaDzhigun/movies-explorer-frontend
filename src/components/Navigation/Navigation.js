import './Navigation.css';
import { Link, NavLink } from 'react-router-dom';
import icon from '../../images/account-icon.svg';

// При ширине окна браузера 908px и меньше в авторизованном состоянии появляется бургерное меню

const Navigation = ({ loggedIn }) => {
    return (
        <>
            {
                loggedIn ? (
                    <>
                        <input className="nav__side-menu" type="checkbox" id="side-menu" />
                        <label className="nav__hamb-menu" htmlFor="side-menu">
                            <span className="nav__hamb-line">
                            </span>
                        </label>
                        <nav className="nav nav_type_movies" >
                            <ul className="nav__links nav__links_type_movie">
                                <li className="nav__list-item">
                                    <NavLink
                                        to="/"
                                        className={({ isActive }) =>
                                            isActive ? "nav__link nav__link_active nav__link_type_movie" : "nav__link nav__link_type_movie"
                                        }
                                    >
                                        Главная
                                    </NavLink>
                                </li>
                                <li className="nav__list-item">
                                    <NavLink
                                        to="/movies"
                                        className={({ isActive }) =>
                                            isActive ? "nav__link nav__link_active nav__link_type_movie" : "nav__link nav__link_type_movie"
                                        }
                                    >
                                        Фильмы
                                    </NavLink>
                                </li>
                                <li className="nav__list-item">
                                    <NavLink
                                        to="/saved-movies"
                                        className={({ isActive }) =>
                                            isActive ? "nav__link nav__link_active nav__link_type_movie" : "nav__link nav__link_type_movie"
                                        }
                                    >
                                        Сохранённые фильмы
                                    </NavLink>
                                </li>
                                <li className="nav__list-item">
                                    <NavLink
                                        to="/profile"
                                        className={({ isActive }) =>
                                            isActive ? "nav__link nav__link_active nav__link_type_account" : "nav__link nav__link_type_account"
                                        }
                                    >
                                        <img
                                            src={icon}
                                            alt="Иконка аккаунта пользователя"
                                            className="nav__icon"
                                        />
                                        Аккаунт
                                    </NavLink>
                                </li>
                            </ul>
                        </nav>
                    </>
                ) : (
                    <nav className="nav nav_type_main">
                        <ul className="nav__links nav__links_type_sign">
                            <li>
                                <Link to="/signup" className="nav__link nav__link_type_main" >Регистрация</Link>
                            </li>
                            <li>
                                <Link to="/signin" className="nav__link nav__link_type_main nav__link_type_signin" >Войти</Link>
                            </li>
                        </ul>
                    </nav>
                )
            }
        </>

    );
}

export default Navigation;
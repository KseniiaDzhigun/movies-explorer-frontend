import './Navigation.css';
import { Link, NavLink } from 'react-router-dom';
import icon from '../../images/account-icon.svg';

const Navigation = ({ loggedIn }) => {
    return (
        <>
            {
                loggedIn ? (
                    <>
                        <input class="nav__side-menu" type="checkbox" id="side-menu" />
                        <label class="nav__hamb-menu" for="side-menu">
                            <span class="nav__hamb-line">
                            </span>
                        </label>
                        <nav className="nav nav__movies" >
                            <ul className="nav__links nav__links_movie">
                                <li className="nav__list-item">
                                    <NavLink
                                        to="/"
                                        className={({ isActive }) =>
                                            isActive ? "nav__link nav__link_active nav__link_movie" : "nav__link nav__link_movie"
                                        }
                                    >
                                        Главная
                                    </NavLink>
                                </li>
                                <li className="nav__list-item">
                                    <NavLink
                                        to="/movies"
                                        className={({ isActive }) =>
                                            isActive ? "nav__link nav__link_active nav__link_movie" : "nav__link nav__link_movie"
                                        }
                                    >
                                        Фильмы
                                    </NavLink>
                                </li>
                                <li className="nav__list-item">
                                    <NavLink
                                        to="/saved-movies"
                                        className={({ isActive }) =>
                                            isActive ? "nav__link nav__link_active nav__link_movie" : "nav__link nav__link_movie"
                                        }
                                    >
                                        Сохранённые фильмы
                                    </NavLink>
                                </li>
                                <li className="nav__list-item">
                                    <NavLink
                                        to="/profile"
                                        className={({ isActive }) =>
                                            isActive ? "nav__link nav__link_active nav__link_account" : "nav__link nav__link_account"
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
                            {/* <Link to="/movies" className="nav__link nav__link_account" >
                                <img
                                    src={icon}
                                    alt="Иконка аккаунта пользователя"
                                    className="nav__icon"
                                />
                                Аккаунт
                            </Link> */}
                        </nav>
                    </>
                ) : (
                    <nav className="nav nav__main">
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
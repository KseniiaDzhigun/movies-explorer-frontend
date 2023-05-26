import './Navigation.css';
import { Link, NavLink } from 'react-router-dom';
import icon from '../../images/account-icon.svg';

// With a browser window width of 908px or less, in the authorised state the burger menu appears 

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
                                        Main
                                    </NavLink>
                                </li>
                                <li className="nav__list-item">
                                    <NavLink
                                        to="/movies"
                                        className={({ isActive }) =>
                                            isActive ? "nav__link nav__link_active nav__link_type_movie" : "nav__link nav__link_type_movie"
                                        }
                                    >
                                        Movies
                                    </NavLink>
                                </li>
                                <li className="nav__list-item">
                                    <NavLink
                                        to="/saved-movies"
                                        className={({ isActive }) =>
                                            isActive ? "nav__link nav__link_active nav__link_type_movie" : "nav__link nav__link_type_movie"
                                        }
                                    >
                                        Saved Movies
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
                                            alt="User account icon"
                                            className="nav__icon"
                                        />
                                        Profile
                                    </NavLink>
                                </li>
                            </ul>
                        </nav>
                    </>
                ) : (
                    <nav className="nav nav_type_main">
                        <ul className="nav__links nav__links_type_sign">
                            <li>
                                <Link to="/signup" className="nav__link nav__link_type_main" >SIGN UP</Link>
                            </li>
                            <li>
                                <Link to="/signin" className="nav__link nav__link_type_main nav__link_type_signin" >SIGN IN</Link>
                            </li>
                        </ul>
                    </nav>
                )
            }
        </>

    );
}

export default Navigation;
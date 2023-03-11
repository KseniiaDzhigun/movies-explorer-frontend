import './Header.css';
import { Link } from 'react-router-dom';
import logo from '../../images/header-logo.svg';
import Navigation from '../Navigation/Navigation';

const Header = ({ loggedIn, main }) => {
    return (
        <header className={loggedIn ? (main ? "header header_type_movies header_type_main-location" : "header header_type_movies") : "header header_type_main header_type_main-location"}>
            <Link to="/" className="header__link" >
                <img
                    src={logo}
                    alt="логотип Movies"
                    className="header__logo"
                />
            </Link>
            <Navigation loggedIn={loggedIn}/>
        </header>
    );
}

export default Header;
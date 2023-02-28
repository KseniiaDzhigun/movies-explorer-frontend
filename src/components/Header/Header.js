import './Header.css';
import { Link } from 'react-router-dom';
import logo from '../../images/header-logo.svg';
import Navigation from '../Navigation/Navigation';

const Header = ({ loggedIn }) => {
    return (
        <header className={loggedIn ? "header header_loggedin" : "header header_type_main"}>
            <Link to="/" className="header__link" >
                <img
                    src={logo}
                    alt="логотип Movies"
                    className="header__logo"
                />
            </Link>
            <Navigation loggedIn={loggedIn} />
        </header>
    );
}

export default Header;
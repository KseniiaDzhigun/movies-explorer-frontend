import './Header.css';
import logo from '../../images/header-logo.svg';
import Navigation from '../Navigation/Navigation';

const Header = ({ loggedIn }) => {
    return (
        <header className={ loggedIn ? "header header_loggedin" : "header header_type_main"}>
            <img
                src={logo}
                alt="логотип Movies"
                className="header__logo"
            />
            <Navigation loggedIn={loggedIn} />
        </header>
    );
}

export default Header;
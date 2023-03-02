import './SignForm.css';
import logo from '../../images/header-logo.svg';
import { Link } from 'react-router-dom';

const SignForm = ({ title, button, children, text, link, linkText, onSubmit }) => {

    return (
        <main className="sign">
            <Link to="/" className="sign__logo-link" >
                <img
                    src={logo}
                    alt="логотип Movies"
                    className="sign__logo"
                />
            </Link>
            <h1 className="sign__title">{title}</h1>
            <form className="sign__form" onSubmit={onSubmit} noValidate>
                <fieldset className="sign__form-set">
                    {children}
                </fieldset>
                <button type="submit" className="sign__submit-button">{button}</button>
            </form>
            <div className="sign__login">
                <p className="sign__login-text">{text}</p>
                <Link to={link} className="sign__login-link">{linkText}</Link>
            </div>
        </main>
    );
}

export default SignForm;
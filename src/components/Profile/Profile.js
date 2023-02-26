import './Profile.css';
import { useState } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import { Link } from 'react-router-dom';

const Profile = ({ loggedIn }) => {

    const [userData, setUserData] = useState({
        name: 'Виталий',
        email: 'pochta@yandex.ru',
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({
            ...userData,
            [name]: value
        });
    }

    return (
        <>
            <Header loggedIn={loggedIn} />
            <main className="profile__content">
                <h1 className="profile__title">Привет, Виталий!</h1>
                <form className="profile__form" >
                    <fieldset className="profile__form-set">

                        <p className="profile__field">
                            <label for="name-input" className="profile__label">Имя</label>
                            <input value={userData.name} onChange={handleChange} id="name-input" type="text" name="name"
                                className="profile__input profile__input_type_name" minLength="3" maxLength="30" required />
                            <span className="profile__input-error"></span>
                        </p>
                        <p className="profile__field">
                            <label for="email-input" className="profile__label">E‑mail</label>
                            <input value={userData.email} onChange={handleChange} id="email-input" type="email" name="email"
                                className="profile__input profile__input_type_email" minLength="3" maxLength="30" required />
                            <span className="profile__input-error"></span>
                        </p>
                    </fieldset>
                    <button type="submit" className="profile__submit-button">Редактировать</button>
                </form>
                <Link to="/signin" className="profile__exit-link">Выйти из аккаунта</Link>
            </main>
            <Footer />
        </>
    );
}

export default Profile;
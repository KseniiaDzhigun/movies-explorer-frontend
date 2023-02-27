import './Profile.css';
import { useState } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { inputOptions } from '../../utils/Constants'

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

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <>
            <Header loggedIn={loggedIn} />
            <main className="profile__content">
                <h1 className="profile__title">Привет, Виталий!</h1>
                <form className="profile__form" onSubmit={handleSubmit(onSubmit)} >
                    <fieldset className="profile__form-set">

                        <div className="profile__field">
                            <label htmlFor="name-input" className="profile__label">Имя</label>
                            <div className="profile__input-text">
                                <input
                                    value={userData.name}
                                    id="name-input"
                                    name="name"
                                    type="text"
                                    className={errors.name ? "profile__input profile__input_error" : "profile__input"}
                                    {...register("name", { ...inputOptions.name, onChange: handleChange })}
                                    placeholder="Имя пользователя"
                                />
                                <p className="profile__error">{errors.name ? errors.name.message : ''}</p>
                            </div>
                        </div>
                        <div className="profile__field">
                            <label htmlFor="email-input" className="profile__label">E‑mail</label>
                            <div className="profile__input-text">
                                <input
                                    value={userData.email}
                                    id="email-input"
                                    name="email"
                                    type="email"
                                    className={errors.email ? "profile__input profile__input_error" : "profile__input"}
                                    {...register("email", { ...inputOptions.email, onChange: handleChange })}
                                    placeholder="Email"
                                />
                                <p className="profile__error">{errors.email ? errors.email.message : ''}</p>
                            </div>
                        </div>
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
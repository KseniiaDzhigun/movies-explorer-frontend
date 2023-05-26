import './Profile.css';
import { useState, useContext } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { inputOptions } from '../../utils/Helpers'

const Profile = ({ loggedIn, onLogout, onUpdate, disabled }) => {

    const currentUser = useContext(CurrentUserContext);

    const [userData, setUserData] = useState({
        name: currentUser.name,
        email: currentUser.email,
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({
            ...userData,
            [name]: value
        });
    }

    // Для управления формой используем хук useForm, валидация при каждом измененении инпута
    const { register, handleSubmit, formState: { errors, isDirty, isValid } } = useForm({ mode: 'onChange' });

    // Если данные введены не корректно и не отличаются от изначальных — кнопка «Редактировать» не активна
    const submitButtonDisabled = !isDirty || !isValid || disabled || (userData.name === currentUser.name && userData.email === currentUser.email);

    const onSubmit = () => {
        let { name, email } = userData;
        onUpdate({ name, email });
    }

    return (
        <>
            <Header loggedIn={loggedIn} />
            <main className="profile__content">
                <h1 className="profile__title">Hello, {currentUser.name}!</h1>
                <form className="profile__form" onSubmit={handleSubmit(onSubmit)} >
                    <fieldset className="profile__form-set" disabled={disabled}>

                        <div className="profile__field">
                            <label htmlFor="name-input" className="profile__label">Name</label>
                            <div className="profile__input-text">
                                <input
                                    value={userData.name}
                                    id="name-input"
                                    name="name"
                                    type="text"
                                    className={errors.name ? "profile__input profile__input_error" : "profile__input"}
                                    {...register("name", { ...inputOptions.name, onChange: handleChange })}
                                    placeholder="User name"
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
                    <button
                        type="submit"
                        disabled={submitButtonDisabled}
                        className={submitButtonDisabled ? "profile__submit-button profile__submit-button_disabled" : "profile__submit-button"} >
                        EDIT PROFILE
                    </button>
                </form>
                <Link to="/signin" onClick={onLogout} className="profile__exit-link">SIGN OUT</Link>
            </main>
            <Footer />
        </>
    );
}

export default Profile;
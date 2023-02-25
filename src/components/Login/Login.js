import './Login.css';
import { useState } from 'react';
import SignForm from '../SignForm/SignForm';

const Login = () => {

    const [userData, setUserData] = useState({
        email: '',
        password: '',
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({
            ...userData,
            [name]: value
        });
    }

    return (
        <SignForm
            title="Рады видеть!"
            button="Войти"
            text="Ещё не зарегистрированы?"
            link="/signup"
            linkText="Регистрация"
        >
            <label for="email-input" className="sign__label">E-mail</label>
            <input value={userData.email} onChange={handleChange} id="email-input" type="email" name="email"
                className="sign__input sign__input_type_email" minLength="3" maxLength="30" required />
            <span className="sign__input-error"></span>

            <label for="password-input" className="sign__label">Пароль</label>
            <input value={userData.password} onChange={handleChange} id="password-input" type="password" name="password"
                className="sign__input sign__input_type_password" required />
            <span className="sign__input-error"></span>
        </SignForm>
    )
}

export default Login;
import './Register.css';
import { useState } from 'react';
import SignForm from '../SignForm/SignForm';

const Register = () => {

    const [userData, setUserData] = useState({
        name: '',
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
            title="Добро пожаловать!"
            button="Зарегистрироваться"
            text="Уже зарегистрированы?"
            link="/signin"
            linkText="Войти"
        >
            <label for="name-input" className="sign__label">Имя</label>
            <input value={userData.name} onChange={handleChange} id="name-input" type="text" name="name"
                className="sign__input sign__input_type_name" minLength="3" maxLength="30" required />
            <span className="sign__input-error"></span>

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

export default Register;
import './Login.css';
import { useState } from 'react';
import SignForm from '../SignForm/SignForm';
import { useForm } from 'react-hook-form';
import { inputOptions } from '../../utils/Constants'

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

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <SignForm
            title="Рады видеть!"
            button="Войти"
            text="Ещё не зарегистрированы?"
            link="/signup"
            linkText="Регистрация"
            onSubmit={handleSubmit(onSubmit)}
        >
            <label htmlFor="email-input" className="sign__label">E-mail</label>
            <input
                value={userData.email}
                id="email-input"
                name="email"
                type="email"
                {...register("email", {...inputOptions.email, onChange: handleChange})}
                className={errors.email ? "sign__input sign__input_error" : "sign__input"}
                placeholder="Введите email"
            />
            <p className="sign__error">{errors.email ? errors.email.message : ''}</p>

            <label htmlFor="password-input" className="sign__label">Пароль</label>
            <input
                value={userData.password} 
                id="password-input" 
                name="password"
                type="password" 
                className={errors.password ? "sign__input sign__input_error" : "sign__input"}
                {...register("password", {...inputOptions.password, onChange: handleChange})}
                placeholder="Введите пароль"
                />
            <p className="sign__error">{errors.password ? errors.password.message : ''}</p>
        </SignForm>
    )
}

export default Login;
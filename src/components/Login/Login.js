import './Login.css';
import { useState } from 'react';
import SignForm from '../SignForm/SignForm';
import { useForm } from 'react-hook-form';
import { inputOptions } from '../../utils/Helpers';

const Login = ({ onLogin, errorsMessage }) => {

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

    // Для управления формой используем хук useForm, валидация при каждом измененении инпута
    const { register, handleSubmit, formState: { errors, isDirty, isValid } } = useForm({ mode: 'onChange' });
    
    const onSubmit = () => {
        let { email, password } = userData;
        onLogin({ email, password });
    }

    return (
        <SignForm
            title="Рады видеть!"
            button="Войти"
            text="Ещё не зарегистрированы?"
            link="/signup"
            linkText="Регистрация"
            onSubmit={handleSubmit(onSubmit)}
            disabled={!isDirty || !isValid} 
            errorsMessage={errorsMessage}
        >
            <label htmlFor="email-input" className="sign__label">E-mail</label>
            <input
                value={userData.email}
                id="email-input"
                type="email"
                className={errors.email ? "sign__input sign__input_error" : "sign__input"}
                {...register("email", { ...inputOptions.email, onChange: handleChange })}
                placeholder="Введите email"
            />
            <p className="sign__error">{errors.email ? errors.email.message : ''}</p>

            <label htmlFor="password-input" className="sign__label">Пароль</label>
            <input
                value={userData.password}
                id="password-input"
                type="password"
                className={errors.password ? "sign__input sign__input_error" : "sign__input"}
                {...register("password", { ...inputOptions.password, onChange: handleChange })}
                placeholder="Введите пароль"
            />
            <p className="sign__error">{errors.password ? errors.password.message : ''}</p>
        </SignForm>
    )
}

export default Login;
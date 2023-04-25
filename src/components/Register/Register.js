import './Register.css';
import { useState } from 'react';
import SignForm from '../SignForm/SignForm';
import { useForm } from 'react-hook-form';
import { inputOptions } from '../../utils/Helpers';

const Register = ({ onRegister, errorsMessage, disabled }) => {

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

    // Для управления формой используем хук useForm, валидация при каждом измененении инпута
    const { register, handleSubmit, formState: { errors, isDirty, isValid } } = useForm({mode: 'onChange'});

    const onSubmit = () => {
        let { name, email, password } = userData;
        onRegister({ name, email, password });
    }

    return (
        <SignForm
            title="Добро пожаловать!"
            button="Зарегистрироваться"
            text="Уже зарегистрированы?"
            link="/signin"
            linkText="Войти"
            onSubmit={handleSubmit(onSubmit)}
            buttonDisabled={!isDirty || !isValid || disabled} 
            errorsMessage={errorsMessage}
            inputsDisabled={disabled}
        >
            <label htmlFor="name-input" className="sign__label">Имя</label>
            <input
                value={userData.name}
                id="name-input"
                type="text"
                className={errors.name ? "sign__input sign__input_error" : "sign__input"}
                {...register("name", {...inputOptions.name, onChange: handleChange})}
                placeholder="Введите имя"
            />
            <p className="sign__error">{errors.name ? errors.name.message : ''}</p>

            <label htmlFor="email-input" className="sign__label">E-mail</label>
            <input
                value={userData.email}
                id="email-input"
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
                type="password" 
                className={errors.password ? "sign__input sign__input_error" : "sign__input"}
                {...register("password", {...inputOptions.password, onChange: handleChange})}
                placeholder="Введите пароль"
                />
            <p className="sign__error">{errors.password ? errors.password.message : ''}</p>
        </SignForm>
    )
}

export default Register;
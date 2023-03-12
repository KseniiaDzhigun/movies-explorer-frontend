

export const inputOptions = {
    name: {
        required: "Обязательное поле",
        pattern: {
            value: /^[А-ЯA-Zё\s-]+$/ig,
            message: "Используйте латиницу, кириллицу, пробел или дефис"
        },
    },
    email: {
        required: "Обязательное поле",
        pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "Некорректный адрес электронной почты"
        },
    },
    password: {
        required: "Обязательное поле",
        minLength: {
            value: 8,
            message: "Пароль должен содержать минимум 8 символов"
        },
    },
    movie: {
        required: "Нужно ввести ключевое слово",
        pattern: {
            value: /^[-?!,.а-яА-ЯёЁ0-9\s]+$/,
            message: "Используйте только символы кириллицы"
        },
    },
};

export const filterArray = (movies, movieRequest, isChecked) => {
    console.log(isChecked);

    if (isChecked) {
        const result = movies.filter(function checkMovies(movie) {
            return ((movie.duration <= 40) && movie.nameRU.includes(movieRequest));
        })
        return result;
    } else {
        const result = movies.filter(function checkMovies(movie) {
            return ((movie.duration > 40) && movie.nameRU.includes(movieRequest));
        })
        return result;
    }
}
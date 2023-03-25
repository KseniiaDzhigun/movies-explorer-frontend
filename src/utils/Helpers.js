import { MOVIES_URL, SHORT_DURATION } from './Constants'

// Валидация данных, введённых пользователем
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
            value: /^[-?!,.а-яА-ЯёЁ0-9\s]+$/i,
            message: "Используйте только символы кириллицы"
        },
    },
};

// Сортировка фильмов по ключевому слову, которое ввёл пользователь, и чекбоксу для короткометражных фильмов
// export const filterArray = (movies, keyword, isChecked) => {
//     const request = new RegExp(keyword, 'i');
//     if (isChecked) {
//         const result = movies.filter(function checkMovies(movie) {
//             return ((movie.duration <= SHORT_DURATION) && request.test(movie.nameRU));
//         })
//         return result;
//     } else {
//         const result = movies.filter(function checkMovies(movie) {
//             return request.test(movie.nameRU);
//         })
//         return result;
//     }
// }

export const filterArray = (movies, keyword) => {
    const request = new RegExp(keyword, 'i');
    return movies.filter((movie) => request.test(movie.nameRU));
}

export const filterByCheckbox = (movies, isChecked) => {
    if (isChecked) {
        return  movies.filter((movie) => movie.duration <= SHORT_DURATION);
    } else {
        return movies;
    }
}

// Уже сохранённые пользователем фильмы в блоке результатов Movies имеют активную иконку лайка
export const addSavedToArray = (savedArray, array) => {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < savedArray.length; j++) {
            if (savedArray[j].movieId === array[i].movieId) {
                array[i]['saved'] = true;
            }
        }
    }
    return array;
}

// Адаптируем данные фильма, которые пришли с BeatfilmMoviesApi для карточки фильма в Movies

export const adaptCardToMovies = (card) => {
    return {
        country: card.country,
        director: card.director,
        duration: card.duration,
        year: card.year,
        description: card.description,
        image: MOVIES_URL + card.image.url,
        trailerLink: card.trailerLink,
        thumbnail: MOVIES_URL + card.image.formats.thumbnail.url,
        movieId: card.id,
        nameRU: card.nameRU,
        nameEN: card.nameEN,
        saved: false,
    }
}

// Адаптируем данные фильма из списка в Movies для сохранения фильма на нашем сервере
export const adaptCardToSaved = (card) => {
    return {
        country: card.country,
        director: card.director,
        duration: card.duration,
        year: card.year,
        description: card.description,
        image: card.image,
        trailerLink: card.trailerLink,
        thumbnail: card.thumbnail,
        movieId: card.movieId,
        nameRU: card.nameRU,
        nameEN: card.nameEN,
    }
}

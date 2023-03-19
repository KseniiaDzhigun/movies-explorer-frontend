import { MOVIES_URL } from './Constants'

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

export const initialCards = [
    {
        name: '33 слова о дизайне',
        link: 'https://i.postimg.cc/9FyJ64jz/film1.jpg',
        _id: 1,
        saved: false,
    },
    {
        name: 'Киноальманах «100 лет дизайна»',
        link: 'https://i.postimg.cc/Sxy7HDrt/film2.jpg',
        _id: 2,
        saved: true,
    },
    {
        name: 'В погоне за Бенкси',
        link: 'https://i.postimg.cc/0jYDBwJs/film3.jpg',
        _id: 3,
        saved: false,
    },
    {
        name: 'Баския: Взрыв реальности',
        link: 'https://i.postimg.cc/KcBPzdpH/film4.jpg',
        _id: 4,
        saved: false,
    },
    {
        name: 'Бег это свобода',
        link: 'https://i.postimg.cc/wjfJZH37/film5.jpg',
        _id: 5,
        saved: false,
    },
    {
        name: 'Книготорговцы',
        link: 'https://i.postimg.cc/WzvJg1Yf/film6.jpg',
        _id: 6,
        saved: true,
    },
    {
        name: 'Когда я думаю о Германии ночью',
        link: 'https://i.postimg.cc/rm6d2pTF/film7.jpg',
        _id: 7,
        saved: false,
    },
    {
        name: 'Gimme Danger: История Игги и The Stooges',
        link: 'https://i.postimg.cc/Bb4Xtwtr/film8.jpg',
        _id: 8,
        saved: false,
    },
    {
        name: 'Дженис: Маленькая девочка грустит',
        link: 'https://i.postimg.cc/FH71fSsH/film9.jpg',
        _id: 9,
        saved: false,
    },
    {
        name: 'Соберись перед прыжком',
        link: 'https://i.postimg.cc/MT8Grr0n/film10.jpg',
        _id: 10,
        saved: false,
    },
    {
        name: 'Пи Джей Харви: A dog called money',
        link: 'https://i.postimg.cc/8cpzTJ0D/film11.jpg',
        _id: 11,
        saved: false,
    },
    {
        name: 'По волнам: Искусство звука в кино',
        link: 'https://i.postimg.cc/hPGtwmm1/film12.jpg',
        _id: 12,
        saved: false,
    },
    // {
    //     name: '33 слова о дизайне',
    //     link: 'https://i.postimg.cc/9FyJ64jz/film1.jpg',
    //     saved: false,
    // },
    // {
    //     name: 'Киноальманах «100 лет дизайна»',
    //     link: 'https://i.postimg.cc/Sxy7HDrt/film2.jpg',
    //     saved: false,
    // },
    // {
    //     name: 'В погоне за Бенкси',
    //     link: 'https://i.postimg.cc/0jYDBwJs/film3.jpg',
    //     saved: false,
    // },
];

export const inputOptions = {
    name: {
        required: "Обязательное поле",
        minLength: {
            value: 2,
            message: "Имя должно состоять из минимум двух символов"
        },
    },
    email: {
        required: "Обязательное поле",
        minLength: {
            value: 3,
            message: "Email должен содержать минимум 3 символа"
        },
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
    film: {
        required: "Нужно ввести ключевое слово",
        pattern: {
            value: /^[-?!,.а-яА-ЯёЁ0-9\s]+$/,
            message: "Используйте только символы кириллицы"
        },
    },
};
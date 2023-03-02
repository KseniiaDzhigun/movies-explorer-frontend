export const BASE_URL = 'https://api.dzhigun.movies.nomoredomainsclub.ru';

export const handleResponse = async (response) => {
    if (!response.ok) {
        throw new Error(`Ошибка: ${response.status}`);
    }
    const data = await response.json();
    return data;
}

// User

export const getCurrentUserInfo = async () => {
    const response = await fetch(`${BASE_URL}/me`, {
        credentials: 'include',
        method: 'GET',
    });

    handleResponse(response);
};

export const updateUserInfo = async (data) => {
    const response = await fetch(`${BASE_URL}/me`, {
        credentials: 'include',
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    handleResponse(response);
};

// Movies

export const getSavedMovies = async () => {
    const response = await fetch(`${BASE_URL}`, {
        credentials: 'include',
        method: 'GET',
    });

    handleResponse(response);
};

export const addNewMovie = async (data) => {
    const response = await fetch(`${BASE_URL}`, {
        credentials: 'include',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    handleResponse(response);
};

export const deleteMovie = async (id) => {
    const response = await fetch(`${BASE_URL}/${id}`, {
        credentials: 'include',
        method: 'DELETE',
    });

    handleResponse(response);
};

// Authentication

export const register = async ({ name, email, password }) => {
    const response = await fetch(`${BASE_URL}/signup`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, password })
    });

    handleResponse(response);
};

export const login = async ({ email, password }) => {
    const response = await fetch(`${BASE_URL}/signin`, {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    });

    handleResponse(response);
};

export const signout = async () => {
    const response = await fetch(`${BASE_URL}/signout`, {
        method: 'GET',
        credentials: 'include',
    });

    handleResponse(response);
};

// export const BASE_URL = 'https://api.dzhigun.movies.nomoredomainsclub.ru';
export const BASE_URL = 'http://localhost:3001';

export const handleResponse = (response) => {
    if (response.ok) {
        return response.json();
    }
    return Promise.reject(response);
}

// User

export const getCurrentUserInfo = async () => {
    const response = await fetch(`${BASE_URL}/me`, {
        credentials: 'include',
        method: 'GET',
    });
    return handleResponse(response);
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

    return handleResponse(response);
};

// Movies

export const getSavedMovies = async () => {
    const response = await fetch(`${BASE_URL}`, {
        credentials: 'include',
        method: 'GET',
    });

    return handleResponse(response);
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

    return handleResponse(response);
};

export const deleteMovie = async (id) => {
    const response = await fetch(`${BASE_URL}/${id}`, {
        credentials: 'include',
        method: 'DELETE',
    });

    return handleResponse(response);
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
    return handleResponse(response);
}

export const login = async ({ email, password }) => {
    const response = await fetch(`${BASE_URL}/signin`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password }),
        credentials: 'include'
    });

    return handleResponse(response);
};

export const signout = async () => {
    const response = await fetch(`${BASE_URL}/signout`, {
        method: 'GET',
        credentials: 'include',
    });

    return handleResponse(response);
};

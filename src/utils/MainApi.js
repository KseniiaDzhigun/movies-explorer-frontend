export const BASE_URL = 'https://api.dzhigun.movies.nomoredomainsclub.ru';

export const handleResponse = (response) => {
    if (response.ok) {
        return response.json();
    }
    throw new Error(response.status);
}

// export const handleResponse = (response) => {
//     if (response.ok) {
//         return response.json();
//     }
//     // если ошибка, отклоняем промис
//     return Promise.reject(response);
// }

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

// export const register = async ({ name, email, password }) => {
//     const response = await fetch(`${BASE_URL}/signup`, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({ name, email, password })
//     });
//     // handleResponse(response);
//     if (response.ok) {
//         let json = await response.json(); // (3)
//     return json;
//     }
//     throw new Error(response.status);
// };

export const register = async ({ name, email, password }) => {
    try {
        const response = await fetch(`${BASE_URL}/signup`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email, password })
        });
        if (response.ok) {
            let json = response.json(); // (3)
            return json;
        }
        throw new Error(response.status);
    } catch (err) {
        return err; // TypeError: failed to fetch
    }

    // handleResponse(response);
    // if (response.ok) {
    //     let json = await response.json(); // (3)
    //     return json;
    // }
    // throw new Error(response.status);
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

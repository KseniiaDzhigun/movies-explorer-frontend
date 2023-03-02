import { handleResponse } from './MainApi'

export const MOVIES_URL = 'https://api.nomoreparties.co';


export const getInitialFilms  = async () => {
    const response = await fetch(`${MOVIES_URL}/beatfilm-movies`, {
        credentials: 'include',
        method: 'GET',
    });

    handleResponse(response);
};

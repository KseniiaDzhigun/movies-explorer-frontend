import { MOVIES_URL } from '../utils/Constants';
import { handleResponse } from './MainApi';

export const getInitialFilms  = async () => {
    const response = await fetch(`${MOVIES_URL}/beatfilm-movies`, {
        method: 'GET',
    });

    return handleResponse(response);
};

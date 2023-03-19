import './App.css';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import Main from '../Main/Main';
import { useState, useEffect } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import PageNotFound from '../PageNotFound/PageNotFound';
import * as Api from '../../utils/MainApi';
import * as MoviesApi from '../../utils/MoviesApi';
import { filterArray, addSavedToArray, adaptCardToMovies, adaptCardToSaved } from '../../utils/Helpers';
import {
  MAIN_ROUTE,
  MOVIES_ROUTE,
  SAVED_MOVIES_ROUTE,
  PROFILE_ROUTE,
  REGISTER_ROUTE,
  LOGIN_ROUTE,
  ERROR_MESSAGE,
  SUCCESS_LOGOUT_MESSAGE,
  UPDATE_PROFILE_MESSAGE,
  ERROR_SERVER_MESSAGE,
  NOT_FOUND_MESSAGE
} from '../../utils/Constants';
import InfoTooltip from '../InfoTooltip/InfoTooltip';

const App = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const [loggedIn, setLoggedIn] = useState(false);
  const [errorsMessage, setErrorsMessage] = useState('');
  const [successfulMessage, setSuccessfulMessage] = useState('');
  const [currentUser, setCurrentUser] = useState({});
  const [isInfoTooltipOpen, setIsInfoTooltipOpen] = useState(false);
  const [isInfoTooltipSuccessful, setIsInfoTooltipSuccessful] = useState(false);
  const [cards, setCards] = useState(null);
  const [savedMovies, setSavedMovies] = useState([]);

  const [foundMovies, setFoundMovies] = useState([]);
  const [isChecked, setIsChecked] = useState(false);
  const [loading, setLoading] = useState(false);

  const [foundSavedMovies, setFoundSavedMovies] = useState(null);

  const closePopup = () => {
    setIsInfoTooltipOpen(false);
  }

  const authCheck = async () => {
    try {
      const userId = localStorage.getItem('userId');
      const currentUserInfo = await Api.getCurrentUserInfo(userId);
      setCurrentUser(currentUserInfo);
      setLoggedIn(true);
      navigate(MOVIES_ROUTE);
    } catch (err) {
      const error = await err.json();
      console.log(`Переданный userId некорректен : ${error}`)
    }
  }

  //Проверяем валидность токена при запуске/обновлении страницы только один раз
  useEffect(() => {
    authCheck()
  }, []);

  const handleRegister = async (data) => {
    try {
      const response = await Api.register(data);
      setLoggedIn(true);
      navigate(MOVIES_ROUTE);
      return response;
    } catch (err) {
      const error = await err.json();
      setErrorsMessage(error.message);
    }
  }

  const handleLogin = async (data) => {
    try {
      const initialUserInfo = await Api.login(data);
      //Сохраняем в localStorage id пользователя, так как токен приходит в куках
      localStorage.setItem('userId', initialUserInfo._id);
      setCurrentUser(initialUserInfo);
      setLoggedIn(true);
      navigate(MOVIES_ROUTE);
      // return initialUserInfo;
    } catch (err) {
      const error = await err.json();
      setErrorsMessage(error.message);
    }
  }

  const openInfoTooltip = (successful, message) => {
    if (successful) {
      setIsInfoTooltipSuccessful(true);
      setSuccessfulMessage(message);
      setIsInfoTooltipOpen(true);
    } else {
      setIsInfoTooltipSuccessful(false);
      setErrorsMessage(message);
      setIsInfoTooltipOpen(true);
    }
  }

  const handleUpdateUser = async (data) => {
    try {
      const updatedUserInfo = await Api.updateUserInfo(data);
      setCurrentUser(updatedUserInfo);
      openInfoTooltip(true, UPDATE_PROFILE_MESSAGE);
    } catch (err) {
      const error = await err.json();
      openInfoTooltip(false, error.message);
    }
  }

  const handleLogout = async () => {
    try {
      const response = await Api.signout();
      setLoggedIn(false);
      setCards([]);
      setFoundMovies([]);
      setSavedMovies([]);
      localStorage.removeItem('userId');
      localStorage.removeItem('filteredMovies');
      localStorage.removeItem('movieKeyword');
      localStorage.removeItem('checkBox');
      openInfoTooltip(true, SUCCESS_LOGOUT_MESSAGE);
      navigate(MAIN_ROUTE);
      return response;
    } catch (err) {
      openInfoTooltip(false, ERROR_MESSAGE);
    }
  }

  //При изменении location убираем сообщение об ошибке
  useEffect(() => {
    setErrorsMessage('')
  }, [location])

  const getInitialCards = async () => {
    try {
      const initialMovies = await MoviesApi.getInitialFilms();
      const initialMoviesList = initialMovies.map(movie => adaptCardToMovies(movie));
      setCards(initialMoviesList);
      console.log(initialMoviesList);
    } catch (err) {
      const error = await err.json();
      console.log(error.message);
    }
  }

  const getSavedCards = async () => {
    try {
      const savedMoviesList = await Api.getSavedMovies();
      setSavedMovies(savedMoviesList);
      console.log(savedMoviesList);
    } catch (err) {
      setErrorsMessage(ERROR_SERVER_MESSAGE);
    }
  }

  //Запрос за фильмами при запуске/обновлении страницы только один раз
  useEffect(() => {
    getInitialCards();
    getSavedCards();
  }, [loggedIn])

  const handleMoviesCheck = (active) => {
    setIsChecked(active);
  }

  const handleMoviesSearch = (movieKeyword) => {
    try {
      setLoading(true);
      setErrorsMessage('');
      const filteredMovies = filterArray(cards, movieKeyword, isChecked);

      console.log(filteredMovies);

      if (cards && (filteredMovies.length === 0)) {
        setErrorsMessage(NOT_FOUND_MESSAGE);
      }

      const moviesWithSaved = addSavedToArray(savedMovies, filteredMovies);
      setFoundMovies(moviesWithSaved);

      localStorage.setItem('movieKeyword', movieKeyword);
      localStorage.setItem('checkBox', isChecked);
      localStorage.setItem('filteredMovies', JSON.stringify(moviesWithSaved));

    } catch (err) {
      setErrorsMessage(ERROR_SERVER_MESSAGE);
    } finally {
      setLoading(false);
    }
  }

  const handleSavedMoviesSearch = (savedMovieKeyword) => {
    try {
      setLoading(true);
      setErrorsMessage('');
      const filteredSavedMovies = filterArray(savedMovies, savedMovieKeyword, isChecked);

      if (savedMovies && (filteredSavedMovies.length === 0)) {
        setErrorsMessage(NOT_FOUND_MESSAGE);
      }

      setFoundSavedMovies(filteredSavedMovies);
    } catch (err) {
      setErrorsMessage(ERROR_SERVER_MESSAGE);
    } finally {
      setLoading(false);
    }
  }

  const handleSaveCard = async (card) => {
    try {
      const newCard = await Api.addNewMovie(adaptCardToSaved(card));

      card.saved = true;
      //Реакт перерисовает только карточку, на которую поставили/убрали лайк. 
      setFoundMovies((state) => state.map((currentCard) => currentCard.movieId === card.movieId ? card : currentCard));
      setSavedMovies([newCard, ...savedMovies]);
    } catch (err) {
      setErrorsMessage(ERROR_SERVER_MESSAGE);
    }
  }

  const handleUnsaveCard = async (card) => {
    try {
      const savedCard = savedMovies.filter((savedMovie) => savedMovie.movieId === card.movieId)[0];
      const result = await Api.deleteMovie(savedCard._id);
      if (result) {
        const updatedSavedMovies = savedMovies.filter((savedMovie) => savedMovie._id !== savedCard._id);
        setSavedMovies(updatedSavedMovies);
        card.saved = false;
        setFoundMovies((state) => state.map((currentCard) => currentCard.movieId === card.movieId ? card : currentCard));

      }
    } catch (err) {
      const error = await err.json();
      console.log(error.message);
      setErrorsMessage(ERROR_SERVER_MESSAGE);
    }
  }

  const handleDeleteCard = async (card) => {
    try {
      const result = await Api.deleteMovie(card._id);
      const updatedSavedMovies = savedMovies.filter((savedMovie) => savedMovie._id !== card._id);
      setSavedMovies(updatedSavedMovies);
      const savedCard = foundMovies.filter((foundMovie) => foundMovie.movieId === card.movieId)[0];
      if (savedCard) {
        savedCard.saved = false;
        setFoundMovies((state) => state.map((currentCard) => currentCard.movieId === card.movieId ? savedCard : currentCard));
      }
      return result;
    } catch (err) {
      console.log(err);
      const error = await err.json();
      console.log(error);
      setErrorsMessage(ERROR_SERVER_MESSAGE);
    }
  }


  return (
    //Используем данные из currentUser для всех элементов с помощью провайдера контекста
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Routes>

          <Route path={MAIN_ROUTE} element={<Main loggedIn={loggedIn} />} />

          <Route path={MOVIES_ROUTE} element={
            <ProtectedRoute loggedIn={loggedIn}>
              <Movies
                loggedIn={loggedIn}
                onSearch={handleMoviesSearch}
                onCheck={handleMoviesCheck}
                loading={loading}
                movies={foundMovies}
                moviesErrorMessage={errorsMessage}
                onCardSave={handleSaveCard}
                onCardUnsave={handleUnsaveCard}
              />
            </ProtectedRoute>
          }
          />

          <Route path={SAVED_MOVIES_ROUTE} element={
            <ProtectedRoute loggedIn={loggedIn}>
              <SavedMovies
                onSearch={handleSavedMoviesSearch}
                onCheck={handleMoviesCheck}
                loggedIn={loggedIn}
                savedMovies={savedMovies}
                foundMovies={foundSavedMovies}
                moviesErrorMessage={errorsMessage}
                onCardDelete={handleDeleteCard}
              />
            </ProtectedRoute>
          }
          />

          <Route path={PROFILE_ROUTE} element={
            <ProtectedRoute loggedIn={loggedIn}>
              <Profile
                loggedIn={loggedIn}
                onLogout={handleLogout}
                onUpdate={handleUpdateUser}
              />
            </ProtectedRoute>
          }
          />

          <Route path={LOGIN_ROUTE} element={<Login onLogin={handleLogin} errorsMessage={errorsMessage} />} />

          <Route path={REGISTER_ROUTE} element={<Register onRegister={handleRegister} errorsMessage={errorsMessage} />} />

          <Route path="*" element={<PageNotFound />} />

        </Routes>

        <InfoTooltip
          isOpen={isInfoTooltipOpen}
          onClose={closePopup}
          isSuccessful={isInfoTooltipSuccessful}
          errorsMessage={errorsMessage}
          successfulMessage={successfulMessage}
        />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;

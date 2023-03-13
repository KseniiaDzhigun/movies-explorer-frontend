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
      const initialFilms = await MoviesApi.getInitialFilms();
      setCards(initialFilms);
      console.log(initialFilms);
    } catch (err) {
      setErrorsMessage(ERROR_SERVER_MESSAGE);
    }
  }

    //Запрос за фильмами при запуске/обновлении страницы только один раз
  useEffect(() => {
    getInitialCards();
  }, [])

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
                movies={cards}
                moviesErrorMessage={errorsMessage}
              />
            </ProtectedRoute>
          }
          />

          <Route path={SAVED_MOVIES_ROUTE} element={
            <ProtectedRoute loggedIn={loggedIn}>
              <SavedMovies
                loggedIn={loggedIn}
                movies={cards}
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

import './App.css';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import Main from '../Main/Main';
import { useState, useEffect } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import Movies from '../Movies/Movies';
import { initialCards } from '../../utils/Constants';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import PageNotFound from '../PageNotFound/PageNotFound';
import * as Api from '../../utils/MainApi';
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

  const closePopup = () => {
    setIsInfoTooltipOpen(false);
  }

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

  //При изменении location убираем ошибку над кнопкой зарегестрироваться
  useEffect(() => {
    setErrorsMessage('')
  }, [location])

  return (
    //Используем данные из currentUser для всех элементов с помощью провайдера контекста
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Routes>

          <Route path={MAIN_ROUTE} element={<Main loggedIn={loggedIn} />} />

          <Route path={MOVIES_ROUTE} element={<Movies loggedIn={loggedIn} movies={initialCards} loading="" />} />

          <Route path={SAVED_MOVIES_ROUTE} element={<SavedMovies loggedIn={loggedIn} movies={initialCards} />} />

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

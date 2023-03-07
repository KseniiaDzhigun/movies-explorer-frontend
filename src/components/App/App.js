import './App.css';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
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
} from '../../utils/Constants';

const App = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const [loggedIn, setLoggedIn] = useState(false);
  const [errorsMessage, setErrorsMessage] = useState('');
  const [currentUser, setCurrentUser] = useState({});

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

          <Route path={PROFILE_ROUTE} element={<Profile loggedIn={loggedIn} />} />

          <Route path={LOGIN_ROUTE} element={<Login onLogin={handleLogin} errorsMessage={errorsMessage} />} />

          <Route path={REGISTER_ROUTE} element={<Register onRegister={handleRegister} errorsMessage={errorsMessage} />} />

          <Route path="*" element={<PageNotFound />} />

        </Routes>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;

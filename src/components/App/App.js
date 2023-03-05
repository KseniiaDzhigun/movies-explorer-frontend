import './App.css';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Main from '../Main/Main';
import { useState } from 'react';
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

  const [loggedIn, setLoggedIn] = useState(false);

  const handleRegister = async (data) => {
    try {
      const response = await Api.register(data);
return response;
      // setLoggedIn(true);
      // navigate(MOVIES_ROUTE);
    } catch (err) {
      console.log(err);
    }
  }

  // const handleRegister = async (data) => {
  //   try {
  //      const res = await Api.register(data);
  //      console.log(res);
  //     setLoggedIn(true);
  //     navigate(MOVIES_ROUTE);
  //   } catch (err) {
  //     console.log(`Ошибка: ${err}`);
  //   }
  // }

  return (
    <div className="page">
      <Routes>

        <Route path={MAIN_ROUTE} element={<Main loggedIn={loggedIn} />} />

        <Route path={MOVIES_ROUTE} element={<Movies loggedIn={loggedIn} movies={initialCards} loading="" />} />

        <Route path={SAVED_MOVIES_ROUTE} element={<SavedMovies loggedIn={loggedIn} movies={initialCards} />} />

        <Route path={PROFILE_ROUTE} element={<Profile loggedIn={loggedIn} />} />

        <Route path={LOGIN_ROUTE} element={<Login />} />

        <Route path={REGISTER_ROUTE} element={<Register onRegister={handleRegister} />} />

        <Route path="*" element={<PageNotFound />} />

      </Routes>
    </div>
  );
}

export default App;

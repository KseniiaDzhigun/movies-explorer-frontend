import './App.css';
import { Routes, Route } from 'react-router-dom';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import { initialCards } from '../../utils/Constants';
import SavedMovies from '../SavedMovies/SavedMovies';
// import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
// import PageNotFound from '../PageNotFound/PageNotFound';

const App = () => {
  return (
    <div className="page">
      <Routes>

        <Route path="/" element={<Main loggedIn="" />} />

        <Route path="/movies" element={<Movies loggedIn="loggedIn" movies={initialCards} loading=""/>} />

        <Route path="/saved-movies" element={<SavedMovies loggedIn="loggedIn" movies={initialCards}/>} />

        {/* <Route path="/profile" element={<Profile />} /> */}

        <Route path="/signin" element={<Login />} />

        <Route path="/signup" element={<Register />} />

        {/* <Route path="*" element={<PageNotFound />} /> */}

      </Routes>

    </div>
  );
}

export default App;

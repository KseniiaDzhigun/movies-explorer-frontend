import './Main.css';
import Footer from '../Footer/Footer';
import Promo from '../Promo/Promo';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';


const Main = ({ loggedIn }) => {

    return (
        <main className="content">
            <Promo loggedIn={loggedIn}/>
            <AboutProject />
            <Techs />
            <Footer />
        </main>
    );
}

export default Main;
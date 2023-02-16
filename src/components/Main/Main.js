import './Main.css';
import Footer from '../Footer/Footer';
import Promo from '../Promo/Promo';
import AboutProject from '../AboutProject/AboutProject';


const Main = ({ loggedIn }) => {

    return (
        <main className="content">
            <Promo loggedIn={loggedIn}/>
            <AboutProject />
            <Footer />
        </main>
    );
}

export default Main;
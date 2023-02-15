import './Main.css';
import Footer from '../Footer/Footer';
import Promo from '../Promo/Promo';


const Main = ({ loggedIn }) => {

    return (
        <main className="content">
            <Promo loggedIn={loggedIn}/>
            <Footer />
        </main>
    );
}

export default Main;
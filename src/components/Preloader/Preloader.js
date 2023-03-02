import './Preloader.css';

const Preloader = ({ loading }) => {

    if (loading) {
        return (
            <div className="preloader">
                <div className="preloader__ring-part"></div>
                <div className="preloader__ring-part"></div>
                <div className="preloader__ring-part"></div>
                <div className="preloader__ring-part"></div>
            </div>
        )
    }
}

export default Preloader;
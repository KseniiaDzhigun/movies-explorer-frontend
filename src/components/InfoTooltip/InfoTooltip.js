import './InfoTooltip.css';
import iconSuccessful from '../../images/InfoTooltip-successful.svg';
import iconRejected from '../../images/InfoTooltip-rejected.svg';

//Компонент модального окна,который информирует пользователя об успешной (или не очень) регистрации

function InfoTooltip({ isOpen, onClose, isSuccessful, errorsMessage, successfulMessage }) {
    return (
        <section className={`popup ${isOpen ? "popup_opened" : ''}`}>
            <div className="popup__content">
                <button type="button" className="popup__close-button" onClick={onClose}></button>
                <div className="popup__info">
                    <img src={isSuccessful ? iconSuccessful : iconRejected} alt="Статус" className="popup__image" />
                    <p className="popup__message">{isSuccessful ? successfulMessage : errorsMessage}</p>
                </div>
            </div>
        </section>
    );
}

export default InfoTooltip;
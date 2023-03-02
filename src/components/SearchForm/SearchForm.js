import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import './SearchForm.css';
import icon from '../../images/search-icon-grey.svg';
import border from '../../images/search-vertical-border.svg';

const SearchForm = () => {

    return (
        <form className="search__form" >
            <fieldset className="search__form-set">
                <img
                    src={icon}
                    alt="Лупа"
                    className="search__icon"
                />
                <input id="film-input" placeholder="Фильм" type="text" className="search__input" required />
                <span className="search__error"></span>
                <button type="submit" className="search__button-submit"></button>
            </fieldset>
            <img
                src={border}
                alt="Разделитель"
                className="search__border"
            />
            <FilterCheckbox />
        </form>
    );
}

export default SearchForm;
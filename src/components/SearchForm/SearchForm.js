import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import './SearchForm.css';
import icon from '../../images/search-icon-grey.svg';
import { useForm } from 'react-hook-form';
import border from '../../images/search-vertical-border.svg';
import { useState } from 'react';
import { inputOptions } from '../../utils/Helpers'

const SearchForm = ({ onSearch, onCheck, savedRequest, savedCheckStatus, disabled }) => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    // If the query text is saved in the LocalStorage, insert it in the search bar when the page reloads
    const [userData, setUserData] = useState(savedRequest ? savedRequest : '')

    const handleChange = (e) => {
        setUserData(e.target.value);
    };

    const onSubmit = (data) => {
        onSearch(data.movieReq);
    }

    return (
        <form className="search__form" onSubmit={handleSubmit(onSubmit)}>
            <fieldset className="search__form-set" disabled={disabled}>
                <img
                    src={icon}
                    alt="Loupe"
                    className="search__icon"
                />
                <div className="search__input-text">
                    <input
                        value={userData}
                        id="movieReq-input"
                        name="movieReq"
                        {...register("movieReq", { ...inputOptions.movie, onChange: handleChange })}
                        className={errors.movieReq ? "search__input search__input_error" : "search__input"}
                        placeholder="Movie"
                    />
                    <p className="search__error">{errors.movieReq ? errors.movieReq.message : ''}</p>
                </div>
                <button type="submit" className="search__button-submit" disabled={disabled}></button>
            </fieldset>
            <img
                src={border}
                alt="Border"
                className="search__border"
            />
            <FilterCheckbox onCheck={onCheck} savedCheckStatus={savedCheckStatus} disabled={disabled} />
        </form>
    );
}

export default SearchForm;
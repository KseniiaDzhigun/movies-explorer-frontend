import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import './SearchForm.css';
import icon from '../../images/search-icon-grey.svg';
import { useForm } from 'react-hook-form';
import border from '../../images/search-vertical-border.svg';
import { useEffect } from 'react';
import { inputOptions } from '../../utils/Helpers'

const SearchForm = ({ film }) => {

    const { register, handleSubmit, formState: { errors }, setValue } = useForm();
    const onSubmit = data => console.log(data);

    useEffect(() => {
        if (film) setValue(film);
    }, [film]);

    const handleChange = (e) => {
        setValue(e.target.value);
    };


    return (
        <form className="search__form" onSubmit={handleSubmit(onSubmit)}>
            <fieldset className="search__form-set">
                <img
                    src={icon}
                    alt="Лупа"
                    className="search__icon"
                />
                <div className="search__input-text">
                <input
                    id="film-input"
                    name="film"
                    {...register("film", { ...inputOptions.film, onChange: handleChange })}
                    className={errors.film ? "search__input search__input_error" : "search__input"}
                    placeholder="Фильм"
                />
                <p className="search__error">{errors.film ? errors.film.message : ''}</p>
                </div>
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
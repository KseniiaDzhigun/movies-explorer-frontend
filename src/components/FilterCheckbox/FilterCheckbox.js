import './FilterCheckbox.css';

const FilterCheckbox = () => {

    return (
        <div class="filter__box">
            <label class="filter__switch">
                <input type="checkbox" class="filter__checkbox" id="short-movies"/>
                <span class="filter__slider"></span>
            </label>
            <label for="short-movies" class="filter__name">Короткометражки</label>
        </div>

    );
}

export default FilterCheckbox;
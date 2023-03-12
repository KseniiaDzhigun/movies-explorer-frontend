import './FilterCheckbox.css';

const FilterCheckbox = ({onCheck}) => {

    const handleChange = e => {
        if (e.target.checked) {
            onCheck(true);
        } else {
            onCheck(false);
        }
    };

    return (
        <div className="filter__box">
            <label className="filter__switch">
                <input type="checkbox" className="filter__checkbox" id="short-movies" onChange={handleChange} />
                <span className="filter__slider"></span>
            </label>
            <label htmlFor="short-movies" className="filter__name">Короткометражки</label>
        </div>
    );
}

export default FilterCheckbox;
import './FilterCheckbox.css';
import { useState } from 'react';

const FilterCheckbox = ({ onCheck }) => {

    const [isChecked, setIsChecked] = useState(JSON.parse(localStorage.getItem('checkBox')));

    const handleChange = e => {
        if (e.target.checked) {
            setIsChecked(true);
            onCheck(true);
        } else {
            setIsChecked(false);
            onCheck(false);
        }
    };

    return (
        <div className="filter__box">
            <label className="filter__switch">
                <input
                    type="checkbox"
                    className="filter__checkbox"
                    id="short-movies"
                    onChange={handleChange}
                    checked={isChecked}
                />
                <span className="filter__slider"></span>
            </label>
            <label htmlFor="short-movies" className="filter__name">Короткометражки</label>
        </div>
    );
}

export default FilterCheckbox;
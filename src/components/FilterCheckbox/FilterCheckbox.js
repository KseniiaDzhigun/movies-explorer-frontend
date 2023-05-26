import './FilterCheckbox.css';
import { useState } from 'react';

const FilterCheckbox = ({ onCheck, savedCheckStatus, disabled }) => {

    // If the checkbox state is saved in LocalStorage, use it when the page reloads
    const [isChecked, setIsChecked] = useState(savedCheckStatus ? savedCheckStatus : false);

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
                    disabled={disabled}
                />
                <span className="filter__slider"></span>
            </label>
            <label htmlFor="short-movies" className="filter__name">Shorts</label>
        </div>
    );
}

export default FilterCheckbox;
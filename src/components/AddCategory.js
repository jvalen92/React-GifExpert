import React, { useState } from 'react';
import PropTypes from 'prop-types'


export const AddCategory = ({ setCategories }) => {


    const [inputValue, setInputValue] = useState('Search a gif');

    const handleInputChange = ({ target }) => {
        setInputValue(target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (inputValue.trim().length > 2) {
            setCategories(state => [inputValue, ...state]);
            setInputValue('')
        }

        console.log('Submit done!');
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                />
            </form>
        </>
    )
}


AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}




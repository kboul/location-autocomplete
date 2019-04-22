import React from 'react'
import PropTypes from 'prop-types'
import { googleSearch } from '../utils/googleSearch'

const ClickToSearchBtn = ({ selectedLocation, isButtonDisabled }) => {
    return (
        <button
            className="btn btn-primary"
            disabled={isButtonDisabled}
            onClick={() => googleSearch(selectedLocation)}>
            Click to search
        </button>
    )
}

ClickToSearchBtn.propTypes = {
    selectedLocation: PropTypes.string.isRequired,
    isButtonDisabled: PropTypes.bool.isRequired
}

export default ClickToSearchBtn
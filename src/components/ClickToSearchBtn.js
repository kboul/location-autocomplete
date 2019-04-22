import React from 'react'
import PropTypes from 'prop-types'
import { googleSearch } from '../utils/googleSearch'
import { buttonParentDiv } from '../sass/ClickToSearchBtn.module.sass'

const ClickToSearchBtn = ({ selectedLocation, isButtonDisabled }) => {
    return (
        <div className={buttonParentDiv}>
            <button
                className="btn btn-primary"
                disabled={isButtonDisabled}
                onClick={() => googleSearch(selectedLocation)}>
                Click to search
            </button>
        </div>
    )
}

ClickToSearchBtn.propTypes = {
    selectedLocation: PropTypes.string.isRequired,
    isButtonDisabled: PropTypes.bool.isRequired
}

export default ClickToSearchBtn
import React from 'react'
import PropTypes from 'prop-types'
import { googleSearch } from '../utils/googleSearch'

const ClickToSearchBtn = ({ selectedName, disabled }) => {
    return (
        <button
            className="btn btn-primary mt-2"
            disabled={disabled}
            onClick={() => googleSearch(selectedName)}>
            Click to search
        </button>
    )
}

ClickToSearchBtn.propTypes = {
    selectedName: PropTypes.string.isRequired,
    disabled: PropTypes.bool.isRequired
}

export default ClickToSearchBtn
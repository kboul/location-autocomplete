import React from 'react'
import PropTypes from 'prop-types'

const ClickToSearchBtn = ({ selectedName }) => {
    return (
        <button
            className="btn btn-primary mt-2"
            onClick={() => console.log(selectedName)}>
            Click to search
                </button>
    )
}

ClickToSearchBtn.propTypes = {
    selectedName: PropTypes.string.isRequired
}

export default ClickToSearchBtn
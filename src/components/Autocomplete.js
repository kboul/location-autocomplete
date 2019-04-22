import React, { Component, Fragment } from 'react'
import { AsyncTypeahead } from 'react-bootstrap-typeahead'
import debounce from 'lodash.debounce'
import ClickToSearchBtn from './ClickToSearchBtn'
import { browserLanguage } from '../utils/browserLanguage'
import { getLocation } from '../services/locationService'

class Autocomplete extends Component {
    state = {
        isLoading: false,
        locations: [],
        selectedLocation: '',
        isButtonDisabled: true
    }

    handleSearch = async query => {
        this.setState({ isLoading: true })

        const { data: { entries: locations } }
            = await getLocation(query, browserLanguage())

        this.setState({
            isLoading: false,
            locations,
            isButtonDisabled: (locations.length === 0) ? true : false
        })
    }

    handleChange = selectedOptions => {
        if (!selectedOptions || !selectedOptions[0]) {
            this.setState({ isButtonDisabled: true })
            return
        }

        const selectedLocation = selectedOptions[0].name
        this.setState({ selectedLocation })
    }

    handleInputChange = (input, e) => {
        if (input === '')
            this.setState({ isButtonDisabled: true })
    }

    render() {
        const { isLoading, locations, selectedLocation,
            isButtonDisabled } = this.state

        return (
            <Fragment>
                <div className="mb-2">
                    What place are you looking for?
                </div>

                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text">
                            <i
                                className="fa fa-search"
                                aria-hidden="true">
                            </i>
                        </span>
                    </div>
                    <AsyncTypeahead
                        highlightOnlyResult
                        id="locationSearch"
                        labelKey="name"
                        isLoading={isLoading}
                        minLength={2}
                        onSearch={debounce(this.handleSearch, 1000)}
                        placeholder="Type a location..."
                        options={locations}
                        onInputChange={this.handleInputChange}
                        onChange={this.handleChange}
                        renderMenuItemChildren={option =>
                            <span>{option.name}</span>
                        }
                    />
                </div>

                <ClickToSearchBtn
                    isButtonDisabled={isButtonDisabled}
                    selectedLocation={selectedLocation} />
            </Fragment>
        )
    }
}

export default Autocomplete
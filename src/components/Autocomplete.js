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
        locationsAreEmpty: true
    }

    handleSearch = async query => {
        this.setState({ isLoading: true })

        const { data: { entries: locations } }
            = await getLocation(query, browserLanguage())

        this.setState({
            isLoading: false,
            locations,
            locationsAreEmpty: (locations.length === 0) ? true : false
        })
    }

    handleChange = selectedOptions => {
        if (!selectedOptions || !selectedOptions[0]) {
            this.setState({ locationsAreEmpty: true })
            return
        }

        const selectedLocation = selectedOptions[0].name
        this.setState({ selectedLocation })
    }

    render() {
        const { isLoading, locations, selectedLocation,
            locationsAreEmpty } = this.state

        return (
            <Fragment>
                <div className="mb-2">
                    What place are you looking for?
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
                    onChange={this.handleChange}
                    renderMenuItemChildren={option =>
                        <span>{option.name}</span>
                    }
                />

                <ClickToSearchBtn
                    disabled={locationsAreEmpty}
                    selectedLocation={selectedLocation} />
            </Fragment>
        )
    }
}

export default Autocomplete
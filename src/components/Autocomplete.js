import React, { Component, Fragment } from 'react'
import { getLocation } from '../services/locationService'
import { AsyncTypeahead } from 'react-bootstrap-typeahead'

class Autocomplete extends Component {
    state = {
        isLoading: false,
        entries: []
    }

    handleSearch = async query => {
        this.setState({ isLoading: true })
        const { data: { entries } } = await getLocation(query, 'en')
        this.setState({ isLoading: false, entries })
    }

    render() {
        return (
            <Fragment>
                <div className="mb-2">
                    What place are you looking for?
                </div>

                <AsyncTypeahead
                    id=""
                    labelKey="name"
                    {...this.state}
                    minLength={1}
                    onSearch={this.handleSearch}
                    placeholder="Type a location..."
                    options={this.state.entries}
                    renderMenuItemChildren={option =>
                        <span>{option.name}</span>
                    }
                />
            </Fragment>
        )
    }
}

export default Autocomplete
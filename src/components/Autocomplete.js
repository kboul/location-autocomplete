import React, { Component } from 'react'
import { getLocation } from '../services/locationService'

class Autocomplete extends Component {
    state = {}

    async componentDidMount() {
        const { data: { entries } } = await getLocation('athens', 'en')
        console.log(entries)
    }

    render() {
        return (
            <div>What place are you looking for?</div>
        )
    }
}

export default Autocomplete
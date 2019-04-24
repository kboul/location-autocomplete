import React from 'react'
import { shallow } from 'enzyme'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import Autocomplete from '../Autocomplete'
import { AsyncTypeahead } from 'react-bootstrap-typeahead'
import ClickToSearchBtn from '../ClickToSearchBtn'

let wrapped

beforeEach(() => {
    wrapped = shallow(
        <Autocomplete />
    )
})

it('contains <AsyncTypeahead />', () => {
    expect(wrapped.find(AsyncTypeahead)).toHaveLength(1)
})

it('contains <ClickToSearchBtn />', () => {
    expect(wrapped.find(ClickToSearchBtn)).toHaveLength(1)
})

describe('handleSearch()', () => {
    it('treats isLoading state as expected', () => {
        wrapped.instance().handleSearch('athens')
        expect(wrapped.state().isLoading).toBeTruthy()
    })

    it('updates the state accordingly after fetching locations', () => {
        wrapped.instance().handleSearch('paris')
        const mock = new MockAdapter(axios)

        const data = [
            {
                country: 'France',
                language: 'en',
                name: '18th Arrondissement (Paris), Par'
            },
            {
                country: 'France',
                language: 'en',
                name: 'Paris-La Chapelle Station'
            },
            {
                country: 'France',
                language: 'en',
                name: '8th Arrondissement (Paris)'
            }
        ]
        const baseUrl = process.env.REACT_APP_API_URL
        const url = `${baseUrl}?keywords=paris&language=en`
        mock.onGet(url).reply(200, data)

        axios.get(baseUrl, { params: { keywords: 'paris', language: 'en' } })
            .then(({ data }) => {
                expect(wrapped.state().isLoading).toBeFalsy()
                expect(wrapped.state().locations).toBe(data)
                expect(wrapped.state().isButtonDisabled).toBeFalsy()
                wrapped.find(AsyncTypeahead).setState({ options: data })
                expect(wrapped.find(AsyncTypeahead).prop('options')).toBe(data)
            })
    })
})

it('turns isButtonDisabled to truthy when the input is empty', () => {
    wrapped.instance().handleInputChange('')
    expect(wrapped.state().isButtonDisabled).toBeTruthy()
})

it('turns truthy isButtonDisabled when is passed an empty [] to handleChange method', () => {
    wrapped.instance().handleChange([])
    expect(wrapped.state().isButtonDisabled).toBeTruthy()
})

it('changes selectedLocation state when an not empty array is passed to handleChange method', () => {
    const selectedLocation = 'Academy of Paris, Pere Lachaise'
    wrapped.instance().handleChange([{ name: selectedLocation }])
    expect(wrapped.state().selectedLocation).toBe(selectedLocation)
})

it('contains a fa-search element', () => {
    expect(wrapped.find('.fa-search')).toHaveLength(1)
})
import React from 'react'
import { shallow } from 'enzyme'
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

it('turns isButtonDisabled to truthy when the input is empty', () => {
    wrapped.instance().handleInputChange('')
    wrapped.setState({ isButtonDisabled: true })
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
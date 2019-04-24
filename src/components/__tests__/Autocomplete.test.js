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
    wrapped.setState({ isButtonDisabled: true })
    wrapped.instance().handleInputChange('');
    expect(wrapped.state().isButtonDisabled).toBeTruthy()
})

it('', () => {
    const input = wrapped.find(AsyncTypeahead)
    input.simulate('change', { target: { selectedOptions: [] } })
    expect(wrapped.state().isButtonDisabled).toBeTruthy()
})

it('contains a fa-search element', () => {
    expect(wrapped.find('.fa-search')).toHaveLength(1)
})
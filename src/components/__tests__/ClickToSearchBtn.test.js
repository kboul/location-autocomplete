import React from 'react'
import { shallow } from 'enzyme'
import ClickToSearchBtn from '../ClickToSearchBtn'

const selectedLocation = 'Tokyo Otsuka Station, Tokyo area,Tokyo, Japan'

describe('isButtonDisabled prop is truthy', () => {
    const wrapped = shallow(
        <ClickToSearchBtn
            selectedLocation={selectedLocation}
            isButtonDisabled={true} />
    )

    it('disables button when disabled prop is truthy', () => {
        expect(wrapped.find('button').prop('disabled')).toBeTruthy()
    })
})

describe('isButtonDisabled prop is falsy', () => {
    let wrapped

    beforeEach(() => {
        wrapped = shallow(
            <ClickToSearchBtn
                selectedLocation={selectedLocation}
                isButtonDisabled={false} />
        )
    })

    it('enables button when disabled prop is falsy', () => {
        expect(wrapped.find('button').prop('disabled')).toBeFalsy()
    })

    it('mocks the window open method after clicking the click to search button', () => {
        global.open = jest.fn()
        wrapped.find('.btn').simulate('click')
        expect(window.open).toBeCalled()
    })
})
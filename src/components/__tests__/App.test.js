import React from 'react'
import { shallow } from 'enzyme'
import App from '../App'
import Container from '../Container'

let wrapped = shallow(<App />)

it('shows <Container />', () => {
    expect(wrapped.find(Container).length).toEqual(1)
})
import React from 'react'
import { shallow } from 'enzyme'
import Container from '../Container'
import Banner from '../Banner'
import Logo from '../Logo'
import Autocomplete from '../Autocomplete'

let wrapped

beforeEach(() => {
    wrapped = shallow(<Container />)
})

it('contains <Banner />', () => {
    expect(wrapped.find(Banner)).toHaveLength(1)
})

it('contains <Logo />', () => {
    expect(wrapped.find(Logo)).toHaveLength(1)
})

it('contains <Autocomplete />', () => {
    expect(wrapped.find(Autocomplete)).toHaveLength(1)
})

it('contains a class with bannerParentDiv name', () => {
    expect(wrapped.find('.bannerParentDiv')).toHaveLength(1)
})

it('contains a class with logoParentDiv name', () => {
    expect(wrapped.find('.logoParentDiv')).toHaveLength(1)
})
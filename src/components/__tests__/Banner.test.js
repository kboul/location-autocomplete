import React from 'react'
import { shallow } from 'enzyme'
import Banner from '../Banner'

let wrapped

beforeEach(() => {
    wrapped = shallow(<Banner />)
})

it('has a div with a class bannerContainer', () => {
    const bannerContainer = wrapped.find('.bannerContainer')
    expect(bannerContainer).toHaveLength(1)
})

it('has a div with a class bannerText', () => {
    const bannerText = wrapped.find('.bannerText')
    expect(bannerText).toHaveLength(1)
    expect(bannerText.text()).toEqual('Banner space')
})
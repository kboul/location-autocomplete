import React from 'react'
import { shallow } from 'enzyme'
import Logo from '../Logo'

let wrapped, img

beforeEach(() => {
    wrapped = shallow(<Logo />)
    img = wrapped.find('img')
})


it('contains an image element', () => {
    expect(img).toHaveLength(1)
})

it('has width & height equal to 100', () => {
    expect(img.prop('width')).toEqual('100')
    expect(img.prop('height')).toEqual('100')
})

it('has src equal to xe-logo.jpg', () => {
    expect(img.prop('src')).toEqual('xe-logo.jpg')
})
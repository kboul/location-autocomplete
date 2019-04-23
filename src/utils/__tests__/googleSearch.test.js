import { googleSearch } from '../googleSearch'

it('opens a new browser window', () => {
    global.open = jest.fn()

    googleSearch('athens')
    expect(global.open).toBeCalled()
})
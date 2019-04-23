import { browserLanguage } from '../browserLanguage'

it('returns the language of the browser as a two letter abreviation', () => {
    switch (navigator.language) {
        case 'en-US':
            expect(browserLanguage()).toEqual('en')
            break
        case 'en-GB':
            expect(browserLanguage()).toEqual('en')
            break
        case 'el':
            expect(browserLanguage()).toEqual('el')
            break
        default: return
    }
})
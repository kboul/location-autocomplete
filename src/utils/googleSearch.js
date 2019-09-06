/**
 * 
 * @param {string} term 
 * @returns {window global object action} - opens a new browser tab
 */

export const googleSearch = term => {
    return window.open(`https://www.google.com/search?q=${term}`, '_blank')
}
/**
 * 
 * @param {string} location
 * @param {string} language
 * @returns {http get request}
 */

import http from '../services/httpService'
const apiEndpoint = '/search'

export const getLocation = (location, language) => {
    return http.get(`${apiEndpoint}?keywords=${location}&language=${language}`)
}
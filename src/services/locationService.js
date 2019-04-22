/**
 * 
 * @param {*} location string
 * @param {*} language string
 */

import http from '../services/httpService'
const apiEndpoint = '/search'

export const getLocation = (location, language) => {
    return http.get(`${apiEndpoint}?keywords=${location}&language=${language}`)
}
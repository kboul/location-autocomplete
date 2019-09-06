import React from 'react'
import {
    bannerContainer,
    bannerText
} from '../sass/Banner.module.sass'

const Banner = () => {
    return (
        <div className={bannerContainer}>
            <span className={bannerText}>
                Banner space
            </span>
        </div>
    )
}

export default Banner
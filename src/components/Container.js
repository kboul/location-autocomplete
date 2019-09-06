import React from 'react'
import Banner from './Banner'
import Logo from './Logo'
import Autocomplete from './Autocomplete'
import {
    bannerParentDiv,
    logoParentDiv
} from '../sass/Container.module.sass'

const Container = () => {
    return (
        <div className="container-fluid mt-3">
            <div className="row">
                <div className={`col-md-1 ${bannerParentDiv}`}>
                    <Banner />
                </div>
                <div className={`col-md-1 ${logoParentDiv}`}>
                    <Logo />
                </div>
                <div className="col-md-8">
                    <Autocomplete />
                </div>
            </div>
        </div>
    )
}

export default Container
import React from 'react'
import Banner from './Banner'
import Logo from './Logo'
import Autocomplete from './Autocomplete'

const Container = () => {
    return (
        <div className="container-fluid mt-2">
            <div className="row">
                <div className="col-md-1">
                    <Banner />
                </div>
                <div className="col-md-1">
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
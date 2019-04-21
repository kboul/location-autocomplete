import React from 'react'
import Banner from './Banner'
import Logo from './Logo'

const Container = () => {
    return (
        <div className="container-fluid mt-2">
            <div className="row">
                <div className="col-md-2">
                    <Banner />
                </div>
                <div className="col-md-2">
                    <Logo />
                </div>
                <div className="col-md-6">
                    Autocomplete
                </div>
            </div>
        </div>
    )
}

export default Container
import React, { Component } from 'react'
import Banner from './Banner';

class App extends Component {
    render() {
        return (
            <div className="container-fluid mt-2">
                <div className="row">
                    <div className="col-md-2">
                        <Banner />
                    </div>
                    <div className="col-md-2">
                        Logo
                    </div>
                    <div className="col-md-6">
                        Autocomplete
                    </div>
                </div>
            </div>
        )
    }
}

export default App
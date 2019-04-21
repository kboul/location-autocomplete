import React, { Component } from 'react'
import Banner from './Banner';

class App extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="col-md-2">
                    <Banner />
                </div>
            </div>
        )
    }
}

export default App
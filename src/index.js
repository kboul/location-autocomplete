import React from 'react'
import ReactDOM from 'react-dom'

import 'bootstrap/dist/css/bootstrap.css'
import 'font-awesome/css/font-awesome.min.css'
import 'react-bootstrap-typeahead/css/Typeahead.css'

import App from './components/App'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(
    <App />,
    document.getElementById('root')
)

serviceWorker.unregister()
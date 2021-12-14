import * as React from 'react'
import * as ReactDOM from 'react-dom'

import App from './components/App'
import "./styles/main.css"

var mountNode = document.getElementById('app')

ReactDOM.render(<App name='Jane' />, mountNode)
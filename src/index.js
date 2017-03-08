import React from 'react'
import ReactDOM from 'react-dom'
import App from './containers/app'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { state } from './reducers'
import './index.css'

ReactDOM.render(
  <Provider store={createStore(state)}>
    <App />
  </Provider>,
  document.getElementById('root')
)

import React from 'react'
import {Editor} from './Editor'
import Tabs from '../containers/tabs'
import './App.css'

const App = ({ app }) => {
  return (
    <div className="app">
      <div className="app-header">
        <h2>{app.title}</h2>
      </div>
      <div className="editor-pane">
        <Tabs />
        <Editor />
      </div>
    </div>
  )
}

export { App }

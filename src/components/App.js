import React from 'react'
import {Editor} from './Editor'
import Tabs from '../containers/tabs'
import './App.css'

const App = ({ app }) => {
  const handleDragOver = (e) => {
    e.preventDefault()
    e.dataTransfer.dropEffect = 'move'
  }
  const handleDrop = (e) => {
    e.preventDefault()
    const data = e.dataTransfer.getData('test')
    e.target.appendChild(document.querySelector(`.${data}`))
  }

  return (
    <div className="app">
      <div className="app-header">
        <h2>{app.title}</h2>
      </div>
      <div className="editor-pane">
        <Tabs />
        <Editor
          cols={45}
          rows={20} />
      </div>
      <div
        className="dragover-area"
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
      </div>
    </div>
  )
}

export { App }

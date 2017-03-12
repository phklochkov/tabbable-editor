import React from 'react'
import './Editor.css'

const Editor = ({ name, handleChange, className }) => {
  return (
    <div className={className}>
      <textarea
        onChange={handleChange}
        className="text-area"
      />
    </div>
  )
}

export { Editor }

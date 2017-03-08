import React from 'react'
import './AddTab.css'

let id = 0;
const AddTab = ({ handleAdd }) => {
  const addTab = (e) => {
    e.preventDefault()
    handleAdd(id)
    id += 1
  }

  return (
    <div className="add-tab">
      <a href="#" onClick={addTab}>+</a>
    </div>
  )
}

export { AddTab }

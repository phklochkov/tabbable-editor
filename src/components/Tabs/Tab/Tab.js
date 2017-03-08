import React from 'react'
import './Tab.css'

const Tab = ({ item, handleClose, handleSelect, handleRemove }) => {
  const removeTab = (e) => {
    e.preventDefault()
    handleRemove(item.id)
  }

  const handleDragStart = (e) => {
    const dt = e.dataTransfer
    dt.effectAllowed = 'move'
    dt.setData('test', e.target.className)
  }

  return (
    <div
      className="tab-item"
      draggable={true}
      onDragStart={handleDragStart}
    >
      <span
        className="tab-title"
        onClick={() => handleSelect(item.id)}
      >
        {item.title}
      </span>
      <a className="tab-close" href="#" onClick={removeTab}>x</a>
    </div>
  )
}

export { Tab }

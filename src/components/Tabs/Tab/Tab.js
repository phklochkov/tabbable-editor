import React from 'react'
import './Tab.css'

const Tab = ({ item, handleClose, handleSelect, handleRemove, handleDrop }) => {
  // TODO: Remove handlers.
  const removeTab = (e) => {
    e.preventDefault()
    handleRemove(item.id)
  }

  const handleDragStart = (e) => {
    const dt = e.dataTransfer
    dt.effectAllowed = 'link'
    dt.setData('tab', item.id)
  }

  const handleDragOver = (e) => {
    e.preventDefault()
    e.dataTransfer.dropEffect = 'link'
  }

  const handleDropEv = (e) => {
    const data = e.dataTransfer.getData('tab')
    handleDrop({ selected: +data, endpoint: item.id })
  }

  return (
    <div
      className="tab-item"
      draggable={true}
      onDragStart={handleDragStart}
      onDragOver={handleDragOver}
      onDrop={handleDropEv}
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

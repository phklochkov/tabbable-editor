import React from 'react'
import './Tab.css'

const Tab = ({ item, handleClose, handleSelect, handleRemove, handleDrop }) => {
  const removeTab = (e) => {
    e.preventDefault()
    handleRemove(item.id)
  }

  const handleDragStart = (e) => {
    e.dataTransfer.setData('tab', item.id)
  }

  const handleDropEv = (e) => {
    handleDrop({
      selected: +e.dataTransfer.getData('tab'),
      target: item.id
    })
  }

  return (
    <div
      className="tab-item"
      draggable={true}
      onDragStart={handleDragStart}
      onDragOver={(e) => e.preventDefault()}
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

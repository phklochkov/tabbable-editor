import React from 'react'

const Editor = ({ name, cols, rows, handleChange, className }) => {
  return (
    <div className={className}>
      <textarea cols={cols} rows={rows} ></textarea>
    </div>
  )
}

export { Editor }

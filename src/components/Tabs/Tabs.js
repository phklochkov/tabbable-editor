import React from 'react'
import {Wrapper} from './Wrapper'
import {Tab} from './Tab'
import {AddTab} from './AddTab'

const Tabs = ({ tabs, handleAdd, handleSelect, handleRemove }) => {
  return (
    <Wrapper>
      {tabs.items && tabs.items.map(
        (i) =>
          <Tab
            key={i.id}
            item={i}
            handleSelect={handleSelect}
            handleRemove={handleRemove} />
      )}
      <AddTab handleAdd={handleAdd} />
    </Wrapper>
  )
}

export { Tabs }

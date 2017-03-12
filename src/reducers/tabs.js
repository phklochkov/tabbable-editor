import * as types from '../actions/types'

// TODO: Think if could be done better.
const changeItemPosition = (payload, items) => {
  const { selected, target } = payload

  if (selected === target) {
    return items
  }

  const selectedIdx = items.findIndex((t) => t.id === selected)
  const targetIdx = items.findIndex((t) => t.id === target)
  const filtered = items.filter((t) => t.id !== selected)
  // TODO: Refactor.
  const position = selectedIdx < targetIdx ?
    filtered.findIndex((t) => t.id === target) + 1 :
    filtered.findIndex((t) => t.id === target)

  return [
    ...filtered.slice(0, position),
    items[selectedIdx],
    ...filtered.slice(position)
  ]
}

const INITIAL_STATE = {
  activeId: null, // TODO: Think about type, if number do not use null.
  items: []
}

const tabs = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.TABS_ADD_ITEM:
      return {
        ...state,
        activeId: action.payload,
        items: [
          ...state.items,
          { id: action.payload, title: `Untitled${action.payload}` }
        ]
      }
    case types.TABS_REMOVE_ITEM:
      const { items, activeId } = state
      const indexToRemove = items.findIndex((t) => t.id === action.payload)

      return {
        ...state,
        activeId: activeId === action.payload ?
          items[items.length - 1].id || null : activeId,
        items: [
          ...items.slice(0, indexToRemove),
          ...items.slice(indexToRemove + 1)
        ]
     }
    case types.TABS_SELECT_ITEM:
      return {
        ...state,
        activeId: action.payload
      }
    case types.TABS_CHANGE_ITEM_POSITION:
      return {
        ...state,
        items: changeItemPosition(action.payload, state.items)
      }
    default:
      return state
  }
}

export { tabs }

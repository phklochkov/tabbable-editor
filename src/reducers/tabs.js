import * as types from '../actions/types'

// TODO: Refactor method.
const changeItemPosition = (payload, items) => {
  const { selected, endpoint } = payload

  if (selected === endpoint) {
    return items
  }


  const selectedIndex = items.findIndex((t) => t.id === selected)
  const endIndex = items.findIndex((t) => t.id === endpoint)
  const filtered = items.filter((t) => t.id !== selected)
  let endpointIndex = filtered.findIndex((t) => t.id === endpoint)

  const moveAfter = selectedIndex < endIndex

  return [
    ...filtered.slice(0, moveAfter ? endpointIndex + 1 : endpointIndex),
    items[selectedIndex],
    ...filtered.slice(moveAfter ? endpointIndex + 1 : endpointIndex)
  ]
}

const INITIAL_STATE = {
  activeId: null,
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
      const indexToRemove = state.items.findIndex((t) => t.id === action.payload)
      return {
        ...state,
        activeId: state.activeId === action.payload ?
          state.items[state.items.length - 1].id : state.activeId,
        items: [
          ...state.items.slice(0, indexToRemove),
          ...state.items.slice(indexToRemove + 1)
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

import * as types from '../actions/types'

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
      // TODO: Add left or right move distinction.
      // Clean up this mess.
      const selected = state.items
        .find((t) => t.id === action.payload.selected)
      const filtered = state.items
        .filter((t) => t.id !== action.payload.selected)
      const indexToReplace = filtered
        .findIndex((t) => t.id === action.payload.endpoint)

      return {
        ...state,
        items: [
          ...filtered.slice(0, indexToReplace + 1),
          selected,
          ...filtered.slice(indexToReplace + 1)
        ]
      }
    default:
      return state
  }
}

export { tabs }

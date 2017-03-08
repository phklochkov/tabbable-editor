const INITIAL_STATE = {
  activeId: null,
  items: []
}

const tabs = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'TABS_ADD_ITEM':
      return {
        ...state,
        activeId: action.payload,
        items: [
          ...state.items,
          { id: action.payload, title: 'Untitled' }
        ]
      }
    case 'TABS_REMOVE_ITEM':
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
    case 'TABS_SELECT_ITEM':
      return {
        ...state,
        activeId: action.payload
      }
    default:
      return state
  }
}

export { tabs }

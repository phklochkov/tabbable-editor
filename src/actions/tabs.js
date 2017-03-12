import * as types from './types'

export const addItem = (id) => ({
  type: types.TABS_ADD_ITEM,
  payload: id
})

export const removeItem = (id) => ({
  type: types.TABS_REMOVE_ITEM,
  payload: id
})

export const selectItem = (id) => ({
  type: types.TABS_SELECT_ITEM,
  payload: id
})

export const changeItemPosition = (payload) => ({
  type: types.TABS_CHANGE_ITEM_POSITION,
  payload
})

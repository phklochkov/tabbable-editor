import {tabs} from './tabs'
import * as types from '../actions/types'

describe('tabs reducer', () => {
  it('should return initial state', () => {
    const expected = { activeId: null, items: [] }

    const actual = tabs(undefined, {})

    expect(actual).toEqual(expected)
  })

  it('should add new item', () => {
    const expected = { activeId: 0, items: [{ id: 0, title: 'Untitled0' }] }

    const actual = tabs(
      { activeId: null, items: [] },
      { type: types.TABS_ADD_ITEM, payload: 0 }
    )

    expect(actual).toEqual(expected)
  })


  it('should remove item', () => {
    const initialState = {
      activeId: 0,
      items: [{ id: 0, title: 'Untitled0' }]
    }
    const expected = { activeId: null, items: [] }

    const actual = tabs(
      { activeId: null, items: [] },
      { type: types.TABS_REMOVE_ITEM, payload: 0 }
    )

    expect(actual).toEqual(expected)
  })

  it('should set item as active', () => {
    const initialState = { activeId: 0, items:[
      { id: 0, title: 'Untitled' },
      { id: 1, title: 'Untitled' },
      { id: 2, title: 'Untitled' }
    ] }
    const expected = 2

    const actual = tabs(
      { activeId: null, items: [] },
      { type: types.TABS_SELECT_ITEM, payload: 2 }
    )

    expect(actual.activeId).toEqual(expected)
  })

  it('should change item position to the right', () => {
    const initialState = { activeId: 0, items:[
      { id: 0, title: 'Untitled' },
      { id: 1, title: 'Untitled' },
      { id: 2, title: 'Untitled' }
    ] }
    const expected = { activeId: 0, items:[
      { id: 1, title: 'Untitled' },
      { id: 0, title: 'Untitled' },
      { id: 2, title: 'Untitled' }
    ] }

    const actual = tabs(
      initialState,
      {
        type: types.TABS_CHANGE_ITEM_POSITION,
        payload: { selected: 0, target: 1 }
      }
    )

    expect(actual).toEqual(expected)
  })

  it('should change item position to the left', () => {
    const initialState = { activeId: 2, items:[
      { id: 0, title: 'Untitled' },
      { id: 1, title: 'Untitled' },
      { id: 2, title: 'Untitled' }
    ] }
    const expected = { activeId: 2, items:[
      { id: 2, title: 'Untitled' },
      { id: 0, title: 'Untitled' },
      { id: 1, title: 'Untitled' }
    ] }

    const actual = tabs(
      initialState,
      {
        type: types.TABS_CHANGE_ITEM_POSITION,
        payload: { selected: 2, target: 0 }
      }
    )

    expect(actual).toEqual(expected)
  })
})

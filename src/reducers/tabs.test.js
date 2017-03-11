import {tabs} from './tabs'
import * as types from '../actions/types'

describe('tabs reducer', () => {
  it('should return initial state', () => {
    const expected = { activeId: null, items: [] }

    const actual = tabs(undefined, {})

    expect(actual).toEqual(expected)
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
        payload: { selected: 0, endpoint: 1 }
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
        payload: { selected: 2, endpoint: 0 }
      }
    )

    expect(actual).toEqual(expected)
  })

})

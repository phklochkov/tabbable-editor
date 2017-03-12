import {editor} from './editor'

describe('editor reducer', () => {
  it('should return initial state', () => {
    const expected = { id: null, text: null }

    const actual = editor(undefined, {})

    expect(actual).toEqual(expected)
  })
})

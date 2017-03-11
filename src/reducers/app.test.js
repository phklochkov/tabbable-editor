import {app} from './app'

describe('app reducer', () => {
  it('should return the intial state', () => {
    const expected = { title: 'Text Editor with Tabs' }

    const actual = app(undefined, {})

    expect(actual).toEqual(expected)
  })
})

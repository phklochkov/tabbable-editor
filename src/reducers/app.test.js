import {app} from './app'

describe('app reducer', () => {
  it('should return the intial state', () => {
    const expected = { title: 'Text Editor with Tabs' }

    const result = app(undefined, {})

    expect(result).toEqual(expected)
  })
})

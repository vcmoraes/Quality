import { add, remove } from '../index'
import { ADD, REMOVE } from '../constants'

const value = 2

describe('Note Action', () => {
  it('should with success add', () => {
    const expectedBehavior = {
      type: ADD,
      value
    }
    expect(add(value)).toEqual(expectedBehavior)
  })
  it('should with success remove', () => {
    const expectedBehavior = {
      type: REMOVE,
      value
    }
    expect(remove(value)).toEqual(expectedBehavior)
  })
})

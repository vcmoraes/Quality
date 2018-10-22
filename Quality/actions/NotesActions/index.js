import { ADD, REMOVE } from './constants'

export const add = value => ({
  type: ADD,
  value
})

export const remove = value => ({
  type: REMOVE,
  value
})

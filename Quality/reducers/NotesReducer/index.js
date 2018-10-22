import { ADD, REMOVE } from '../../actions/NotesActions/constants'

initialState = { notes: [20, 10, 5, 3] }

export default function NotesReducer(state = initialState, action) {
  let notes = state.notes
  switch (action.type) {
    case ADD:
      notes.push(action.value)
      return {
        ...state,
        notes: [...new Set(notes)].sort(sortNumber)
      }
    case REMOVE:
      notes = notes.filter(ele => {
        return ele != action.value
      })
      return {
        ...state,
        notes: notes.sort(sortNumber)
      }
    default:
      return state
  }
}

const sortNumber = (a, b) => {
  return b - a
}

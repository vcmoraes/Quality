import { combineReducers } from 'redux'
import NavigationReducer from './NavigationReducer'
import NotesReducer from './NotesReducer'

const rootReducer = combineReducers({
  nav: NavigationReducer,
  notesData: NotesReducer
})

export default rootReducer

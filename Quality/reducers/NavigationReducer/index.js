import { RootNavigator } from '../../navigation'
import { NavigationActions } from 'react-navigation'

const initNavigation = RootNavigator.router.getStateForAction(
  NavigationActions.init()
)

const navigation = (state = initNavigation, action) => {
  const nextState = RootNavigator.router.getStateForAction(action, state)
  return nextState || state
}

export default navigation

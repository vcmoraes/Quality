import { connect } from 'react-redux'

import {
  reduxifyNavigator,
  createReactNavigationReduxMiddleware
} from 'react-navigation-redux-helpers'

import {
  createStackNavigator,
  createDrawerNavigator,
  createSwitchNavigator
} from 'react-navigation'

import Splash from '../containers/Splash'
import HomeCalculator from '../containers/HomeCalculator'
import ChangeNotes from '../containers/ChangeNotes'
import ResultNotes from '../containers/ResultNotes'

const middleware = createReactNavigationReduxMiddleware(
  'root',
  state => state.nav
)

const HomeNavigator = createDrawerNavigator({
  HomeCalculator: {
    screen: HomeCalculator,
    navigationOptions: {
      drawerLabel: 'Calcular notas'
    }
  },
  ChangeNotes: {
    screen: ChangeNotes,
    navigationOptions: {
      drawerLabel: 'Alterar Notas'
    }
  }
})

const HomeStack = createStackNavigator(
  {
    HomeNavigator: {
      screen: HomeNavigator
    },
    ResultNotes: {
      screen: ResultNotes
    }
  },
  {
    headerMode: 'none'
  }
)

const RootNavigator = createSwitchNavigator({
  Splash: Splash,
  Home: HomeStack
})

const AppWithNavigationState = reduxifyNavigator(RootNavigator, 'root')

const mapStateToProps = state => ({
  state: state.nav
})

const AppNavigator = connect(mapStateToProps)(AppWithNavigationState)

export { AppNavigator, RootNavigator, HomeStack, middleware }

import React from 'react'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore.js'
import { AppNavigator } from './navigation'
import NavigationService from './navigation/NavigationService'

const stores = configureStore()

const ReduxApp = () => {
  return (
    <Provider store={stores}>
      <AppNavigator
        ref={navigator => {
          NavigationService.setTopLevelNavigator(navigator)
        }}
      />
    </Provider>
  )
}

export default ReduxApp

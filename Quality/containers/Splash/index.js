import React, { Component } from 'react'
import styled from 'styled-components'
import NavigationService from './../../navigation/NavigationService'
import LogoQuality from '../../components/LogoQuality'

const Container = styled.View`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  padding-horizontal: 50px;
`
class SplashView extends Component {
  componentDidMount() {
    setTimeout(this.handlerNextScreen, 1500)
  }

  handlerNextScreen = () => {
    NavigationService.navigate('Home')
  }

  render() {
    return (
      <Container>
        <LogoQuality />
      </Container>
    )
  }
}

export default SplashView

import React from 'react'
import { Button } from 'react-native'
import styled from 'styled-components'
import MenuContainer from '../../components/MenuContainer'
import Space from '../../components/Space'
import InputText from '../../components/InputText'

import NavigationService from './../../navigation/NavigationService'

const Container = styled.View`
  flex: 1;
  padding: 50px;
  justify-content: center;
  align-items: center;
`
class HomeCalculator extends React.Component {
  state = { text: '' }
  handlerChangeText = text => {
    this.setState({ text: text })
  }

  render() {
    return (
      <MenuContainer {...this.props} title={'Calcular'}>
        <Container>
          <InputText
            multiline={false}
            maxValue={10000}
            type={'currency'}
            placeholder={'Digite o valor'}
            keyboardType={'number-pad'}
            onChangeText={this.handlerChangeText}
          />
          <Space height={10} />
          <Button
            title="VER NOTAS"
            disabled={!this.state.text}
            onPress={() =>
              NavigationService.navigate('ResultNotes', {
                value: Number(this.state.text)
              })
            }
          />
        </Container>
      </MenuContainer>
    )
  }
}

export default HomeCalculator

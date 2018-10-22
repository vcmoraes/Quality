import React from 'react'

import {
  Container,
  Header,
  Title,
  Left,
  Icon,
  Right,
  Button,
  Body,
  Content
} from 'native-base'

const MenuContainer = props => {
  return (
    <Container>
      <Header>
        <Left>
          <Button
            transparent
            onPress={() =>
              props.navigation &&
              (props.back
                ? props.navigation.goBack()
                : props.navigation.openDrawer())
            }>
            <Icon name={props.back ? 'arrow-back' : 'menu'} />
          </Button>
        </Left>
        <Body>
          <Title>{props.title}</Title>
        </Body>
        <Right />
      </Header>
      <Content contentContainerStyle={{ flex: 1 }}>{props.children}</Content>
    </Container>
  )
}
export default MenuContainer

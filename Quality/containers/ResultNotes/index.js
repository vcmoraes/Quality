import React from 'react'
import { connect } from 'react-redux'
import { View, ScrollView } from 'react-native'
import styled from 'styled-components'
import Card from '../../components/Card'
import Space from '../../components/Space'
import MenuContainer from '../../components/MenuContainer'

const Container = styled.View`
  flex: 1;
  padding-horizontal: 20px;
`
const TextValue = styled.Text`
  font-size: 30px;
  font-weight: bold;
`
const TextNotes = styled.Text`
  font-size: 12px;
  font-style: italic;
  color: red;
`
const ResultNotes = props => {
  const cards = verifyCards(props.navigation.state.params.value, props.notes)
  return (
    <MenuContainer {...props} title={'Resultado'} back={true}>
      <Container>
        <ScrollView>
          {cards.map((item, index) => (
            <View key={index}>
              <Space height={10} />
              <RenderCard {...item} />
            </View>
          ))}
        </ScrollView>
      </Container>
    </MenuContainer>
  )
}

const RenderCard = ({ value, quantity }) => (
  <Card
    paddingTop={10}
    paddingBottom={10}
    paddingRight={5}
    paddingLeft={5}
    alignItems={'center'}>
    <TextValue>{value}</TextValue>
    <Space height={10} />
    <TextNotes>{`${quantity} notas`}</TextNotes>
  </Card>
)

const verifyCards = (value, notes) => {
  const cards = []
  for (var x = 0; x < notes.length; x++) {
    console.log('VALUE', value)
    console.log('NOTES[x]', notes[x])
    const rest = value % notes[x]
    const quantity = (value - rest) / notes[x]
    if (quantity > 0) {
      cards.push({ value: notes[x], quantity })
    }
    value = rest
  }
  console.log('CARDS', cards)
  return cards
}

const mapStateToProps = state => ({
  notes: state.notesData.notes
})

export default connect(
  mapStateToProps,
  null
)(ResultNotes)

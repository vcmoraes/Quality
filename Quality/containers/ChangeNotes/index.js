import React from 'react'
import { View, ScrollView, TouchableOpacity, Alert, Button } from 'react-native'
import { connect } from 'react-redux'
import styled from 'styled-components'
import MenuContainer from '../../components/MenuContainer'
import Card from '../../components/Card'
import Space from '../../components/Space'
import InputText from '../../components/InputText'
import { add, remove } from '../../actions/NotesActions'

const TextValue = styled.Text`
  font-size: 30px;
  font-weight: bold;
`
const TextRemove = styled.Text`
  font-size: 12px;
  font-style: italic;
  color: red;
`
const Container = styled.View`
  flex: 1;
  padding: 20px;
`
class ChangeNotes extends React.Component {
  state = { text: '' }
  handlerChangeText = text => {
    this.setState({ text: text })
  }
  handlerAdd = () => {
    const value = Number(this.state.text)
    Alert.alert(
      'Atenção',
      this.props.notes.includes(value)
        ? 'Já tem essa nota cadastrada!'
        : 'Nota adicionada com sucesso!',
      [{ text: 'OK' }],
      {
        cancelable: false
      }
    )
    if (!this.props.notes.includes(value)) {
      this.props.addNote(value)
    }
  }
  handlerRemove = value => {
    this.props.removeNote(value)
  }
  render() {
    return (
      <MenuContainer {...this.props} title={'Alterar'}>
        <Container>
          <InputText
            multiline={false}
            maxValue={1000}
            type={'currency'}
            placeholder={'Valor nota'}
            keyboardType={'number-pad'}
            onChangeText={this.handlerChangeText}
          />
          <Space height={10} />
          <Button
            title="ADICIONAR"
            disabled={!this.state.text}
            onPress={this.handlerAdd}
          />
          <ScrollView>
            {this.props.notes.map((item, index) => (
              <View key={index}>
                <Space height={20} />
                <Card
                  paddingTop={10}
                  paddingBottom={10}
                  paddingRight={5}
                  paddingLeft={5}
                  alignItems={'center'}>
                  <TextValue>{`${item}`}</TextValue>
                  <Space height={10} />
                  {this.props.notes.length > 1 && (
                    <TouchableOpacity onPress={() => this.handlerRemove(item)}>
                      <TextRemove>{'REMOVER'}</TextRemove>
                    </TouchableOpacity>
                  )}
                </Card>
              </View>
            ))}
          </ScrollView>
        </Container>
      </MenuContainer>
    )
  }
}

const mapStateToProps = state => ({
  notes: state.notesData.notes
})

const mapDispatchToProps = dispatch => ({
  addNote: value => dispatch(add(value)),
  removeNote: value => dispatch(remove(value))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChangeNotes)

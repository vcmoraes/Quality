import React from 'react'
import styled from 'styled-components'

const TextInput = styled.TextInput`
  padding-horizontal: 7px;
  width: 100%;
  height: 40px;
  border-color: gray;
  border-width: 1px;
  border-radius: 5px;
`
class InputText extends React.Component {
  state = { text: '' }
  handlerChangeText = text => {
    switch (this.props.keyboardType) {
      case 'numeric':
      case 'decimal-pad':
      case 'number-pad':
        let value = Number(text)
        if (value <= (this.props.maxValue || Number.MAX_SAFE_INTEGER)) {
          this.setState({ text: (value && value.toString()) || '' }, () => {
            if (this.props.onChangeText) {
              this.props.onChangeText(this.state.text)
            }
          })
        }
        break
      default:
        this.setState({ text })
        if (this.props.onChangeText) {
          this.props.onChangeText(text)
        }
        break
    }
  }
  render() {
    return (
      <TextInput
        {...this.props}
        onChangeText={text => this.handlerChangeText(text)}
        value={this.state.text}
      />
    )
  }
}

export default InputText

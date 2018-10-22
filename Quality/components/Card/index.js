import React from 'react'
import styled from 'styled-components'
import { Card } from 'native-base'

const CardView = styled(Card)`
  width: ${props => props.width};
  border-radius: ${props => props.borderRadius};
  padding-top: ${props => props.paddingTop};
  padding-left: ${props => props.paddingLeft};
  padding-right: ${props => props.paddingRight};
  padding-bottom: ${props => props.paddingBottom};
  margin-top: ${props => props.marginTop};
  margin-left: ${props => props.marginLeft};
  margin-right: ${props => props.marginRight};
  margin-bottom: ${props => props.marginBottom};
  justify-content: ${props => props.justifyContent};
  align-items: ${props => props.alignItems};
  elevation: ${props => props.elevation};
  background-color: ${props => props.backgroundColor};
`
CardView.defaultProps = {
  justifyContent: 'flex-start',
  alignItems: 'stretch',
  borderRadius: 10,
  paddingTop: 0,
  paddingLeft: 0,
  paddingRight: 0,
  paddingBottom: 0,
  marginTop: 0,
  marginLeft: 0,
  marginRight: 0,
  marginBottom: 0,
  backgroundColor: 'white',
  elevation: 5,
  width: '100%'
}

export default props => <CardView {...props} />

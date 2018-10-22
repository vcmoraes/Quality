import React from 'react'
import styled from 'styled-components'
import LogoQuality from '../../commons/images/quality-logo.png'

const Image = styled.Image`
  width: 100%;
  resize-mode: contain;
`
export default () => <Image source={LogoQuality} />

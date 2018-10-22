import React from 'react'
import InputText from '../index'
import renderer from 'react-test-renderer'

describe('Components - InputText', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<InputText />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})

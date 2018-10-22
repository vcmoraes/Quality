import React from 'react'
import Card from '../index'
import renderer from 'react-test-renderer'

describe('Components - Card', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Card />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})

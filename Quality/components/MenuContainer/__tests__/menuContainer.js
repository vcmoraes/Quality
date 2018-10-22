import React from 'react'
import MenuContainer from '../index'
import renderer from 'react-test-renderer'

describe('Components - MenuContainer', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<MenuContainer />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})

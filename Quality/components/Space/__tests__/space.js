import React from 'react'
import Space from '../index'
import renderer from 'react-test-renderer'

describe('Components - Space', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Space />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})

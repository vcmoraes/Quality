import React from 'react'
import LogoQuality from '../index'
import renderer from 'react-test-renderer'

describe('Components - LogoQuality', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<LogoQuality />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})

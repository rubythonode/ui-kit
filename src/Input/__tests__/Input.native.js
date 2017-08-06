/* eslint-env jest */
import React from 'react'
import { shallow } from 'enzyme'
import Input from '../index.ios.js'

describe('Input.native', () => {
  it('renders a snapshot', () => {
    const wrapper = shallow(
      <Input />
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('renders a snapshot with `placeholder:Placeholder`', () => {
    const wrapper = shallow(
      <Input placeholder='Placeholder' />
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('renders a snapshot with `type:password`', () => {
    const wrapper = shallow(
      <Input type='password' />
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('renders a snapshot with `readOnly`', () => {
    const wrapper = shallow(
      <Input readOnly />
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('renders a snapshot with `onChange`', () => {
    const wrapper = shallow(
      <Input onChange={() => {}} />
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('renders a snapshot with `onChangeText`', () => {
    const wrapper = shallow(
      <Input onChangeText={() => {}} />
    )
    expect(wrapper).toMatchSnapshot()
  })
})

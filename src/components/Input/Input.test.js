import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAtrr } from '../../utils/testUtils';
import InputWithButton from './index';

const setUp = (props = {
  toolTipOpen: false,
  value: 'test'
}) => {
  const component = shallow(<InputWithButton {...props} />);
  return component;
};

describe('Input Component', () => {

  let component;
  beforeEach(() => {
    component = setUp();
  });

  it('Should render without errors', () => {
    const wrapper = findByTestAtrr(component, 'Search-Field');
    expect(wrapper.length).toBe(1);
  });

  it('Should render a Search button, and be enabled', () => {
    const searchButton = findByTestAtrr(component, 'Search-Button');
    expect(searchButton.length).toBe(1);
    expect(searchButton.props().children).toBe('Search')
    expect(searchButton.props().disabled).toBe(false)
  });

  it('Should not render tooltip', () => {
    const searchToolTip = findByTestAtrr(component, 'Search-ToolTip');
    expect(searchToolTip.length).toBe(1);
    expect(searchToolTip.props().isOpen).toBe(false);
  })

  it('Should render tooltip, and button should be disabled', () => {
    let component2 = setUp({
      toolTipOpen: true,
      value: ''
    })
    const searchToolTip = findByTestAtrr(component2, 'Search-ToolTip');
    expect(searchToolTip.length).toBe(1);
    expect(searchToolTip.props().isOpen).toBe(true);
    const searchButton = findByTestAtrr(component2, 'Search-Button');
    expect(searchButton.length).toBe(1);
    expect(searchButton.props().disabled).toBe(true);
  })
});
import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAtrr } from '../../utils/testUtils';
import Header from '.';

const setUp = (props = {}) => {
  const component = shallow(<Header {...props} />);
  return component;
};

describe('Header Component', () => {

  let component;
  beforeEach(() => {
    component = setUp();
  });

  it('Should render without errors', () => {
    const wrapper = findByTestAtrr(component, 'Header');
    expect(wrapper.length).toBe(1);
  });

  it('Should render a logo', () => {
    const brand = findByTestAtrr(component, 'Header-Brand');
    expect(brand.length).toBe(1);
    expect(brand.props().children).toBe('Weirdness Calculator')
  });
});
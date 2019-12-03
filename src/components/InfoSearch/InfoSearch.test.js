import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAtrr } from '../../utils/testUtils';
import InfoSearch from './index';

const setUp = (props = {}) => {
  const component = shallow(<InfoSearch {...props} />);
  return component;
};

describe('InfoSearch Section', () => {

  let component;
  beforeEach(() => {
    component = setUp();
  });

  it('Should render without errors', () => {
    const wrapper = findByTestAtrr(component, 'Search-Section');
    expect(wrapper.length).toBe(1);
  });

  it('Should render JumboTron', () => {
    const jumbo = findByTestAtrr(component, 'Search-Jumbo');
    expect(jumbo.length).toBe(1);
    expect(jumbo.props().children.length).toBe(4)
  })

  it('Should render a search button', () => {
    const button = findByTestAtrr(component, 'Search-Button');
    expect(button.length).toBe(1)
    expect(button.props().placeholder).toBe('Enter Weird Term')
  })
});
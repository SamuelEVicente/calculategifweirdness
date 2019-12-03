import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAtrr } from '../../utils/testUtils';
import SearchResult from './index';

const setUp = (props = {
  count: 3,
  currentGif: {
    meta: {}
  }
}) => {
  const component = shallow(<SearchResult {...props} />);
  return component;
};

describe('SearchResult Section', () => {

  let component;
  beforeEach(() => {
    component = setUp();
  });

  it('Should render without errors', () => {
    const wrapper = findByTestAtrr(component, 'Search-Result');
    expect(wrapper.length).toBe(1);
  });

  it('Should render a Weirdness Slider', () => {
    const slider = findByTestAtrr(component, 'Search-Result-Slider');
    expect(slider.length).toBe(1);
  });

  it('Should render like button, enabled', () => {
    const searchToolTip = findByTestAtrr(component, 'Like-Button');
    expect(searchToolTip.length).toBe(1);
    expect(searchToolTip.props().disabled).toBe(false);
  })

  it('Should render like button, disabled', () => {
    let component2 = setUp({
      count: 5,
      currentGif: {
      }
    })
    const likeButton = findByTestAtrr(component2, 'Like-Button');
    expect(likeButton.length).toBe(1);
    expect(likeButton.props().disabled).toBe(true);
  })
});
import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAtrr } from '../../utils/testUtils';
import Gif from './index';

const setUp = (props = {
  onUnlikeGif: function () {},
  gif: {
    title: 'Test',
    url: 'Test.Url'
  }
}) => {
  const component = shallow(<Gif {...props} />);
  return component;
};

describe('Gif Component', () => {

  let component;
  beforeEach(() => {
    component = setUp();
  });

  it('Should render without errors', () => {
    const wrapper = findByTestAtrr(component, 'Gif');
    expect(wrapper.length).toBe(1);
  });

  it('Should render <img> with Gif', () => {
    const gifImage = findByTestAtrr(component, 'Gif-Image');
    expect(gifImage.length).toBe(1);
    expect(gifImage.props().alt).toBe('Test')
    expect(gifImage.props().src).toBe('Test.Url')
    const gifTitle = findByTestAtrr(component, 'Gif-Title');
    expect(gifTitle.props().children).toBe('Test')
  });

  it('Should not render Unlike button', () => {
    const gifUnlike = findByTestAtrr(component, 'Gif-Unlike');
    expect(gifUnlike.length).toBe(0);
  })
});
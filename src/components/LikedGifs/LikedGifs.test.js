import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAtrr } from '../../utils/testUtils';
import LikedGifs from './index';

const setUp = (props = {
  likedGifs: [{
    title: 'Test',
    url: 'Test.Url',
    id: '0'
  },
  {
    title: 'Test1',
    url: 'Test.Url1',
    id: '1'
  },
  {
    title: 'Test2',
    url: 'Test.Url2',
    id: '2'
  },
  {
    title: 'Test3',
    url: 'Test.Url3',
    id: '3'
  },
  {
    title: 'Test4',
    url: 'Test.Url4',
    id: '4'
  }]
}) => {
  const component = shallow(<LikedGifs {...props} />);
  return component;
};

describe('LikedGifs Section', () => {

  let component;
  beforeEach(() => {
    component = setUp();
  });

  it('Should render without errors', () => {
    const wrapper = findByTestAtrr(component, 'Liked-Gifs');
    expect(wrapper.length).toBe(1);
  });

  it('Should render a Calulate My Weirdness button, enabled', () => {
    const calcMyWeirdness = findByTestAtrr(component, 'Link-To-Results');
    expect(calcMyWeirdness.length).toBe(1);
    expect(calcMyWeirdness.props().children.props.children).toBe('CALCULATE MY WEIRDNESS SCORE')
    expect(calcMyWeirdness.props().children.props.disabled).toBe(false)
  });

  it('Should render Calculate my weirdness button, disabled', () => {
    const component2 = setUp({
      likedGifs: [{
        title: 'Test',
        url: 'Test.Url',
        id: '0'
      },
      {
        title: 'Test1',
        url: 'Test.Url1',
        id: '1'
      }]
    })
    const calcMyWeirdness = findByTestAtrr(component2, 'Link-To-Results');
    expect(calcMyWeirdness.length).toBe(1);
    expect(calcMyWeirdness.props().children.props.disabled).toBe(true)
  })
});
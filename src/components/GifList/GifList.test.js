import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAtrr } from '../../utils/testUtils';
import GifList from './index';

const setUp = (props = {
  includeWeirdness: false,
  gifs: [{
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
  const component = shallow(<GifList {...props} />);
  return component;
};

describe('GifList Component', () => {

  let component;
  beforeEach(() => {
    component = setUp();
  });

  it('Should render without errors', () => {
    const wrapper = findByTestAtrr(component, 'Gif-Section');
    expect(wrapper.length).toBe(1);
  });

  it('Should render List of gifs', () => {
    const gifImage = findByTestAtrr(component, 'Gif-List');
    expect(gifImage.length).toBe(1);
    expect(gifImage.props().children.length).toBe(5)
  });

  it('Should not render weirdness rating', () => {
    const gifUnlike = findByTestAtrr(component, 'Gif-Weirdness');
    expect(gifUnlike.length).toBe(0);
  })

  it("Should render weirdness rating", () => {
    const component2 = setUp({
      includeWeirdness: true,
      gifs: [{
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
    })
    const gifWeirdness = findByTestAtrr(component2, 'Gif-Weirdness');
    expect(gifWeirdness.length).toBe(5);
  })
});
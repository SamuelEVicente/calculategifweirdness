import MainReducer from './reducer'
import { LIKE_GIF, DUP_LIKE_ERROR, IS_LOADING, RESET, SEARCH_VALUE_CHANGED, ON_WEIRD_VALUE_CHANGE, SET_CURRENT_GIF, TOOL_TIP_OPEN, UNLIKE_GIF } from './actionTypes';
const initialState = {
  searchValue: '',
  likedGifs: [],
  currentGif: {},
  weirdValue: 0,
  loading: false,
  toolTipOpen: false,
  dupLikeError: false,
  likedSearchTerms: []
}
describe('Home reducer', () => {
  it('Should return default state', () => {
    const newState = MainReducer(undefined, {});
    expect(newState).toEqual(initialState)
  })

  it('Should return new state from dispatching type DUP_LIKE_ERROR', () => {
    const newState = MainReducer(undefined, {
      type: DUP_LIKE_ERROR,
      payload: true
    });
    expect(newState).toEqual({ ...initialState, dupLikeError: true })
  })

  it('Should return new state from dispatching type IS_LOADING', () => {
    const newState = MainReducer(undefined, {
      type: IS_LOADING,
      payload: true
    });
    expect(newState).toEqual({ ...initialState, loading: true })
  })

  it('Should return new state with updated likedGifs/searchTerms and the exisiting state from LIKE_GIF', () => {
    const searchTerms = ['Water', 'Dairy', 'Star', 'Rainbow', 'Cake']
    const likedGifs = [{
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
    const newState = MainReducer(undefined, {
      type: LIKE_GIF,
      payload: {
        likedGifs: likedGifs,
        likedSearchTerms: searchTerms
      }
    });
    expect(newState).toEqual({
      ...initialState,
      likedGifs: likedGifs,
      likedSearchTerms: searchTerms
    })
  })

  it('Should return new state from dispatching type ON_WEIRD_VALUE_CHANGE', () => {
    const newState = MainReducer(undefined, {
      type: ON_WEIRD_VALUE_CHANGE,
      payload: 2
    });
    expect(newState).toEqual({ ...initialState, weirdValue: 2 })
  })

  it('Should return new state from dispatching type RESET', () => {
    const newState = MainReducer(undefined, {
      type: RESET
    });
    expect(newState).toEqual(initialState)
  })

  it('Should return new state from dispatching type SEARCH_VALUE_CHANGED', () => {
    const newState = MainReducer(undefined, {
      type: SEARCH_VALUE_CHANGED,
      payload: "Changed"
    });
    expect(newState).toEqual({ ...initialState, searchValue: "Changed" })
  })

  it('Should return new state from dispatching type SET_CURRENT_GIF', () => {
    const newState = MainReducer(undefined, {
      type: SET_CURRENT_GIF,
      payload: {
        title: '321',
        meta: {},
        url: '123'
      }
    });
    expect(newState).toEqual({
      ...initialState, currentGif: {
        title: '321',
        meta: {},
        url: '123'
      }
    })
  })

  it('Should return new state from dispatching type TOOL_TIP_OPEN', () => {
    const newState = MainReducer(undefined, {
      type: TOOL_TIP_OPEN,
      payload: true
    });
    expect(newState).toEqual({ ...initialState, toolTipOpen: true })
  })

  it('Should return new state from dispatching type UNLIKE_GIF', () => {
    const newState = MainReducer(undefined, {
      type: UNLIKE_GIF,
      payload: {
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
        }],
        likedSearchTerms: ['water', 'dairy']
      }
    });
    expect(newState).toEqual({
      ...initialState, likedGifs: [{
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
      }],
      likedSearchTerms: ['water', 'dairy']
    })
  })
})
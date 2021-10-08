const initialState = {
  photos: {
    results: [],
  },
  collections: {
    results: [],
  },
  users: {
    results: [],
  },
  related_searches: [],
  openPopup: false,
};

export const Action = {
  Types: {
    SEARCH_PHOTOS: 'SEARCH_PHOTOS',
    SET_SEARCH_RESULTS: 'SET_SEARCH_RESULTS',
    OPEN_POPUP: 'OPEN_POPUP',
  },

  Creators: {
    searchPhotos: (payload) => ({
      type: Action.Types.SEARCH_PHOTOS,
      payload,
    }),
    setSearchResult: (payload) => ({
      type: Action.Types.SET_SEARCH_RESULTS,
      payload,
    }),
    openPopup: () => ({
      type: Action.Types.OPEN_POPUP,
    }),
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
  default:
    return state;

  case Action.Types.SET_SEARCH_RESULTS: {
    return {
      ...state,
      ...action.payload,
    };
  }
  case Action.Types.OPEN_POPUP: {
    return {
      ...state,
      openPopup: true,
    };
  }
  }
};

export default reducer;

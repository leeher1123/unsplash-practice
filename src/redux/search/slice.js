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
    SEARCH: 'SEARCH',
    SET_SEARCH_RESULTS: 'SET_SEARCH_RESULTS',
    SEARCH_PHOTOS: 'SEARCH_PHOTOS',
    SET_SEARCH_PHOTOS: 'SET_SEARCH_PHOTOS',
    SEARCH_COLLECTIONS: 'SEARCH_COLLECTIONS',
    SET_SEARCH_COLLECTIONS: 'SET_SEARCH_COLLECTIONS',
    SEARCH_USERS: 'SEARCH_USERS',
    SET_SEARCH_USERS: 'SET_SEARCH_USERS',
    OPEN_POPUP: 'OPEN_POPUP',
    CLOSE_POPUP: 'CLOSE_POPUP',
  },

  Creators: {
    search: (payload) => ({
      type: Action.Types.SEARCH,
      payload,
    }),
    setSearchResult: (payload) => ({
      type: Action.Types.SET_SEARCH_RESULTS,
      payload,
    }),
    searchPhotos: (payload) => ({
      type: Action.Types.SEARCH_PHOTOS,
      payload,
    }),
    setSearchPhotos: (payload) => ({
      type: Action.Types.SET_SEARCH_PHOTOS,
      payload,
    }),
    searchCollections: (payload) => ({
      type: Action.Types.SEARCH_COLLECTIONS,
      payload,
    }),
    setSearchCollections: (payload) => ({
      type: Action.Types.SET_SEARCH_COLLECTIONS,
      payload,
    }),
    searchUsers: (payload) => ({
      type: Action.Types.SEARCH_USERS,
      payload,
    }),
    setSearchUsers: (payload) => ({
      type: Action.Types.SET_SEARCH_USERS,
      payload,
    }),
    openPopup: () => ({
      type: Action.Types.OPEN_POPUP,
    }),
    closePopup: () => ({
      type: Action.Types.CLOSE_POPUP,
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
  case Action.Types.SET_SEARCH_PHOTOS: {
    return {
      ...state,
      photos: action.payload,
    };
  }
  case Action.Types.SET_SEARCH_COLLECTIONS: {
    return {
      ...state,
      collections: action.payload,
    };
  }
  case Action.Types.SET_SEARCH_USERS: {
    return {
      ...state,
      users: action.payload,
    };
  }
  case Action.Types.OPEN_POPUP: {
    return {
      ...state,
      openPopup: true,
    };
  }
  case Action.Types.CLOSE_POPUP: {
    return {
      ...state,
      openPopup: false,
    };
  }
  }
};

export default reducer;

const initialState = {
  list: [],
};

export const Action = {
  Types: {
    GET_PHOTOS: 'GET_PHOTOS',
    SET_PHOTOS: 'SET_PHOTOS',
  },

  Creators: {
    getPhotos: (payload) => ({
      type: Action.Types.GET_PHOTOS,
      payload,
    }),
    setPhotos: (payload) => ({
      type: Action.Types.SET_PHOTOS,
      payload,
    }),
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
  default: return state;

  case Action.Types.SET_PHOTOS: {
    return {
      ...state,
      list: action.payload,
    };
  }
  }
};

export default reducer;

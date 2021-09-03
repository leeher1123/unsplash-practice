const initialState = {
  list: [],
  photo: {},
};

export const Action = {
  Types: {
    GET_PHOTOS: 'GET_PHOTOS',
    SET_PHOTOS: 'SET_PHOTOS',
    GET_PHOTO_BY_ID: 'GET_PHOTO_BY_ID',
    SET_PHOTO_BY_ID: 'SET_PHOTO_BY_ID',
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
    getPhotoById: (payload) => ({
      type: Action.Types.GET_PHOTO_BY_ID,
      payload,
    }),
    setPhotoById: (payload) => ({
      type: Action.Types.SET_PHOTO_BY_ID,
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
  case Action.Types.SET_PHOTO_BY_ID: {
    return {
      ...state,
      photo: {
        ...state.photo,
        [action.payload.id]: action.payload,
      },
    };
  }
  }
};

export default reducer;

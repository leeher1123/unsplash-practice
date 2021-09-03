const initialState = {
  list: [],
  photo: {},
  relatedPhotos: {},
};

export const Action = {
  Types: {
    GET_PHOTOS: 'PHOTOS/GET_PHOTOS',
    SET_PHOTOS: 'PHOTOS/SET_PHOTOS',
    GET_PHOTO_BY_ID: 'PHOTOS/GET_PHOTO_BY_ID',
    SET_PHOTO_BY_ID: 'PHOTOS/SET_PHOTO_BY_ID',
    GET_RELATED_PHOTOS: 'PHOTOS/GET_RELATED_PHOTOS',
    SET_RELATED_PHOTOS: 'PHOTOS/SET_RELATED_PHOTOS',
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
    getRelatedPhotos: (payload) => ({
      type: Action.Types.GET_RELATED_PHOTOS,
      payload,
    }),
    setRelatedPhotos: (payload) => ({
      type: Action.Types.SET_RELATED_PHOTOS,
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
  case Action.Types.SET_RELATED_PHOTOS: {
    return {
      ...state,
      relatedPhotos: {
        ...state.relatedPhotos,
        [action.payload.id]: action.payload.data,
      },
    };
  }
  }
};

export default reducer;

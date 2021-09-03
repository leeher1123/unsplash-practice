const initialState = {
  openPopup: false,
  currentPhotoId: null,
};

export const Action = {
  Types: {
    UPDATE_STATE: 'POPUP/UPDATE_STATE',
    OPEN_PHOTO_POPUP: 'POPUP/OPEN_PHOTO_POPUP',
    CLOSE_PHOTO_POPUP: 'POPUP/CLOSE_PHOTO_POPUP',
  },

  Creators: {
    updateState: (payload) => ({
      type: Action.Types.UPDATE_STATE,
      payload,
    }),
    openPhotoPopup: (payload) => ({
      type: Action.Types.OPEN_PHOTO_POPUP,
      payload,
    }),
    closePhotoPopup: () => ({
      type: Action.Types.CLOSE_PHOTO_POPUP,
    }),
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
  default:
    return state;
  case Action.Types.UPDATE_STATE: {
    return {
      ...state,
      ...action.payload,
    };
  }
  case Action.Types.CLOSE_PHOTO_POPUP: {
    return {
      ...state,
      openPopup: false,
    };
  }
  }
};

export default reducer;

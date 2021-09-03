const initialState = {};

export const Action = {
  Types: {
    OPEN_PHOTO_POPUP: 'POPUP/OPEN_PHOTO_POPUP',
  },

  Creators: {
    openPhotoPopup: (payload) => ({
      type: Action.Types.OPEN_PHOTO_POPUP,
      payload,
    }),
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
  default:
    return state;
  }
};

export default reducer;

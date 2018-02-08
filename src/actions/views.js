import * as types from './actionType';

// Sync Actions

// Likely won't need here ---- will move to loginForm reducer

// export const toggleForm = () => ({
//     type: types.TOGGLE_FORM,
// })

export const toggleView = (selectedView) => ({
    type: types.TOGGLE_VIEW,
    selectedView,
  });

export const toggleModal = (boolean) => ({
  type: types.TOGGLE_MODAL,
  boolean
})
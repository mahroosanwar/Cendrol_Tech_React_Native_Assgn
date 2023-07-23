import { createReducer } from '@reduxjs/toolkit';
import { setSelectedShow, setShowsList } from './actions';

const initialState = {
  selectedShow: null,
  showsList: [],
};

const rootReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setSelectedShow, (state, action) => {
      state.selectedShow = action.payload;
    })
    .addCase(setShowsList, (state, action) => {
      state.showsList = action.payload;
    });
});

export default rootReducer;

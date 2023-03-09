import { createSlice } from "@reduxjs/toolkit";

export const modalSlidersSlice = createSlice({
  name: "modalSliders",
  initialState: {
    open: [],
  },
  reducers: {
    closeModal: (state, action) => {
      state.open.splice(state.open.indexOf(action.payload), 1);
    },
    openModal: (state, action) => {
      state.open.push(action.payload);
    },
    closeAllModals: (state) => {
      state.open = [];
    },
  },
});

export const { closeModal, openModal, closeAllModals } =
  modalSlidersSlice.actions;
export default modalSlidersSlice.reducer;

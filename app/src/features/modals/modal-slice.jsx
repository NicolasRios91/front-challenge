import { createSlice } from "@reduxjs/toolkit";

export const modalSlidersSlice = createSlice({
  name: "modalSliders",
  initialState: [],
  reducers: {
    closeModal: (state, { payload }) => {
      state.splice(state.indexOf(payload), 1);
    },
    openModal: (state, { payload }) => {
      state.push(payload);
    },
    closeAllModals: (state) => {
      state.splice(0, state.length);
    },
  },
});

export const { closeModal, openModal, closeAllModals } =
  modalSlidersSlice.actions;

export default modalSlidersSlice.reducer;

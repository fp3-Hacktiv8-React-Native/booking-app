import { createSlice } from "@reduxjs/toolkit";

export const SavedSlice = createSlice({
  name: "booking",
  initialState: {
    booking: [],
    list: [],
  },
  reducers: {
    savedPlaces: (state, action) => {
      state.booking.push({ ...action.payload });
    },

    savedList: (state, action) => {
      state.list.push({ ...action.payload });
    },
    removeList: (state, action) => {
      state.list = state.list.filter(
        (property) => property.id !== action.payload.id
      );
    },
  },
});

export const { savedPlaces, savedList, removeList } = SavedSlice.actions;

export default SavedSlice.reducer;

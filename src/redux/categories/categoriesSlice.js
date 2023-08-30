import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
  status: 'Under Construction',
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    categoriesStatus: (state) => state.status,
  },
});

export const { categoriesStatus } = categoriesSlice.actions;

export default categoriesSlice.reducer;

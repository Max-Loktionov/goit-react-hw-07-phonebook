import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',

  initialState: '',

  reducers: {
    changeFilter: (_, action) => action.payload,
  },
});

export const { changeFilter } = filterSlice.actions;
export const getFiltred = state => state.filter;

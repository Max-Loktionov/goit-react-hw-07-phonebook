import { configureStore } from '@reduxjs/toolkit';
import { contactsApi } from './contactsSlice';
import { filterSlice } from './filterSlice';

// const myValueSlice = createSlice({
//   name: 'myValue',
//   initialState: 55,
//   reducers: {
//     increment(state, action) {
//       return state + action.payload;
//     },
//     decrement(state, action) {
//       return state - action.payload;
//     },
//   },
// });

// export const { increment, decrement } = myValueSlice.actions;

// const itemSlice = createSlice({
//   name: 'items',
//   initialState: [],
//   reducers: {
//     add(state, action) {
//       state.push(action.payload);
//     },
//     remove(state, action) {
//       return state.filter(item => item.id !== action.payload);
//     },
//   },
// });

export const store = configureStore({
  reducer: {
    [contactsApi.reducerPath]: contactsApi.reducer,
    filter: filterSlice.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),

    contactsApi.middleware,
  ],
});
console.log([filterSlice.name]);
console.log(store.filter);

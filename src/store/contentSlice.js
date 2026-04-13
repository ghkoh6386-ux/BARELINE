import { createSlice } from '@reduxjs/toolkit';
import { initialContentState } from './contentState';

const contentSlice = createSlice({
  name: 'content',
  initialState: initialContentState,
  reducers: {},
});

export default contentSlice.reducer;

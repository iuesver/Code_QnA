import { createSlice } from '@reduxjs/toolkit';
import { register } from '../firebase/auth';

const initialState: {
  data: any;
  error: any;
  loading: boolean;
} = {
  data: null,
  error: null,
  loading: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(register.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(register.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
    });
    builder.addCase(register.rejected, (state, action) => {
      state.error = action.error;
      state.loading = false;
    });
  },
});

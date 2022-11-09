import { createSlice, SerializedError } from '@reduxjs/toolkit';
import { plusLike } from '../firebase/function';
import { post } from './createPostSlice';

interface initialStateInit {
  data: post | null;
  error: SerializedError | null;
  loading: boolean;
}

const initialState: initialStateInit = {
  data: null,
  error: null,
  loading: false,
};

export const plusLikeSlice = createSlice({
  name: 'plusLike',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(plusLike.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(plusLike.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
    });
    builder.addCase(plusLike.rejected, (state, action) => {
      state.error = action.error;
      state.loading = false;
    });
  },
});

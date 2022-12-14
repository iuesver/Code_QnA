import { createSlice, SerializedError } from '@reduxjs/toolkit';
import { createPost, readPost, deletePost } from '../firebase/function';

export interface post {
  title: string;
  category: string;
  content: string;
  desc: string;
  author: string;
  id: number;
  date: string;
  like: number;
}

export interface postInit {
  data: post[];
  error: SerializedError | null;
  loading: boolean;
}

const initialState: postInit = {
  data: [],
  error: null,
  loading: false,
};

export const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createPost.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(createPost.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
    });
    builder.addCase(createPost.rejected, (state, action) => {
      state.error = action.error;
      state.loading = false;
    });
    builder.addCase(readPost.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(readPost.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
    });
    builder.addCase(readPost.rejected, (state, action) => {
      state.error = action.error;
      state.loading = false;
    });
    builder.addCase(deletePost.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(deletePost.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
    });
    builder.addCase(deletePost.rejected, (state, action) => {
      state.error = action.error;
      state.loading = false;
    });
  },
});

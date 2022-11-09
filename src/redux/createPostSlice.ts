import { createSlice, SerializedError } from '@reduxjs/toolkit';
import { createPost } from '../firebase/function';

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
  data: post | post[] | null;
  error: SerializedError | null;
  loading: boolean;
}

const initialState: postInit = {
  data: null,
  error: null,
  loading: false,
};

export const createPostSlice = createSlice({
  name: 'createPost',
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
  },
});

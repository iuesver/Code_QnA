import { createSlice, SerializedError } from '@reduxjs/toolkit';
import { createComment, readComment } from '../firebase/function';

export interface comment {
  comment: string;
  commenter: string;
  id: number;
  group: number;
}

export interface commentInit {
  data: comment[];
  error: SerializedError | null;
  loading: boolean;
}

const initialState: commentInit = {
  data: [],
  error: null,
  loading: false,
};

export const commentSlice = createSlice({
  name: 'comment',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createComment.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(createComment.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
    });
    builder.addCase(createComment.rejected, (state, action) => {
      state.error = action.error;
      state.loading = false;
    });
    builder.addCase(readComment.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(readComment.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
    });
    builder.addCase(readComment.rejected, (state, action) => {
      state.error = action.error;
      state.loading = false;
    });
  },
});

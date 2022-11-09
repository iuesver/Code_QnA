import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { firestore } from '../firebase/app';
import { createPostSlice } from './createPostSlice';
import { readPostSlice } from './readPostSlice';
import { createCommentSlice } from './createCommentSlice';
import { readCommentSlice } from './readCommentSlice';
import { plusLikeSlice } from './plusLikeSlice';
import { userSlice } from './userSlice';

const store = configureStore({
  reducer: {
    createPost: createPostSlice.reducer,
    readPost: readPostSlice.reducer,
    createComment: createCommentSlice.reducer,
    readComment: readCommentSlice.reducer,
    plusLike: plusLikeSlice.reducer,
    user: userSlice.reducer,
  },
  middleware: [thunk.withExtraArgument(firestore)],
});

export default store;

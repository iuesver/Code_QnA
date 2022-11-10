import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { firestore } from '../firebase/app';
import { postSlice } from './postSlice';
import { commentSlice } from './commentSlice';
import { plusLikeSlice } from './plusLikeSlice';
import { userSlice } from './userSlice';

const store = configureStore({
  reducer: {
    post: postSlice.reducer,
    comment: commentSlice.reducer,
    plusLike: plusLikeSlice.reducer,
    user: userSlice.reducer,
  },
  middleware: [thunk.withExtraArgument(firestore)],
});

export default store;

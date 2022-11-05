import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { firestore } from '../firebase/app';
import { readPostSlice } from './readPostSlice';

const store = configureStore({
  reducer: {
    read: readPostSlice.reducer,
  },
  middleware: [thunk.withExtraArgument(firestore)],
});

export default store;
